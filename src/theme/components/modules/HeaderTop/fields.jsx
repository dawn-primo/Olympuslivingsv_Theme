import {
  ModuleFields,
  MenuField,
  FieldGroup,
  AlignmentField,
  ImageField,
  TextField,
  BooleanField,
  LinkField
} from '@hubspot/cms-components/fields';

const fbFieldVisibility = {
  boolean_operator: 'OR',
  criteria: [{
    controlling_field_path: 'facebook_show',
    controlling_value_regex: 'true',
    operator: 'EQUAL',
  }]
}
const linkedinFieldVisibility = {
  boolean_operator: 'OR',
  criteria: [{
    controlling_field_path: 'linkedin_show',
    controlling_value_regex: 'true',
    operator: 'EQUAL',
  }]
}
export const fields = (
  <ModuleFields>
    <ImageField
      label='Logo Image'
      name='logoImage'
      resizable={true}
      responsive={true}
      showLoading={true}
    />
    <TextField
      label='Logo Link'
      name='logoLink'
      required={true}
    />
    <MenuField
      label='Menu'
      name='menu'
      default='default'
    />

    <BooleanField name="facebook_show"
      label="Show Facebook Icon"
      display="toggle"
      inlineHelpText="Shows Facebook Icon when toggled on"
      default={false}>

    </BooleanField>
    <LinkField

      label='Facebook Link'
      name='facebook_link'
      default=''
      visibilityRules="ADVANCED"
      advancedVisibility={fbFieldVisibility}
    />
   
    <BooleanField name="linkedin_show"
      label="Show LinkedIn Icon"
      display="toggle"
      inlineHelpText="Shows LinkedIn Icon when toggled on"
      default={true}>

    </BooleanField>
    <LinkField
      label='Linkedin Link'
      name='linkedin_link'
      default=''
      visibilityRules="ADVANCED"
      advancedVisibility={linkedinFieldVisibility}
      />


    <FieldGroup
      label='Styles'
      name='groupStyle'
      tab='STYLE'
    >
      <FieldGroup
        label='Menu'
        name='groupMenu'
        display='inline'
      >
        <AlignmentField
          label='Menu alignment'
          name='menuAlignment'
          required={true}
          alignmentDirection='HORIZONTAL'
          default={{ horizontal_align: 'LEFT' }}
        />


      </FieldGroup>

      <FieldGroup
        label='Links'
        name='groupLink'
        display='inline'
      >

      </FieldGroup>

    </FieldGroup>
  </ModuleFields>
);