import React from 'react';
import { Container } from './styles';

import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native'
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps ;

export function BackButton({...rest}: Props){

    const { COLORS } = useTheme();
   return(
       <Container {...rest}>
           <Feather 
                name="arrow-left" 
                size={35} 
                color={COLORS.PRIMARY}
            />
       </Container>
   );
}