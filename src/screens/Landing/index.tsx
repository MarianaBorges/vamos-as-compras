import React from 'react';
import {Button} from '../../components/Button'
import { Title } from '../../components/Button/styles';

import { Container, Logo, Text, TextContent } from './styles';

export function Landing(){
   return(
       <Container>
           <Logo source={require('../../assets/logo.png')}/>
           <TextContent>
                <Title>Olá!</Title>
                <Text>
                    Aqui  é o melhor lugar{'\n'}
                    para você fazer suas {'\n'}
                    compras.
                </Text>
            </TextContent>

            <Button 
                title="Entrar" 
                type='primary' 
                onPress={()=>{console.log('Entrar')}}
            />
            <Button 
                title="Criar conta" 
                type='secondary' 
                onPress={()=>{console.log('Entrar')}}
            />
       </Container>
   );
}