import React from 'react';
import SurveyTitle from './common/title'
import FormDivider from './common/formElements/divider'
import SurveyNavigationButton from './common/surveyNavigationButton'
import { Form, List } from "antd";
import * as summaryValues from './utils/summaryValues'

class SurveySummary extends React.Component {
    constructor(props) {
        super(props);

        let summarizedValues = summaryValues.getValues()

        this.state = {
            personalData: summarizedValues.personalData,
            schoolData: summarizedValues.schoolData
        }
    }

    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };

        return (
            <span>
                <SurveyTitle/>
                <div className="form-wrapper">
                    <Form {...layout} name="summary">
                        <FormDivider text="Personal Information Summary"/>
                        <List itemLayout="horizontal" dataSource={this.state.personalData}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                    title={item.title}
                                    description={item.value}
                                    />
                                </List.Item>
                            )}
                        />

                        <FormDivider text="School Preferences Summary"/>
                        <List itemLayout="horizontal" dataSource={this.state.schoolData}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                    title={item.title}
                                    description={item.value}
                                    />
                                </List.Item>
                            )}
                        />
                    </Form>
                </div>
                <div className="navigation-botton-wrapper">
                    <SurveyNavigationButton to="/survey/school" buttonText="Back"/>
                    <SurveyNavigationButton to="/survey/results" buttonText="Submit" primary={true}/>
                </div>
            </span>
        );
    }
}

export default SurveySummary;