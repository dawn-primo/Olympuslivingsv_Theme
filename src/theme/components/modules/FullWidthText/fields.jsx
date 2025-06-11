import {
  BooleanField,
  ChoiceField,
  FieldGroup,
  ImageField,
  ModuleFields,
  NumberField,
  TextField,
} from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../shared/SpacingStyleComponent/CommonStylesSpacingFields';
import ButtonStyle from '../../shared/ButtonComponent/ButtonStyle.jsx';
import ButtonContent from '../../shared/ButtonComponent/ButtonContent.jsx'
import RichTextContent from '../../shared/RichTextContent/index.jsx';

import HeadingStyles from '../../shared/HeadingComponent/HeadingStyle.jsx';
import HeadingContent from '../../shared/HeadingComponent/HeadingContent.jsx';

const buttonFieldVisibility = {
  boolean_operator: 'OR',
  criteria: [{
    controlling_field_path: 'groupButton.showButton',
    controlling_value_regex: 'true',
    operator: 'EQUAL',
  }]
}
const BottomSectionFieldVisibility = {
  boolean_operator: 'OR',
  criteria: [{
    controlling_field_path: 'show_bottom_section',
    controlling_value_regex: 'true',
    operator: 'EQUAL',
  }]
}
export const fields = (
  <ModuleFields>
    <FieldGroup name='groupContent' label='Section Content' display='inline'>
      <HeadingContent />
      <RichTextContent
        label='Description'
        richTextDefault='<p>Write a description highlighting the functionality, benefits, and uniqueness of your feature. A couple of sentences here is just right.</p>'
        featureSet='text'
      />
    </FieldGroup>

    <NumberField label='Content Maximum Width'
      name='content_width'
      default=''>

    </NumberField>
    <ChoiceField
      name="max_width_unit"
      label="Content Maximum Width Unit"
      multiple={false}
      display="select"
      choices={[
        ['%', '%'],
        ['px', 'px'],
      ]}
      default=""
    />
    <FieldGroup
      label='Button Section'
      name='groupButton'
      display='inline'
    >
      <BooleanField
        label='Show button'
        name='showButton'
        display='toggle'
        default={false}
      />
      <ButtonContent
        textDefault=''
        textVisibility={buttonFieldVisibility}
        linkVisibility={buttonFieldVisibility}

      />
      <ButtonStyle
        buttonStyleDefault='primary'
        buttonSizeDefault='medium'
        buttonSizeVisibility={buttonFieldVisibility}
        buttonStyleVisibility={buttonFieldVisibility}
      />
    </FieldGroup>

      <BooleanField label='Show Bottom Border'
      name='show_border'
      display='checkbox'
      default={false}>

    </BooleanField>

    <BooleanField label='Show Bottom Section'
      name='show_bottom_section'
      display='toggle'
      default=''>

    </BooleanField>

    <FieldGroup name='bottom_section'
      label='Bottom Section'
      visibilityRules="ADVANCED"
      advancedVisibility={BottomSectionFieldVisibility}>

      <FieldGroup
        label='Button One Group'
        name='groupOneButton'

      >
        <ButtonContent
          textDefault=''
          iconFieldName="buttonOneIcon"
          iconStyleFieldName="buttonOneIconStyle"
          iconShowFieldName="buttonOneShowIcon"
          iconPositionFieldName="buttonOneIconPosition"
        />
        <ButtonStyle
          buttonStyleDefault='primary'
          buttonSizeDefault='medium'
        />
      </FieldGroup>

      <ImageField label='Logo' name='logo_field' resizable={true} responsive={true} showLoading={true}> </ImageField>

      <FieldGroup
        label='Button Two Group'
        name='groupTwoButton'

      >
        <ButtonContent
          textDefault=''
          iconFieldName="buttonTwoIcon"
          iconStyleFieldName="buttonTwoIconStyle"
          iconShowFieldName="buttonTwoShowIcon"
          iconPositionFieldName="buttonTwoIconPosition"
        />
        <ButtonStyle
          buttonStyleDefault='primary'
          buttonSizeDefault='medium'
        />
      </FieldGroup>


    </FieldGroup>
    <TextField name='moduleClass'
    label='Custom Class'
    default=''>

    </TextField>

    <FieldGroup
      label='Styles'
      name='groupStyle'
      tab='STYLE'
    >
      <FieldGroup
        label='Content'
        name='groupContent'
        display='inline'
      >

        <HeadingStyles headingStyleAsDefault='' />

      </FieldGroup>



      <CommonStylesSpacingFields />

    </FieldGroup>

  </ModuleFields>
);
