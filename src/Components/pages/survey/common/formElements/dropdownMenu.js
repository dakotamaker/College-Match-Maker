import React from 'react';
import { Form, Select } from 'antd';
import WeightedScale from './weightedScale'
import { storeFormValue } from './utils/resultsStorage'

const { Option } = Select;

class DropDownMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedChoice: JSON.parse(localStorage.getItem('surveyResults'))[`${this.props.menuName}`]
        }
    }

    onChange = (value) => {
        storeFormValue(this.props.menuName, value)
    };

    render() {
        let menu = Object.keys(this.props.menuMap).map(key => {
            return <Option key={this.props.menuMap[key]} value={this.props.menuMap[key]}> {key} </Option>
        }) 

        return (
        <Form.Item label={this.props.menuLabel}>
            <Select defaultValue={this.state.selectedChoice} onChange={this.onChange}>
                {menu}
            </Select>
            {this.props.weighted ? <WeightedScale inputTitle={this.props.weightedTitle} inputName={this.props.menuName}/> : <div/>}
        </Form.Item>
        );
    }
}

export default DropDownMenu;