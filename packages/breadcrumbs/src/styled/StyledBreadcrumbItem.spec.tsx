/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledBreadcrumbItem } from './StyledBreadcrumbItem';

describe('StyledBreadcrumbItem', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledBreadcrumbItem />);

    expect(container.firstChild).toHaveClass('c-breadcrumb__item');
  });

  it('renders current styling', () => {
    const { container } = render(<StyledBreadcrumbItem isCurrent />);

    expect(container.firstChild).toHaveClass('is-current');
  });
});