import styled, {css} from 'styled-components/native';

type Props = {
    type: 'primary' | 'secundary';
}

export const Container = styled.TouchableOpacity<Props>`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    margin-top: 10px;
    border: 2px solid;

    justify-content: center;
    align-items: center;

    ${({theme, type}) => css` 
        background-color: ${type=='primary' ? theme.COLORS.PRIMARY: theme.COLORS.SHAPE };
        border-color: ${theme.COLORS.PRIMARY};
    `};
`;

export const Title = styled.Text<Props>`
    font-size: 18px;
    ${({theme, type})=> css`
        font-family: ${theme.FONTS.SEMI_BOLD};
        color: ${type=='primary' ? theme.COLORS.WHITE : theme.COLORS.PRIMARY};
    `}
`;
