import React from 'react';
import { Form, Radio } from 'antd';
import WeightedScale from './weightedScale'


class RadioGroup extends React.Component {
    state = {
        value: null,
    };

    onChange = e => {
        this.setState({
          value: e.target.value,
        });
    };

    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };

        const { value } = this.state;

        let radioButtons = Object.keys(this.props.radioButtonMap).map(key => {
            return <Radio style={this.props.horizontal ? {} : radioStyle} value={this.props.radioButtonMap[key]}> {key} </Radio>
        })

        return (
        <Form.Item label={this.props.groupLabel} name={this.props.groupName}>
                <Radio.Group onChange={this.onChange} value={value}>
                    {radioButtons}
                </Radio.Group>
                {this.props.weighted ? <WeightedScale inputTitle={this.weightedTitle} inputName={this.props.groupName}/> : <div/>}
        </Form.Item>
        );
    }
}

export default RadioGroup;