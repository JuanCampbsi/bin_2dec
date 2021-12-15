import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { 
  ButtonTextHex, 
  ButtonHex
} from './styles';

interface DecimalText extends TouchableOpacityProps{
  decimalText?: number;
}

export default function Decimal({ decimalText, ...rest }: DecimalText) {
  return (
    <ButtonHex 
      {...rest}>
        <ButtonTextHex >           
            {decimalText}
        </ButtonTextHex>
    </ButtonHex>
  )
}


