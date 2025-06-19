import React from 'react';
import Banner from '../BannerVideoSection/banner.module.css';
import BackgroundVideo from '../../shared/BackgroundVideoComponent/BackgroundVideoComponent.jsx';
import { logInfo } from '@hubspot/cms-components';
import { IoIosArrowDown } from 'react-icons/io';

export const Component = props => {
  // console.log('Props passed to Island:', props); // Debugging log
  // logInfo('Props passed to BannerVideoSection:', props);
  const {
    showVideo,
    videoUrl,
    videoPosterUrl,
    module_id,
    imageContainer: { image_field, arrow_link },
  } = props;

  return (
    <div className={`${Banner.banner_container} video-banner-container`}>
      <BackgroundVideo
        showVideo={showVideo}
        videoUrl={videoUrl}
        videoPosterUrl={videoPosterUrl.src}
      >
        <div className="page-center">
          <div className={Banner.img_container}>
            <img
              className={Banner.image}
              src={image_field?.src || ''}
              alt={image_field?.alt || 'Default image alt text'}
            />
          </div>
        </div>
      </BackgroundVideo>
      <div className={Banner.arrow_container}>
        {arrow_link && (
          <a href={arrow_link.url.href} className={Banner.arrow_link}>
            <IoIosArrowDown />
          </a>
        )}
      </div>
    </div>
  );
};

export { fields } from './fields.jsx';

export const meta = {
  label: 'Banner Video Module',
};

console.log('Custom JS running inside React component');
