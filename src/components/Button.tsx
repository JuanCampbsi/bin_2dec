import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Text
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (

    <TouchableOpacity style={styles.button}
      activeOpacity={.7}
      {...rest}
    >
      <Text style={styles.buttonText} >
        {title}
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