

import React from 'react'

function Modal(props){

  return (
    <div>
    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
      View Suggestions
    </button>

    <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
            <h4 className="modal-title" id="myModalLabel">{props.title}</h4>
          </div>
          <div className="modal-body">
            {props.directions}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
            </div>
  )
}

export default Modal
