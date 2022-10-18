import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import { Overlay, ModalBlock, Img } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.modalCloseOnEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.modalCloseOnEscape);
  }

  modalCloseOnEscape = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  modalCloseOnClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { src, tags } = this.props;
    return createPortal(
      <Overlay onClick={this.modalCloseOnClick}>
        <ModalBlock>
          <Img src={src} alt={tags} />
        </ModalBlock>
      </Overlay>,
      modalRoot
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
