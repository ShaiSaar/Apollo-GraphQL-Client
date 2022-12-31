import Modal from 'react-bootstrap/Modal';

interface ModalProps {
  show: boolean;
  header: string | JSX.Element;
  children: JSX.Element;
  
  onAction?: () => void;
  actionButtonText?: string;
  
  onHide: () => void;
  cancelButtonText?: string;

} 

const BasicModal: React.FC<ModalProps> = (props: ModalProps) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      centered
    >
      <Modal.Header>
        <Modal.Title>
          {props.header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.children}
      </Modal.Body>
    </Modal>
  );
}

export default BasicModal;