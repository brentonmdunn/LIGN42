import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./BlockquoteLearning"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 5
};
  

export const LearnMore = (props) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = (e) => {
        e.preventDefault();
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

  return (
    <p className='bquote'>
    <div>
        {/* <p>Regular text with <a href="#" className="clickable-text" onClick={handleOpen}>underlined text</a> indicating it's clickable.</p> */}
        {/* {props.type==="inline" && <a href="#" className="clickable-text" onClick={handleOpen}>{props.click}</a>} */}
        {props.type==="inline" && <p>Although this is largely structured line an academic paper, we want the project to be accessible to all. Anytime you see text that looks like <a href="#" className="clickable-text" onClick={handleOpen}>this</a>, feel free to click it and a modal with more information will appear.</p>}
        {props.type==="button" && <Button onClick={handleOpen}>{props.clickText}</Button>}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              More information!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              More infomation will be displayed here when you encounter linguistic-specific words and techniques.
            </Typography>
            <div className='modal-close-button'>
              <Button onClick={handleClose}>Close</Button>
            </div>
          </Box>
        </Modal>
      </div>
       </p>
  )
}
