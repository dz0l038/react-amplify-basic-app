import React, { Component } from 'react';
import './Account.scss';
import { Container, Typography } from '@material-ui/core';
import { withAuthenticator } from 'aws-amplify-react';
import AuthTheme from '../../utils/Auth/AuthTheme';
import { signUpConfig } from '../../utils/Auth/ConfigAuth';

class Account extends Component {
    render() {
        return (
            <Container maxWidth="lg" className="Account">
                <Typography variant="h1">Account</Typography>
                <Container maxWidth="md">
                    <Typography>Body</Typography>
                </Container>
            </Container>
        );
    }
}

export default withAuthenticator(Account, false, [], null, AuthTheme, signUpConfig);