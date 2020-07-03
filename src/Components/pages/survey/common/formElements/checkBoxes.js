import React from 'react';
import { Form, Checkbox } from 'antd';
import WeightedScale from './weightedScale'

class CheckBoxes extends React.Component {
    render() {
        return (
            <Form.Item label={this.props.groupLabel} name={this.props.groupName}>
                <Checkbox.Group options={this.props.options}/>
                {this.props.weighted ? <WeightedScale inputTitle={this.props.weightedTitle || this.props.groupLabel} inputName={this.props.groupName}/> : <div/>}
            </Form.Item>
        );
    }
}

export default CheckBoxes;