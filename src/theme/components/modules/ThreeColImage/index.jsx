import { logInfo, Island } from '@hubspot/cms-components';
import ResponsiveSpacingWrapper from '../../shared/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import ThreeColImage from '../../islands/ThreeColImage?island';
import HeadingComponent from '../../shared/HeadingComponent/HeadingComponent.jsx';
import Styles from '../ThreeColImage/ThreeColImage.module.css';
import { Button } from '../../shared/ButtonComponent/ButtonComponent.jsx';
import {
  getLinkFieldHref,
  getLinkFieldRel,
  getLinkFieldTarget,
} from '../../utils/content-fields.jsx';

export function Component(props) {
  const {
    groupBlocks = [],
    module_id,
    choosecolnumber,
    show_border,
    groupButton: {
      showButton,
      buttonContentText: text,
      buttonContentLink: link,
      buttonContentShowIcon: showIcon,
      buttonContentIconPosition: iconPosition,
    },
    groupStyle: {
      headingStyleVariant,
      headingStyleColor,
      groupButton: { buttonStyleSize, buttonStyleVariant },
    },
    headingAndTextHeadingLevel,
    headingAndTextHeading,
  } = props;

  // logInfo(props, 'Three Col Image');

  const buttonHref = getLinkFieldHref(link);
  const buttonRel = getLinkFieldRel(link);
  const buttonTarget = getLinkFieldTarget(link);

  return (
    <>
      <ResponsiveSpacingWrapper
        moduleId={props?.module?.module_id}
        fields={props?.fieldValues}
      >
        <div className={Styles.three_col_image_section}>
          <div className="page-center">
            <div className={Styles.heading_content}>
              <HeadingComponent
                headingLevel={headingAndTextHeadingLevel}
                headingStyleVariant={headingStyleVariant}
                heading={headingAndTextHeading}
                headingStyleColor={headingStyleColor}
              />
            </div>
            <div style={show_border ? { borderBottom: '1px solid #000' } : {}}>
              <Island
                module={ThreeColImage}
                groupBlocks={groupBlocks}
                clientOnly
                hydrateOn="idle"
                headingStyleVariant={headingStyleVariant}
                headingStyleColor={headingStyleColor}
                headingAndTextHeadingLevel={headingAndTextHeadingLevel}
                headingAndTextHeading={headingAndTextHeading}
                choosecolnumber={choosecolnumber}
              />
            </div>
            <div className={Styles.button_content}>
              {showButton && (
                <Button
                  buttonSize={buttonStyleSize}
                  buttonStyle={buttonStyleVariant}
                  href={buttonHref}
                  rel={buttonRel}
                  target={buttonTarget}
                  showIcon={showIcon}
                  iconFieldPath="groupButton.buttonContentIcon"
                  iconPosition={iconPosition}
                >
                  {text}
                </Button>
              )}
            </div>
          </div>
        </div>
      </ResponsiveSpacingWrapper>
    </>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Three Col Image',
};
