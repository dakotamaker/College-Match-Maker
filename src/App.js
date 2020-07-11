import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import Routes from './Routes';
import Home from './pages/home'
import Survey from './pages/survey'
import KnowledgeBase from './pages/knowledgeBase'
import './Assets/css/App.css'

function App() {
  if(JSON.parse(localStorage.getItem('surveyResults')) === {}) {
    localStorage.setItem('surveyResults', JSON.stringify({}));
  }

  if(JSON.parse(localStorage.getItem('surveyWeights')) === {}) {
    localStorage.setItem('surveyWeights', JSON.stringify({}));
  }

  return (
    <Router>
      <Header/>
      <Route exact path={Routes.HOME_PAGE} component={Home}/>
      <Route path="/survey" component={Survey}/>
      <Route path="/knowledgeBase" component={KnowledgeBase}/>
      <Footer/>
    </Router>
  );
}

export default App;
