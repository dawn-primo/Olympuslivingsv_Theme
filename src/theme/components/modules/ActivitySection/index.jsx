import React from 'react';
import styles from '../ActivitySection/activitySection.module.css';
import { logInfo, RichText } from '@hubspot/cms-components';
import ResponsiveSpacingWrapper from '../../shared/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import { Button } from '../../shared/ButtonComponent/ButtonComponent.jsx';
import { getLinkFieldHref, getLinkFieldRel, getLinkFieldTarget } from '../../utils/content-fields.jsx';
import HeadingComponent from '../../shared/HeadingComponent/HeadingComponent';


export const Component = props => {
  // logInfo('Props passed to Activity Section:', props);
  const {
    module_id,
    headingAndTextHeadingLevel, headingAndTextHeading, richTextContentHTML,
    addButton = [],
    activity_section: { headingAndTextHeadingLevel: ActivityHeadingLevel,
      headingAndTextHeading: activityTextHeading,
      headingStyleColor: ActivtyheadingStyleColor,
      left_list, right_list,show_border },
    groupStyle: { headingStyleColor,

    }

  } = props;


  return (
    <>
      <ResponsiveSpacingWrapper moduleId={props?.module?.module_id} fields={props?.fieldValues}>
        <div className={styles.full_width_section}>
          <div className='page-center'>
            <div className={styles.border_bottom}>
              <div className={styles.section_title}>
                {headingAndTextHeading && (
                  <HeadingComponent headingLevel={headingAndTextHeadingLevel}
                    headingStyleColor={headingStyleColor}
                    heading={headingAndTextHeading} additonalClass='font-300' />
                )}
              </div>
              {addButton.length > 0 && (
                <div className={`${styles.button_container} wow animate__animated animate__slideInDown`}>
                  <div className={styles.button_inner_section}>
                    {addButton.map((item, index) => (
                      <div className={styles.bottom_columns}>
                        <Button
                          key={index}
                          buttonStyle={item.buttonStyleVariant}
                          buttonSize={item.buttonStyleSize}
                          href={getLinkFieldHref(item.buttonContentLink)}
                          rel={getLinkFieldRel(item.buttonContentLink)}
                          target={getLinkFieldTarget(item.buttonContentLink)}
                          iconStyle={item.buttonContentIconStyle}
                          showIcon={item.buttonContentShowIcon}
                          iconFieldPath={`addButton[${index}].buttonContentIcon`}
                          iconPosition={item.buttonContentIconPosition}
                        ><span>{item.buttonContentText}</span></Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {richTextContentHTML && (
                <div className={styles.richtext_block}>
                  <RichText fieldPath='richTextContentHTML'></RichText>
                </div>
              )}

            </div>
            <div style={show_border ? { borderBottom: '1px solid #000' } : {}}>
              <div className={styles.activity_list_section}>
                <div className={styles.section_title}>
                  <HeadingComponent headingLevel={ActivityHeadingLevel}
                    headingStyleColor={ActivtyheadingStyleColor}
                    heading={activityTextHeading}
                    additonalClass='font-300 font-open-sans' />
                </div>
                <div className={styles.flex_container}>
                  <div className={styles.list_group}>
                    <RichText fieldPath='activity_section.left_list'></RichText>
                  </div>
                  <div className={styles.list_group}>
                    <RichText fieldPath='activity_section.right_list'></RichText>
                  </div>
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

