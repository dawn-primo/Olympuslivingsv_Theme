import React from 'react';
import styles from '../ImageCarousel/imageCarousel.module.css';
import { Island, logInfo } from '@hubspot/cms-components';
import imageCarousel from '../../islands/imageCarousel?island';

export const Component = props => {
  // logInfo('Props passed to Image Carousel:', props);

  const {
    addImage = [],
  } = props;

  return (
    <div className={styles.image_carousel}>

      <Island module={imageCarousel} addImage={addImage} clientOnly hydrateOn='idle' />
    </div>
  );
};

export { fields } from './fields.jsx';

export const meta = {
  label: 'Image Carousel',
};
