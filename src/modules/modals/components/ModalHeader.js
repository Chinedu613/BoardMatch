import React from 'react';

export default function ModalHeader(props) {
    return (
      <div className="modal-header">
        { props.children }
      </div>
    );
  }