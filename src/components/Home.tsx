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
        <h2>Cardigan Welsh Corgis</h2>
        <p>
        The Cardigan Welsh Corgi is one of the oldest breeds in the British Isles, with a history that dates back over 3,000 years. They were bred to herd cattle, and they're known for their intelligence and versatility.
        </p>
        <p>
        Physically, Cardigans are slightly larger than Pembrokes and they can be distinguished by their long tails, which Pembrokes typically do not have. Cardigans also have more rounded ears, a wider variety of coat colors, and a heavier bone structure.
        </p>
        <h2>Pembroke Welsh Corgi:</h2>
        <p>
        The Pembroke Welsh Corgi is the younger of the two corgi breeds and was bred around the 10th century. They were also used for herding and are known for their intelligence, affection, and active nature.
        </p>
        <p>Pembrokes are often slightly smaller than Cardigans and are usually more recognized due to their association with Queen Elizabeth II, who has owned more than 30 during her reign. Pembroke Welsh Corgis have more pointed ears and they are often born with short tails. If not, they are usually docked for breed standards. They have a somewhat lighter bone structure and they come in fewer coat colors compared to Cardigans.</p>

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
