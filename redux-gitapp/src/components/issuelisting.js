import React, { Component } from 'react'

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

  render() {
    return (
      <div className="mt-5">

        <ul className="nav nav-tabs">
          <li classNameass="active"><a href="#">Issues ({this.state.clouds.length})</a></li>
        </ul>

        {
          this.state.clouds.map((items =>                        
                <table className="table table-hover border mt-5" key={items.id}>
                    <tbody>
                      <tr>
                          <td>                          
                            <h2><span className="glyphicon glyphicon-info-sign pr-3 text-success"></span>{items.title}</h2>
                            <p>
                              {items.number} {items.state} an hour {items.created_at} by {items.user.login}
                            </p>
                          </td>
                      </tr>                      
                    </tbody>
                </table>
                       
            ))
          }       
        
        </div>
    )
  }
}

