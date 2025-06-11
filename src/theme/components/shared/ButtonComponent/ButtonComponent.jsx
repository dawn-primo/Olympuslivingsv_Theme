import { styled } from 'styled-components';
import { Icon, logInfo } from '@hubspot/cms-components';

// Styled components
const StyledButton = styled.a``;

const StyledIcon = styled(Icon)``;

// Helper functions
const getButtonClassName = (buttonStyle) => {
  const buttonClassMap = {
    primary: 'button--primary',
    secondary: 'button--secondary',
    tertiary: 'button--tertiary',
    accent: 'button--simple',
  };
  return buttonClassMap[buttonStyle];
};

const getButtonSizeClassName = (buttonSize) => {
  const buttonSizeMap = {
    small: 'button--small',
    medium: 'button--medium',
    large: 'button--large',
  };
  return buttonSizeMap[buttonSize];
};

// Main component
export const Button = (props) => {
  //logInfo("propsButtons",props);

  const {
    ariaLabel,
    additionalClassArray,
    rel,
    href,
    target,
    buttonStyle,
    buttonSize,
    children,
    showIcon,
    iconFieldPath,
    iconPosition,
    iconStyle,
  } = props;
  // logInfo(iconFieldPath)
  const buttonClassName = getButtonClassName(buttonStyle);
  const buttonSizeName = getButtonSizeClassName(buttonSize);
  const additionalClasses = additionalClassArray ? additionalClassArray.join(' ') : '';
  const renderIcon = () => {
    if (!showIcon) {
      // console.log('Icon not shown: showIcon is false');
      return null;
    }

    if (!iconFieldPath) {
      // console.warn('No iconFieldPath provided');
      return null;
    }

    if (iconStyle === 'icon2') {
      return (
        <span className="custom-icon" aria-hidden="true">
          {/* Replace with your SVG */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2369 12.7447L13.8104 12.7447L13.8104 0.537772L1.60346 0.537773L1.60346 3.11129L9.41684 3.11129L0.693448 11.8347L2.51348 13.6547L11.2369 4.93132L11.2369 12.7447Z" fill="black" />
          </svg>
        </span>
      );
    }
    // console.log('Rendering HubSpot Icon with fieldPath:', iconFieldPath);
    // Default to icon1
    return <StyledIcon purpose="DECORATIVE" fieldPath={iconFieldPath} $iconPosition={iconPosition} />;
  };
  return (
    <StyledButton
      $buttonSize={buttonSize}
      className={`button ${buttonClassName} ${additionalClasses} ${buttonSizeName} ${showIcon ? 'button__icon' : ''
        } button--icon-${iconPosition}`}
      target={target}
      href={href}
      rel={rel}
      aria-label={ariaLabel}
    >
      {/* {iconFieldPath && showIcon && (
        <StyledIcon purpose="DECORATIVE" fieldPath={iconFieldPath} $iconPosition={iconPosition} />
      )} */}
      {renderIcon()}
      {children || 'Default Button'}
    </StyledButton>
  );
};