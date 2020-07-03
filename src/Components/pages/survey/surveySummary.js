import React from 'react';
import { Result } from 'antd';
import { Link } from 'react-router-dom';

class SurveySummary extends React.Component {
    render() {
        return (
            <span>
                <h1 className="construction">
                <Result
                    status="403"
                    title="Under Construction"
                    subTitle="Sorry, this page isn't available just yet."
                    extra={<Link to="/">Back Home</Link>}
                />
                </h1>
            </span>
        );
    }
}

export default SurveySummary;