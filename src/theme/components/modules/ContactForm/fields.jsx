import React from 'react';
import {
  FieldGroup,
  FormField,
  IconField,
  ModuleFields,
  RepeatedFieldGroup,
  RichTextField,
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
      <RichTextField name='phonenumber' label='Phone Number'></RichTextField>
    </FieldGroup>

    <RepeatedFieldGroup name="left_content_group" label="Left Content Group">
      <IconField label="Icon Image" name="icon_image" />
      <RichTextField name="content" label="Content" default=""></RichTextField>
      <RichTextField
        name="map_iframe"
        label="Map Iframe"
        default=""
      ></RichTextField>
    </RepeatedFieldGroup>

    <FormField name="contact_form" label="Contact Form"></FormField>
  </ModuleFields>
);
