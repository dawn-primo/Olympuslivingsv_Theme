import React from 'react';
import styles from '../ActivitySection/activitySection.module.css';
import { Island, logInfo } from '@hubspot/cms-components';
import ResponsiveSpacingWrapper from '../../shared/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import AnimatedText from '../../islands/AnimatedText?island';


export const Component = props => {
  // logInfo('Props passed to Activity Section:', props);
  const {
    module_id,
    animation_prefix_text,
    animation_suffix_text,
    add_animated_text = [],
    image
  } = props;


  return (
    <>
      <ResponsiveSpacingWrapper moduleId={props?.module?.module_id} fields={props?.fieldValues}>
        <div className={styles.animated_text_section}>
          <div className='page-center'>
            <div className={styles.inner_animated_text_section}>
                <h2>{animation_prefix_text}</h2>
                     <Island module={AnimatedText} hydrateOn="idle" props={props} clientOnly />
                <h2>{animation_suffix_text}</h2>
                <div className="image_container">
                    <div className="inner_image_container">
                         <RenderImage imageField={image} />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </ResponsiveSpacingWrapper >
    </>

  );
};

export { fields } from './fields.jsx';

export const meta = {
  label: 'Animated Text With Image Module',
};

