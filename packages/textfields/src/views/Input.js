/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveComponentStyles, isRtl } from '@zendeskgarden/react-theming';
import TextStyles from '@zendeskgarden/css-forms/dist/text.css';

const COMPONENT_ID = 'textfields.input';
const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  NONE: 'none'
};

const isInvalid = validation => {
  return validation === VALIDATION.WARNING || validation === VALIDATION.ERROR;
};

/**
 * Accepts all `<input>` props
 */
const Input = styled.input.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'aria-invalid': isInvalid(props.validation),
  className: classNames(TextStyles['c-txt__input'], {
    [TextStyles['c-txt__input--sm']]: props.small,

    // Unable to use `tag` prop due to it being a valid, non-boolean prop
    [TextStyles['c-txt__input--tag']]: props.tagLayout,
    [TextStyles['c-txt__input--select']]: props.select,
    // Unable to use `media` prop due to it being a valid, non-boolean prop
    [TextStyles['c-txt__input--media']]: props.mediaLayout,
    [TextStyles['c-txt__input--bare']]: props.bare,
    [TextStyles['c-txt__input--focus-inset']]: props.focusInset,

    [TextStyles['is-disabled']]: props.disabled,
    [TextStyles['is-focused']]: props.focused,
    [TextStyles['is-hovered']]: props.hovered,
    [TextStyles['is-open']]: props.open,

    [TextStyles['c-txt__input--success']]: props.validation === VALIDATION.SUCCESS,
    [TextStyles['c-txt__input--warning']]: props.validation === VALIDATION.WARNING,
    [TextStyles['c-txt__input--error']]: props.validation === VALIDATION.ERROR,

    // RTL
    [TextStyles['is-rtl']]: isRtl(props)
  })
}))`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

Input.propTypes = {
  /** Allows flush spacing of Tab elements */
  tagLayout: PropTypes.bool,
  /** Applies flex layout to support MediaFigure components */
  mediaLayout: PropTypes.bool,
  small: PropTypes.bool,
  /** Applies select styling */
  select: PropTypes.bool,
  /** Removes all borders and styling */
  bare: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  /** Applies inset `box-shadow` styling on focus */
  focusInset: PropTypes.bool,
  hovered: PropTypes.bool,
  /** Displays select open state */
  open: PropTypes.bool,
  validation: PropTypes.oneOf([
    VALIDATION.SUCCESS,
    VALIDATION.WARNING,
    VALIDATION.ERROR,
    VALIDATION.NONE
  ])
};

Input.hasType = () => Input;

/** @component */
export default Input;
