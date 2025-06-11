import React from 'react';
import {
  FieldGroup,
  FormField,
  IconField,
  ImageField,
  ModuleFields,
  RepeatedFieldGroup,
  RichTextField,
  TextField,
} from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../shared/SpacingStyleComponent/CommonStylesSpacingFields.jsx';
import HeadingStyles from '../../shared/HeadingComponent/HeadingStyle.jsx';
import HeadingContent from '../../shared/HeadingComponent/HeadingContent.jsx';

export const fields = (
  <ModuleFields>
    <FieldGroup tab="STYLE" name="groupStyle" label="Style">
      <HeadingStyles headingStyleAsDefault="h1" />
      <CommonStylesSpacingFields />
    </FieldGroup>

    <HeadingContent />

    <FieldGroup name="contact_group" label="Contact Group">

      <HeadingContent />
      <HeadingStyles headingStyleAsDefault="h2" />
      <TextField name="phonenumber" label="Phone Number"></TextField>
    </FieldGroup>

    <RepeatedFieldGroup name="left_content_group" label="Left Content Group">
      <IconField label="Icon Image" name="icon_image" />
      <RichTextField name="content" label="Content"></RichTextField>
      <RichTextField name="map_iframe" label="Map Iframe"></RichTextField>
    </RepeatedFieldGroup>

    <FormField name="contact_form" label="Contact Form"></FormField>
  </ModuleFields>
);
