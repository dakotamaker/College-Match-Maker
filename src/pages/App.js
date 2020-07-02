import React from 'react';
import Header from '../Components/header';
import MissionStatement from '../Components/home/mission-statement'
import '../Assets/css/App.css'

import Icon from 'react-icons-kit';
import { magic } from 'react-icons-kit/fa/magic';
import { code } from 'react-icons-kit/fa/code';
import { pieChart } from 'react-icons-kit/fa/pieChart';
import { github } from 'react-icons-kit/fa/github';
import { envelope } from 'react-icons-kit/fa/envelope';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content-wrapper">
        <div className="statement">
          <MissionStatement/>
        </div>
        <div className="information c1">
          <div className="information-icon"> <Icon icon={pieChart} size={100}/> </div>
          <div className="information-text">Insight provided on college-specific trends based on the latest information from the U.S. Department of Education.</div>
        </div>
        <div className="information c2">
          <div className="information-text">Realistic, reasonable, and personalized matching for you and your college wants and needs. It's almost like magic.</div>
          <div className="information-icon right"> <Icon icon={magic} size={90}/> </div>
        </div>
        <div className="information c3">
          <div className="information-icon"> <Icon icon={code} size={100}/> </div>
          <div className="information-text">A project built on collaboration and the spirit of open-source development.</div>
        </div>
        <div className="site-info-container">
          <div className="site-link-container">
            <a href="https://github.com/dakotamaker" rel="noopener noreferrer" target="_blank"><Icon icon={github} size={30}/></a>
            <a href="mailto:dakotamaker@gmail.com"><Icon icon={envelope} size={30}/></a>
          </div>
          &copy; {(new Date().getFullYear())} Dakota Maker 
        </div>
      </div>
    </div>
  );
}

export default App;
