import React, { Component } from 'react';
import './Home.scss';
import { Container, Typography } from '@material-ui/core';

class Home extends Component {
    render() {
        return (
            <Container maxWidth="lg" className="Home">
                <Typography variant="h1">Home</Typography>
                <Container maxWidth="md" className="Home">
                    <Typography variant="body1">Body</Typography>
                </Container>
            </Container>
        );
    }
}

export default Home;