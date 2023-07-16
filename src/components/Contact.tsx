import React, {useState}from 'react'
import BackgroundVideoHero from './BackgroundVideoHero'
import CorgiVideo2 from '../assets/video/corgi-video-2.mp4'
import ContactForm from './ContactForm';


     
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
            isPageTitle={true}
        />
                    <div className="container">
                        {!submitted ? ( <ContactForm onSubmit={handleSubmit}/>) : (<div>thank you for contacting us!</div>)}
                    </div>
                    

    </>
  )
}

export default Contact
