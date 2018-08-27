import React, { Component } from 'react'

export default class Sorting extends Component {

    constructor(props) {
        super(props);
        this.handleSortChange = this.handleSortChange.bind(this);
    }

    handleSortChange(e) {
        this.props.onSortChange(e.target.value);
    }

  render() {
      
    return (
      <div>

        <div className="float-right mt-5 pb-5">
          <select class="custom-select" onChange={this.handleSortChange} defaultValue={this.props.sortBy}>
            <option>Sort By</option>
            <option value="created_at|desc">Newest</option>
            <option value="created_at|asc">Oldest</option>
            <option value="comments|desc">Most Commented</option>
            <option value="comments|asc">Least Commented</option>
            <option value="updated_at|desc">Recently updated</option>
            <option value="updated_at|asc">Least Recently updated</option>
          </select> 
        </div>

      </div>
    )
  }
}
