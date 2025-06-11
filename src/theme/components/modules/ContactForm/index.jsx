import { Form, logInfo, Icon } from '@hubspot/cms-components';
import Styles from '../ContactForm/contactForm.module.css';
import ResponsiveSpacingWrapper from '../../shared/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import HeadingComponent from '../../shared/HeadingComponent/HeadingComponent.jsx';
import { IoCall } from "react-icons/io5";
import styled from 'styled-components';

export function Component(props) {
  const {
    module_id,
    headingAndTextHeadingLevel, headingAndTextHeading,
    contact_group: {
      phonenumber,
      headingAndTextHeadingLevel: headingTitleLevel,
      headingAndTextHeading: headingText,
      headingStyleVariant: headingStyleVariantOne,
      headingStyleColor: headingStyleColorOne
    },
    left_content_group = [],
    contact_form,
    groupStyle: { headingStyleVariant, headingStyleColor }
  } = props;



  logInfo(props, 'Contact');


  return (
    <>
      <ResponsiveSpacingWrapper
        moduleId={props?.module?.module_id}
        fields={props?.fieldValues}
      >
        <div className={Styles.two_col_sec}>
          <div className="page-center">
            {headingAndTextHeading && (
              <div className={Styles.section_title}>
                <HeadingComponent headingLevel={headingAndTextHeadingLevel}
                  headingStyleColor={headingStyleColor}
                   headingStyleVariant={headingStyleVariant}
                  heading={headingAndTextHeading} additonalClass='font-300' />
              </div>
            )}
            <div className={Styles.inner_two_col}>
              <div className={Styles.left_right_side_container}>
                <div className={Styles.left_side_container}>
                  <div className={Styles.inner_left_side}>
                    <div className={Styles.mobile_content_wrapper}>
                      <div className={Styles.contact_icon_container}>
                        <IoCall />
                      </div>
                      <div className={Styles.contact_title_container}>
                        <div className={Styles.title}>
                          {headingText && (
                            <HeadingComponent
                              headingLevel={headingTitleLevel}
                              headingStyleVariant={headingStyleVariantOne}
                              heading={headingText}
                              headingStyleColor={headingStyleColorOne}
                              additonalClass="font-300"
                            />
                          )}
                        </div>
                        <div
                          className="mobile_number"
                          dangerouslySetInnerHTML={{ __html: phonenumber }}
                        ></div>
                      </div>
                    </div>

                    {left_content_group.map((item, index) => (
                      <div className={Styles.contact_info} key={index}>
                        <div className={Styles.address_content_wrapper}>
                          <div className={Styles.contact_icon_container}>
                            <Icon
                              purpose="DECORATIVE"
                              fieldPath={`left_content_group[${index}].icon_image`}
                            ></Icon>
                          </div>
                          <div className={Styles.contact_title_container}>
                            <div
                              className="address"
                              dangerouslySetInnerHTML={{ __html: item.content }}
                            ></div>
                          </div>
                        </div>

                        <div
                          className="map_wrapper"
                          dangerouslySetInnerHTML={{ __html: item.map_iframe }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={Styles.right_side_container}>
                  <div className={Styles.inner_right_side}>
                    <div className="form_container">
                      <Form fieldPath="contact_form"></Form>
                    </div>
                  </div>
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
  label: 'Contact Form Module',
};
