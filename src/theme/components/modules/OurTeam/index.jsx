import { logInfo, RichText } from '@hubspot/cms-components';
import Styles from '../OurTeam/OurTeam.module.css';
import ResponsiveSpacingWrapper from '../../shared/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import HeadingComponent from '../../shared/HeadingComponent/HeadingComponent.jsx';
import RenderImage from '../../shared/ImageComponent/imageRenderer.jsx';

export function Component(props) {
  const {
    module_id,
    swap_image,
    groupStyle: {
      two_col_container_bg,
      two_col_bg,
      groupContent: { headingStyleVariant, headingStyleColor },
    },
    left_container: { image },
    right_container: { richTextContentHTML },
    groupContent: { headingAndTextHeadingLevel, headingAndTextHeading },
  } = props;
const moduleClass = props?.moduleName || 'customclass';
  logInfo(props, 'Our Team Props');

  return (

    <>

{swap_image && (
  <style>{`
    .${moduleClass} .${Styles.our_team_container} {
      flex-direction: row-reverse; 
    }

    @media (max-width: 991px) {
      .${moduleClass} .${Styles.our_team_container} {
        flex-direction: column-reverse;
      }
    }
  `}</style>
)}
      <ResponsiveSpacingWrapper
        moduleId={props?.module?.module_id}
        fields={props?.fieldValues}
        className={moduleClass}
      >
        <div className={Styles.our_team_sec}>
          {headingAndTextHeading && (
            <div className={Styles.heading_content}>
              <HeadingComponent
                headingLevel={headingAndTextHeadingLevel}
                headingStyleVariant={headingStyleVariant}
                heading={headingAndTextHeading}
                headingStyleColor={headingStyleColor}
              />
            </div>
          )}
          <div
            className={Styles.our_team_container}
           style={{ backgroundColor: two_col_container_bg }}>
            <div className={Styles.left_container}>
              <div className={Styles.left_container_inner} style={{ backgroundColor: two_col_bg }}>
               <div className={`${Styles.image_content} wow animate__animated animate__fadeIn`}>
                  <RenderImage imageField={image} />
                </div>
              </div>
            </div>
            <div className={Styles.right_container}>
              <div className={Styles.right_container_inner} style={{ backgroundColor: two_col_bg }}>
                <div className={Styles.text_content}>
                  {richTextContentHTML && (
                    <RichText fieldPath="right_container.richTextContentHTML" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ResponsiveSpacingWrapper>
    </>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Our Team Module',
};