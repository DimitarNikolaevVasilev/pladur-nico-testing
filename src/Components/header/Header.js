import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

import Logo from './Logo';
import Menu from './Menu';
import Contact from './Contact';

//import './Header.css';

const styles = {
    container: {
        width: '100%',
        height: '200px'
    },
    logo:{
        margin: '40px',
    },
    menu: {
        marginTop: '60px'
    },
    contact: {
        marginTop: '40px',
        color: 'rgba(0,0,0,0.49)'
    }
};

export default class Header extends React.Component {
    render() {
        return (
            <Container fluid style={styles.container}>
                <Row>
                    <Col lg={4} xl={4} >
                        <Logo style={styles.logo}/>
                    </Col>
                    <Col lg={4} xl={6} style={styles.menu}>
                        <Menu />
                    </Col>
                    <Col lg={4} xl>
                        <Contact style={styles.contact} />
                    </Col>
                </Row>
            </Container>
        );
    }

}
