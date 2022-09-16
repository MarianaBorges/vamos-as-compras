import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { ButtonLogout, Container, Header, Line, ProductList, Title, TitleContent } from './styles';
import { ProductItem } from './components/ProductItem';

export type ProductProps = [{
    id: number;
    title: string;
    desc: string;
    price: number;
    photoUrl: string;
}]

const PRODUCT = [{
    id:1,
    title: "Boneca",
    desc: "lsfçmsd fkdfmksd mfk klfsd mmfsd fkdsfm",
    price: 60.9,
    photoUrl: "https://images.tcdn.com.br/img/img_prod/727032/boneca_bebe_te_quero_949_1_2bb5a0f480a692aa4b6702e1bcb5f18f.jpg"
},
{
    id:2,
    title: "Boneca",
    desc: "lsfçmsd fkdfmksd mfk klfsd mmfsd fkdsfm",
    price: 60.9,
    photoUrl: "https://images.tcdn.com.br/img/img_prod/727032/boneca_bebe_te_quero_949_1_2bb5a0f480a692aa4b6702e1bcb5f18f.jpg"
},
{
    id:3,
    title: "Boneca",
    desc: "lsfçmsd fkdfmksd mfk klfsd mmfsd fkdsfm",
    price: 60.9,
    photoUrl: "https://images.tcdn.com.br/img/img_prod/727032/boneca_bebe_te_quero_949_1_2bb5a0f480a692aa4b6702e1bcb5f18f.jpg"
},
{
    id:4,
    title: "Boneca",
    desc: "lsfçmsd fkdfmksd mfk klfsd mmfsd fkdsfm",
    price: 60.9,
    photoUrl: "https://images.tcdn.com.br/img/img_prod/727032/boneca_bebe_te_quero_949_1_2bb5a0f480a692aa4b6702e1bcb5f18f.jpg"
},
{
    id:5,
    title: "Boneca",
    desc: "lsfçmsd fkdfmksd mfk klfsd mmfsd fkdsfm",
    price: 60.9,
    photoUrl: "https://images.tcdn.com.br/img/img_prod/727032/boneca_bebe_te_quero_949_1_2bb5a0f480a692aa4b6702e1bcb5f18f.jpg"
},
{
    id:6,
    title: "Boneca",
    desc: "lsfçmsd fkdfmksd mfk klfsd mmfsd fkdsfm",
    price: 60.9,
    photoUrl: "https://images.tcdn.com.br/img/img_prod/727032/boneca_bebe_te_quero_949_1_2bb5a0f480a692aa4b6702e1bcb5f18f.jpg"
},
{
    id:7,
    title: "Boneca",
    desc: "lsfçmsd fkdfmksd mfk klfsd mmfsd fkdsfm",
    price: 60.9,
    photoUrl: "https://images.tcdn.com.br/img/img_prod/727032/boneca_bebe_te_quero_949_1_2bb5a0f480a692aa4b6702e1bcb5f18f.jpg"
},{
    id:8,
    title: "Boneca",
    desc: "lsfçmsd fkdfmksd mfk klfsd mmfsd fkdsfm",
    price: 60.9,
    photoUrl: "https://images.tcdn.com.br/img/img_prod/727032/boneca_bebe_te_quero_949_1_2bb5a0f480a692aa4b6702e1bcb5f18f.jpg"
}
]

export function Home(){ 
    const theme = useTheme();

   return(
       <Container>
           <Header>
                <ButtonLogout>
                    <AntDesign 
                        name="logout" 
                        size={22} 
                        color={theme.COLORS.SECONDERY} 
                    />
               </ButtonLogout>
               <TitleContent>
                    <Title>
                        Bem vindo
                    </Title>
               </TitleContent>
           </Header>

           <ProductList 
            data={PRODUCT}
            keyExtractor={item => String(item.id)}
            renderItem={({item})=> (<ProductItem data={item}/>)}
            ItemSeparatorComponent={() => <Line/>}
            />

       </Container>
   );
}