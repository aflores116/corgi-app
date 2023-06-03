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
                <a href="#">test</a>
        <p>This information applies to all dogs, but typically you want to make sure you get information from the breeder.</p>
        <ul>
            <li>Ask a lot of questions</li>
            <li>Make sure that the breeders provide documentation on the lineage and their illnesses</li>
            <li>Have a breeder that dodges questions? Probably best to avoid them if oyu want a healthy pup.</li>
        </ul>
       
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sapiente voluptatibus, unde, illum, accusamus ullam nemo ea minus facilis ducimus harum officiis quia sed. Blanditiis fugiat nemo adipisci similique delectus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sapiente voluptatibus, unde, illum, accusamus ullam nemo ea minus facilis ducimus harum officiis quia sed. Blanditiis fugiat nemo adipisci similique delectus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sapiente voluptatibus, unde, illum, accusamus ullam nemo ea minus facilis ducimus harum officiis quia sed. Blanditiis fugiat nemo adipisci similique delectus?+

        </p> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sapiente voluptatibus, unde, illum, accusamus ullam nemo ea minus facilis ducimus harum officiis quia sed. Blanditiis fugiat nemo adipisci similique delectus?</p> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sapiente voluptatibus, unde, illum, accusamus ullam nemo ea minus facilis ducimus harum officiis quia sed. Blanditiis fugiat nemo adipisci similique delectus?</p> 

        <Cards/>
        
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
