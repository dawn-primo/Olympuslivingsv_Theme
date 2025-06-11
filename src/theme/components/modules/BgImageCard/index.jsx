import { logInfo, Island } from '@hubspot/cms-components';
import ResponsiveSpacingWrapper from '../../shared/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import ImageCard from '../../islands/ImageCard?island';


export function Component(props) {
  const {
    groupBlocks = [],
    module_id
  } = props;

  logInfo(props, 'BG Image Card Props');
  return (
    <>
      <ResponsiveSpacingWrapper
        moduleId={props?.module?.module_id}
        fields={props?.fieldValues}
      >
        <Island
          module={ImageCard}
          groupBlocks={groupBlocks}
          clientOnly
          hydrateOn='idle'
        />
      </ResponsiveSpacingWrapper>
    </>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'BG Image Card',
};
