import { logInfo, RichText } from '@hubspot/cms-components';
import Styles from '../StickySidebar/StickySidebar.module.css';
import ResponsiveSpacingWrapper from '../../shared/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelopeOpenText } from 'react-icons/fa6';
import { LiaFacebookF } from 'react-icons/lia';
import { FaLinkedin } from "react-icons/fa";

import { ImLocation } from 'react-icons/im';
import { Button } from '../../shared/ButtonComponent/ButtonComponent.jsx';
import HeadingComponent from '../../shared/HeadingComponent/HeadingComponent.jsx';
import {
  getLinkFieldHref,
  getLinkFieldRel,
  getLinkFieldTarget,
} from '../../utils/content-fields.jsx';

export function Component(props) {
  const {
    module_id,
    left_container: {
      headingAndTextHeadingLevel,
      headingAndTextHeading,
      richTextContentHTML,
    },
    right_container: {
      groupButton: {
        showButton,
        buttonContentText: text,
        buttonContentLink: link,
        buttonContentShowIcon: showIcon,
        buttonContentIconPosition: iconPosition,
      },
      icon_text_group: {
        compnay_text,
        phone_number_group: { phone_number, phone_number_link },
        email_group: { email_text, email_link },
        address_group = [],
        social_group: { social_text, social_link },
        linkedIn_social_group: { linkedin, linkedin_link },
      },
    },
    groupStyle: {
      groupButton: { buttonStyleSize, buttonStyleVariant },
      headingStyleVariant,
      headingStyleColor,
    },
  } = props;

  const buttonHref = getLinkFieldHref(link);
  const buttonRel = getLinkFieldRel(link);
  const buttonTarget = getLinkFieldTarget(link);

  // logInfo(props, 'Two Col Content With Sticky Sidebar Props');
  return (
    <>
      <ResponsiveSpacingWrapper
        moduleId={props?.module?.module_id}
        fields={props?.fieldValues}
      >
        <div className={Styles.two_col_sidebar_sec}>
          <div className="page-center">
            <div className={Styles.two_col_main_container}>
              <div className={Styles.left_container}>
                <div className={Styles.left_container_inner}>
                  <div className={Styles.heading_text}>
                    {headingAndTextHeading && (
                      <HeadingComponent
                        headingLevel={headingAndTextHeadingLevel}
                        headingStyleVariant={headingStyleVariant}
                        heading={headingAndTextHeading}
                        headingStyleColor={headingStyleColor}
                        additonalClass='font-300'
                      />
                    )}
                  </div>
                  <div className={Styles.text_content}>
                    {richTextContentHTML && (
                      <RichText fieldPath="left_container.richTextContentHTML" />
                    )}
                  </div>
                </div>
              </div>
              <div className={Styles.right_container}>
                <div className={Styles.right_container_inner}>
                  <div className={Styles.button_content}>
                    {showButton && (
                      <div
                        className={`${Styles.button_wrapper} wow animate__animated animate__zoomIn`}
                      >
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
                      </div>
                    )}
                  </div>
                  <div className={Styles.icon_text_container}>
                    <div className={Styles.company_text_container}>
                      <p>{compnay_text}</p>
                    </div>
                    {/* Phone Number */}
                    <div
                      className={`${Styles.phone_group} ${Styles.icon_text_card}`}
                    >
                      <div className={Styles.icon}>
                        <FaPhoneAlt />
                      </div>
                      <div className={Styles.text}>
                        <a href={phone_number_link.href_with_scheme || '#'}>
                          {phone_number}
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div
                      className={`${Styles.address_group} ${Styles.icon_text_card}`}
                    >
                      {address_group.map((address_content, index) => (
                        <div className={Styles.address_group_inner} key={index}>
                          <div className={Styles.icon}>
                            <ImLocation />
                          </div>
                          <div className={Styles.text}>
                            <p>{address_content.campus_name}</p>
                            <a
                              href={
                                address_content.address_link?.url
                                  ?.href || '#'
                              }
                              target={
                                address_content.address_link.open_in_new_tab
                                  ? '_blank'
                                  : '_self'
                              }
                              rel={
                                [
                                  address_content.address_link.no_follow
                                    ? 'nofollow'
                                    : '',
                                  address_content.address_link.sponsored
                                    ? 'sponsored'
                                    : '',
                                  address_content.address_link
                                    .user_generated_content
                                    ? 'ugc'
                                    : '',
                                  address_content.address_link.rel || '',
                                ]
                                  .filter(Boolean)
                                  .join(' ') || undefined
                              }
                            >
                              {address_content.campus_address}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Email */}
                    <div
                      className={`${Styles.email_group} ${Styles.icon_text_card}`}
                    >
                      <div className={Styles.icon}>
                        <FaEnvelopeOpenText />
                      </div>
                      <div className={Styles.text}>
                        <a
                          href={email_link?.url?.href || '#'}
                          target={
                            email_link.open_in_new_tab ? '_blank' : '_self'
                          }
                          rel={
                            [
                              email_link.no_follow ? 'nofollow' : '',
                              email_link.sponsored ? 'sponsored' : '',
                              email_link.user_generated_content ? 'ugc' : '',
                              email_link.rel || '',
                            ]
                              .filter(Boolean)
                              .join(' ') || undefined
                          }
                        >
                          {email_text}
                        </a>
                      </div>
                    </div>

                    <div className={Styles.social_media_container}>
                      {/* Social facebook icon*/}
                      <div
                        className={`${Styles.social_group} ${Styles.icon_text_card}`}
                      >
                        <a
                          href={social_link?.url?.href || '#'}
                          target={
                            social_link.open_in_new_tab ? '_blank' : '_self'
                          }
                          rel={
                            [
                              social_link.no_follow ? 'nofollow' : '',
                              social_link.sponsored ? 'sponsored' : '',
                              social_link.user_generated_content ? 'ugc' : '',
                              social_link.rel || '',
                            ]
                              .filter(Boolean)
                              .join(' ') || undefined
                          }
                        >
                          <div className={Styles.icon}>
                            <LiaFacebookF />
                          </div>
                          <div className={Styles.text}>

                            {/* {social_text} */}

                          </div>
                        </a>
                      </div>

                      {/* Social facebook LinkedIn*/}
                      <div
                        className={`${Styles.social_group} ${Styles.icon_text_card}`}
                      >
                        <a
                          href={linkedin_link?.url?.href || '#'}
                          target={
                            linkedin_link.open_in_new_tab ? '_blank' : '_self'
                          }
                          rel={
                            [
                              linkedin_link.no_follow ? 'nofollow' : '',
                              linkedin_link.sponsored ? 'sponsored' : '',
                              linkedin_link.user_generated_content
                                ? 'ugc'
                                : '',
                              linkedin_link.rel || '',
                            ]
                              .filter(Boolean)
                              .join(' ') || undefined
                          }
                        >
                          <div className={Styles.icon}>
                            <FaLinkedin />
                          </div>

                          <div className={Styles.text}>

                            {/* {linkedin} */}

                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ResponsiveSpacingWrapper >
    </>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Two Col Content With Sticky Sidebar',
};
