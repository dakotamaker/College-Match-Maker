import React from 'react';
import { Form, Dropdown, Menu, message, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import WeightedScale from './weightedScale'

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}

class DropDownMenu extends React.Component {

    render() {
        let menu = (
            <Menu onClick={handleMenuClick}>
                {
                    Object.keys(this.props.menuMap).map(key => {
                        return <Menu.Item key={this.props.menuMap[key]}> {key} </Menu.Item>
                    }) 
                }
            </Menu>
        );

        return (
        <Form.Item label={this.props.menuLabel} name={this.props.menuName}>
            <Dropdown overlay={menu}>
            <Button>
                Select one <DownOutlined />
            </Button>
            </Dropdown>
            {this.props.weighted ? <WeightedScale inputTitle={this.props.weightedTitle} inputName={this.props.groupName}/> : <div/>}
        </Form.Item>
        );
    }
}

export default DropDownMenu;