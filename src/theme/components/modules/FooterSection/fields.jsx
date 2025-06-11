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

    <TextField
      name="datetime"
      label="Days and Time"
      default="Monday – Friday 8 am – 4 pm"
    />

    <LinkField
      name="site_map"
      label="Site Map Link"
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
    <TextField
      name="site_map_text"
      label="Heading"
      default="Sitemap"
    ></TextField>

    <RichTextField
      name="privacy_text"
      label="Privacy Text"
      default=""
    ></RichTextField>

    <LinkField name="logo_link" label="Logo Link" default=""></LinkField>

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
