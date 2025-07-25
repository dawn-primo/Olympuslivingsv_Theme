import React, { useEffect } from 'react';
import Styles from '../modules/ThreeColCard/Threecolcard.module.css';
import RenderImage from '../shared/ImageComponent/imageRenderer.jsx';
import { styled } from 'styled-components';
import { Icon } from '@hubspot/cms-components';
import ModalImage from 'react-modal-image';

export default function Threecolcard({
  groupBlocks,
  card_heading_text_color,
  choosecolnumber
}) {
  const StyledIcon = styled(Icon)``;


  return (
    <>
      <div
        className={`${Styles.three_col_container} ${Styles[choosecolnumber]}`}
      >
         {groupBlocks.map((card, cardIndex) => (
          <div className={Styles.three_col_card} key={cardIndex}>
            <div className={Styles.three_col_card_inner}>
              <div className={Styles.card_heading}>
                <h3 style={{ color: card_heading_text_color }}>
                  {card.card_heading}
                </h3>
              </div>
              <div className={Styles.card_image}>
                {card?.card_image?.src && (
                  <ModalImage
                    small={card.card_image.src}
                    large={`${card.card_image.src}?width=300`}
                    alt={card.card_image.alt || 'Popup image'}
                    hideDownload
                    hideZoom
                    className="custom-thumbnail"
                  />
                )}
              </div>
              <div className={Styles.card_text_container}>
                {card.icon_text_group.map((icontext, iconIndex) => (
                  <div className={Styles.icon_text_content} key={iconIndex}>
                    <div className={Styles.icon_content}>
                      <StyledIcon
                        purpose="DECORATIVE"
                        fieldPath={`cardgroup[${cardIndex}].icon_text_group[${iconIndex}].icon_image`}
                      />
                    </div>
                    <div className={Styles.text_content}>
                      <p>
                        <strong>{icontext.text_content}</strong>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
