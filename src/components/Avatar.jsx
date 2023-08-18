import React from 'react';
import './Avatar.scss';

export default function Avatar({ image, size = 'medium' }) {
  return (
    <div className={getContainerStyle(size)}>
      <img
        className={`imgContainer ${getImageSizeStyle(size).image}`}
        alt="user profile"
        src={image}
      />
    </div>
  );
}

function getContainerStyle(size) {
  const baseStyle = 'baseStyle';
  const { container } = getImageSizeStyle(size);
  return `${baseStyle} ${container}`;
}

function getImageSizeStyle(size) {
  switch (size) {
    case 'small':
      return {
        container: 'smallContainer',
        image: 'smallImg',
      };
    case 'medium':
      return {
        container: 'mediumContainer',
        image: 'mediumImg',
      };
    case 'large':
      return {
        container: 'largeContainer',
        image: 'largeImg',
      };
    default:
      throw new Error(`Unsupported type size: ${size}`);
  }
}
