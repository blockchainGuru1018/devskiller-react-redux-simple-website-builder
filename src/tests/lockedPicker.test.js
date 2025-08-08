import React from 'react';
import { fireEvent, render } from '@testing-library/react'

import { App } from '../App';

describe('lockedPicker', () => {
  it('should have all components with proper CSS classes', () => {
    // given
    const { container } = render(<App />)

    // then
    const picker = container.querySelector('.components-picker')
    for (const child of picker.children) {
      expect(child).toHaveClass("components-picker__component");
    }
  })

  it('should have all components unlocked by default', () => {
    // given
    const { container } = render(<App />)

    // then
    const picker = container.querySelector('.components-picker')
    for (const child of picker.children) {
      expect(child).not.toHaveClass("components-picker__component--disabled");
    }
  })

  it('should have all components locked after clicked to add a component', () => {
    // given
    const { container, getByText } = render(<App />)

    // when
    fireEvent.click(getByText('paragraph'))

    // then
    const picker = container.querySelector('.components-picker')
    for (const child of picker.children) {
      expect(child).toHaveClass("components-picker__component--disabled");
    }
  })
})
