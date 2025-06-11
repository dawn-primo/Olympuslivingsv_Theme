import {
  BooleanField,
  FieldGroup,
  ModuleFields,
  RepeatedFieldGroup,
  RichTextField,
} from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../shared/SpacingStyleComponent/CommonStylesSpacingFields.jsx';
import ButtonStyle from '../../shared/ButtonComponent/ButtonStyle.jsx';
import ButtonContent from '../../shared/ButtonComponent/ButtonContent.jsx'
import RichTextContent from '../../shared/RichTextContent/index.jsx';

import HeadingStyles from '../../shared/HeadingComponent/HeadingStyle.jsx';
import HeadingContent from '../../shared/HeadingComponent/HeadingContent.jsx';


export const fields = (
  <ModuleFields>

    <HeadingContent />


    <RepeatedFieldGroup name='addButton'
      label='Add buttons'
    >
      <ButtonContent
        textDefault=''
      />
      <ButtonStyle
        buttonStyleDefault='primary'
        buttonSizeDefault='medium'
      />

    </RepeatedFieldGroup>
    <RichTextContent
      label='Description'
      richTextDefault='<p>Lorem ipsum dolor...</p>'
      featureSet='text'
    />

    <FieldGroup name='activity_section'
      label='Activity Section'>

      <HeadingContent headingTextLabel="Bottom Section Title" />

      <HeadingStyles headingStyleColor="Activity Section Title Color" />
      <RichTextField label='Left Side List' name='left_list'>

      </RichTextField>
      <RichTextField label='Right Side List' name='right_list'>

      </RichTextField>

      <BooleanField label='Show Bottom Border'
      name='show_border'
      display='checkbox'
      default={false}>

    </BooleanField>

    </FieldGroup>

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
