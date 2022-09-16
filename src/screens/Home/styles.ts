import styled, { css } from 'styled-components/native';
import { FlatList, StatusBar } from 'react-native';

import { ProductProps } from '.';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`;

export const Header = styled.View`
    width: 100%;
    height: ${50 + StatusBar.currentHeight!}px;
    padding-bottom: 20px;    
    justify-content: flex-end;
    align-items: center;

    background-color: gray;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const ButtonLogout = styled.TouchableOpacity`
    position: absolute;
    top: ${2 + StatusBar.currentHeight!}px;
    left: 10px;
`;

export const TitleContent = styled.View`
    width: 80%;
`;

export const Title = styled.Text`
    font-size: 22px;
    text-align: center;
    ${({theme})=> css`
        font-family: ${theme.FONTS.SEMI_BOLD};
        color: ${theme.COLORS.SECONDERY};
    `}
`;

export const Line = styled.View`
    width: 100%;
    border-bottom-width: 0.5px;
    border-color: ${({theme}) => theme.COLORS.SECONDERY};
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const ProductList = styled(FlatList).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingVertical: 20, 
        paddingHorizontal:10,
        maginTop: 10,
        marginBottom: 10
    }
})``as React.ComponentType as new <ProductProps>() => FlatList<ProductProps>;