import React from 'react'
import Cards from './Cards'
import BackgroundVideoHero from './BackgroundVideoHero';
import CorgiVideo2 from '../assets/video/corgi-video-2.mp4'
import Accordion from './Accordion';
import BreederCards from './BreederCards';
import Divider from './Divider';

const Breeders = () => {
  return (
    <>
    <BackgroundVideoHero
        videoSrc={CorgiVideo2}
        title={"HOW TO PICK BREEDERS"}
        creditsUrl={"https://www.vecteezy.com/video/7666274-young-woman-play-with-corgi-dog-on-the-sea-beach"}
        creditsText={" two cute corgi dogs at home, lying on the floor Stock Videos by Vecteezy "}
        isPageTitle={false}
    />
   
        <div className="container">
        <div className="two-column">
            <div className="two-column__main-content">
            <Divider
                dividerTitle={"How to Pick A Breeder"} 
            />
              
        <p>This information applies to all dogs, but typically you want to make sure you get information from the breeder.</p>
        <ul>
            <li>Identify your breed</li>
            <li>Research potential breeders</li>
            <li>Visit the breeder</li>
            <li>Ask about health screenings</li>
            <li>Observe the puppies' behiavior</li>
        </ul>
       
        <Cards/>
        
        <Divider
                dividerTitle={"Things to Ask Breeders"} 
            />
<ul className="accordion-listing">
    <li className="accordion-listing__item">
    <Accordion
            accodionTitle={"Question 1"}
            accordionContent={"Answer 1"}   
            isH2={false}
            isExpanded={false}

         />
    </li>
    <li className="accordion-listing__item">
    <Accordion
            accodionTitle={"Question 2"}
            accordionContent={"Answer 2"}   
            isH2={false}
            isExpanded={false}
         />
    </li>
    <li className="accordion-listing__item">
    <Accordion
            accodionTitle={"Question 3"}
            accordionContent={"Answer 3"}   
            isH2={false}
            isExpanded={false}
         />
    </li>
</ul>
        
            </div>
            <aside className="two-column__rail">
            <Divider
                dividerTitle={"Reputable Corgi Breeders"} 
            />
                <BreederCards
                hasTitle={true}/>
            </aside>
        </div>        
    </div>
    </>
  )
}

export default Breeders
