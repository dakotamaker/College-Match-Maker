import React from 'react';
import { query } from '../../../fetch'
import Select from 'react-virtualized-select';
import createFilterOptions from 'react-select-fast-filter-options';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        let colleges = await query('SELECT college_id, school_name, school_alias from college_scorecard_data')

        this.setState({
            data: colleges.map(college => { return {value: college.college_id, label: college.school_name, alias: college.school_alias}})
        })
    }

    handleSelect = value => {
        window.location.pathname = `knowledgeBase/${value.value}`
    };

    render() {
        const options = this.state.data
        const filterOptions = createFilterOptions({ options });
        return (
        <Select
            name="university"
            value="one"
            placeholder="Find a collge"
            options={this.state.data}
            filterOptions={filterOptions}
            onChange={this.handleSelect}
        />
        );
    }
}

export default SearchBar;