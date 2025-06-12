import React from 'react';
import {
FieldGroup,
FormField,
ImageField,
ModuleFields,
RichTextField,
TextField,
} from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../shared/SpacingStyleComponent/CommonStylesSpacingFields';
import HeadingStyles from '../../shared/HeadingComponent/HeadingStyle.jsx';
import HeadingContent from '../../shared/HeadingComponent/HeadingContent.jsx';

export const fields = (
<ModuleFields>
  <FieldGroup tab="STYLE" name="groupStyle" label="Style">
    <HeadingStyles headingStyleAsDefault="h3" />
    <CommonStylesSpacingFields />
  </FieldGroup>


    <FieldGroup name='heading' label='Heading'>
      <HeadingContent />
    </FieldGroup>

  <FieldGroup name='contact_group' label='Contact Group'>
     <HeadingStyles headingStyleAsDefault="h4" />
       <HeadingContent />
       <TextField name='phonenumber' label='Phone Number'></TextField>
  </FieldGroup>

<FieldGroup name='address_group' label='Address Group'>
    <HeadingStyles headingStyleAsDefault="h4" />
    <HeadingContent />
    <RichTextField name='address' label='Address'></RichTextField>
    <RichTextField name='map_iframe' label='Map Iframe'></RichTextField>
    </FieldGroup>
  
  <FormField name='contact_form' label='Contact Form'></FormField>


</ModuleFields>
);
