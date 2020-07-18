import React from 'react'
import Loader from 'react-loader-spinner'
import GeneralInfoCard from './dataComponents/generalInfoCard'
import AdmissionAndCostCard from './dataComponents/admissionAndCostCard'
import DemographicsCard from './dataComponents/demographicsCard'
import { constructBestFitQuery, roundToNearest5 } from '../../percentMatch'
import * as fetch from '../../../fetch';
import '../../../Assets/css/components/pages/knowledgeBase/dataPage.css'
import "../../../Assets/css/components/percentMatch.css"

class DataPage extends React.Component {
    constructor(props) {
        super(props);

        let loading = (
            <div className="loading-wrapper">
                <Loader
                    type="Grid"
                    color="#748cab"
                    height={150}
                    width={150}
                />
            </div>
        )

        this.state = {
            id: props.collegeId,
            data: [],
            content: loading
        }
    }

    async componentDidMount() {
        let matchQuery = constructBestFitQuery(this.state.id)
        let response = await fetch.getCollegeDataByID(this.state.id);
        let matchData = await fetch.query(matchQuery.query, matchQuery.params)
        let percentMatch = parseFloat(matchData[0].match_points).toFixed(2)
        console.log(response)
        let data = response.results[0];

        this.setState(previousState => {
            let dataContent = (
                <>
                    <div style={{display: 'flex', justifyContent: 'center', fontSize: '18px'}}>
                        Based on your survey responses, you have a <span className={`anti-gradient_${roundToNearest5(percentMatch)} match-text`}> {percentMatch}% </span> match with this school.
                    </div>
                    <GeneralInfoCard data={data}/>
                    <AdmissionAndCostCard data={data}/>
                    <DemographicsCard data={data}/>
                </>
            )

            return {
                id: previousState.id,
                data: data,
                content: dataContent
            }
        })
    }
    
    render() {
        return (
            <>
                {this.state.content}
            </>
        )
    }
}

export default DataPage;