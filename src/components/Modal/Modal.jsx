import { Component } from 'react';
import { Overlay, ModalBlock, Img } from './Modal.styled';

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
    return (
      <Overlay onClick={this.modalCloseOnClick}>
        <ModalBlock>
          <Img src={src} alt={tags} />
        </ModalBlock>
      </Overlay>
    );
  }
}

export default Modal;
