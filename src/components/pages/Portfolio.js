import React from 'react';
import Card from 'react-bootstrap/Card';
import './Portfolio.css';
import logo1 from '../img/employeetracker.jpg';
import logo2 from '../img/meals.jpg';
import logo3 from '../img/notetaker.jpg';
import logo4 from '../img/passwordgen.jpg';
import logo5 from '../img/windblows.jpg';
import logo6 from '../img/workdayscheduler.jpg';
// import { Route, Routes } from "react-router-dom";
// import Portfoliocard from './components/pages/Portfoliocard';
// save above for when you have more time, keep it simple for now


export default function Portfolio() {
  return (
    <div>
      <div className='outer center'>
        <div className='space'>
        <a href="https://github.com/GhostoftheMill/watchful-eye">
    {/* // Card 1 */}
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={logo1} />
      <Card.Body>
        <Card.Title>Employee Tracker</Card.Title>
        <Card.Text>
        A command-line application that manages an employee database.
        </Card.Text>
      </Card.Body>
    </Card>
    </a>
    </div>
    <div className='space'>
    <a href="https://ghostofthemill.github.io/project-p1g5/">
    {/* // Card 2 */}
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={logo2} />
      <Card.Body>
        <Card.Title>Meals & Drinks Pairing App </Card.Title>
        <Card.Text>
          App pulls from APIs to pair meals & drinks.
        </Card.Text>
      </Card.Body>
    </Card>
    </a>
    </div>
    </div>
    <div className='outer'>
    <div className='space'>
    <a href="hhttps://scribble-script.herokuapp.com/">
    {/* // Card 3 */}
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={logo3} />
      <Card.Body>
        <Card.Title>Note Taker</Card.Title>
        <Card.Text>
          App uses JSON, Express, and node.js to record notes.
        </Card.Text>
      </Card.Body>
    </Card>
    </a>
    </div>
    <div className='space'>
    <a href="https://ghostofthemill.github.io/addguy-does-what/">
    {/* // Card 4 */}
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={logo6} />
      <Card.Body>
        <Card.Title>Work Day Scheduler</Card.Title>
        <Card.Text>
          A calendar app to schedule your day that uses jQuery.
        </Card.Text>
      </Card.Body>
    </Card>
    </a>
    </div>
    </div>
    <div className='outer'>
    <div className='space'>
    <a href="https://ghostofthemill.github.io/cant-break-me/">
    {/* // Card 5 */}
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={logo4} />
      <Card.Body>
        <Card.Title>Password Generator</Card.Title>
        <Card.Text>
          JavaScript app that creates a password from answers to a set of prompts.
        </Card.Text>
      </Card.Body>
    </Card>
    </a>
    </div>
    <div className='space'>
    <a href="https://github.com/GhostoftheMill/wind-blows">
    {/* // Card 6 */}
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={logo5} />
      <Card.Body>
        <Card.Title>Work Day Scheduler</Card.Title>
        <Card.Text>
          App that uses third-party APIs to make 6-day weather forecast.
        </Card.Text>
      </Card.Body>
    </Card>
    </a>
    </div>
    </div>
</div>
  );
}
