import { logInfo, RichText } from '@hubspot/cms-components';
import ResponsiveSpacingWrapper from '../../shared/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import Styles from '../ServicesListModule/ServiceList.module.css';
import HeadingComponent from '../../shared/HeadingComponent/HeadingComponent.jsx';
export function Component(props) {
  const {
    service_list_group = [],
    headingAndTextHeadingLevel,
    addClass,
    headingAndTextHeading,
    groupStyle: { headingStyleColor, headingStyleVariant,heading_bg_color },
    show_border,
    custom_id
    
  } = props;

  logInfo(props, 'Service List Module');
  return (
    <>
      <ResponsiveSpacingWrapper
        moduleId={props?.module?.module_id}
        fields={props?.fieldValues}
         idName={custom_id}>
        <div className={Styles.service_list_section}>
          {headingAndTextHeading && (
            <div className={Styles.heading_container} style={{backgroundColor : heading_bg_color}}>
              <HeadingComponent
                headingLevel={headingAndTextHeadingLevel}
                headingStyleVariant={headingStyleVariant}
                heading={headingAndTextHeading}
                additonalClass={addClass}
                headingStyleColor={headingStyleColor}
              />
              <div className={Styles.shape_divider_container}>
                <svg class="nectar-shape-divider" aria-hidden="true" fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1003.92 91" preserveAspectRatio="none"> <polygon class="cls-1" points="502.46 46.31 1 85.67 1 91.89 1002.91 91.89 1002.91 85.78 502.46 46.31"></polygon><polygon class="cls-2" points="502.46 45.8 1 0 1 91.38 1002.91 91.38 1002.91 0.1 502.46 45.8"></polygon><rect class="cls-3" y="45.81" width="1003.92" height="46.09"></rect>
                </svg>
              </div>

            </div>
          )}
          <div className="page-center">
            <div className={Styles.inner_service_list_section}>
              <div className={Styles.service_list_container} style={show_border ? { borderBottom: '1px solid #000' } : {}}>
                {service_list_group.map((item, index) => (
                  <div className={Styles.two_col_list}>
                    <RichText fieldPath={`service_list_group[${index}].description`} />
                  </div>
                ))}
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
  label: 'Services List Module',
};
