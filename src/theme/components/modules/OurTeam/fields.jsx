import React from 'react';
import {
  BooleanField,
  ColorField,
  FieldGroup,
  ImageField,
  ModuleFields,
} from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../shared/SpacingStyleComponent/CommonStylesSpacingFields.jsx';
import HeadingContent from '../../shared/HeadingComponent/HeadingContent.jsx';
import HeadingStyles from '../../shared/HeadingComponent/HeadingStyle.jsx';
import RichTextContent from '../../shared/RichTextContent/index.jsx';

export const fields = (
  <ModuleFields>
    <FieldGroup tab="STYLE" name="groupStyle" label="Style">
      <FieldGroup label="Content" name="groupContent" display="inline">
        <HeadingStyles headingStyleAsDefault="h2" />
      </FieldGroup>

       <ColorField
        name="two_col_container_bg"
        label="Two Column Container Color"
        default=''
      ></ColorField>

      <ColorField
        name="two_col_bg"
        label="Two Column BG Color"
        default=''
      ></ColorField>
      <CommonStylesSpacingFields />
    </FieldGroup>

    <FieldGroup label="Content Section" name="groupContent" display="inline">
      <HeadingContent />
    </FieldGroup>

    <FieldGroup name="left_container" label="Left Container">
      <ImageField
        label="Image"
        name="image"
        resizable={true}
        responsive={true}
        showLoading={true}
      >
      </ImageField>
    </FieldGroup>

    <FieldGroup name="right_container" label="Right Container">
      <RichTextContent
        label="Content"
        richTextDefault="<p>Write a description highlighting the functionality, benefits, and uniqueness of your feature. A couple of sentences here is just right.</p>"
        featureSet="text"
      />
    </FieldGroup>

      <BooleanField
      name="swap_image"
      label="Swap Image"
      required={false}
      locked={false}
      display="toggle"
      default={false}
    />

  </ModuleFields>
);