import React from "react";
import Cards from "./Cards";
import BackgroundVideoHero from "./BackgroundVideoHero";
import CorgiVideo from "../assets/video/corgi-video.mp4";
import Divider from "./Divider";

const Home = () => {
  return (
    <>
      <BackgroundVideoHero
        videoSrc={CorgiVideo}
        videoDescription={
          "A corgi walking down the beach. The video has no audio."
        }
        title={"Let's talk about Corgis"}
        creditsUrl={
          "https://www.vecteezy.com/video/4192384-funny-corgi-dog-near-the-sea"
        }
        creditsText={"Funny corgi dog near the sea Stock Videos by Vecteezy"}
        isPageTitle={false}
      />
      <div className="container">
        <Divider dividerTitle={"Pembroke or Cardigan Corgi?"} />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          sapiente voluptatibus, unde, illum, accusamus ullam nemo ea minus
          facilis ducimus harum officiis quia sed. Blanditiis fugiat nemo
          adipisci similique delectus? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laborum sapiente voluptatibus, unde, illum,
          accusamus ullam nemo ea minus facilis ducimus harum officiis quia sed.
          Blanditiis fugiat nemo adipisci similique delectus? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Laborum sapiente voluptatibus,
          unde, illum, accusamus ullam nemo ea minus facilis ducimus harum
          officiis quia sed. Blanditiis fugiat nemo adipisci similique delectus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          sapiente voluptatibus, unde, illum, accusamus ullam nemo ea minus
          facilis ducimus harum officiis quia sed. Blanditiis fugiat nemo
          adipisci similique delectus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          sapiente voluptatibus, unde, illum, accusamus ullam nemo ea minus
          facilis ducimus harum officiis quia sed. Blanditiis fugiat nemo
          adipisci similique delectus?
        </p>

        <Cards />

        <Divider dividerTitle={"How to Pick A Breeder"} />
        <p>
          This information applies to all dogs, but typically you want to make
          sure you get information from the breeder.
        </p>
        <ul>
          <li>Ask a lot of questions</li>
          <li>
            Make sure that the breeders provide documentation on the lineage and
            their illnesses
          </li>
          <li>
            Have a breeder that dodges questions? Probably best to avoid them if
            oyu want a healthy pup.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
