import React, { useState } from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaPinterestSquare } from 'react-icons/fa';

const openNewWindow = (url) => window.open(url, 'newwindow','width=1000, height=700');

const ShareOnSocials = () => (
  <div className="share-on-socials">
    <p>Share this product:</p>
    <FaFacebookSquare
      size="50"
      cursor="pointer"
      color="#3b5998"
      onClick={() => openNewWindow('https://www.facebook.com')}
    />
    <FaTwitterSquare
      size="50"
      cursor="pointer"
      color="#55acee"
      onClick={() => openNewWindow('https://twitter.com')}
    />
    <FaPinterestSquare
      size="50"
      cursor="pointer"
      color="#E60023"
      onClick={() => openNewWindow('https://pintrist.com')}
    />
  </div>
);

export default ShareOnSocials;
