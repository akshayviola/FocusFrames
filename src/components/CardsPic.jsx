import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const CardsPic = () => {
    
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  

  return (

   <>
   {/* 1 */}
       <div className='MainDivCard'>
            <div className='divOneCard'>
                <Card className={expanded ? 'card-1 expanded' : 'card-1'} sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={handleExpand}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://images.pexels.com/photos/20861/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                      alt="green iguana"
                      className={expanded ? 'expanded-image' : ''}
                    />
                    <CardContent className='cardContent'>
                      <Typography gutterBottom variant="h5" component="div">
                        Caption
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veritatis alias consequuntur blanditiis adipisci itaque praesentium sunt, 
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
        
                <Card className={expanded ? 'card-1 expanded' : 'card-1'} sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={handleExpand}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://images.pexels.com/photos/2270848/pexels-photo-2270848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="green iguana"
                      className={expanded ? 'expanded-image' : ''}
                    />
                    <CardContent className='cardContent'>
                      <Typography gutterBottom variant="h5" component="div">
                      Caption                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veritatis alias consequuntur blanditiis adipisci itaque praesentium sunt,
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </div>
    
            {/* 2 */}
    
           <div className='divTwoCard'>
                <div className='cardTwo'>
                    <Card className={expanded ? 'card-1 expanded' : 'card-1'} sx={{ maxWidth: 345 }}>
                      <CardActionArea onClick={handleExpand}>
                        <CardMedia
                          component="img"
                          height="140"
                          image="https://images.pexels.com/photos/2954458/pexels-photo-2954458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="green iguana"
                          className={expanded ? 'expanded-image' : ''}
                        />
                        <CardContent className='cardContent'>
                          <Typography gutterBottom variant="h5" component="div">
                          Caption
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veritatis alias consequuntur blanditiis adipisci itaque praesentium sunt,
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                </div>
                {/* 3 */}
        
                <div className='cardThree'>
                    <Card className={expanded ? 'card-1 expanded' : 'card-1'} sx={{ maxWidth: 345 }}>
                      <CardActionArea onClick={handleExpand}>
                        <CardMedia
                          component="img"
                          height="140"
                          image="https://images.pexels.com/photos/302304/pexels-photo-302304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="green iguana"
                          className={expanded ? 'expanded-image' : ''}
                        />
                        <CardContent className='cardContent'>
                          <Typography gutterBottom variant="h5" component="div">
                          Caption
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veritatis alias consequuntur blanditiis adipisci itaque praesentium sunt,
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                </div>
        
           </div>
            
       </div>
   </>
  );
};

export default CardsPic;
