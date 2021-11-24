import React, { useState } from 'react';
import {
  Text,
  Alert,
  Linking
} from 'react-native';
import { color } from 'react-native-reanimated';

import Decimal from '../../src/components/Decimal'
import { ArrowView, Container, GitText, GitView, Icon, IconGit, Input, StarGit, SubTitle, Title } from './styles';


export default function Home() {
  const [binaryText, setBinaryText] = useState('');
  const [decimalText, setDecimalText] = useState<number>();

  const showAlert = () => {
    Alert.alert(
      'Enter number 0 or 1 !'
    )
  }
  if (binaryText.replace(/[^2-9 || A-z]/g, '')) {
    showAlert();
  }


  function handleConverter() {
    const reversedBinaryText = binaryText
      .split('')
      .map(Number) // Convert to a number from string
      .reverse()


    // Calculate the result by accumulating previous vaue
    const result: number = reversedBinaryText.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx)
    )
    setDecimalText(result);


  }
  return (
    <>
      <Container>
        <Title>
          Bin{<Text style={{ color: '#FFD700' }}>2</Text>}Dec
        </Title>

        <SubTitle>
          Enter the binary number
        </SubTitle>

        <Input
          onChangeText={text => setBinaryText(text)}
          blurOnSubmit={true}
          keyboardType={'numeric'}
          maxLength={8}
        />

        <ArrowView>
          <Icon
            onPress={handleConverter}
            name={'play'} />
        </ArrowView>

        <Decimal decimalText={decimalText} />

      </Container>

      <GitView>
        <GitText>
          If you liked it, star project.
        </GitText>
        <StarGit name={'star'} />
        <IconGit name={'github'}
          onPress={() => Linking.openURL('https://github.com/JuanCampbsi/Bin2Dec')}
        />
      </GitView>
    </>
  );
}

