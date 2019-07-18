/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { PreviousItem as MenuPreviousItem } from '@zendeskgarden/react-menus';

const COMPONENT_ID = 'select.previous_item';

/**
 * Accepts all `<li>` props
 */
const PreviousItem = styled(MenuPreviousItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

PreviousItem.propTypes = {
  active: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  disabled: PropTypes.bool
};

PreviousItem.hasType = () => PreviousItem;

/** @component */
export default PreviousItem;
