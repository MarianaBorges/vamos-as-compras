import React from 'react';

import { Container, Title } from './styles';

type Props = {
    onPress: ()=> void;
    title: string;
    type?: "primary" | "secondary";
}

export function Button({onPress, type="primary", title}: Props){
   return(
       <Container 
            type={type}
            onPress={onPress}
        >
           <Title type={type}>{title}</Title>
       </Container>
   );
}