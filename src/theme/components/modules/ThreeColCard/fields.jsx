import React from 'react';
import {
  ChoiceField,
  ColorField,
  FieldGroup,
  IconField,
  ImageField,
  ModuleFields,
  RepeatedFieldGroup,
  TextField,
} from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../shared/SpacingStyleComponent/CommonStylesSpacingFields.jsx';
import HeadingContent from '../../shared/HeadingComponent/HeadingContent.jsx';
import HeadingStyles from '../../shared/HeadingComponent/HeadingStyle.jsx';

export const fields = (
  <ModuleFields>
    <FieldGroup tab="STYLE" name="groupStyle" label="Style">
      <FieldGroup label="Content" name="groupContent" display="inline">
        <HeadingStyles headingStyleAsDefault="h2" />
      </FieldGroup>

      <ColorField
        label="Card Heading Text Color"
        name="card_heading_text_color"
        default="#fff"
      />
      <CommonStylesSpacingFields />
    </FieldGroup>

    <FieldGroup label="Content Section" name="groupContent" display="inline">
      <HeadingContent />
    </FieldGroup>

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

    <RepeatedFieldGroup label="Card Content" name="cardgroup">
      <TextField label="Card Heading" name="card_heading" />

      <ImageField
        label="Card Image"
        name="card_image"
        resizable={true}
        responsive={true}
        showLoading={true}
      ></ImageField>

      <RepeatedFieldGroup label="Icon Text Group" name="icon_text_group">
        <IconField label="Icon Image" name="icon_image" />
        <TextField label="Text Content" name="text_content" />
      </RepeatedFieldGroup>
    </RepeatedFieldGroup>
  </ModuleFields>
);
