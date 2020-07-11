import React from 'react';
import { Form, Checkbox, Row, Col } from 'antd';
import WeightedScale from './weightedScale'
import '../../../../../Assets/css/components/pages/survey/common/formElements/formElements.css'
import { storeFormValue } from './utils/resultsStorage'

class CheckBoxes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedValues: JSON.parse(localStorage.getItem('surveyResults'))[`${this.props.groupName}`] || []
        };
    }

    onChange = (checkedValues) => {
        storeFormValue(this.props.groupName, checkedValues)
    }

    chunkElements(options, chunkLength) {
        var optionChunks = [];
        
        while (options.length) {
            optionChunks.push(options.splice(0, chunkLength));
        }
        
        return optionChunks.map((optionChunk, index) => {
            let cols = optionChunk.map(option => <Col span={12} key={`${option.value}-col`}> <Checkbox key={option.value} value={option.value}> {option.label} </Checkbox> </Col>);
            return <Row key={`row-${index}`}> {cols} </Row>
        });
    }

    render() {
        return (
            <Form.Item label={this.props.groupLabel}>
                <Checkbox.Group className="checkbox-groups" defaultValue={this.state.checkedValues} name={this.props.groupName} onChange={this.onChange}>
                    {this.chunkElements(this.props.options, 2)}
                </Checkbox.Group>
                {this.props.weighted ? <WeightedScale inputTitle={this.props.weightedTitle} inputName={this.props.groupName}/> : <div/>}
            </Form.Item>
        );
    }
}

export default CheckBoxes;