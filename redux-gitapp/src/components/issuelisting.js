import React, { Component } from 'react'

export default class IssueListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clouds:[]
    }
  };

  componentDidMount() {
    var url="https://api.github.com/repos/vmg/redcarpet/issues?state=closed";
    fetch(url)
      .then(response => {
        return response.json();
      }).then(d => {
          let clouds = d.map((cloudData)=>{
            return(
              <div>{cloudData}</div>
            )
        })
        this.setState({clouds: clouds});
          console.log("state", this.state.clouds)
    })
  };

  render() {
    return (
      <div className="mt-5">
      
        <ul className="nav nav-tabs">
          <li classNameass="active"><a href="#">Issues (2)</a></li>
        </ul>
        <table className="table table-hover border mt-5">
            <tbody>
              <tr>
                  <td>
                  
                    <h2><span className="glyphicon glyphicon-info-sign pr-3 text-success"></span>Create Rect App</h2>
                    <p>
                      #4880 opned an hour ago by Rob
                    </p>
                  </td>
              </tr>
              <tr>
                  <td>
                    
                    <h2><span className="glyphicon glyphicon-info-sign pr-3 text-success"></span>Create Rect App</h2>
                    <p>
                      #4880 opned an hour ago by Rob
                    </p>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
    )
  }
}

