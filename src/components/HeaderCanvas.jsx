import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';

const HeaderCanvas = ({ name, ...props }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
          
            <DensityMediumIcon className='menuIcon' onClick={handleShow} />
            <Offcanvas  show={show} onHide={handleClose} className="offcanvas-top" style={{height:'250px'}} {...props} >
                <Offcanvas.Header   >
                    <Offcanvas.Title className='OffCanvasTitle'>.FocusFrames</Offcanvas.Title>
                    <CloseIcon onClick={handleClose}/>
                </Offcanvas.Header>
                <Offcanvas.Body>
                   <div  className='OffCanvasBody' >
                        <h5 className='Navtitle'>Home</h5>
                        <h5 className='Navtitle'>Blog</h5>
                        <h5 className='Navtitle'>Photos</h5>
                        <h5 className='Navtitle'>Contact</h5>
                        
                   </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

function Example() {
    return (
        <>
            {['top'].map((placement, idx) => (
                <HeaderCanvas key={idx} placement={placement} name={placement} />
            ))}
        </>
    );
}

export default Example;
