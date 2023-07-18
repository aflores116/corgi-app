import React from "react";
import CorgiVideo from "../assets/video/corgi-video.mp4";
import CorgiVideo2 from "../assets/video/corgi-video-2.mp4";

interface BackgroundVideoProps {
  videoSrc: string;
  videoDescription?: string;
  title: string;
  creditsUrl: string;
  creditsText: string;
  isPageTitle: boolean;
}

const BackgroundVideoHero = (props: BackgroundVideoProps) => {
  const{videoSrc, videoDescription, title, creditsUrl, creditsText, isPageTitle} = props;
  return (
    <div className="page-banner-media">
      {videoDescription ? (
        <span className="visually-hidden">{videoDescription}</span>
      ) : null}

      <video
        className="page-banner-media__video"
        width="100%"
        height="100%"
        preload="auto"
        autoPlay
        muted
        loop
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      {title ? (
        <div className="page-banner-media__video-content">
          {isPageTitle ? (
            <h1 className="page-banner-media__video-content-title">
              {title}
              <a
                className="page-banner-media__video-content-link"
                href={creditsUrl}
              >
                {creditsText}
              </a>
            </h1>
          ) : (
            <h2 className="page-banner-media__video-content-title">
              {title}
              <a
                className="page-banner-media__video-content-link"
                href={creditsUrl}
              >
                {creditsText}
              </a>
            </h2>
          )}
        </div>
      ) : null}
    </div>
    //
  );
};

export default BackgroundVideoHero;
