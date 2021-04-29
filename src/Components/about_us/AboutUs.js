import React from 'react';

import {Container} from  'react-bootstrap';
import styled from 'styled-components';

import Experience from "./Experience";


const Title = styled.div`
    font-familiy: Inter;
    font-weight: bold;
    font-size: 45px;
    line-height: 71px;
    text-align: center;
    width: 100%;
`;

const Text = styled.div`
    font-family: Roboto;
    font-size: 28px;
    line-height: 50px;
    color: #575757;
`;


export  default class AboutUs extends React.Component {
    render() {
        return (
            <Container style={{textAlign: 'center'}}>
                <Title>Sobre nosotros</Title>
                <Text>Desde el año 1997 hemos trabajo con seriedad, atención rápida y profesionalidad gracias a todos que han contactado con nosotros y los que seguirán haciéndolo.</Text>
                <Experience />
            </Container>
        );
    }
}
