import React from 'react';

export default function ModalFooter(props) {
    return (
      <div className="modal-footer">
        { props.children }
      </div>
    );
  }