import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import './Layout.css';

import Jumbotron from 'react-bootstrap/Jumbotron';

const HeaderJumbotron = (props) => {

  return (


    <Jumbotron className="headerJumbotron">
        <h1 onClick={props.click} >{props.welcoming} {props.salutation} {props.name}</h1>

        Du befindest Dich auf der {props.title} des Pflegonaut Teams


      </Jumbotron>
  )

};

export default HeaderJumbotron;
