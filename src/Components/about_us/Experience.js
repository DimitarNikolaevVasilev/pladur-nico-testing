import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';


import images from './LottieData/LottieData';
import ExpElement  from "./ExpElement";

function onChange (isVisible) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
}

export default class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          animated: false
        };
    }
    animate(){
        this.setState({animated: true});
    }
    render() {
        const container = {
            flexWrap: 'no-wrap',
            marginTop: '40px',
            marginBottom: '40px'
        };
        return (
            <Container style={container}>
                <Row>
                    <ExpElement speed={2} image={{data: images.tick}} title="15" text="Años de experiencia"/>
                    <ExpElement image={{data: images.house}} title="210" text="Casas construidas"/>
                    <ExpElement image={{data: images.houses}} title="&nbsp;" text="325.000 Km"/>
                    <ExpElement image={{data: images.heart}} title="+200" text="Clientes satisfechos"/>
                </Row>
            </Container>
        );
    }
}
