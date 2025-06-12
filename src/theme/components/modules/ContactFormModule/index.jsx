import { Form, logInfo, RichText } from '@hubspot/cms-components';
import Styles from '../ContactFormModule/Contact.module.css';
import ResponsiveSpacingWrapper from '../../shared/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import HeadingComponent from '../../shared/HeadingComponent/HeadingComponent';
import { IoCall } from "react-icons/io5";
import { FaHome } from "react-icons/fa";


export function Component(props) {
  const { heading,
    contact_group: { phonenumber,headingAndTextHeadingLevel: headingTitleLevel, headingAndTextHeading:headingText,headingStyleVariant: headingStyleVariant1 },
    address_group: { address, map_iframe,headingAndTextHeadingLevel: headingTitleLevel2, headingAndTextHeading:headingText2, headingStyleVariant:headingStyleVariant2 },
    contact_form,
    heading:{headingAndTextHeadingLevel, headingAndTextHeading},
    groupStyle:{headingStyleVariant}
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
            <div className={Styles.inner_two_col}>
              <div className={Styles.heading}>
                {headingAndTextHeading && (
                  <HeadingComponent headingLevel={headingAndTextHeadingLevel} headingStyleVariant={headingStyleVariant} heading={headingAndTextHeading} additonalClass='font-300'/>
                )}
              </div>
              <div className={Styles.left_right_side_container}>
                <div className={Styles.left_side_container}>
                  <div className={Styles.inner_left_side}>
                    <div className="contact_info">
                      <div className={Styles.mobile_content_wrapper}>
                        <div className={Styles.contact_icon_container}>
                          <IoCall />
                        </div>
                        <div className={Styles.contact_title_container}>
                          <div className={Styles.title}>
                              {headingText && (
                  <HeadingComponent headingLevel={headingTitleLevel} headingStyleVariant={headingStyleVariant1} heading={headingText} additonalClass='font-300'/>
                )}
                          </div>
                          <div className="mobile_number" dangerouslySetInnerHTML={{ __html: phonenumber }}></div>
                        </div>
                      </div>
                      <div className={Styles.address_content_wrapper}>
                        <div className={Styles.contact_icon_container}>
                          <FaHome />
                        </div>
                        <div className={Styles.contact_title_container}>
                          <div className={Styles.title}>
                               {headingText2 && (
                  <HeadingComponent headingLevel={headingTitleLevel2} headingStyleVariant={headingStyleVariant2} heading={headingText2} additonalClass='font-300'/>
                )}
                          </div>
                          <div className="address" dangerouslySetInnerHTML={{ __html: address }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="map_wrapper" dangerouslySetInnerHTML={{ __html: map_iframe }}>

                    </div>

                  </div>
                </div>
                <div className={Styles.right_side_container}>
                  <div className={Styles.inner_right_side}>
                    <div className="form_container">
                      <Form fieldPath='contact_form'></Form>
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
