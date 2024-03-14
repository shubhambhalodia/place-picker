import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ children ,open}) {
  const dialog = useRef();
  useEffect(() => {
    const modalDialog = dialog.current;

    if (open && !modalDialog.open) {
      modalDialog.showModal();
    } else if (!open && modalDialog.open) {
      modalDialog.close();
    }
  }, [open]);
  
  return createPortal(
    <dialog className="modal" ref={dialog} open={open}>
      {open && children}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
