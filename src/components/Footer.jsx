import React from 'react'
import Card from 'react-bootstrap/Card';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div>
        <Card  border="danger" style={{ width: '100%',height:'300px',backgroundColor:'black' }}>
        
        <Card.Body>
          
          <Card.Text>
           <div className='foot-div'>
              <InstagramIcon style={{color:'white',width:'70px',height:'70px'}}/>
              <EmailIcon style={{color:'white',width:'70px',height:'70px',margin:'10px'}}/>
            <p style={{color:'white'}} className='text-center'>All Rights &copy;  <b>FocusFrames</b> &reg; 2024</p>
           </div>
         </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Footer