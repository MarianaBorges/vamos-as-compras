import styled, {css} from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 30px;

    margin-top: 30px;
    border-bottom-width: 1px;
    border-color: ${({theme}) => theme.COLORS.PRIMARY};
`;

export const InputText = styled.TextInput`
    font-size: 20px;
    ${({theme})=> css`
        font-family: ${theme.FONTS.REGULAR};
        color: ${theme.COLORS.THIRD};
    `}
`;