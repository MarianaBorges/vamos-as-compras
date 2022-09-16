import styled, {css} from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 10px;
`;

export const Header = styled.View`
    width: 100%;
    margin-top: 30px;
`;

export const Title = styled.Text`
    font-size: 35px;
    ${({theme})=> css`
        font-family: ${theme.FONTS.SEMI_BOLD};
        color: ${theme.COLORS.PRIMARY};
    `}
`;

export const TitleContent = styled.View``;

export const InputContent = styled.View`
    width: 100%;
    height: 120px;
    justify-content: space-between;
`;

export const Text = styled.Text`
    font-size: 22px;
    ${({theme})=> css`
        font-family: ${theme.FONTS.REGULAR};
        color: ${theme.COLORS.THIRD};
    `}
`;

export const Content = styled.View`
    flex: 1;
    justify-content: space-between;
    padding:0 15px 15px 15px;
`;