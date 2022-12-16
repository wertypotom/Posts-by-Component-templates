import React from 'react';
import './Modal.css';

interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  closeModal: () => void;
}

const Modal = ({ children, visible, closeModal }: ModalProps) => {
  let modalClasses = 'modal ';

  if (visible) {
    modalClasses += 'active';
  }

  return (
    <div className={modalClasses} onClick={closeModal}>
      <div
        className='modal-content'
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
