import React from 'react';
import Auth from '../../organisms/Auth/index';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

const Title = styled.h2`
    text-align: center;
`;

const PaperContainer = styled.div`
    width: 400px;
    margin: 0 auto;
    background-color: green;
`;

export default function SignUp() {
    return (
        <>
            <Title>Book Manager</Title>
            <PaperContainer>
                <Paper elevation={8}>
                    <Auth authType={'signUp'}></Auth>
                </Paper>
            </PaperContainer>
        </>
    );
}