import React from 'react';
import styled from 'styled-components';

import styles from './Rectangles.module.css';

let animations = false;
window.n_rectangles = 0;


function numbers(a) {
    return +a.replace(/[^0-9\.]+/g,'');
}

function SocialNetwork(props){
    const Container = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    height: 100%;
    display: flex;
    letter-spacing: 1px;
    justify-content:center;
    align-items: center;
    `;
    return (<Container style={props.style}>{props.children}</Container>);
}

class Rectangle extends React.Component {
    constructor(props){
        super(props);
        this.div = React.createRef();
        this.mouse = {x: window.innerWidth/2, y: window.innerHeight/2};
        this.max_diff = props.max_diff || {x: 8, y: 50};
        this.animation_id = -1;

        this.state = {
            reversed: Math.random() > .5,
            style:{
                background: '#fff',
                position: 'absolute',
                transition: 'width .5s, height .5s',
                boxShadow:
                    "0 0.2px 1.9px -6px  rgba(184, 187, 190, 0.043),"+
                    "0 0.6px 3.8px -6px  rgba(184, 187, 190, 0.063),"+
                    "0 1.1px 5.7px -6px  rgba(184, 187, 190, 0.077),"+
                    "0 1.8px 7.8px -6px  rgba(184, 187, 190, 0.089),"+
                    "0 2.7px 10.2px -6px rgba(184, 187, 190, 0.1),"+
                    "0 4.1px 13.1px -6px rgba(184, 187, 190, 0.111),"+
                    "0 6.1px 16.8px -6px rgba(184, 187, 190, 0.124),"+
                    "0 8.7px 22.3px -6px rgba(184, 187, 190, 0.14),"+
                    "0 11.8px 31.3px -6px rgba(184, 187, 190, 0.162),"+
                    "0 15px 52px -6px rgba(184, 187, 190, 0.2)",
                ...Rectangle.Types[this.props.type],
                ...this.props.style
            }
        };


        this.debug = this.props.style.debug;

        this.animationController = this.animationController.bind(this);
        this.mouseManager = this.mouseManager.bind(this);
    }

    animationController(){
        let c = this.div.current;
        let r = this.state.reversed ? -1 : 1;
        let pos = {
            x: this.first_pos.x + r * ((this.mouse.x - window.innerWidth / 2) * this.max_diff.x)/window.innerWidth/2,
            y: this.first_pos.y + r * ((this.mouse.y - window.innerHeight / 2) * this.max_diff.y)/window.innerHeight/2,
        };

        c.style.left = pos.x + '%';
        c.style.top = pos.y + 'px';

        this.animation_id = window.requestAnimationFrame(this.animationController);
    }

    mouseManager(event){
        this.mouse = {
            x: event.clientX,
            y: event.clientY
        };
        let bound = this.div.current.getBoundingClientRect();
        if(this.mouse.x > bound.left && this.mouse.x < bound.right && this.mouse.y > bound.top && this.mouse.y < bound.bottom){
            this.mouseEntered();
        }else{
            this.mouseOut();
        }
    }
    mouseEntered(){
        this.div.current.style.width = this.size.hover.w + 'px';
        this.div.current.style.height = this.size.hover.h + 'px';
        this.div.current.style.zIndex = '999';
    }
    mouseOut(){
        this.div.current.style.width = this.size.normal.w + 'px';
        this.div.current.style.height = this.size.normal.h + 'px';
        this.div.current.style.zIndex = '1';
    }

    componentDidMount(){
        if(!animations)return;

        let c = this.div.current;
        this.first_pos = {
            x: numbers(c.style.left),
            y: numbers(c.style.top)
        };
        this.size = {
            normal: {w: numbers(c.style.width), h: numbers(c.style.height)}
        };
        this.size.hover = {w: this.size.normal.w * 1.2, h: this.size.normal.h * 1.2};

        window.addEventListener('mousemove', this.mouseManager);
        this.animationController();
    }
    componentWillUnmount(){
        if(!animations)return;
        window.removeEventListener('mousemove', this.saveMouseCoords);
        window.cancelAnimationFrame(this.animation_id);
    }

    static get Types() {
        return {
            normal: {
                width: '160px',
                height: '160px'
            },
            topRound: {
                borderRadius: '0px 0px 100px 100px',
                transform: 'rotate(-180deg)',
                width: '155px',
                height: '153px'
            },
            bottomRight: {
                "borderRadius": "65px 0px 0px 0px",
                "transform": "matrix(0, -1, -1, 0, 0, 0)",
                "width": "155px",
                "height": "153px"
            },
            topRightRound: {
                "width": "163px",
                "height": "162px",
                "borderRadius": "65px 0px 0px 0px",
                "transform": "matrix(-1, 0, 0, 1, 0, 0)"
            },
            leftTopRightBottomRound: {
                "width": "162px",
                "height": "163px",
                "borderRadius": "66px 0px"
            },
            oval: {
                "width": "146px",
                "height": "146px",
                borderRadius: '100px'
            },
            rightBottomRound2: {
                width: "290px",
                height: "143px",
                borderRadius: "0px 0px 100px 0px"
            },
            bottomLeft: {
                width: '121px',
                height: '140px',
                borderRadius: '65px 0px 0px 0px',
                transform: 'rotate(-90deg)'
            },
            leftRound: {
                width: '140px',
                height: '140px',
                borderRadius: '0px 0px 100px 100px',
                transform: 'rotate(90deg)'
            }
        };
    }
    render() {
        return (
            <div ref={this.div} style={this.state.style}>{this.props.children}</div>
        );
    }
}





function drawRectangles(rectangles, containerStyle){
    let containerCSS = {
        position: 'absolute',
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        ...containerStyle
    }
    return (
        <div style={containerCSS}>
            {rectangles.map((rec, index) => {
                let type = rec.type;
                delete rec.type;
                return (<Rectangle key={index} type={type} style={rec}>{rec.children}</Rectangle>);
            })}
        </div>
    );
}

const Left = function(props) {
    const rectangles = [
        {type: 'oval', left: '17%', top: '15px', debug: true},
        {type: 'leftTopRightBottomRound', left: '11.5%', top:'168px'},
        {type: 'oval', left: '14%', top: '489px'},
        {type: 'topRound', left: '22%', top: '784px'},
        {type: 'topRightRound', left: '16%', top:'330px'},
        {type: 'bottomRight', left: '19%', top: '630px'},
    ];
    return drawRectangles(rectangles);
}
const Right = function(props){
    const rectangles = [
        {type: 'rightBottomRound2', left: '80%', top: '792px'},
        {type: 'bottomLeft', left: '80.2%', top: '660px'},
        {type: 'bottomLeft', left: '85.5%', top: '500px', height: '159px'},
        {type: 'topRound', left: '87%', top: '640px'},
        {type: 'oval', left: '78%', top: '350px'},
        {type: 'bottomRight', left: '85%', top: '180px'},
        {type: 'normal', left: '76.7%', top: '180px'},
        {type: 'leftRound', left: '73%', top: '20px'}
    ];
    return drawRectangles(rectangles, {
        left: '-100px'
    });
}
const Footer = function (props) {
    const rectangles = [
        {type: 'leftTopRightBottomRound', left: '30.5%', top: '790px'},
        {type: 'normal', left: '39%', top: '790px', children: <SocialNetwork>Facebook</SocialNetwork>},
        {type: 'leftTopRightBottomRound', left: '47.4%', top: '790px'},
        {type: 'topRightRound', left: '56%', top: '790px', children: <SocialNetwork style={{transform: 'matrix(-1, 0, 0, 1, 0, 0)'}}>WhatsApp</SocialNetwork>},,
        {type: 'leftTopRightBottomRound', left: '65.5%', top: '790px'}
    ];
    return drawRectangles(rectangles);
}



export default class Rectangles extends React.Component {
    constructor(props){
        super(props);
        animations = props.animations;
        this.containerStyle = {
            zIndex: '-1',
            position: 'absolute',
            top: 0,
            left: 0,
            ...props.style
        };
    }
    render() {
        return (
            <div style={this.containerStyle}>
                <Left />
                <Footer />
                <Right />
            </div>
        );
    }
}
