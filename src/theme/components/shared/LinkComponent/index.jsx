import React, { Children } from 'react';
import { logInfo } from '@hubspot/cms-components';
import ImageFields from '../ImageComponent/imageRenderer.jsx';

const renderLink = ({ linkField, Children }) => {
    if (!linkField || !linkField.url) return null;

    let href = linkField.url.href || '#';

    // Handle "EMAIL_ADDRESS" type
    if (linkField.url.type === 'EMAIL_ADDRESS') {
        href = `mailto:${href}`;
    }

    const isCTA = linkField.url.type === 'CALL_TO_ACTION';
    const openInNewTab = linkField.open_in_new_tab;
    const rel = linkField.rel || undefined;

    return (
        <a
            href={isCTA ? href : encodeURI(href)}
            target={openInNewTab ? '_blank' : undefined}
            rel={rel}
        >
            {Children}
        </a>
    );
};

export default renderLink;
