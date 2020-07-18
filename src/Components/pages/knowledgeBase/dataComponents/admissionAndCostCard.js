import React from 'react'
import DataCard from './DataCard'
import KnowledgeBaseLineChart from './LineChart'
import KnowledgeBasePieChart from './PieChart'
import * as utils from '../utils'

const populateContent = function(data) {
    let xAxisKey = 'year'
    let admissionData = utils.pullAdmissionData(data);
    let tuitionData = utils.pullTuitionData(data);
    let programEnrollmentData = utils.pullProgramEnrollmentData(data)

    return (
        <>
            <div style={{display: 'flex'}}>
                <div style={{width: '50%'}}>
                    <KnowledgeBaseLineChart title="Admission Rate Over Time" xAxisKey={xAxisKey} data={admissionData} domain={[0, 100]} height={300} format="percent"/>
                    <KnowledgeBaseLineChart title="Tuition Costs Over Time (USD)" xAxisKey={xAxisKey} data={tuitionData.results} domain={tuitionData.domain} height={300} format="dollar"/>
                </div>
                <div style={{width: '50%'}}>
                    <KnowledgeBasePieChart height={600} title="Enrollment By Program" data={programEnrollmentData}/>
                </div>
            </div>
        </>
    )
}

class AdmissionAndCostCard extends React.Component {   
    constructor(props) {
        super(props)

        this.state = {
            content: populateContent(this.props.data)
        }
    }

    render() {
        return (
            <DataCard title={`Admissions and Cost - ${this.props.data.school.name}`} content={this.state.content}/>
        )
    }
}

export default AdmissionAndCostCard;