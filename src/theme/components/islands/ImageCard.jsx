import React, { useEffect } from 'react';
import Styles from '../modules/BgImageCard/ImageCard.module.css';
import $ from 'jquery';
import 'jquery-match-height';
import HeadingComponent from '../shared/HeadingComponent/HeadingComponent';
import RenderImage from '../shared/ImageComponent/imageRenderer.jsx';
window.$ = window.jQuery = $;

export default function ImageCard({ groupBlocks }) {
  useEffect(() => {
    const checkAndApply = () => {
      console.log('window.$:', !!window.$);
      console.log('$.fn.matchHeight:', !!(window.$ && window.$.fn.matchHeight));

      if (window.$ && window.$.fn.matchHeight) {
        console.log('Applying matchHeight...');
        window.$(`.${Styles.image_block}`).matchHeight();
        window.$(`.${Styles.text_block}`).matchHeight();
      } else {
        console.log('jQuery or matchHeight not ready, retrying...');
        setTimeout(checkAndApply, 500);
      }
    };

    const timer = setTimeout(checkAndApply, 1000);
    return () => clearTimeout(timer);
  }, [groupBlocks]);

  return (
    <>
      <div className={Styles.three_col_card_section}>
        <div className={Styles.three_col_card_container}>
          {groupBlocks.map((item, index) => (
            <div className={`${Styles.image_text_card} wow animate__animated animate__fadeInUpBig`} key={index}>
              <div className={Styles.image_text_card_inner}>
                <div className={Styles.image_block}>
                  <div className={Styles.image_block_inner}>
                    <RenderImage imageField={item.image} />
                  </div>
                  <div className={Styles.image_heading}>
                    <HeadingComponent
                      headingLevel={item.headingAndTextHeadingLevel}
                      headingStyleVariant={item.headingStyleVariant}
                      heading={item.headingAndTextHeading}
                      headingStyleColor={item.headingStyleColor}
                    />
                  </div>
                </div>
                <div className={Styles.text_block}>
                  <div className={Styles.text_block_inner} dangerouslySetInnerHTML={{ __html: item.richTextContentHTML }}>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
