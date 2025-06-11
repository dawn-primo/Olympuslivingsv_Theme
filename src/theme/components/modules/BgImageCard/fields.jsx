import React from 'react';
import {
  FieldGroup,
  ImageField,
  ModuleFields,
  RepeatedFieldGroup,
  RichTextField,
} from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../shared/SpacingStyleComponent/CommonStylesSpacingFields';
import HeadingContent from '../../shared/HeadingComponent/HeadingContent';
import HeadingStyles from '../../shared/HeadingComponent/HeadingStyle';
import RichTextContent from '../../shared/RichTextContent/index.jsx';

export const fields = (
  <ModuleFields>
    <FieldGroup tab="STYLE" name="groupStyle" label="Style">
      <CommonStylesSpacingFields />
    </FieldGroup>

    <RepeatedFieldGroup
      label="Blocks"
      name="groupBlocks"
      occurrence={{
        min: 1,
        max: 20,
        default: 3,
      }}
    >
      <HeadingContent />
      <HeadingStyles headingStyleAsDefault="h2" />

      <ImageField
        label="Image"
        name="image"
        resizable={true}
        responsive={true}
        showLoading={true}
      >
      </ImageField>
      <RichTextContent
        label="Content"
        richTextDefault="<p>Write a description highlighting the functionality, benefits, and uniqueness of your feature. A couple of sentences here is just right.</p>"
        featureSet="text"
      />
    </RepeatedFieldGroup>
  </ModuleFields>
);
