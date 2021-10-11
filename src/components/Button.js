import React from 'react';
import {
  TouchableOpacity
} from 'react-native';

export function Button({ onPress}) {
  return (

    <TouchableOpacity style={styles.button}
      activeOpacity={.7}
      onPress={handleConverter}
    >
      <Text style={styles.buttonText} >
        Start
      </Text>
    </TouchableOpacity>

  )
}
const styles = StyleSheet.create({
  
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
  }
});
export default Button;