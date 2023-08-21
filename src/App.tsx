import { useState } from 'react';
import './App.css'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';


const App = () => {
  const [openModal, setopenModal] = useState<boolean>(false);
  const handleClose = () => {
    setopenModal(false);
  };
  return (

    <>
      <Button variant='text' onClick={() => setopenModal(true)} > open modal</Button>
      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle>
          hola mundo
          
        </DialogTitle>
        <DialogContent>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
 Preasent commodo cursus magna, vei scelerisque nisl consectetur et. Vivamis sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
 Aenean lacinia bibendun nulla sed consectetur, Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed opdio dui. Donec ullamcorper non metus auctor fringila.
 Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
 Preasent commodo cursus magna, vei scelerisque nisl consectetur et. Vivamis sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
 Aenean lacinia bibendun nulla sed consectetur, Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed opdio dui. Donec ullamcorper non metus auctor fringila.
   
 Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
 Preasent commodo cursus magna, vei scelerisque nisl consectetur et. Vivamis sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
 Aenean lacinia bibendun nulla sed consectetur, Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed opdio dui. Donec ullamcorper non metus auctor fringila.
   </DialogContent>
          <DialogActions>
            <Button variant='text'>
              Hello world
            </Button>
          </DialogActions>
      </Dialog>
    </>
  )
}

export default App
