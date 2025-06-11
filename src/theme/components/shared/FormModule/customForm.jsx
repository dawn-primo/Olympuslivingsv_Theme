import React, { useEffect, useState } from 'react';
import { logInfo } from '@hubspot/cms-components';

function CustomForm({ props }) {
  const [fieldForm, setFieldForm] = useState(props?.fieldValues || {});
  const formHeading = fieldForm?.heading;
  const formID = fieldForm?.formFields?.form_id;

  logInfo(formID);

  useEffect(() => {
    if (!formID) {
      console.error('Form ID is missing.');
      return;
    }

    // Check if HubSpot script is already loaded
    const existingScript = document.querySelector('script[src="https://js.hsforms.net/forms/v2.js"]');

    const loadForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '8241871',
          formId: formID,
          target: '#hubspot-form-container',
          css: ''
        });
      } else {
        console.error('HubSpot Forms script did not initialize properly.');
      }
    };

    if (existingScript) {
      loadForm();
    } else {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/v2.js';
      script.async = true;
      script.onload = loadForm;
      document.body.appendChild(script);
    }
  }, [formID]);

  return (
    <section>
      {formHeading && (
        <h2 id="contact-form-heading">{formHeading}</h2>
      )}
      <div
        id="hubspot-form-container"
        role="form"
      />
    </section>
  );
}

export default CustomForm;
