import { useState } from "react";
import { Modal } from "./Modal";
import { action } from '@storybook/addon-actions';
import { Button } from "@mui/material";
export default {
    title: 'Exam/Modal',
    component: Modal,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        componentSubtitle: 'Created by Josue Maykel Flores Rodriguez',
    },
};

export const Primary =  {
    args: {
        open: false,
        ModalContent: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. \n Preasent commodo cursus magna, vei scelerisque nisl consectetur et. Vivamis sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. \n Aenean lacinia bibendun nulla sed consectetur, Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed opdio dui. Donec ullamcorper non metus auctor fringila.",
        ModalTitle: "Modal Title",
    }
};

export const Secondary = () => {
    const [open, setOpen] = useState<boolean>(true);


    const handleClose = () => {
        setOpen(false);
        action('close-modal')();
    }
    const saveChanges = () => {
        action('save-changes')();
        handleClose();
        
    }
    return (
        <>
            <Button variant="text" onClick={() => setOpen(true)} style={{zIndex: 1}} >Open modal</Button>
            <Modal
                open= {open}
                ModalTitle="Title dia"
                ModalContent="modal content"
                handleClose={handleClose}
                saveChanges={saveChanges}
                
            />
        </>
        
            
    )
    
}