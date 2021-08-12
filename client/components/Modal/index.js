import React from 'react';
import { shape } from 'prop-types';
import { bgModal } from './styles';

import ModalChild from './ModalChild';

const Modal = (props) => (
  <div className={bgModal}>
    <ModalChild {...props} />
  </div>
);

Modal.propTypes = {
  children: shape({}).isRequired,
};

export default Modal;
