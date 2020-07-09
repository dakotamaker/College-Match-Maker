import React from 'react';
import { Form, InputNumber } from 'antd';
import WeightedScale from './weightedScale'

class NumberInput extends React.Component {
    render() {
        return (
            <Form.Item label={this.props.label} name={this.props.name}>
                <InputNumber min={this.props.min} max={this.props.max}/>
                {this.props.weighted ? <WeightedScale inputTitle={this.props.weightedTitle} inputName={this.props.groupName}/> : <div/>}
            </Form.Item>
        );
    }
}

export default NumberInput;