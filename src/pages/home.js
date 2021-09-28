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
  const [newBin, setBin] = useState('');
  const [numberHex, setnumberHex] = useState([]);
  
  function handleConverter() {    
    for (let c = 0; c < newBin.length; c++)
    newBin += Math.pow(2, c) * newBin[setBin.length - c - 1];
   
    console.log(newBin)
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
        onChangeText={setBin}
        />

        <TouchableOpacity style={styles.button}
          activeOpacity={.7}
          onPress={handleConverter}
        >
          <Text style={styles.buttonText} >
            Convert
          </Text>
        </TouchableOpacity>
        <Text style={[styles.subTitle, { marginVertical: 50 }]}>
          Value for Hexadecimal
        </Text>

       
            <TouchableOpacity             
              style={styles.buttonHex}>
              <Text
                style={styles.buttonText}>
                {numberHex}
              </Text>
            </TouchableOpacity>
         

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  subTitle: {
    color: '#FFF',
    fontSize: 20,
    marginTop: 50
  },
  input: {
    backgroundColor: '#6495ED',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: Platform.OS === 'ios' ? 30 : 20,
    borderRadius: 7
  },
  button: {
    backgroundColor: '#4682B4',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  },
  buttonHex: {
    backgroundColor: '#4682B4',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
});
