import React from 'react';
import Title from '../Components/pages/knowledgeBase/Title'
import EmptyPage from '../Components/pages/knowledgeBase/emptyPage'
import DataPage from '../Components/pages/knowledgeBase/dataPage'

class KnowledgeBase extends React.Component {
    constructor() {
        super();
        let currentCollegeId = window.location.href.toLowerCase().split('knowledgebase/')[1];
        let content = currentCollegeId != null ? <DataPage collegeId={currentCollegeId}/> : <EmptyPage/>

        this.state = {
            content: content
        }
    }

    render() {
        return (
            <>
            <Title></Title>
            {this.state.content}
            </>
        );
    }
}

export default KnowledgeBase;