import {
  FieldGroup,
  ModuleFields,
  ImageField
} from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../shared/SpacingStyleComponent/CommonStylesSpacingFields.jsx';


import HeadingStyles from '../../shared/HeadingComponent/HeadingStyle.jsx';
import HeadingContent from '../../shared/HeadingComponent/HeadingContent.jsx';


export const fields = (
  <ModuleFields>

    <HeadingContent />
     <ImageField
            label="Image"
            name="image"
            resizable={true}
            responsive={true}
            showLoading={true}
          >
          </ImageField>
   
    <FieldGroup
      label='Styles'
      name='groupStyle'
      tab='STYLE'
    >
      <HeadingStyles headingStyleAsDefault='' />

      <CommonStylesSpacingFields />

    </FieldGroup>

  </ModuleFields>
);
