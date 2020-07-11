import React from 'react';
import { Form, Radio } from 'antd';
import WeightedScale from './weightedScale'
import { storeFormValue } from './utils/resultsStorage'

class RadioGroup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: JSON.parse(localStorage.getItem('surveyResults'))[`${this.props.groupName}`]
        }
    }

    onChange = e => {
        this.setState({
            value: e.target.value
        }, () => {
            storeFormValue(this.props.groupName, e.target.value)
        });
    };

    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };

        let radioButtons = Object.keys(this.props.radioButtonMap).map(key => {
            return <Radio style={this.props.horizontal ? {} : radioStyle} key={this.props.radioButtonMap[key]} value={this.props.radioButtonMap[key]}> {key} </Radio>
        })

        return (
        <Form.Item label={this.props.groupLabel}>
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                    {radioButtons}
                </Radio.Group>
                {this.props.weighted ? <WeightedScale inputTitle={this.props.weightedTitle} inputName={this.props.groupName}/> : <div/>}
        </Form.Item>
        );
    }
}

export default RadioGroup;