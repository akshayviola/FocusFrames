import React, { useEffect } from 'react'
import { Parallax } from 'react-parallax';
import { TypeAnimation } from 'react-type-animation';
import CardsPic from '../components/CardsPic';
import StandardImageList from '../components/StandardImageList';
import Card from 'react-bootstrap/Card';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Home = () => {

  return (
    <>

      <div className='container '>
        <Parallax className='parallax' bgImage="https://4kwallpapers.com/images/wallpapers/full-moon-night-time-lake-body-of-water-reflection-3840x2160-4610.jpg" bgImageAlt="the cat" strength={200}>
          <h1 className='Home-Title'>FocusFrames</h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              ' Exploring ',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              ' The World ',
              1000,
              ' In Every Shot',
              1000,

            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block', color: 'white' }}
            repeat={Infinity}
            className='homeCaption'
          />

        </Parallax>
        {/* <img src="https://4kwallpapers.com/images/wallpapers/full-moon-night-time-lake-body-of-water-reflection-3840x2160-4610.jpg" alt="noimage" className='homeImage' /> */}

        <div className='imageDiv'>

          <img className='img1' src="https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

        </div>

        <div className='TextDiv'>

          <h1 className='text-1'>Taking pictures is savoring life intensely, every hundredth of a second</h1>

        </div>
        <div className='imageDiv'>
          <img className='img1' src="https://images.pexels.com/photos/1905054/pexels-photo-1905054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="no image" />
        </div>


        <div className='text-2Div'>
          <h1 className='text-2'>A photograph is a secret about a secret. The more it tells you, the less you know</h1>
        </div>
        <CardsPic />
        <div className='text-3Div'>
          <h1 className='text-3'>Gallery</h1>
        </div>
        <StandardImageList />
        <div className='historic'>
          <h1 className='Histo-Title'>Some Of The Historical Photographs Of All Time</h1>
        </div>
        {/* 1 */}
        <div className='img-title'><h2>Afghan Girl</h2></div>
        <div className='img-main'>
          <img className='afg-girl' src="https://upload.wikimedia.org/wikipedia/en/e/e9/Afghan_Girl%2C_Sharbat_Gula.jpg" alt="" />
          <p className='afg-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam suscipit asperiores nesciunt voluptatibus perferendis totam autem dolore. Debitis architecto nemo ea reprehenderit fugit reiciendis fuga ab! Quisquam, tempora dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente nam sint perferendis non quod dolores tenetur, at maiores, qui blanditiis quam necessitatibus culpa vero itaque obcaecati aspernatur? Consequuntur, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo assumenda ut repellat tempora commodi nemo dolor impedit minima asperiores quos est, fugit similique eius deleniti sunt delectus dolore distinctio! Quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officiis temporibus enim harum libero, esse doloremque dolorem, debitis quisquam assumenda id vitae provident illo facilis blanditiis explicabo sunt delectus alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente, fugit nesciunt unde repellat quidem architecto, dolorem non esse repudiandae nostrum, laudantium officiis libero expedita similique recusandae? Eos, eaque nesciunt. lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sed quidem dolorum. Quae atque, distinctio, ullam praesentium illo aut doloremque in ratione velit similique culpa natus et corporis nemo?</p>
        </div>
        {/* 2 */}
        <div className='img-title'><h2>Thích Quảng Đức </h2></div>
        <div className='img-main'>
          <img className='monk-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Self-immolation_of_Thich_Quang_Duc.jpg/330px-Self-immolation_of_Thich_Quang_Duc.jpg" alt="" />
          <p className='afg-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam suscipit asperiores nesciunt voluptatibus perferendis totam autem dolore. Debitis architecto nemo ea reprehenderit fugit reiciendis fuga ab! Quisquam, tempora dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente nam sint perferendis non quod dolores tenetur, at maiores, qui blanditiis quam necessitatibus culpa vero itaque obcaecati aspernatur? Consequuntur, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo assumenda ut repellat tempora commodi nemo dolor impedit minima asperiores quos est, fugit similique eius deleniti sunt delectus dolore distinctio! Quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officiis temporibus enim harum libero, esse doloremque dolorem, debitis quisquam assumenda id vitae provident illo facilis blanditiis explicabo sunt delectus alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente, fugit nesciunt unde repellat quidem architecto, dolorem non esse repudiandae nostrum, laudantium officiis libero expedita similique recusandae? Eos, eaque nesciunt. lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sed quidem dolorum. Quae atque, distinctio, ullam praesentium illo aut doloremque in ratione velit similique culpa natus et corporis nemo?</p>
        </div>
        {/* 4 */}

        <div className='img-title'><h2>The Vulture and the Little Girl</h2></div>
           <div className='img-main'>
            <img className='monk-img' src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Kevin-Carter-Child-Vulture-Sudan.jpg/300px-Kevin-Carter-Child-Vulture-Sudan.jpg" alt="" />
            <p className='afg-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam suscipit asperiores nesciunt voluptatibus perferendis totam autem dolore. Debitis architecto nemo ea reprehenderit fugit reiciendis fuga ab! Quisquam, tempora dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente nam sint perferendis non quod dolores tenetur, at maiores, qui blanditiis quam necessitatibus culpa vero itaque obcaecati aspernatur? Consequuntur, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo assumenda ut repellat tempora commodi nemo dolor impedit minima asperiores quos est, fugit similique eius deleniti sunt delectus dolore distinctio! Quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officiis temporibus enim harum libero, esse doloremque dolorem, debitis quisquam assumenda id vitae provident illo facilis blanditiis explicabo sunt delectus alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente, fugit nesciunt unde repellat quidem architecto, dolorem non esse repudiandae nostrum, laudantium officiis libero expedita similique recusandae? Eos, eaque nesciunt. lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sed quidem dolorum. Quae atque, distinctio, ullam praesentium illo aut doloremque in ratione velit similique culpa natus et corporis nemo?</p>
           </div>
           {/* 5 */}

           <div className='img-title'><h2>Gandhi and His Spinning Wheelṭ</h2></div>
           <div className='img-main'>
            <img className='monk-img' src="https://static.life.com/wp-content/uploads/migrated/2014/12/gandhi-spinning-wheel-01-1024x747.jpg" alt="" />
            <p className='afg-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam suscipit asperiores nesciunt voluptatibus perferendis totam autem dolore. Debitis architecto nemo ea reprehenderit fugit reiciendis fuga ab! Quisquam, tempora dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente nam sint perferendis non quod dolores tenetur, at maiores, qui blanditiis quam necessitatibus culpa vero itaque obcaecati aspernatur? Consequuntur, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo assumenda ut repellat tempora commodi nemo dolor impedit minima asperiores quos est, fugit similique eius deleniti sunt delectus dolore distinctio! Quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officiis temporibus enim harum libero, esse doloremque dolorem, debitis quisquam assumenda id vitae provident illo facilis blanditiis explicabo sunt delectus alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente, fugit nesciunt unde repellat quidem architecto, dolorem non esse repudiandae nostrum, laudantium officiis libero expedita similique recusandae? Eos, eaque nesciunt. lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sed quidem dolorum. Quae atque, distinctio, ullam praesentium illo aut doloremque in ratione velit similique culpa natus et corporis nemo?</p>
           </div>

      </div>
      {/* footer */}
      <div className='footDiv-main'>
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
    </>
  )
}

export default Home