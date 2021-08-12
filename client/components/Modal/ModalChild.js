import React from 'react';
import { func, shape } from 'prop-types';

import onClickOutside from 'react-onclickoutside';
import { modal } from './styles';

const ModalChild = (props) => {
  const { children, clickOutside } = props;
  ModalChild.handleClickOutside = () => {
    clickOutside();
  };
  return (
    <div id="modal" className={modal}>
      {children}
    </div>
  );
};

ModalChild.propTypes = {
  children: shape({}).isRequired,
};

const clickOutsideConfig = {
  handleClickOutside: () => ModalChild.handleClickOutside,
};

ModalChild.propTypes = {
  clickOutside: func.isRequired,
};
export default onClickOutside(ModalChild, clickOutsideConfig);

// export default Modal;
