import React from 'react';
import { fireEvent, render, getByText as staticGetByText } from '@testing-library/react'

import { App } from '../App';

describe('Preview', () => {
  it('should display empty preview if no components were added', () => {
    // given
    const { getByTestId } = render(<App />)

    // then
    const preview = getByTestId('components-preview')
    expect(preview).toMatchSnapshot()
  })

  it('should display a link component in the preview after it was added', () => {
    // given
    const { getByText, getByLabelText, getByTestId } = render(<App />)

    // when
    fireEvent.click(getByText('link'))
    fireEvent.change(getByLabelText('label'), { target: { value: "The Site" } })
    fireEvent.change(getByLabelText('href'), { target: { value: "www.site.com" } })
    fireEvent.click(getByText('Apply'))

    // then
    const preview = getByTestId('components-preview')
    expect(preview).toMatchSnapshot()
  })

  it('should display again an empty preview after a link was added and later deleted', () => {
    // given
    const { getByText, getByLabelText, getByTestId } = render(<App />)

    // when
      // add element
    fireEvent.click(getByText('link'))
    fireEvent.change(getByLabelText('label'), { target: { value: "The Site" } })
    fireEvent.change(getByLabelText('href'), { target: { value: "www.site.com" } })
    fireEvent.click(getByText('Apply'))
      // remove element
    const newElement = getByText('The Site').parentElement
    fireEvent.click(staticGetByText(newElement, 'click to edit'))
    fireEvent.click(getByText('Remove'))

    // then
    const preview = getByTestId('components-preview')
    expect(preview).toMatchSnapshot()
  })
});
