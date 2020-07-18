import React from 'react'
import { Card } from 'antd';

class DataCard extends React.Component {   
    render() {
        return (
            <Card title={this.props.title} style={{margin: '2% 4%'}}>
                {this.props.content}
            </Card>
        )
    }
}

export default DataCard;