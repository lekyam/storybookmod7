import React, { useEffect, useRef, useState } from 'react';
import './modal.css';
import { Button, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
interface ModalProps {
    open: boolean;
    ModalContent: string;
    ModalTitle: string;
    handleClose?: () => void | null; 
    saveChanges?: () => void | null;
}
export const Modal: React.FC<ModalProps> = ({ open, ModalTitle,  ModalContent, handleClose, saveChanges  }) => {
    const [openModal, setOpenModal ] = useState<boolean>(open)
    const backgroundRef = useRef(null);
  
    useEffect(()=> {
        setOpenModal(open);
    },[open])



    const backgroundClick = (event: any) => {
        if (event.target === backgroundRef.current) {
            closeModal();
        }
    };

    const closeModal = () => {
        if(handleClose) handleClose();
        setOpenModal(false);
    };

    const saveChangesModal = () => {
        if(saveChanges) saveChanges();
        closeModal();
    };

    return (
        openModal ?
        <div className='background-modal' ref={backgroundRef} onClick={(event)=> backgroundClick(event)}>
           
            <div className='modal standard-size' onClick={(e) => e.preventDefault()} >
                <div className='modal-title'>
                    <span>{ModalTitle}</span>
                    <div className='icon-close-modal-top'>
                        <IconButton onClick={() => closeModal()} size="small" >
                            <Close/>
                        </IconButton>
                        
                    </div>
                </div>
                <hr ></hr>
                <div className='modal-content'>  
                    <p>
                        {ModalContent}
                    </p> 
                </div>
                <hr></hr>
                <div className='modal-actions'>
                    <Button variant="text" onClick={() => saveChangesModal()} size='small' >
                        Save changes
                    </Button>
                </div>
            </div>
        </div>
        :
        null

    )
}


  

