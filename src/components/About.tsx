import React from "react";
import BackgroundVideoHero from "./BackgroundVideoHero";
import Cards from "./Cards";
// import CorgiVideo3 from "../assets/video/corgi-video-3.mp4";
import Divider from "./Divider";



const About = () => {
  return (
    <>
      <BackgroundVideoHero
        videoSrc={CorgiVideo3}
        videoDescription={
          "A corgi walking down the beach. The video has no audio."
        }
        title={"About Corgis"}
        creditsUrl={
          "https://www.vecteezy.com/video/8259468-two-cute-corgi-dogs-at-home-lying-on-the-floor"
        }
        creditsText={
          "Young woman play with corgi dog on the sea beach Stock Videos by Vecteezy"
        }
        isPageTitle={false}
      />
      <div className="container">
        <Divider dividerTitle={"About Corgis"} />
        <p>
          Corgis are a beloved breed of small dogs that have captured the hearts
          of people all around the world. Known for their adorable looks and
          charming personalities, these pups are a favorite among dog lovers
          everywhere.
        </p>
        <p>
          There are two main types of corgis: the Pembroke Welsh corgi and the
          Cardigan Welsh corgi. While both breeds share many similar traits,
          such as their short legs and long bodies, there are some key
          differences between the two. For example, the Pembroke Welsh corgi has
          pointy ears, while the Cardigan Welsh corgi has rounded ears.
          Additionally, Pembroke Welsh corgis are more popular and more widely
          recognized than their Cardigan counterparts.
        </p>
        <p>
          Corgis were originally bred as herding dogs, which means that they
          have a natural instinct to round up and move livestock. Despite their
          small size, corgis are quite agile and can move quickly, making them
          well-suited to this task. However, in modern times, most corgis are
          kept as companion animals rather than working dogs.
        </p>
        <p>
          One of the most striking features of corgis is their short legs. This
          unique trait is caused by a genetic mutation that affects the breed's
          growth hormones. Despite their stubby legs, corgis are quite active
          and love to play and run around. They are also known for their
          intelligence and their willingness to please their owners.
        </p>
        <p>
          Corgis are often described as being very affectionate and loyal to
          their families. They are social dogs that enjoy spending time with
          their humans and other pets. They are also known for their playful and
          mischievous personalities, which can make them a handful at times.
        </p>
        <p>
          Overall, corgis are a wonderful breed that is sure to bring joy and
          happiness to any household. Whether you're looking for a loyal
          companion or a fun-loving family pet, a corgi could be the perfect
          choice for you.
        </p>
      </div>
    </>
  );
};

export default About;
