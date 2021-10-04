import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
  View
} from 'react-native';

export default function Home() {
  const [binaryText, setBinaryText] = useState('')
  const [decimalText, setDecimalText] = useState('')
 

  function handleConverter() {
    if (binaryText.match(/^[0-1]+$/g) === null) {
      //errorMessage
    }    

    const reversedBinaryText = binaryText
      .split('')
      .map(Number) // Convert to a number from string
      .reverse()

    // Calculate the result by accumulating previous vaue
    const result = reversedBinaryText.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx)
    )
    setDecimalText(result)
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome !
        </Text>

        <Text style={styles.subTitle}>
          Enter the binary number
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={setBinaryText}
        />

        <TouchableOpacity style={styles.button}
          activeOpacity={.7}
          onPress={handleConverter}>
            <Text style={styles.buttonText} >
              Start
            </Text>
        </TouchableOpacity>

        <Text style={[styles.subTitle, { marginVertical: 50 }]}>
          Value for Hexadecimal
        </Text>

        <TouchableOpacity style={styles.buttonHex}>
            <Text style={styles.buttonTextHex}>
              {decimalText}
            </Text>
        </TouchableOpacity>
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
    textAlign: 'left'
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
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#ADFF2F',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonTextHex: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold'
  },
  buttonHex: {
    backgroundColor: '#FFFFE0',
    padding: 100,
    borderRadius: 500,
    alignItems: 'center'
  },
});
