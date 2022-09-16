import React from 'react';
import { TitleContent } from '../../styles';

import { Container, Desc, Price, ProductDetails, ProductImage, Title } from './styles';

type Props = {
    data:{
        title: string;
        desc: string;
        price: number;
        photoUrl: string;
    }
}

export function formataDecimalParaReal(valor: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  }
  

export function ProductItem({data}: Props){

   return(
       <Container>
            <ProductImage 
                source={{
                    uri: data.photoUrl,
                }}
            />
            <ProductDetails>
                <TitleContent>
                    <Title>{data.title}</Title>
                    <Desc>{data.desc}</Desc>
                </TitleContent>
                <Price>{formataDecimalParaReal(data.price)}</Price>
            </ProductDetails>
       </Container>
   );
}