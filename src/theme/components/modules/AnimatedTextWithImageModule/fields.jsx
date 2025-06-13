import {
  FieldGroup,
  ModuleFields,
  ImageField,
  TextField,
  RepeatedFieldGroup
} from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../shared/SpacingStyleComponent/CommonStylesSpacingFields.jsx';
import HeadingContent from '../../shared/HeadingComponent/HeadingContent.jsx';
import HeadingStyles from '../../shared/HeadingComponent/HeadingStyle.jsx';


export const fields = (
  <ModuleFields>
    <HeadingContent headingTextLabel='Heading text' />
    <TextField name='animation_prefix_text' label='Animation Prefix Text'></TextField>
    <TextField name='animation_suffix_text' label='Animation Suffix Text'></TextField>
    <RepeatedFieldGroup name='add_animated_text' label='Add Animated Text'>
      <TextField name='animated_text' label='Animated Text'></TextField>
    </RepeatedFieldGroup>

    <ImageField
      label="Image"
      name="image"
      resizable={true}
      responsive={true}
      showLoading={true}
    >
    </ImageField>

    <FieldGroup
      label='Styles'
      name='groupStyle'
      tab='STYLE'
    >
      <HeadingStyles headingStyleAsDefault="h2" />
      <CommonStylesSpacingFields />

    </FieldGroup>

  </ModuleFields>
);
