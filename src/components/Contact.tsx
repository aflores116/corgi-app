import React, {useState}from 'react'
import BackgroundVideoHero from './BackgroundVideoHero'
import CorgiVideo2 from '../assets/video/corgi-video-2.mp4'
import ContactForm from './ContactForm';
import Divider from './Divider';


     
const Contact = () => {
    const [submitted, setSubmitted] = useState<boolean>(false);
    const handleSubmit = () => {
        setSubmitted(true);
      }
  return (
    <>
        <BackgroundVideoHero
            videoSrc={CorgiVideo2}
            videoDescription={
              "A corgi walking down the beach. The video has no audio."
            }
            title={"Contact Us"}
            creditsUrl={
              "https://www.vecteezy.com/video/8259468-two-cute-corgi-dogs-at-home-lying-on-the-floor"
            }
            creditsText={
              "Young woman play with corgi dog on the sea beach Stock Videos by Vecteezy"
            }
            isPageTitle={false}
        />
                    <div className="container">
                      <Divider
                        dividerTitle={"Contact Us"} 
                      />
                      <h3>Have any questions about corgis? Fill out the form.</h3>
                        {!submitted ? ( <ContactForm onSubmit={handleSubmit}/>) : 
                        (<div className='form-submission-message'>
                          <p>Thank you for contacting us, unfortunately this is a project site and this form is only for brushing up my skills. Essentially, this form doesn't work. No message was sent. 😈 </p>
                        </div>
                          )
                        }
                    </div>

    </>
  )
}

export default Contact
