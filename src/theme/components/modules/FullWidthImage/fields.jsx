import React from 'react';
import {
  BooleanField,
  FieldGroup,
  ImageField,
  ModuleFields,
} from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../shared/SpacingStyleComponent/CommonStylesSpacingFields';
import HeadingStyles from '../../shared/HeadingComponent/HeadingStyle';
import HeadingContent from '../../shared/HeadingComponent/HeadingContent';

export const fields = (
  <ModuleFields>
    <FieldGroup tab="STYLE" name="groupStyle" label="Style">
      <HeadingStyles />
      <CommonStylesSpacingFields />

    </FieldGroup>
    <HeadingContent headingAndTextHeading='' textDefault=''/>

    <ImageField
      label="Image"
      name="image"
      resizable={true}
      responsive={true}
      showLoading={true}
    ></ImageField>
    <BooleanField name='add_overlay'
      label='Add Overlay'
      display='toggle'
      default={false}
    >

    </BooleanField>
  </ModuleFields>
);
