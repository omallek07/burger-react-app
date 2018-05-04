import React from 'react';

import Modal from '../../components/UI/Modal/modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent) => {
  return (props) => {
    return (
      <Aux>
        <Modal>
          Something didn't work!
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  }
}

export default withErrorHandler
