import {
  FieldGroup,
  ImageField,
  LinkField,
  ModuleFields,
  VideoField,
} from '@hubspot/cms-components/fields';
import BackgroundVideoContent from '../../shared/BackgroundVideoComponent/BackgroundVideoContent';
export const fields = (
  <ModuleFields>
    <BackgroundVideoContent />
    <FieldGroup name="imageContainer" label="Image Container">
      <ImageField
        name="image_field"
        label="Image"
        responsive={true}
        resizable={true}
        showLoading={false}
        default={{
          size_type: 'exact',
          src: '',
          alt: 'image-alt-text',
          loading: 'lazy',
        }}
      />
      <LinkField label="Arrow Link" name="arrow_link" default="" />
    </FieldGroup>
  </ModuleFields>
);
