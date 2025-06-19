import React from 'react';
import { Island, logInfo } from '@hubspot/cms-components';
import Header from '../../islands/headerIsland?island'; // Adjust the import path as necessary

export const Component = (props) => {
    // logInfo("Header Props", props);

    return (
        <Island module={Header} hydrateOn="idle" props={props} clientOnly />
    );
};

export { fields } from './fields.jsx';

export const meta = {
    label: 'Nav Menu Module',
};

console.log("Custom JS running inside React component");
