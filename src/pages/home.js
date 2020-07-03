import React from 'react';
import MissionStatement from '../Components/pages/home/missionStatement'
import InformationRow from '../Components/pages/home/informationRow'

import { magic } from 'react-icons-kit/fa/magic';
import { code } from 'react-icons-kit/fa/code';
import { pieChart } from 'react-icons-kit/fa/pieChart';

class Home extends React.Component {
    render() {
        return (
            <span>
                <MissionStatement/>
                <InformationRow icon={pieChart} size={100} backgroundColor="#1D2D44" text="Insight provided on college-specific trends based on the latest information from the U.S. Department of Education."/>
                <InformationRow icon={magic} size={90} backgroundColor="#3E5C76" text="Realistic, reasonable, and personalized matching for you and your college wants and needs. It's almost like magic."/>
                <InformationRow icon={code} size={100} backgroundColor="#748CAB" text="A project built on collaboration and the spirit of open-source development."/>
            </span>
        );
    }
}

export default Home;