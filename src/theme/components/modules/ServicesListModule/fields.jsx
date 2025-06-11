import React from 'react';
import {
  BooleanField,
  ColorField,
  FieldGroup,
  ModuleFields,
  RepeatedFieldGroup,
  RichTextField,
  TextField,
} from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../shared/SpacingStyleComponent/CommonStylesSpacingFields';
import HeadingStyles from '../../shared/HeadingComponent/HeadingStyle';
import HeadingContent from '../../shared/HeadingComponent/HeadingContent';

export const fields = (
  <ModuleFields>
    <FieldGroup tab="STYLE" name="groupStyle" label="Style">
      <HeadingStyles headingStyleAsDefault="h3" />
       <ColorField name='heading_bg_color'
       label='Heading BG Color'
       default=''>
      </ColorField>
      <CommonStylesSpacingFields />
    </FieldGroup>

    <TextField label="Extra Class" name="addClass" default="font-300" />

    <HeadingContent />
    <RepeatedFieldGroup name='service_list_group' label='Service List Group'>
      <RichTextField label="Decsription" name="description" default="" />
    </RepeatedFieldGroup>

    <BooleanField label='Show Bottom Border'
      name='show_border'
      display='checkbox'
      default={false}>

    </BooleanField>
    <TextField label="Custom ID" name="custom_id">

    </TextField>
  </ModuleFields>
);
