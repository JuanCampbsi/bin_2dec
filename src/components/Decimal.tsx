import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Text
} from 'react-native';

interface DecimalText extends TouchableOpacityProps{
  decimalText: number;
}

export function Decimal({ decimalText, ...rest }: DecimalText) {
  return (
    <TouchableOpacity 
      style={styles.buttonHex}
      {...rest}
    >
      <Text style={styles.buttonTextHex}>
        {decimalText}
      </Text>
    </TouchableOpacity>


  )
}
const styles = StyleSheet.create({
  buttonTextHex: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold'
  },
  buttonHex: {
    backgroundColor: '#FFFFE0',
    borderRadius: 500,
    alignItems: 'center',
    bottom: 10,
    marginTop: 40
  }
});

export default Decimal;