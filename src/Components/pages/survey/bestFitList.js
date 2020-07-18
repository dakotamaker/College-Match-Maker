import React from 'react';
import { List, Button, Skeleton } from 'antd';
import * as fetch from '../../../fetch';
import { constructBestFitQuery, roundToNearest5 } from '../../percentMatch';
import "../../../Assets/css/components/pages/survey/common/best-fit.css"
import "../../../Assets/css/components/percentMatch.css"
import { Link } from 'react-router-dom';

class BestFitList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bestFits: [],
            initLoading: true,
            showCount: 5,
            shownList: []
        }
    }

    async componentDidMount() {
        let queryDetails = constructBestFitQuery()
        let bestFits = await fetch.query(queryDetails.query, queryDetails.params);

        this.setState({
            bestFits: bestFits,
            initLoading: false,
            shownList: bestFits.slice(0, this.state.showCount)
        })
    }

    onLoadMore = () => {
        this.setState(previousState => {
            return {
                bestFits: previousState.bestFits,
                initLoading: false,
                showCount: previousState.showCount + 5,
                shownList: previousState.bestFits.slice(0, previousState.showCount + 5)
            }
        })
    }


    render() {
        const loadMore =
            !this.state.initLoading && (this.state.shownList.length < this.state.bestFits.length) ? (
            <div
                style={{
                textAlign: 'center',
                marginTop: 12,
                height: 32,
                lineHeight: '32px',
                }}
            >
                <Button onClick={this.onLoadMore}>See More Matches</Button>
            </div>
            ) : null;
        
        return (
            <>
            <div className="best-fit-wrapper">
                <div className="best-fit-title">
                    <h1>
                        List of Your Best College Fits
                    </h1>
                </div>
                <List
                    size="large"
                    loading={this.state.initLoading}
                    itemLayout="horizontal"
                    loadMore={loadMore}
                    dataSource={this.state.shownList}
                    renderItem={(item, index) => (
                    <List.Item
                        actions={[<Link to={`/knowledgeBase/${item.college_id}`}> See knowledgebase </Link>]}
                    >
                        <Skeleton title={false} loading={item.loading} active>
                            <List.Item.Meta
                                title={<a href={item.school_url.startsWith('http') ? item.school_url : `https://${item.school_url}`} target="_blank" rel="noopener noreferrer">{index + 1}. {item.school_name} (<span className={`anti-gradient_${roundToNearest5(Math.round(item.match_points * 100) / 100)}`}>{Math.round(item.match_points * 100) / 100}%</span> Match)</a>}
                                description={`Located in: ${item.city}, ${item.state}`}
                            />
                        </Skeleton>
                    </List.Item>
                    )}
                />
            </div>
            </>
        );
    }
}

export default BestFitList;