import React from 'react';

export default function ModalBody(props) {
    return (
      <div className="modal-body">
        { props.children }
      </div>
    );
  }