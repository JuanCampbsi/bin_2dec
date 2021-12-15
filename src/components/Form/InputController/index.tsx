import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { 
  Container, 
  Error
} from './styles';
import Input from '../Input';

interface Props extends TextInputProps {
  control: Control;
  errors: string;
  name: string;
}

export function InputController({ 
  control, 
  errors,
  name,
  ...rest
} : Props){
  return (   
    <Container> 
      <Controller        
        control={control}
        render={({ field: { onChange, value}}) => (
          <Input
            onChangeText={onChange}
            value={value}
              {...rest}
          />
        )}
        name={name} 
      />
      { errors && <Error>{ errors }</Error> }      
    </Container>
  );
}

export default InputController;