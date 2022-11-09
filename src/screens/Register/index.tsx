import React, {useState} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

const formSchema = yup.object({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Formato inválido").required('Campo obrigatório!'),
    password: yup.string().min(6, "A senha precisa ter no mínimo seis dígitos!").required("Campo obrigatório!"),
    controlPassword: yup.string().required().oneOf([yup.ref('password')], 'As senhas não são iguais!'),
})

export function Register(){

    const { control, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        resolver: yupResolver(formSchema)
    });
    const [isSubmit, setIsSubmit] = useState()
    const {registerUser} = useAuth();

    async function onSubmit (data: any){
        try {
            const response = await registerUser(data);
            console.log(response)
        } catch (error) {
            console.error(error);
        }
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
                    <Controller
                        control={control}
                        name="name"
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input 
                                value={value} 
                                onChangeText={onChange}
                                placeholder='Nome' 
                                onBlur={onBlur}
                            />)}
                        />
                    {errors.name && <Text>{errors.name.message}</Text>}
                    <Controller
                        control={control}
                        name="email"
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input 
                                value={value} 
                                onChangeText={onChange}
                                placeholder='fulano@email.com' 
                                onBlur={onBlur}
                            />)}
                    />  
                    {errors.email && <Text>{errors.email.message}</Text>}
                    <Controller
                        control={control}
                        name="password"
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input 
                                value={value} 
                                onChangeText={onChange}
                                placeholder='Senha' 
                                type='password'
                                onBlur={onBlur}
                            />)}
                    /> 
                    {errors.password && <Text>{errors.password.message}</Text>}

                    <Controller
                        control={control}
                        name="controlPassword"
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input 
                                value={value} 
                                onChangeText={onChange}
                                placeholder='Confirme a Senha' 
                                type='password'
                                onBlur={onBlur}
                        />)}
                    />  
                    {errors.controlPassword && <Text>{errors.controlPassword.message}</Text>}

                </InputContent>
                <Button title='Entrar' onPress={handleSubmit(onSubmit)}/>
           </Content>
       </Container>
   );
}