import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import Routes from './Routes';
import Home from './pages/home'
import Survey from './pages/survey'
import KnowledgeBase from './pages/knowledgeBase'
import './Assets/css/App.css'

class App extends React.Component {
  constructor(props) { 
    super(props);

    if(JSON.parse(localStorage.getItem('surveyResults')) === null) {
      localStorage.setItem('surveyResults', JSON.stringify({}));
    }
  
    if(JSON.parse(localStorage.getItem('surveyWeights')) === null) {
      localStorage.setItem('surveyWeights', JSON.stringify({}));
    }
  }

  render() {
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
}

export default App;
