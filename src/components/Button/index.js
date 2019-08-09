import React from 'react';
import posed from 'react-pose';

const ButtonGreen = posed.div({
  hoverable: true,
  init: {
    y: 0,
    background: '#A8E6CF'
  },
  hover: {
    y: '-0.5vw',
    background: '#5DF4AC'
  }
});

const ButtonPink = posed.div({
  hoverable: true,
  init: {
    y: 0,
    background: '#FF8BA6'
  },
  hover: {
    y: '-0.5vw',
    background: '#FF6387'
  }
});

export {
  ButtonGreen,
  ButtonPink
};
