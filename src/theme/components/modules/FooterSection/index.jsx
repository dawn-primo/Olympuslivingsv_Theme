import React from 'react';
import styles from './FooterModule.module.css';
import { logInfo, RichText } from '@hubspot/cms-components';
import { FaHome, FaSearch } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import RenderImage from '../../shared/ImageComponent/imageRenderer.jsx';

export function Component(props) {
  const {
    address_text,
    number_link,
    phone_number,
    site_map,
    site_map_text,
    datetime,
    privacy_text,
    footer_logo,
    logo_link,
    copyright_text,
  } = props;

  // logInfo('Footer Section Props', props);

  return (
    <footer className={`${styles.footer} footer__site_page`}>
      <div className={styles.footer_top}>
        <div className="page-center">
          <div className={styles.flex_container}>
            {/* For Address */}
            <div className={styles.footer_column}>
              <div className={styles.inner_flex_container}>
                <div className={styles.icon_block}>
                  <FaHome />
                </div>
                <div className={styles.content_block}>
                  <RichText fieldPath="address_text"></RichText>
                </div>
              </div>
            </div>
            {/* for phone and other */}
            <div className={styles.footer_column}>
              <div className={styles.inner_flex_container}>
                <div className={styles.icon_block}>
                  <IoIosCall />
                </div>
                <div className={styles.content_block}>
                  <a
                    href={number_link?.url?.href_with_scheme || '#'}
                    target={number_link?.open_in_new_tab ? '_blank' : '_self'}
                    rel={
                      [
                        number_link?.no_follow ? 'nofollow' : '',
                        number_link?.sponsored ? 'sponsored' : '',
                        number_link?.user_generated_content ? 'ugc' : '',
                        number_link?.rel || '',
                      ]
                        .filter(Boolean)
                        .join(' ') || undefined
                    }
                  >
                    {phone_number}
                  </a>
                </div>
              </div>
              <div
                className={`${styles.inner_flex_container} ${styles.datetime_container}`}
              >
                <div className={styles.icon_block}></div>
                <div className={styles.content_block}>
                  <p>{datetime}</p>
                </div>
              </div>
            </div>
            {/* Privacy text and logo  */}
            <div className={styles.footer_column}>
              <div className={styles.inner_flex_container}>
                <div className={styles.footer_inner_column}>
                  <div className={styles.content_side}>
                    <div className={styles.privay_content}>
                      <RichText fieldPath="privacy_text"></RichText>
                    </div>
                  </div>
                  <div className={styles.footer_logo_side}>
                    <div className={styles.logo_block}>
                       <a
                    href={logo_link?.url?.href_with_scheme || '#'}
                    target={logo_link?.open_in_new_tab ? '_blank' : '_self'}
                    rel={
                      [
                        logo_link?.no_follow ? 'nofollow' : '',
                        logo_link?.sponsored ? 'sponsored' : '',
                        logo_link?.user_generated_content ? 'ugc' : '',
                        logo_link?.rel || '',
                      ]
                        .filter(Boolean)
                        .join(' ') || undefined
                    }
                  >
                          <RenderImage imageField={footer_logo} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className="page-center">
          <div className={styles.copyright_content}>
            <RichText fieldPath="copyright_text" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Footer Module',
};
