import React, { useEffect } from 'react';
import Styles from '../modules/ThreeColImage/ThreeColImage.module.css';
import $ from 'jquery';
import 'jquery-match-height';
import RenderImage from '../shared/ImageComponent/imageRenderer';
import ModalImage from 'react-modal-image';

export default function ThreeColImage({ groupBlocks, choosecolnumber }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (window.$ && $.fn.matchHeight) {
        $(`.${Styles.image_block}`).matchHeight();
        console.log('Match-height applied');
      } else {
        console.log('Match-height not applied');
      }
    }, 300); // Delay to allow DOM rendering

    return () => clearTimeout(timeout);
  }, [groupBlocks]);

  return (
    <>  
      <div className={`${Styles.three_col_card_container} ${Styles[choosecolnumber]}`}>
        {groupBlocks.map((item, index) => (
          <div className={Styles.three_col_image} key={index}>
            <div className={Styles.three_col_image_inner}>
              <div className={Styles.image_block}>
                {/* <RenderImage imageField={item.image} /> */}

                <ModalImage
                    small={item.image.src}
                    large={`${item.image.src}?width=300`}
                    alt={item.image.alt || 'Popup image'}
                    hideDownload
                    hideZoom
                    className="custom-thumbnail"
                  />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
