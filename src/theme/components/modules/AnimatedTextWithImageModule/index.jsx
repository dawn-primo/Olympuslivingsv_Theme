import React from 'react';
import styles from '../ActivitySection/activitySection.module.css';
import { logInfo } from '@hubspot/cms-components';
import ResponsiveSpacingWrapper from '../../shared/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import HeadingComponent from '../../shared/HeadingComponent/HeadingComponent';


export const Component = props => {
  // logInfo('Props passed to Activity Section:', props);
  const {
    module_id,
    headingAndTextHeadingLevel, headingAndTextHeading, richTextContentHTML,
    image
  } = props;


  return (
    <>
      <ResponsiveSpacingWrapper moduleId={props?.module?.module_id} fields={props?.fieldValues}>
        <div className={styles.animated_text_section}>
          <div className='page-center'>
            <div className={styles.inner_animated_text_section}>
                {headingAndTextHeading && (
                    <div className="heading_container">
                    <HeadingComponent headingLevel={headingAndTextHeadingLevel}
                        headingStyleColor={headingStyleColor}
                        heading={headingAndTextHeading} additonalClass='font-300' />
                    </div>
                )}
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
  label: 'Activity Section',
};

