import React from 'react';
import { List, Button, Skeleton } from 'antd';
import * as fetch from '../../../fetch';
import { constructBestFitQuery, roundToNearest5 } from '../../percentMatch';
import "../../../Assets/css/components/pages/survey/common/best-fit.css"
import "../../../Assets/css/components/percentMatch.css"
import { Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import { getDisplayNameForMatchBullet } from './utils/bestFitValues'

const constructMatchDetailLists = function(item) {
    let missingItems = Object.keys(item).filter(key => key.endsWith('_match') && item[key] < 0.5 && !key.endsWith('_popular_match'))
    let matchingItems = Object.keys(item).filter(key => key.endsWith('_match') && item[key] > 0 && !key.endsWith('_popular_match'))

    return (
        <>
            <div>
                <div className="match-type-title green">Matching Criteria:</div>
                <ul className="matchList">
                    {matchingItems.length ? matchingItems.map(x=> <li className="matchListItem matchingListItem">{getDisplayNameForMatchBullet(x)}</li>) : 'None to display'}
                </ul>
            </div>
            <div>
                <div className="match-type-title red">Missing Critera:</div>
                <ul className="matchList">
                    {missingItems.length ? missingItems.map(x=> <li className="matchListItem missingListItem">{getDisplayNameForMatchBullet(x)}</li>) : 'None to display'}
                </ul>
            </div>
        </>
    )
}

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
                    <>
                    <List.Item
                        actions={[<Link to={`/knowledgeBase/${item.college_id}`}> See knowledgebase </Link>]}
                    >
                        <Skeleton title={false} loading={item.loading} active>
                            <List.Item.Meta
                                title={item.school_url ? <a href={item.school_url.startsWith('http') ? item.school_url : `https://${item.school_url}`} target="_blank" rel="noopener noreferrer">{index + 1}. {item.school_name} (<span className={`anti-gradient_${roundToNearest5(Math.round(item.match_points * 100) / 100)}`}>{Math.round(item.match_points * 100) / 100}%</span> Match)</a> : <span>{index + 1}. {item.school_name}(<span className={`anti-gradient_${roundToNearest5(Math.round(item.match_points * 100) / 100)}`}>{Math.round(item.match_points * 100) / 100}%</span> Match)</span>}
                                description={`Located in: ${item.city}, ${item.state}`}
                            />
                        </Skeleton>
                    </List.Item>
                    <Collapsible 
                        trigger="View Match Details"
                        triggerWhenOpen="Hide Match Details"
                        triggerTagName='div'
                        classParentString="collapsible"
                        triggerClassName="collapsible-header"
                        triggerOpenedClassName="collapsible-header"
                        transitionTime={200}
                    >
                        <div className="match-details-list-container">
                            {constructMatchDetailLists(item)}
                        </div>
                    </Collapsible>
                    </>
                    )}
                />
            </div>
            </>
        );
    }
}

export default BestFitList;