import React from 'react';
import { Form, Slider } from 'antd';
import { storeFormValue } from './utils/resultsStorage'

const marks = {
    1: 'None',
    2: 'Not Very Important',
    3: 'Neutral',
    4: 'Somewhat Important',
    5: 'Crucial'
}

class WeightedScale extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultValue: JSON.parse(localStorage.getItem('surveyWeights'))[`${this.props.inputName}-slider-value`] || 3
        }
    }

    onAfterChange = (value) => {
        storeFormValue(`${this.props.inputName}-slider-value`, value, true)
    }

    render() {
        return (
            <Form.Item label={`${this.props.inputTitle ? this.props.inputTitle : ''} Importance`} name={`${this.props.inputName}-weighed`}>
                <Slider min={1} max={5} defaultValue={this.state.defaultValue} marks={marks} tipFormatter={null} onAfterChange={this.onAfterChange}/>
            </Form.Item>
        );
    }
}

export default WeightedScale;