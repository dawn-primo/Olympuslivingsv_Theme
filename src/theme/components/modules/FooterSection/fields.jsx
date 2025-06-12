import {
  ImageField,
  LinkField,
  ModuleFields,
  RichTextField,
  TextField,
} from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleFields>
    <RichTextField
      name="address_text"
      label="Address One"
      default=""
    ></RichTextField>
    <LinkField
      name="number_link"
      label="Phone Number Link"
      supportedTypes={[
        'EXTERNAL',
        'CONTENT',
        'FILE',
        'EMAIL_ADDRESS',
        'BLOG',
        'CALL_TO_ACTION',
        'PHONE_NUMBER',
        'WHATSAPP_NUMBER',
        'PAYMENT',
      ]}
      showAdvancedRelOptions={true}
      default={{
        url: {
          content_id: null,
          type: 'EXTERNAL',
          href: '',
        },
        open_in_new_tab: false,
        no_follow: false,
      }}
    ></LinkField>

    <TextField name="phone_number" label="Phone Number"></TextField>

    <RichTextField
      name="privacy_text"
      label="Privacy Text"
      default=""
    ></RichTextField>

    <LinkField name="logo_link" label="Logo Link" 
     supportedTypes={[
        'EXTERNAL',
        'CONTENT',
        'FILE',
        'EMAIL_ADDRESS',
        'BLOG',
        'CALL_TO_ACTION',
        'PHONE_NUMBER',
        'WHATSAPP_NUMBER',
        'PAYMENT',
      ]}
      showAdvancedRelOptions={true}
      default={{
        url: {
          content_id: null,
          type: 'EXTERNAL',
          href: '',
        },
        open_in_new_tab: false,
        no_follow: false,
      }}
    ></LinkField>

    <ImageField
      name="footer_logo"
      label="Footer Logo"
      responsive={true}
      resizable={true}
      showLoading={false}
      default={{}}
    ></ImageField>

    <RichTextField
      name="copyright_text"
      label="Copyright Text"
      default=""
    ></RichTextField>
  </ModuleFields>
);
