import React from 'react'
import { Container,
            ModalBody,
            ModalHeader,
            ModalTitle,
            ModalClose,
            ModalContent
} from './styled'

const Modal = ({ status, setStatus, modalData, renderProduct }) => {

    const handleModalClick = (e) => {
        if(e.target.classList.contains('modalBg')){
            setStatus(false);
        }
    }

    const handleCloseClick = () => {
        setStatus(false);
    }
    return (
    <Container status={status}
        className='modalBg'
        onClick={handleModalClick}
    >
        <ModalBody>
            <ModalHeader>
            <ModalTitle>Você gostaria de um?  {modalData.name}</ModalTitle>
                <ModalClose onClick={handleCloseClick}>X</ModalClose>
            </ModalHeader>
            <ModalContent>
            {renderProduct(modalData)}
            </ModalContent>
        </ModalBody>

    </Container>
  )
}

export default Modal
