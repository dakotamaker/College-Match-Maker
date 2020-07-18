import React from 'react'
import { Result } from 'antd';
import '../../../Assets/css/components/pages/knowledgeBase/emptyPage.css'
 
class EmptyPage extends React.Component {
    render() {
        return (
            <>
            <div className="empty-page">
                <Result
                    status="404"
                    title="No College Selected"
                    subTitle="Please select a college above to start seeing statistics"
                />
            </div>
            </>
        )
    }
}

export default EmptyPage;