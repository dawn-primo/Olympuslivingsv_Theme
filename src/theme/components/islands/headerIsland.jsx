import { Menu, logInfo } from '@hubspot/cms-components';
import { useState, useEffect, useRef } from 'react';
import './../modules/HeaderTop/header.css';
import { getLinkFieldHref, getLinkFieldRel, getLinkFieldTarget } from '../utils/content-fields';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { push as BurgerMenu } from 'react-burger-menu';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";



export function Component(props) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const menuRef = useRef(null);
  const logoRef = useRef(null);

  const {
    logoImage, logoLink, facebook_show, facebook_link, linkedin_show, linkedin_link
  } = props.props;

  // logInfo(props);



  useEffect(() => {
    const isMobile = window.innerWidth < 1199;
    if (!isMobile) return;

    const parentItems = document.querySelectorAll('.bm-item-list .hs-item-has-children');

    parentItems.forEach(item => {
      const anchor = item.querySelector('a');
      const submenu = item.querySelector('.hs-menu-children-wrapper');

      if (submenu && anchor) {
        anchor.onclick = (e) => {
          e.preventDefault();
          setActiveSubmenu(submenu.outerHTML); // trigger submenu sidebar
        };
      }
    });


  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="header">
        <div class="page-center">
          <div className="header__container">
            <div className="header__logo">
              <a
                href={logoLink?.url?.href_with_scheme || '#'}
                target={
                  logoLink.open_in_new_tab ? '_blank' : '_self'
                }
                rel={
                  [
                    logoLink.no_follow ? 'nofollow' : '',
                    logoLink.sponsored ? 'sponsored' : '',
                    logoLink.user_generated_content ? 'ugc' : '',
                    logoLink.rel || '',
                  ]
                    .filter(Boolean)
                    .join(' ') || undefined
                }
              >
                <img
                  src={logoImage?.src }
                  width={logoImage?.width}
                  height={logoImage?.height}
                  alt={logoImage?.alt}
                  loading={logoImage?.loading || 'eager'}
                />
              </a>
            </div>
            <div class="menu_icon_wrapper">
              <div className={`header__menu  ${isMobileMenuOpen ? 'show' : ''}`}>
                {/* <span class="mobile-trigger-new cta_border_button" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}><span></span><i></i></span> */}
                <div class="header-menu-wrapper d-flex flex-wrap">

                  <div class="header-menu-inner custom-menu-primary-new flyouts">
                    <Menu fieldPath="menu" />
                  </div>
                </div>

              </div>

              <div className="icon_container">
                {facebook_show &&

                  <div className='facebook_icon_wrapper'>
                    <div className="facebook_icon">
                      <a
                        href={facebook_link?.url?.href_with_scheme || '#'}
                        target={
                          facebook_link.open_in_new_tab ? '_blank' : '_self'
                        }
                        rel={
                          [
                            facebook_link.no_follow ? 'nofollow' : '',
                            facebook_link.sponsored ? 'sponsored' : '',
                            facebook_link.user_generated_content ? 'ugc' : '',
                            facebook_link.rel || '',
                          ]
                            .filter(Boolean)
                            .join(' ') || undefined
                        }
                      ><FaFacebookF />
                      </a>
                    </div>
                    <IconContext.Provider value={{ color: "#313f1f", className: "facebook" }}>
                      <div className="facebook_icon_hover"><a
                        href={facebook_link?.url?.href_with_scheme || '#'}
                        target={
                          facebook_link.open_in_new_tab ? '_blank' : '_self'
                        }
                        rel={
                          [
                            facebook_link.no_follow ? 'nofollow' : '',
                            facebook_link.sponsored ? 'sponsored' : '',
                            facebook_link.user_generated_content ? 'ugc' : '',
                            facebook_link.rel || '',
                          ]
                            .filter(Boolean)
                            .join(' ') || undefined
                        }
                      ><FaFacebookF />
                      </a></div>
                    </IconContext.Provider>
                  </div>
                }

                {linkedin_show &&
                  <div className='linkedin_icon_wrapper'>
                    <div className="linkedin_icon">
                      <a
                        href={linkedin_link?.url?.href_with_scheme || '#'}
                        target={
                          linkedin_link.open_in_new_tab ? '_blank' : '_self'
                        }
                        rel={
                          [
                            linkedin_link.no_follow ? 'nofollow' : '',
                            linkedin_link.sponsored ? 'sponsored' : '',
                            linkedin_link.user_generated_content ? 'ugc' : '',
                            linkedin_link.rel || '',
                          ]
                            .filter(Boolean)
                            .join(' ') || undefined
                        }
                      >
                        <FaLinkedinIn />
                      </a></div>
                    <IconContext.Provider value={{ color: "#313f1f", className: "linkedin" }}>
                      <div className="linkedin_icon_hover">
                        <a
                          href={linkedin_link?.url?.href_with_scheme || '#'}
                          target={
                            linkedin_link.open_in_new_tab ? '_blank' : '_self'
                          }
                          rel={
                            [
                              linkedin_link.no_follow ? 'nofollow' : '',
                              linkedin_link.sponsored ? 'sponsored' : '',
                              linkedin_link.user_generated_content ? 'ugc' : '',
                              linkedin_link.rel || '',
                            ]
                              .filter(Boolean)
                              .join(' ') || undefined
                          }
                        >
                          <FaLinkedinIn />
                        </a></div>
                    </IconContext.Provider>
                  </div>
                }
              </div>
            </div>

            <div className="mobile_menu">
              <BurgerMenu
                customBurgerIcon={<GiHamburgerMenu />}
                customCrossIcon={<RxCross2 />}
                right
                width={'310px'}
                pageWrapId={"main-content"}
                outerContainerId={"outer-container"}
              >
                <div className={`main-menu-view ${activeSubmenu ? 'hidden' : ''}`}>
                  <Menu fieldPath="menu" />

                </div>

                <div className={`submenu-view ${activeSubmenu ? 'active' : ''}`}>
                  <button className={`back-button ${activeSubmenu ? 'active' : ''}`} onClick={() => setActiveSubmenu(null)}>Back</button>
                  <div dangerouslySetInnerHTML={{ __html: activeSubmenu }} />
                </div>
                <div className="icon_container">
                  {facebook_show &&

                    <div className='facebook_icon_wrapper'>
                      <div className="facebook_icon">
                        <a
                          href={facebook_link?.url?.href_with_scheme || '#'}
                          target={
                            facebook_link.open_in_new_tab ? '_blank' : '_self'
                          }
                          rel={
                            [
                              facebook_link.no_follow ? 'nofollow' : '',
                              facebook_link.sponsored ? 'sponsored' : '',
                              facebook_link.user_generated_content ? 'ugc' : '',
                              facebook_link.rel || '',
                            ]
                              .filter(Boolean)
                              .join(' ') || undefined
                          }
                        ><FaFacebookF />
                        </a>
                      </div>
                      <IconContext.Provider value={{ color: "#313f1f", className: "facebook" }}>
                        <div className="facebook_icon_hover"><a
                          href={facebook_link?.url?.href_with_scheme || '#'}
                          target={
                            facebook_link.open_in_new_tab ? '_blank' : '_self'
                          }
                          rel={
                            [
                              facebook_link.no_follow ? 'nofollow' : '',
                              facebook_link.sponsored ? 'sponsored' : '',
                              facebook_link.user_generated_content ? 'ugc' : '',
                              facebook_link.rel || '',
                            ]
                              .filter(Boolean)
                              .join(' ') || undefined
                          }
                        ><FaFacebookF />
                        </a></div>
                      </IconContext.Provider>
                    </div>
                  }

                  {linkedin_show &&
                    <div className='linkedin_icon_wrapper'>
                      <div className="linkedin_icon">
                        <a
                          href={linkedin_link?.url?.href_with_scheme || '#'}
                          target={
                            linkedin_link.open_in_new_tab ? '_blank' : '_self'
                          }
                          rel={
                            [
                              linkedin_link.no_follow ? 'nofollow' : '',
                              linkedin_link.sponsored ? 'sponsored' : '',
                              linkedin_link.user_generated_content ? 'ugc' : '',
                              linkedin_link.rel || '',
                            ]
                              .filter(Boolean)
                              .join(' ') || undefined
                          }
                        >
                          <FaLinkedinIn />
                        </a></div>
                      <IconContext.Provider value={{ color: "#313f1f", className: "linkedin" }}>
                        <div className="linkedin_icon_hover">
                          <a
                            href={linkedin_link?.url?.href_with_scheme || '#'}
                            target={
                              linkedin_link.open_in_new_tab ? '_blank' : '_self'
                            }
                            rel={
                              [
                                linkedin_link.no_follow ? 'nofollow' : '',
                                linkedin_link.sponsored ? 'sponsored' : '',
                                linkedin_link.user_generated_content ? 'ugc' : '',
                                linkedin_link.rel || '',
                              ]
                                .filter(Boolean)
                                .join(' ') || undefined
                            }
                          >
                            <FaLinkedinIn />
                          </a></div>
                      </IconContext.Provider>
                    </div>
                  }
                </div>
              </BurgerMenu>
            </div>
          </div>
        </div >
      </header >




    </>
  );
}

export default Component;