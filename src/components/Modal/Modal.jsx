import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Overlay, ModalBlock, Img } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ src, alt, onClose }) => {
  useEffect(() => {
    const closeModalOnEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', closeModalOnEsc);

    return () => {
      window.removeEventListener('keydown', closeModalOnEsc);
    };
  }, [onClose]);

  const closeModalOnClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={closeModalOnClick}>
      <ModalBlock>
        <Img src={src} alt={alt} />
      </ModalBlock>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
