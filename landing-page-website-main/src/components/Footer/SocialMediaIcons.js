import React from 'react';
import './SocialMediaIcons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div className="wrap">
      <div className="social">
        <FontAwesomeIcon icon={faFacebook} className="fb" />
        <FontAwesomeIcon icon={faTwitter} className="tw" />
        <FontAwesomeIcon icon={faYoutube} className="yt" />
        <FontAwesomeIcon icon={faLinkedin} className="dr" />
      </div>
    </div>
  );
};

export default SocialIcons;
