import React from 'react';
import { Form, InputNumber } from 'antd';
import WeightedScale from './weightedScale'
import { storeFormValue } from './utils/resultsStorage'

class NumberInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: JSON.parse(localStorage.getItem('surveyResults'))[`${this.props.name}`]
        }
    }

    onChange = value => {
        storeFormValue(this.props.name, value)
    };

    render() {
        return (
            <Form.Item label={this.props.label}>
                <InputNumber defaultValue={this.state.value} min={this.props.min} max={this.props.max} onChange={this.onChange}/>
                {this.props.weighted ? <WeightedScale inputTitle={this.props.weightedTitle} inputName={this.props.name}/> : <div/>}
            </Form.Item>
        );
    }
}

export default NumberInput;