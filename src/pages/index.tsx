import React, { useState } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup"

import {
  ArrowView,
  Container,
  Icon,
  SubTitle,
  Title
} from './styles';

import Decimal from '../components/Decimal';
import InputController from '../components/Form/InputController';
import Footer from '../components/Footer';

interface FormData {
  amount: string
}

const schema = Yup.object().shape({
  amount: Yup
    .string()
    .required('Valor é obrigatório')
    .typeError('Informe um valor númerico')
  })

export default function Home() {
  const [decimalText, setDecimalText] = useState<number>();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  function handleConverter(form: FormData) {
    const data = {
      amount: form.amount
    }

    if (data.amount.replace(/[^2-9 || A-z]/g, ''))
      return Alert.alert('Enter number 0 or 1 !')

    const reversedBinaryText = data.amount
      .split('')
      .map(Number)
      .reverse()

    const result: number = reversedBinaryText.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx)
    )

    if (!result)
      return Alert.alert('Enter positive number!')
    setDecimalText(result);
  }
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Title>
            Bin{<Text style={{ color: '#FFD700' }}>2</Text>}Dec
          </Title>

          <SubTitle>
            Enter the binary number
          </SubTitle>

          <InputController
            name='amount'
            control={control}
            blurOnSubmit={true}
            keyboardType={'numeric'}
            maxLength={8}
            errors={errors.amount && errors.amount.message}
          />

          <ArrowView>
            <Icon
              onPress={handleSubmit(handleConverter)}
              name={'play'} />
          </ArrowView>

          <Decimal decimalText={decimalText} />

        </Container>
      </TouchableWithoutFeedback>
      <Footer />
    </>
  );
}

