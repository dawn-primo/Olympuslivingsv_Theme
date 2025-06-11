import {
  FieldGroup,
  ImageField,
  ModuleFields,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';
export const fields = (
  <ModuleFields>
    <RepeatedFieldGroup label="Add Images" name="addImage">
      <ImageField
        label="Image"
        name="image_field"
        resizable={true}
        responsive={true}
        showLoading={true}
      >
      </ImageField>
    </RepeatedFieldGroup>
  </ModuleFields>
);
