import React from 'react';
import {Icon} from "@iconify/react";
import bxsPhoneCall from "@iconify/icons-bx/bxs-phone-call";
import emailSolid from "@iconify/icons-clarity/email-solid";

import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';


const PhoneNumber = styled.div`
    display: inline-block;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    
    letter-spacing: 1px;
    
    color: rgba(0, 0, 0, 0.49);
`;

const Email = styled(PhoneNumber)`
    letter-spacing: 0px;
`;

const space = 2;

export default class Contact extends React.Component {
    render() {
        return (
            <div style={this.props.style}>
                <Container>
                    <Row style={{marginBottom: '20px'}}>
                        <Col lg={space}>
                            <Icon icon={bxsPhoneCall} style={{fontSize: '24px'}}/>
                        </Col>
                        <Col lg={space}>
                            <PhoneNumber>672054149</PhoneNumber>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={space}>
                            <Icon icon={emailSolid} style={{fontSize: '24px'}}/>
                        </Col>
                        <Col lg={space}>
                            <Email>contacta@pladurnico.com</Email>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
