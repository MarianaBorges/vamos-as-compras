import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, InputText } from './styles';

interface Props extends TextInputProps{
    type?: 'regular' | 'password';
}

export function Input({type='regular',...rest}:Props){
   return(
       <Container>
           <InputText
                secureTextEntry={type === 'password' ? true : false}
                {...rest}
           />
       </Container>
   );
}