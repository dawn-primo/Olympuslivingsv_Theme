import {
  FieldGroup,
  ModuleFields,
  ImageField,
  TextField,
  RepeatedFieldGroup
} from '@hubspot/cms-components/fields';
import CommonStylesSpacingFields from '../../shared/SpacingStyleComponent/CommonStylesSpacingFields.jsx';


export const fields = (
  <ModuleFields>

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

      <CommonStylesSpacingFields />

    </FieldGroup>

  </ModuleFields>
);
