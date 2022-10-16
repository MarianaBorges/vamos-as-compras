import React, { useState } from 'react';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../contexts/auth';

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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const {registerUser} = useAuth();

    async function registerNewUser(){
        const data = {
            name: "fulano",
            email: "f@gmail.com",
            password: '123'
        }
        await registerUser(data);
    }

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
                    <Input 
                        value={name} 
                        onChangeText={setName}
                        placeholder='Nome' 
                    />
                    <Input 
                        value={email} 
                        onChangeText={setEmail}
                        placeholder='fulano@email.com'
                    />
                    <Input 
                        value={password} 
                        onChangeText={setPassword}
                        placeholder='Senha' 
                        type='password'/>
                    <Input 
                        value={confirmPassword} 
                        onChangeText={setConfirmPassword}
                        placeholder='Confirme a Senha' 
                        type='password'
                    />
                </InputContent>
                <Button title='Entrar' onPress={registerNewUser}/>
           </Content>
       </Container>
   );
}