import React, { useState } from 'react';
import arrowButton from '../../assets/arrow-button.png';
import {
  StyleSheet,
  Text,
  TextInput,
  Platform,
  View,
  Image
} from 'react-native';
import Button from '../components/Button';
import Decimal from '../components/Decimal';


export default function Home() {
  const [binaryText, setBinaryText] = useState('');
  const [decimalText, setDecimalText] = useState('');

  function handleConverter() {
    setDecimalText('');
    if (binaryText.replace(/[^2-9]/g, '')) { // Refatorar esse método
      alert('Enter number 0 or 1 !')
    } else {

      const reversedBinaryText = binaryText
        .split('')
        .map(Number) // Convert to a number from string
        .reverse()

      // Calculate the result by accumulating previous vaue
      const result = reversedBinaryText.reduce(
        (accumulator, currentValue, idx) =>
          accumulator + currentValue * Math.pow(2, idx)
      )
      setDecimalText(result);

    }
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          Bin{<Text style={styles.gold}>2</Text>}Dec
        </Text>

        <Text style={styles.subTitle}>
          Enter the binary number
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={setBinaryText}
          blurOnSubmit={true}
          keyboardType={'decimal-pad'}
          maxLength={8}
        />

        <Button onPress={ handleConverter }/>

        <View style={styles.arrowView}>
        <Image  source={arrowButton} style={styles.arrow}/>
        </View>

        <Decimal decimalText={decimalText}/>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3CB371',
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30
  },
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
    textAlign:'center'
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
