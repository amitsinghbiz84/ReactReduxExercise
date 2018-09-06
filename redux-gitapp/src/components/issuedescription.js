import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionMethods from '../actions/postactions';

const mapStateToProps = state => (
  {
    issues: state.issues
  })

   

let IssueDescription = (props) => {
  console.log(props.issues);
  console.log(props.match.params.issueIdentifier);
  
  let filteredData = props.issues;
  let currentIssueID = props.match.params.issueIdentifier;
  if (filteredData.length > 0) {
    filteredData = filteredData.find(function(item) {
      return item.number == currentIssueID;
    })
  }
  else {
    return <div className="container pt-5"><h1>Sorry, the list is empty.</h1></div>
  }
  

  console.log(filteredData); 
   
  return(
    <div class="container">
      <h1>native #{filteredData.number}</h1>
      <div className="issueDetail">
        <span className="btn-success rounded mr-3 p-3 glyphicon glyphicon-exclamation-sign"> {filteredData.state}</span>
        <span>{filteredData.user.login} opened this issue on {filteredData.created_at} </span>
        <hr/>
        <div className="row mb-5">
          <div className="col-sm-2"><img src={filteredData.user.avatar_url}/></div>
          <div className="col-sm-10">{filteredData.body}</div>
        </div>
        <div className="commentSection">
          <div className="form-group">
            <label for="exampleTextarea">Write Comment</label>
            <textarea className="form-control mb-3" id="exampleTextarea" rows="3"></textarea>
            <button type="submit" className="btn btn-success">Comment</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

IssueDescription = connect(mapStateToProps)(IssueDescription);
export default  IssueDescription;