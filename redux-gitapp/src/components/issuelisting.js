import React, { Component } from 'react';

export default class IssueListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clouds:[]
    }
  };

  componentDidMount() {
    var url="https://api.github.com/repos/vmg/redcarpet/issues?state=open";
    fetch(url)
      .then(response => {
        return response.json();
      }).then(data => {
        this.setState({clouds: data});
        
         // console.log("state", this.state.clouds)
    })    
  };

  filterList(e) {
    let updatedList = this.state.clouds;
    let searcheyword = e.target.value;
    updatedList = updatedList.filter(function(item){
      return item.title.toLowerCase().search(searcheyword) !== -1;
    });
    this.setState({clouds: updatedList});
  };

  

  render() {
    return (
      <div className="mt-5">

        <form className="row mt-5">
        <div className="col-sm-6">
            <label className="sr-only" for="inlineFormInputGroup">Username</label>
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <div className="input-group-text">Filter </div>
                </div>
                <div className="input-group-prepend">
                    <div className="input-group-text"><i className="glyphicon glyphicon-search"></i></div>
                </div>                
                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="is:issue is:open" onChange={this.filterList.bind(this)}></input>         
            </div>
            </div>
        </form>        

        <ul className="nav nav-tabs mt-5">
          <li classNameass="active"><h2>< a href="#">Issues ({this.state.clouds.length})</a></h2></li>
        </ul>

        <table className="table table-hover border mt-5">
            <tbody>
              {
                this.state.clouds.map((items =>
                  <tr key={items.id}>
                      <td>                          
                        <h4><a href="detail"><span className="glyphicon glyphicon-exclamation-sign pr-3 text-success"></span>{items.title}</a></h4>
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

