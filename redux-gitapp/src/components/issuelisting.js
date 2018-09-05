import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Sorting from './sorting';
import * as actionMethods from '../actions/postactions';

const mapStateToProps = state => (
  {
    issues: state.issues
  })

  const mapDispatchToProps = dispatch => (
    bindActionCreators(actionMethods, dispatch)
  )

class IssueListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issueJson:[],
      sortSelection: 'created_at|desc',
      searchKeyword: ''
    };
    this.handleSearchTerm = this.handleSearchTerm.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  componentDidMount() {
    console.log(this.state);
    console.log(this.props);
    const url="https://api.github.com/repos/vmg/redcarpet/issues?state=open";
    fetch(url)
      .then(response => {
        return response.json();
      }).then(data => {
        this.props.updateResponse(data);
        console.log(this.state);
        console.log(this.props);
        this.setState({issueJson: data});
        
         // console.log("state", this.state.issueJson)
    })    
  } 


  handleSearchTerm (event) {
    this.setState({
      searchKeyword:  event.target.value
    });
  }

  handleSortChange (sortSelectionValue) {
    this.setState({
      sortSelection: sortSelectionValue
    });
  }

  

  render() {

      let updatedList = this.state.issueJson;
      const sortKey = this.state.sortSelection.split('|')[0];
      const sortOrder = this.state.sortSelection.split('|')[1];
      // const newJSON = updatedList.filter(item => 
      //   (item.title.toLowerCase().search(this.state.searchKeyword.toLowerCase()) !== -1));
      //   console.log(newJSON);
      updatedList = sortKey === 'comments' ? (updatedList.filter(item =>
        (item.title.toLowerCase().search(this.state.searchKeyword.toLowerCase()) !== -1)).sort((a,b) => (a[sortKey] > b[sortKey] ? (sortOrder === 'asc' ? 1:-1): (sortOrder === 'asc' ? -1: 1)))) : (updatedList.filter(item =>
          (item.title.toLowerCase().search(this.state.searchKeyword.toLowerCase()) !== -1)).sort((a,b) => (new Date(a[sortKey]).getTime() > new Date(b[sortKey]).getTime() ? (sortOrder === 'asc' ? 1:-1): (sortOrder === 'asc' ? -1: 1))));

    return (
      <div className="mt-5">

        <form className="row mt-5">
        <div className="col-sm-6">
            <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <div className="input-group-text">Filter </div>
                </div>
                <div className="input-group-prepend">
                    <div className="input-group-text"><i className="glyphicon glyphicon-search"></i></div>
                </div>                
                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="is:issue is:open" onChange={this.handleSearchTerm}></input>         
            </div>
            </div>
        </form>        

        <ul className="nav nav-tabs mt-5">
          <li className="active"><h2>< a href="#">Issues ({updatedList.length})</a></h2></li>
        </ul>

        <Sorting onSortChange={this.handleSortChange} sortBy={this.state.sortSelection} />

        <table className="table table-hover border mt-5">
            <tbody>
              {
                updatedList.map((items =>
                  <tr key={items.id}>
                      <td>                          
                        <h4>
                          <Link to={'/detail/'+items.number}>
                            <span className="glyphicon glyphicon-exclamation-sign pr-3 text-success"></span>{items.title}
                          </Link>
                        </h4>
                        <p>
                          #{items.number} {items.state} an hour {items.created_at} by {items.user.login}
                        </p>
                      </td>
                    </tr>
                  ))
                }                      
                </tbody>
              </table>
                 
        
        </div>
    )
  }
}

IssueListing = connect(mapStateToProps, mapDispatchToProps)(IssueListing);

export default IssueListing;