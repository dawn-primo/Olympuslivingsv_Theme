import { ModuleFields, FormField, TextField } from '@hubspot/cms-components/fields';

// Define the module's fields
export const fields = (
  <ModuleFields>


    <FormField
      id="idNumber"
      name="formFields"
      label="Footer Form"
      required={false}
      locked={false}
      disableInlineFormEditing={true}
      requiredPropertyTypes={['TICKET']}
      supportAllWebinarTypes={true}
      default={{
        response_type: 'inline',
        message: 'Thanks for submitting the form.',
      }}
    />
  </ModuleFields>
);



