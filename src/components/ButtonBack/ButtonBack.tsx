import React from 'react';
import styled, { ITheme } from 'styled-components';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div<any>`
    position: absolute;
    top: ${({ top }) => (top ? `${top}px` : '20px')};
    left: ${({ left }) => (left ? `${left}px` : '0px')};
    background-color: #212121;
    color: white;
    padding: 8px 15px;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    border-radius: 20px;
    cursor: pointer;
    img {
        width: 15px;
        margin-right: 8px;
    }
    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToExtraSmall`
        font-size:12px;
        top: 0px;
    `}
`;
export const ButtonBack = ({ top, left }: any) => {
    const history = useHistory();
    return (
        <Wrapper top={top} left={left} onClick={() => history.goBack()}>
            <img src={require('../../assets/image/icon-arrow.png').default} alt="Arrow" />
            Back
        </Wrapper>
    );
};
