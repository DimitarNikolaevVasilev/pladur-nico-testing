import React from 'react';
import Header from './header/Header';
import {Container, Row, Col, Image} from 'react-bootstrap';
import styled from 'styled-components';

import Rectangles from "./Rectangles";

import centralImage from '../Resources/person_in_house.png';

import RequestBillButton from './elements/Button';


const Title = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    font-size: 44px;
    line-height: 71px;
    color: #000000;
`;
const SubTitle = styled(Title)`
    font-size: 32px;
    color: #575757;
`;

const CentralImageContainer = styled.div`
    margin-top: 50px;
`;

const css = {
    Container: {
        width: '100%',
        height: '100%',
        minHeight: '1000px'
    },
    Rectangles: {
        position: 'absolute',
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%'
    },
    RequestBillButton: {
        position:'relative',
        left: '-15px',
        marginTop: '43px',
        padding: '20px 70px'
    }
}


export default class Landing extends React.Component {
    render() {
        return (
            <div style={css.Container}>
                <Header />
                <Container fluid style={{height: 'calc(100% - 200px)', textAlign: 'center'}}>
                    <Title>
                        ¡Buscando la casa de tus sueños!
                    </Title>
                    <SubTitle>Estamos aquí para ayudar</SubTitle>
                    <CentralImageContainer>
                        <Image src={centralImage} alt="House"/>
                    </CentralImageContainer>

                    <RequestBillButton style={css.RequestBillButton}>Solicitar presupuesto</RequestBillButton>
                </Container>
                <Rectangles style={css.Rectangles} animations={false} />
            </div>
        );
    }
}
