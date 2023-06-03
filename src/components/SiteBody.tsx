import React from 'react';
import Cards from './Cards';
import BackgroundVideoHero from './BackgroundVideoHero';
import CorgiVideo from '../assets/video/corgi-video.mp4'


interface Props {
    videoDescription?:string;
    title?:string;
    creditsUrl?:string;
    creditsText?:string;
    videoSrc?:string;
    isPageTitle:boolean;
  }

const SiteBody = ({videoDescription, title, creditsUrl, creditsText,  videoSrc, isPageTitle}:Props) => {
  return (

    <>
             <BackgroundVideoHero
                videoSrc={CorgiVideo}
                videoDescription={"A corgi walking down the beach. The video has no audio."}
                title={"Let's talk about Corgis"}
                creditsUrl={"https://www.vecteezy.com/video/4192384-funny-corgi-dog-near-the-sea"}
                creditsText={"Funny corgi dog near the sea Stock Videos by Vecteezy"}
                isPageTitle={true}
        />
        <div className="container">
           
        <div className="page-divider">
            <h3 className="page-divider__title">Pembroke or Cardigan?</h3>
            <div className="page-divider__media">
            <svg className="page-divider__icon" aria-hidden="true" focusable="false">
                 <use xlinkHref="/src/assets/image/svg-legend.svg#corgi-icon"  />
            </svg>
            </div>
        </div>
       
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sapiente voluptatibus, unde, illum, accusamus ullam nemo ea minus facilis ducimus harum officiis quia sed. Blanditiis fugiat nemo adipisci similique delectus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sapiente voluptatibus, unde, illum, accusamus ullam nemo ea minus facilis ducimus harum officiis quia sed. Blanditiis fugiat nemo adipisci similique delectus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sapiente voluptatibus, unde, illum, accusamus ullam nemo ea minus facilis ducimus harum officiis quia sed. Blanditiis fugiat nemo adipisci similique delectus?+

        </p> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sapiente voluptatibus, unde, illum, accusamus ullam nemo ea minus facilis ducimus harum officiis quia sed. Blanditiis fugiat nemo adipisci similique delectus?</p> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sapiente voluptatibus, unde, illum, accusamus ullam nemo ea minus facilis ducimus harum officiis quia sed. Blanditiis fugiat nemo adipisci similique delectus?</p> 

        <ul className="card-listing">
            <li className="card-listing__item">
                <Cards
                    cardTitle={"This is a Pembroke Welsh Corgi"}
                    cardText={"Cute"} />
            </li>
            <li className="card-listing__item">
            <Cards
                    cardTitle={"This is a Cardigan Welsh Corgi"}
                    cardText={"cute"} />
            </li>
          
            </ul>


            <div className="page-divider">
            <h3 className="page-divider__title">How to pick a breeder</h3>
            <div className="page-divider__media">
            <svg className="page-divider__icon" aria-hidden="true" focusable="false">
                 <use xlinkHref="#corgi-icon"  />
            </svg>
            </div>
        </div>
        <p>This information applies to all dogs, but typically you want to make sure you get information from the breeder.</p>
        <ul>
            <li>Ask a lot of questions</li>
            <li>Make sure that the breeders provide documentation on the lineage and their illnesses</li>
            <li>Have a breeder that dodges questions? Probably best to avoid them if oyu want a healthy pup.</li>
        </ul>

    </div>
    <div className="container">
           
        <div className="page-divider">
            <h3 className="page-divider__title">Pembroke or Cardigan?</h3>
            <div className="page-divider__media">
            <svg className="page-divider__icon" aria-hidden="true" focusable="false">
                 <use xlinkHref="/src/assets/image/svg-legend.svg#corgi-icon"  />
            </svg>
            </div>
        </div>
       
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sapiente voluptatibus, unde, illum, accusamus ullam nemo ea minus facilis ducimus harum officiis quia sed. Blanditiis fugiat nemo adipisci similique delectus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sapiente voluptatibus, unde, illum, accusamus ullam nemo ea minus facilis ducimus harum officiis quia sed. Blanditiis fugiat nemo adipisci similique delectus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sapiente voluptatibus, unde, illum, accusamus ullam nemo ea minus facilis ducimus harum officiis quia sed. Blanditiis fugiat nemo adipisci similique delectus?+

        </p> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sapiente voluptatibus, unde, illum, accusamus ullam nemo ea minus facilis ducimus harum officiis quia sed. Blanditiis fugiat nemo adipisci similique delectus?</p> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sapiente voluptatibus, unde, illum, accusamus ullam nemo ea minus facilis ducimus harum officiis quia sed. Blanditiis fugiat nemo adipisci similique delectus?</p> 

        <ul className="card-listing">
            <li className="card-listing__item">
                <Cards
                    cardTitle={"This is a Pembroke Welsh Corgi"}
                    cardText={"Cute"} />
            </li>
            <li className="card-listing__item">
            <Cards
                    cardTitle={"This is a Cardigan Welsh Corgi"}
                    cardText={"cute"} />
            </li>
          
            </ul>


            <div className="page-divider">
            <h3 className="page-divider__title">How to pick a breeder</h3>
            <div className="page-divider__media">
            <svg className="page-divider__icon" aria-hidden="true" focusable="false">
                 <use xlinkHref="#corgi-icon"  />
            </svg>
            </div>
        </div>
        <p>This information applies to all dogs, but typically you want to make sure you get information from the breeder.</p>
        <ul>
            <li>Ask a lot of questions</li>
            <li>Make sure that the breeders provide documentation on the lineage and their illnesses</li>
            <li>Have a breeder that dodges questions? Probably best to avoid them if oyu want a healthy pup.</li>
        </ul>

    </div>
    
    </>
  )
}

export default SiteBody
