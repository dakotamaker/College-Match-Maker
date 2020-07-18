import React from 'react'
import DataCard from './DataCard'
import KnowledgeBaseLineChart from './LineChart'
import KnowledgeBasePercentAreaChart from './PercentAreaChart'
import KnowledgeBasePieChart from './PieChart'
import * as utils from '../utils'

const populateContent = function(data) {
    let xAxisKey = 'year';
    let enthicityEnrollmentLineData = utils.pullEthnicityEnrollmentLineChartData(data)
    let enthicityEnrollmentPieData = utils.pullEthnicityEnrollmentPieChartData(data)
    let genderEnrollmentLineData = utils.pullGenderEnrollmentLineChartData(data)
    let genderEnrollmentPieData = utils.pullGenderEnrollmentPieChartData(data)
    let averageIncomeData = utils.pullAverageIncomeData(data);
    let incomeLevelPieData = utils.pullIncomeLevelData(data);

    return (
        <>
            <div style={{display: 'flex'}}>
                <div style={{width: '50%'}}>
                    <KnowledgeBaseLineChart title="Average Family Income Over Time (USD)" xAxisKey={xAxisKey} data={averageIncomeData.results} domain={averageIncomeData.domain} height={300} format="dollar"/>
                    <KnowledgeBasePercentAreaChart title="Enrollment By Ethnicity Over Time" xAxisKey={xAxisKey} data={enthicityEnrollmentLineData} height={300}/>
                    <KnowledgeBasePercentAreaChart title="Enrollment By Gender Over Time" xAxisKey={xAxisKey} data={genderEnrollmentLineData} height={300}/>
                </div>
                <div style={{width: '50%'}}>
                    <KnowledgeBasePieChart height={300} title="Income Level" data={incomeLevelPieData}/>
                    <KnowledgeBasePieChart height={300} title="Ethnicity" data={enthicityEnrollmentPieData}/>
                    <KnowledgeBasePieChart height={300} title="Gender" data={genderEnrollmentPieData}/>
                </div>
            </div>
        </>
    )
}

class DemographicsCard extends React.Component {   
    constructor(props) {
        super(props)

        this.state = {
            content: populateContent(this.props.data)
        }
    }

    render() {
        return (
            <DataCard title={`Demographics - ${this.props.data.school.name}`} content={this.state.content}/>
        )
    }
}

export default DemographicsCard;