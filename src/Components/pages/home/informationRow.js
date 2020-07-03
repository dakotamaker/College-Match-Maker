import React from 'react';
import Icon from 'react-icons-kit';

import '../../../Assets/css/components/pages/home/information-row.css'

class InformationRow extends React.Component {
    render() {
        return (
            <div className="information" style={ { backgroundColor: this.props.backgroundColor } }>
                <div className="information-icon"> <Icon icon={this.props.icon} size={this.props.size}/> </div>
                <div className="information-text">{this.props.text}</div>
            </div>
        );
    }
}

export default InformationRow;