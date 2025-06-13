import React from 'react';
import styles from '../AnimatedTextWithImageModule/animatedText.module.css';
import { Island, logInfo } from '@hubspot/cms-components';
import ResponsiveSpacingWrapper from '../../shared/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import AnimatedText from '../../islands/AnimatedText?island';
import RenderImage from '../../shared/ImageComponent/imageRenderer.jsx';
import HeadingComponent from '../../shared/HeadingComponent/HeadingComponent.jsx';

export const Component = props => {
  const {
    module_id,
    headingAndTextHeadingLevel, headingAndTextHeading,
    animation_prefix_text,
    animation_suffix_text,
    add_animated_text = [],
    image,
    groupStyle: {
        headingStyleVariant, headingStyleColor
    }
  } = props;

  logInfo('Animated Section:', props);

  return (
    <ResponsiveSpacingWrapper moduleId={module_id} fields={props?.fieldValues}>
      <div className={styles.animated_text_section}>
        <div className="page-center">
          <div className={styles.inner_animated_text_section}>
            <div className={styles.text_container}>

              <div className={styles.large_heading}>
              <HeadingComponent
                headingLevel={headingAndTextHeadingLevel}
                headingStyleVariant={headingStyleVariant}
                heading={headingAndTextHeading}
                headingStyleColor={headingStyleColor}
              />
              </div>
              <div className={styles.animation_content}>
                <div className={styles.prefix_text}>
                  {animation_prefix_text && <h2>{animation_prefix_text}</h2>}
                </div>

                <Island
                  module={AnimatedText}
                  hydrateOn="idle"
                  add_animated_text={add_animated_text}
                  clientOnly
                />

                <div className={styles.suffix_text}>
                  {animation_suffix_text && <h2>{animation_suffix_text}</h2>}
                </div>
              </div>
            </div>
            {image?.src && (
              <div className="image_container">
                <div className="inner_image_container">
                  <RenderImage imageField={image} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ResponsiveSpacingWrapper>
  );
};

export { fields } from './fields.jsx';

export const meta = {
  label: 'Animated Text With Image Module',
};
