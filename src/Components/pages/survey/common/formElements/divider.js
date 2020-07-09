import React from 'react';
import { Divider } from 'antd';
import '../../../../../Assets/css/components/pages/survey/common/formElements/formElements.css'

class FormDivider extends React.Component {
    render() {
        return (
            <Divider orientation="left" className="divider-title">
                {this.props.text}
            </Divider>
        );
    }
}

export default FormDivider;