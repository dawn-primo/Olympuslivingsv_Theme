import React from 'react';
import {
  BooleanField,
  ColorField,
  FieldGroup,
  LinkField,
  ModuleFields,
  RepeatedFieldGroup,
  RichTextField,
  TextField,
  UrlField,
} from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../shared/SpacingStyleComponent/CommonStylesSpacingFields';
import ButtonStyle from '../../shared/ButtonComponent/ButtonStyle.jsx';
import ButtonContent from '../../shared/ButtonComponent/ButtonContent.jsx';
import HeadingContent from '../../shared/HeadingComponent/HeadingContent.jsx';
import HeadingStyles from '../../shared/HeadingComponent/HeadingStyle.jsx';
import RichTextContent from '../../shared/RichTextContent/index.jsx';

const buttonFieldVisibility = {
  boolean_operator: 'OR',
  criteria: [
    {
      controlling_field_path: 'right_container.groupButton.showButton',
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

    <FieldGroup name="left_container" label="Left Container">
      <HeadingContent />

      <RichTextContent
        label="Content"
        richTextDefault="<p>Write a description highlighting the functionality, benefits, and uniqueness of your feature. A couple of sentences here is just right.</p>"
        featureSet="text"
      />
    </FieldGroup>

    <FieldGroup name="right_container" label="Right Container">
      <FieldGroup label="Button Section" name="groupButton" display="inline">
        <BooleanField
          label="Show button"
          name="showButton"
          display="toggle"
          default={true}
        />
        <ButtonContent
          textDefault=""
          textVisibility={buttonFieldVisibility}
          linkVisibility={buttonFieldVisibility}
        />
      </FieldGroup>

      <FieldGroup name="icon_text_group" label="Icon Text Group">
        <TextField
          label="Add Text"
          name="compnay_text"
          default="Royal Plaza of Olympus Living"
        />
        <FieldGroup name="phone_number_group" label="Phone Number Group">
          <TextField
            name="phone_number"
            label="Phone Number Text"
            default="(208) 882-6560"
          ></TextField>
          <UrlField
            name="phone_number_link"
            label="Phone Number Link"
            default=""
            supportedTypes={[
              'EXTERNAL',
              'CONTENT',
              'FILE',
              'EMAIL_ADDRESS',
              'BLOG',
              'PHONE_NUMBER',
              'WHATSAPP_NUMBER',
            ]}
          ></UrlField>
        </FieldGroup>

        <FieldGroup name="email_group" label="Email Group">
          <TextField
            name="email_text"
            label="Email Text"
            default="Email Us"
          ></TextField>
          <LinkField
            name="email_link"
            label="Email Link"
            default=""
          ></LinkField>
        </FieldGroup>

        <RepeatedFieldGroup name="address_group" label="Address Group">
          <TextField
            name="campus_name"
            label="Campus Name"
            default="Paradise Creek Campus"
          ></TextField>
          <TextField
            name="campus_address"
            label="Campus Address"
            default="640 N Eisenhower St Moscow, ID 83843"
          ></TextField>
          <LinkField
            name="address_link"
            label="Address Link"
            default=""
          ></LinkField>
        </RepeatedFieldGroup>

        <FieldGroup name="social_group" label="Social Group">
          <TextField
            name="social_text"
            label="Social Text"
            default="Follow us on Facebook"
          ></TextField>
          <LinkField
            name="social_link"
            label="Social Link"
            default=""
          ></LinkField>
        </FieldGroup>

        <FieldGroup name="linkedIn_social_group" label="LinkedIn Social Group">
          <TextField
            name="linkedin"
            label="LinkedIn Text"
            default="Follow us on LinkedIn"
          ></TextField>
          <LinkField
            name="linkedin_link"
            label="LinkedIn Link"
            default=""
          ></LinkField>
        </FieldGroup>
      </FieldGroup>
    </FieldGroup>
  </ModuleFields>
);
