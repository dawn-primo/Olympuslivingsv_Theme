import { logInfo } from '@hubspot/cms-components';
import ResponsiveSpacingWrapper from '../../shared/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import Styles from '../FullWidthImage/fullwidthimage.module.css';
import RenderImage from '../../shared/ImageComponent/imageRenderer.jsx';
import HeadingComponent from '../../shared/HeadingComponent/HeadingComponent';
export function Component(props) {
  const {
    headingAndTextHeadingLevel,
    addClass,
    headingAndTextHeading,
    add_overlay,
    groupStyle: { headingStyleColor, headingStyleVariant },
    image,

  } = props;

  //   logInfo(props, 'Text With Bg Img Section');
  return (
    <>
      <ResponsiveSpacingWrapper
        moduleId={props?.module?.module_id}
        fields={props?.fieldValues}
      >
        <div className={Styles.text_with_bg_img}>
          <div className={`${Styles.main_container} ${add_overlay ? Styles.overlay_color : ''}`}>
            <RenderImage imageField={image} />
          </div>
          {headingAndTextHeading && (
            <div className={`${Styles.overlay_text}`} >
              <div className={`${Styles.heading}`} >
                <HeadingComponent
                  headingLevel={headingAndTextHeadingLevel}
                  headingStyleVariant={headingStyleVariant}
                  heading={headingAndTextHeading}
                  additonalClass='font-300'
                  headingStyleColor={headingStyleColor}
                />
              </div>
            </div>
          )}
        </div>
      </ResponsiveSpacingWrapper>
    </>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Full Width Image',
};
