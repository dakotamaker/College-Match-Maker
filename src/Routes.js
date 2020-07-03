import { Component } from 'react';

class Routes extends Component {
    static HOME_PAGE = process.env.PUBLIC_URL+'/';
    static PERSONAL_SURVEY_PAGE = process.env.PUBLIC_URL+'/survey/personal';
    static SCHOOL_SURVEY_PAGE = process.env.PUBLIC_URL+'/survey/school';
    static SURVEY_SUMMARY_PAGE = process.env.PUBLIC_URL+'/survey/summary';
    static SURVEY_RESULTS_PAGE = process.env.PUBLIC_URL+'/survey/results';
    static KNOWLEDGE_BASE_PAGE = process.env.PUBLIC_URL+'/knowledgeBase';
  }
  
export default Routes;