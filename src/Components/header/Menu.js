import React from 'react';
import {HashRouter, Route, Switch, Link} from 'react-router-dom';
import {Router} from "react-router";
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';


import link_data from '../links';

const StyledLink = styled(Link)`
    /*font-family: Inter;*/
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #808080;
    text-decoration: none;
    padding: 5px 20px;
    border-radius: 4px;

    margin-right: 100px;

    transition: all .2s;
    
    &:hover{
        text-decoration: none;
        color: #000;
        box-shadow: 0px 0px 10px rgba(184, 187, 190, 0.2);
    }
    
    @media (max-width: 1900px){
        margin-right: 0px;
    }
    @media (max-width: 1300px){
        font-size: 16px;
    }
    
`;

class Links extends React.Component {
    render() {
        return (
            <React.Fragment>
                {
                    link_data.map((link, index) => {
                        return (
                            <StyledLink key={index} to={link.href}>{link.text}</StyledLink>
                        );
                    })
                }
            </React.Fragment>
        );
    }
}


export default class Menu extends React.Component {
    render() {
        return (
                <HashRouter>
                        <Links  />
                </HashRouter>
        );
    }
}
