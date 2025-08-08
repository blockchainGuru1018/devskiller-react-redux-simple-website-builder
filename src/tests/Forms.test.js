import React from 'react';
import { fireEvent, render } from '@testing-library/react'

import { App } from '../App';

describe('Forms', () => {
  it('should not display component form by default', () => {
    // given
    const { queryByText } = render(<App />)

    // then
    expect(queryByText('Apply')).not.toBeInTheDocument()
    expect(queryByText('Remove')).not.toBeInTheDocument()
  });

  it('should display component form after choosing a component to add', () => {
    // given
    const { getByText } = render(<App />)

    // when
    fireEvent.click(getByText('header-1'))

    // then
    expect(getByText('Apply')).toBeInTheDocument()
    expect(getByText('Remove')).toBeInTheDocument()
  });

  it('should display all components available to add', () => {
    // given
    const { getByText } = render(<App />)

    // then
    const availableComponents = ['header-1', 'header-2', 'header-3', 'header-4', 'header-5', 'header-6', 'paragraph', 'link', 'image', 'iframe']
    for (const componentName of availableComponents){
      expect(getByText(componentName)).toBeInTheDocument()
    }
  });
})
