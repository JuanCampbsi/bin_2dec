import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Platform,
  View,
  Image,
  Alert
} from 'react-native';
import Button from '../../src/components/Button';
import Decimal from '../../src/components/Decimal'
import { Container } from './styles';

const arrowButton = require('../../src/assets/arrow-button.png');

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
        <Text style={styles.title}>
          Bin{<Text style={styles.gold}>2</Text>}Dec
        </Text>

        <Text style={styles.subTitle}>
          Enter the binary number
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={text => setBinaryText(text)}
          blurOnSubmit={true}
          keyboardType={'numeric'}
          maxLength={8}
        />

        <Button
          onPress={handleConverter}
          title="Start"
        />

        <View style={styles.arrowView}>
          <Image
            source={arrowButton}
            style={styles.arrow}
          />
        </View>

        <Decimal
          decimalText={decimalText}
        />

      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subTitle: {
    color: '#FFF',
    fontSize: 20,
    marginTop: 50,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#FFFFE0',
    color: 'black',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: Platform.OS === 'ios' ? 30 : 20,
    borderRadius: 7,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  gold: {
    color: '#FFD700',
  },
  arrowView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  arrow: {
    width: 50,
    height: 50,
    marginTop: 30,
    transform: [{ rotate: '90deg' }],
    justifyContent: 'center',
    alignItems: 'center',
  }
});
