import React from 'react';
import { Form, Checkbox, Row, Col } from 'antd';
import WeightedScale from './weightedScale'
import '../../../../../Assets/css/components/pages/survey/common/formElements/formElements.css'

class CheckBoxes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedLimit: this.props.limitChoices
        };
    }

    chunkElements(options, chunkLength) {
        var optionChunks = [];
        
        while (options.length) {
            optionChunks.push(options.splice(0, chunkLength));
        }
        
        return optionChunks.map(optionChunk => {
            let cols = optionChunk.map(option => <Col span={12}> <Checkbox value={option.value}> {option.label} </Checkbox> </Col>);
            return <Row> {cols} </Row>
        });
    }

    render() {
        return (
            <Form.Item label={this.props.groupLabel} name={this.props.groupName}>
                <Checkbox.Group className="checkbox-groups" name={this.props.groupName}>
                    {this.chunkElements(this.props.options, 2)}
                </Checkbox.Group>
                {this.props.weighted ? <WeightedScale inputTitle={this.props.weightedTitle} inputName={this.props.groupName}/> : <div/>}
            </Form.Item>
        );
    }
}

export default CheckBoxes;