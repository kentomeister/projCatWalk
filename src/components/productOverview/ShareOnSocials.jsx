import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
} from 'react-share';

const ShareOnSocials = ({ currentImage }) => (
  <div className="share-on-socials">

    <FacebookShareButton
      quote="Best Clothing Ever!"
      hashtag="#kentomeisterInc"
      url="www.google.com"
    >
      <FacebookIcon round size="50" />
    </FacebookShareButton>

    <TwitterShareButton
      title="Kentomeister Inc in the house!"
      hashtag="#kentomeisterInc"
      url="www.google.com"
    >
      <TwitterIcon round size="50" />
    </TwitterShareButton>

    <PinterestShareButton
      url="www.google.com"
      media={currentImage}
    >
      <PinterestIcon round size="50" />
    </PinterestShareButton>
  </div>
);

export default ShareOnSocials;
