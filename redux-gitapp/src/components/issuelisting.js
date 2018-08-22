import React from 'react'

const IssueListing =  () => {
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
export default IssueListing;