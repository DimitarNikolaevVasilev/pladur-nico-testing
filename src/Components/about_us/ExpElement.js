import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

import LottieControl from "../elements/LottieControl";
import useVisibilitySensor from "@rooks/use-visibility-sensor"


const Title = styled.div`
    font-family: Nova Round;
    font-size: 28px;
    line-height: 75px;
    letter-spacing: 4.5px;
`;

const Text = styled.div`
    font-family: Inter;
    font-size: 18px;
    line-height: 33px;
`;

const ContainerStyled = styled(Container)`
    width: 250px;
    height: 230px;
    background: #fff;
    box-shadow: 0px 4px 8px rgba(184, 187, 190, 0.2);
    border-radius: 66px 0px;
    text-align: center;
`;

const Image = styled.img`
    width: 115px;
    height: 106px;
`;



export default function ExpElement(props){
    const options = {
      loop: false,
      autoplay: false,
      animationData: props.image.data
    };

    const rootNode = React.useRef(null);
    const { isVisible } = useVisibilitySensor(rootNode, {
        intervalCheck: false,
        scrollCheck: true,
        resizeCheck: true
    });
    return (
        <ContainerStyled ref={rootNode} style={props.style?.container}>
            <LottieControl speed={props.speed || 1} running={isVisible} once data={props.image.data} width={props.image.width} height={props.image.height} />
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </ContainerStyled>
    );
}
