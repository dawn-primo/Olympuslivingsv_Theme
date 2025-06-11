import {
  TextField,
  LinkField,
  IconField,
  ChoiceField,
  BooleanField,
} from '@hubspot/cms-components/fields';

export default function ButtonContent(props) {
  const {
    textDefault = 'Learn more',
    linkDefault = {
      open_in_new_tab: true,
    },
    iconDefault = {
      name: 'arrow-right',
    },
    iconPositionDefault = 'right',
    textVisibility = null,
    linkVisibility = null,

    iconFieldName = 'buttonContentIcon',
    iconStyleFieldName = 'buttonContentIconStyle',
    iconShowFieldName = 'buttonContentShowIcon',
    iconPositionFieldName = 'buttonContentIconPosition',
  } = props;

  return (
    <>
      <TextField
        label="Button text"
        name="buttonContentText"
        visibilityRules="ADVANCED"
        advancedVisibility={textVisibility}
        required
        default={textDefault}
      />

      <LinkField
        label="Link"
        name="buttonContentLink"
        visibilityRules="ADVANCED"
        advancedVisibility={linkVisibility}
        supportedTypes={[
          'EXTERNAL',
          'CONTENT',
          'FILE',
          'EMAIL_ADDRESS',
          'CALL_TO_ACTION',
          'BLOG',
          'PAYMENT',
        ]}
        default={linkDefault}
      />

      <BooleanField
        label="Show icon"
        name={iconShowFieldName}
        id={iconShowFieldName} // ✅ dynamic id
        display="toggle"
        default={false}
      />

      <ChoiceField
        label="Icon Style"
        name={iconStyleFieldName}
        id={iconStyleFieldName} // ✅ dynamic id
        visibility={{
          controlling_field: iconShowFieldName, // ✅ use dynamic controlling field
          controlling_value_regex: 'true',
          operator: 'EQUAL',
        }}
        choices={[
          ['icon1', 'Icon 1'],
          ['icon2', 'Icon 2'],
        ]}
        display="select"
        default="icon1"
      />

      <IconField
        label="Icon"
        name={iconFieldName}
        id={iconFieldName} // ✅ dynamic id
        visibility={{
          controlling_field: iconShowFieldName,
          controlling_value_regex: 'true',
          operator: 'EQUAL',
        }}
        iconSet="fontawesome-6.4.2"
        default={iconDefault}
      />

      <ChoiceField
        label="Icon position"
        name={iconPositionFieldName}
        id={iconPositionFieldName} // ✅ dynamic id
        visibility={{
          controlling_field: iconShowFieldName, // ✅ dynamic controlling field
          controlling_value_regex: 'true',
          operator: 'EQUAL',
        }}
        choices={[
          ['left', 'Left'],
          ['right', 'Right'],
        ]}
        display="select"
        default={iconPositionDefault}
      />
    </>
  );
}