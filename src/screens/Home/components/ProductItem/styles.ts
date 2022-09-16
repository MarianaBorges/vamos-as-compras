import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    width: 100%;
`;

export const ProductImage = styled.Image`
    width: 100px;
    height: 110px;
    border-width: 1px;
    border-color: ${({theme}) => theme.COLORS.SECONDERY};
    border-radius: 10px;
    margin-right: 10px;
`;

export const ProductDetails = styled.View`
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-size: 20px;
    ${({theme})=> css`
        font-family: ${theme.FONTS.SEMI_BOLD};
        color: ${theme.COLORS.SECONDERY};
    `}
`;

export const Desc = styled.Text`
    font-size: 16px;
    ${({theme})=> css`
        font-family: ${theme.FONTS.REGULAR};
        color: ${theme.COLORS.THIRD};
    `}
`;

export const TitleContent = styled.View`
    background-color: yellow;
`;

export const Price = styled.Text`
    font-size: 20px;
    ${({theme})=> css`
        font-family: ${theme.FONTS.SEMI_BOLD};
        color: ${theme.COLORS.SECONDERY};
    `}

`;