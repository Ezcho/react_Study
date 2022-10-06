import React from 'react';
import {Row, Col} from "reactstrap";
import App from './App';
import './Footer.css';


const Footer = () => {
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year
    };


    return (
        <div className="copyRight"> 
            <Row>
                <Col>
                    <div>
                        Copyright &copy; <span>{thisYear()}</span>
                    </div>
                    <br/>
                    <div>
                        Dongyoungcho Seoultech
                    </div>
                    <br/>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;