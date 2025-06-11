import { Icon, Island, logInfo, RichText } from '@hubspot/cms-components';
import Styles from '../ThreeColCard/Threecolcard.module.css';
import ResponsiveSpacingWrapper from '../../shared/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import HeadingComponent from '../../shared/HeadingComponent/HeadingComponent.jsx';
import Threecolcard from '../../islands/ThreeColCard?island';


export function Component(props) {
  const {
    module_id,
    groupStyle: {
      groupContent: { headingStyleVariant, headingStyleColor },
      card_heading_text_color,
    },
    groupContent: { headingAndTextHeadingLevel, headingAndTextHeading },
    cardgroup = [],
    choosecolnumber
  } = props;

  logInfo(props, 'Three Col Card');
  return (
    <>
      <ResponsiveSpacingWrapper
        moduleId={props?.module?.module_id}
        fields={props?.fieldValues}
      >
        <div className={Styles.three_col_card_sec}>
          <div className="page-center">
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

            <Island
              module={Threecolcard}
              groupBlocks={cardgroup}
              choosecolnumber={choosecolnumber}
              clientOnly
              hydrateOn="idle"
              card_heading_text_color={card_heading_text_color}
            />
          </div>
          
        </div>
      </ResponsiveSpacingWrapper>
    </>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Three Col Card Section',
};
