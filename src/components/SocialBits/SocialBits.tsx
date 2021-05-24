import React from "react";
import "./SocialBits.less";

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  SpotifyIcon,
  TwitterIcon,
  FacebookIcon,
} from "icons";

interface Props {}
const SocialBits: React.FC<Props> = () => {
  return (
    <div className="socials-container">
      <a
        title="Github"
        href="https://github.com/wevertoum/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GithubIcon size={40} fill="#fff" />
      </a>
      <a
        title="Instagram"
        href="https://www.instagram.com/weverton.js/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <InstagramIcon size={40} fill="#fff" />
      </a>
      <a
        title="Facebook"
        href="https://web.facebook.com/wevertonfr/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FacebookIcon size={40} fill="#fff" />
      </a>
      <a
        title="Spotify"
        href="https://open.spotify.com/user/wevertoum"
        rel="noopener noreferrer"
        target="_blank"
      >
        <SpotifyIcon size={40} fill="#fff" />
      </a>
      <a
        title="Linkedin"
        href="https://www.linkedin.com/in/wevertonfr/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <LinkedinIcon size={40} fill="#fff" />
      </a>
      <a
        title="Twitter"
        href="https://twitter.com/wetervon"
        rel="noopener noreferrer"
        target="_blank"
      >
        <TwitterIcon size={40} fill="#fff" />
      </a>
    </div>
  );
};

export default SocialBits;
