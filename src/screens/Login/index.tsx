import React from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Content, Header, InputContent, Text, Title, TitleContent } from './styles';
import { BackButton } from '../../components/BackButton';

export function Login(){
   return(
       <Container>
           <Header>
                <BackButton onPress={()=>console.log("Voltar")}/>
           </Header>
           <Content>
                <TitleContent>
                    <Title>Bem Vindo!</Title>
                    <Text>Entre com a sua conta</Text>
                </TitleContent>
                <InputContent>
                        <Input placeholder='fulano@email.com'/>
                        <Input placeholder='Senha' type='password'/>
                </InputContent>
                    <Button title='Entrar' onPress={()=>{}}/>
           </Content>
       </Container>
   );
}