import React from 'react';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { 
    Container, 
    Content, 
    Header, 
    InputContent, 
    Text, 
    Title, 
    TitleContent 
} from './styles';

export function Register(){
   return(
       <Container>
           <Header>
                <BackButton onPress={()=>console.log("Voltar")}/>
           </Header>
           <Content>
                <TitleContent>
                    <Title>Olá!</Title>
                    <Text>Crie sua conta</Text>
                </TitleContent>
                <InputContent>
                    <Input placeholder='Nome'/>
                    <Input placeholder='fulano@email.com'/>
                    <Input placeholder='Senha' type='password'/>
                    <Input placeholder='Confirme a Senha' type='password'/>
                </InputContent>
                <Button title='Entrar' onPress={()=>{}}/>
           </Content>
       </Container>
   );
}