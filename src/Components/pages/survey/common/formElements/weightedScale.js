import React from 'react';
import { Form, Slider } from 'antd';

const marks = {
    1: 'None',
    2: 'Not Very Important',
    3: 'Neutral',
    4: 'Somewhat Important',
    5: 'Crucial'
}

class WeightedScale extends React.Component {
    render() {
        return (
            <Form.Item label={`${this.props.inputTitle ? this.props.inputTitle : ''} Importance`} name={`${this.props.inputName}-weighed`}>
                <Slider min={1} max={5} defaultValue={3} marks={marks} tipFormatter={null}/>
            </Form.Item>
        );
    }
}

export default WeightedScale;