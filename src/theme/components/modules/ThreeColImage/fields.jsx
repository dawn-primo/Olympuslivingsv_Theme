import React from 'react';
import {
  BooleanField,
  ChoiceField,
  FieldGroup,
  ImageField,
  ModuleFields,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../shared/SpacingStyleComponent/CommonStylesSpacingFields.jsx';
import HeadingContent from '../../shared/HeadingComponent/HeadingContent.jsx';
import HeadingStyles from '../../shared/HeadingComponent/HeadingStyle.jsx';
import ButtonContent from '../../shared/ButtonComponent/ButtonContent.jsx';
import ButtonStyle from '../../shared/ButtonComponent/ButtonStyle.jsx';

const buttonFieldVisibility = {
  boolean_operator: 'OR',
  criteria: [
    {
      controlling_field_path: 'groupButton.showButton',
      controlling_value_regex: 'true',
      operator: 'EQUAL',
    },
  ],
};

export const fields = (
  <ModuleFields>
    <FieldGroup tab="STYLE" name="groupStyle" label="Style">
      <HeadingStyles headingStyleAsDefault="h2" />

      <FieldGroup label="Button Section" name="groupButton" display="inline">
        <ButtonStyle
          buttonStyleDefault="primary"
          buttonSizeDefault="medium"
          buttonSizeVisibility={buttonFieldVisibility}
          buttonStyleVisibility={buttonFieldVisibility}
        />
      </FieldGroup>
      <CommonStylesSpacingFields />
    </FieldGroup>

    <HeadingContent />

    <ChoiceField
      label="Choose Column Number"
      name="choosecolnumber"
      type="choice"
      display="select"
      multiple={false}
      choices={[
        ['two_col', 'Two Column'],
        ['three_col', 'Three Column'],
        ['four_col', 'Four Column'],
      ]}
      default="three_col"
    ></ChoiceField>

    <RepeatedFieldGroup
      label="Blocks"
      name="groupBlocks"
      occurrence={{
        min: 1,
        max: 20,
        default: 3,
      }}
    >
      <ImageField
        label="Image"
        name="image"
        resizable={true}
        responsive={true}
        showLoading={true}
      ></ImageField>
    </RepeatedFieldGroup>

    <BooleanField label='Show Bottom Border'
      name='show_border'
      display='checkbox'
      default={false}>
    </BooleanField>

    <FieldGroup label="Button Section" name="groupButton" display="inline">
      <BooleanField
        label="Show button"
        name="showButton"
        display="toggle"
        default={true}
      />
      <ButtonContent
        textDefault="Explore more"
        textVisibility={buttonFieldVisibility}
        linkVisibility={buttonFieldVisibility}
      />
    </FieldGroup>
  </ModuleFields>
);
