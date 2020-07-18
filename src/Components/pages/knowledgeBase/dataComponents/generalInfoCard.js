import React from 'react'
import DataCard from './DataCard'

const populateContent = function(data) {
    let labelStyle = {margin: '14px 0', fontSize: '16px'};
    let url = data.school.school_url.startsWith('http') ? data.school.school_url : `https://${data.school.school_url}`

    let dollarFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <div style={{display: 'flex', justifyContent:'space-evenly'}}>
            <div>
                <div style={labelStyle}><b>School Type:</b> {Object.values(data.latest.cost.net_price.public.by_income_level).filter(val => val != null).length > 0 ? 'Public' : 'Private'}</div>
                <div style={labelStyle}><b>Location:</b> {data.school.city}, {data.school.state}</div>
                <div style={labelStyle}><b>School Webite:</b> <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></div>
            </div>
            <div>
                <div style={labelStyle}><b>Title IV Eligible:</b> {data.school.title_iv.eligibility_type > 0 ? 'Yes' : 'No'}</div>
                <div style={labelStyle}><b>In State Tuition:</b> {dollarFormatter.format(data.latest.cost.tuition.in_state)}</div>
                <div style={labelStyle}><b>Out of State Tuition:</b> {dollarFormatter.format(data.latest.cost.tuition.out_of_state)}</div>
            </div>
            <div>
                <div style={labelStyle}><b>Total Enrollment:</b> {((data.latest.student.grad_students || 0) + (data.latest.student.size || 0)).toLocaleString()}</div>
                <div style={labelStyle}><b>Admission Rate:</b> {((data.latest.admissions.admission_rate.overall || 0) * 100).toFixed(2)}%</div>
                <div style={labelStyle}><b>Graduation Rate:</b> {((data.latest.completion.rate_suppressed.overall || 0) * 100).toFixed(2)}%</div>
            </div>
            <div>
                <div style={labelStyle}><b>Average SAT Score:</b> {data.latest.admissions.sat_scores.average.overall || 'N/A'}</div>
                <div style={labelStyle}><b>Average ACT Score:</b> {data.latest.admissions.act_scores.midpoint.cumulative || 'N/A'}</div>
            </div>
        </div>
    )
}

class GeneralInfoCard extends React.Component {  
    constructor(props) {
        super(props)

        this.state = {
            content: populateContent(this.props.data)
        }
    }

    render() {
        return (
            <DataCard title={`General School Information - ${this.props.data.school.name}`} content={this.state.content}/>
        )
    }
}

export default GeneralInfoCard;