import React from 'react';
import styles from '../FullWidthText/fullWidthText.module.css';
import { logInfo, RichText } from '@hubspot/cms-components';
import ResponsiveSpacingWrapper from '../../shared/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import { Button } from '../../shared/ButtonComponent/ButtonComponent.jsx';
import { getLinkFieldHref, getLinkFieldRel, getLinkFieldTarget } from '../../utils/content-fields.jsx';
import HeadingComponent from '../../shared/HeadingComponent/HeadingComponent';
import RenderImage from '../../shared/ImageComponent/imageRenderer.jsx'


export const Component = props => {
  // logInfo('Props passed to FullWidthText Section:', props);
  const {
    module_id,
    groupContent: { headingAndTextHeadingLevel, headingAndTextHeading, richTextContentHTML },
    groupButton: {
      showButton,
      buttonContentText: text,
      buttonContentLink: link,
      buttonContentShowIcon: showIcon,
      buttonContentIconPosition: iconPosition,
      buttonContentIconStyle,
      buttonStyleSize,
      buttonStyleVariant,
    },
    show_border,
    groupStyle: {
      groupContent: {
        headingStyleVariant, headingStyleColor
      },

    },
    content_width, max_width_unit, show_bottom_section,
    bottom_section: {
      logo_field,
      groupOneButton: {
        buttonContentText: button_one_text,
        buttonContentLink: button_one_link,
        buttonStyleSize: buttonOneStyleSize,
        buttonStyleVariant: buttonOneStyleVariant,
        buttonOneShowIcon: showIconone,                  // ✅ updated field name
        buttonOneIconPosition: iconPositionone,          // ✅ updated field name
        buttonOneIconStyle: IconStyleOne,                // ✅ updated field name
        buttonOneIcon: iconOne                           // ✅ add this if using <IconField>
      },
      groupTwoButton: {
        buttonContentText: button_two_text,
        buttonContentLink: button_two_link,
        buttonStyleSize: buttonTwoStyleSize,
        buttonStyleVariant: buttonTwoStyleVariant,
        buttonTwoShowIcon: showIcontwo,                  // ✅ updated field name
        buttonTwoIconPosition: iconPositiontwo,          // ✅ updated field name
        buttonTwoIconStyle: IconStyleTwo,                // ✅ updated field name
        buttonTwoIcon: iconTwo                           // ✅ add this if using <IconField>
      } }
  } = props;

  const moduleClass = props?.moduleName || 'customclass';

  const buttonHref = getLinkFieldHref(link);
  const buttonRel = getLinkFieldRel(link);
  const buttonTarget = getLinkFieldTarget(link);


  return (
    <>
      <ResponsiveSpacingWrapper moduleId={props?.module?.module_id} fields={props?.fieldValues} className={moduleClass}>
        <div className={styles.full_width_section}>
          <div className='page-center'>
            <div className={styles.border_bottom} style={show_border ? { borderBottom: '1px solid #000' } : {}}>
              {(headingAndTextHeading || richTextContentHTML || showButton) && (
                <div className={styles.inner_container} style={{ maxWidth: `${content_width}${max_width_unit}` }}>

                  {headingAndTextHeading && (
                    <div className={styles.section_title}>
                      <HeadingComponent headingLevel={headingAndTextHeadingLevel} headingStyleVariant={headingStyleVariant} headingStyleColor={headingStyleColor} heading={headingAndTextHeading} additonalClass='font-300' />

                    </div>
                  )}

                  {richTextContentHTML &&
                    <div className={styles.richtext_content}>
                      <RichText fieldPath='groupContent.richTextContentHTML' />
                    </div>
                  }
                  {showButton &&
                    <div className={`${styles.button_wrapper} wow animate__animated animate__slideInDown`}>
                      <Button
                        buttonSize={buttonStyleSize}
                        buttonStyle={buttonStyleVariant}
                        href={buttonHref}
                        rel={buttonRel}
                        target={buttonTarget}
                        showIcon={showIcon}
                        iconFieldPath='groupButton.buttonContentIcon'
                        iconPosition={iconPosition}
                      >{text}</Button>
                    </div>
                  }
                </div>
              )}
            </div>
            {show_bottom_section &&
              <div className={styles.bottom_section}>
                <div className={styles.bottom_inner_section}>
                  <div className={`${styles.button_block} ${styles.bottom_columns}`}>
                    <Button
                      buttonSize={buttonOneStyleSize}
                      buttonStyle={buttonOneStyleVariant}
                      href={getLinkFieldHref(button_one_link)}
                      rel={getLinkFieldRel(button_one_link)}
                      target={getLinkFieldTarget(button_one_link)}
                      showIcon={showIconone}
                      iconFieldPath='bottom_section.groupOneButton.buttonOneIcon' // ✅ Updated field path
                      iconPosition={iconPositionone}
                    >
                      {button_one_text}
                    </Button>
                  </div>
                  <div className={`${styles.logo_block} ${styles.bottom_columns}`}>
                    <div className={styles.logo_wrapper}>
                      <RenderImage imageField={logo_field} />
                    </div>
                  </div>
                  <div className={`${styles.button_block} ${styles.bottom_columns}`}>
                    <Button
                      buttonSize={buttonTwoStyleSize}
                      buttonStyle={buttonTwoStyleVariant}
                      href={getLinkFieldHref(button_two_link)}
                      rel={getLinkFieldRel(button_two_link)}
                      target={getLinkFieldTarget(button_two_link)}
                      showIcon={showIcontwo}
                      iconFieldPath='bottom_section.groupTwoButton.buttonTwoIcon' // ✅ Updated field path
                      iconPosition={iconPositiontwo}
                    >
                      {button_two_text}
                    </Button>
                  </div>
                </div>

              </div>
            }
          </div>
        </div>
      </ResponsiveSpacingWrapper >
    </>

  );
};

export { fields } from './fields.jsx';

export const meta = {
  label: 'Full Width Text With CTA',
};

