import styled, {css} from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 20px;

    background-color: ${({theme}) => theme.COLORS.SHAPE};
`;

export const Logo = styled.Image`

`;

export const TextContent = styled.View`
    padding: 30px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 22px;
    text-align: center;
    ${({theme})=> css`
        font-family: ${theme.FONTS.SEMI_BOLD};
        color: ${theme.COLORS.SECONDERY};
    `}
`;

export const Text = styled.Text`
    font-size: 18px;
    text-align: center;
    ${({theme})=> css`
        font-family: ${theme.FONTS.REGULAR};
        color: ${theme.COLORS.THIRD};
    `}
`;
