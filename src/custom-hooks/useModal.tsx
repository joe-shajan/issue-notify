import type { ReactNode } from "react";
import { useState } from "react";
import { Modal } from "../components";

// type Props = {}

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const ModalComponent = ({ children }: { children: ReactNode }) => (
    <Modal isOpen={isOpen} onClose={closeModal}>
      {children}
    </Modal>
  );

  return { Modal: ModalComponent, openModal, closeModal };
};

export default useModal;
