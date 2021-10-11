import React from 'react';
import {
  TouchableOpacity
} from 'react-native';

export function Decimal({ decimalText }) {
  return (
    <TouchableOpacity style={styles.buttonHex}>
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