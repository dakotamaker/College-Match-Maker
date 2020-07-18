import React from 'react';
import SearchBar from './SearchBar'
import '../../../Assets/css/components/pages/knowledgeBase/title.css'

class Title extends React.Component {
    render() {
        return(
            <div className="title-wrapper">
                <div className="title-text">
                    College Knowledge Base
                </div>
                <div className="title-search">
                    <SearchBar/>
                </div>
            </div>
        )
    }
}

export default Title;