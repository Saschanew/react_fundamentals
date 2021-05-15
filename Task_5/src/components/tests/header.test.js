import React from 'react';
import {render} from '@testing-library/react';
import Header from '../Header'

jest.mock('../Logo', () => () => <div data-testid='Logo'></div>)
jest.mock('../Username', () => () => <div data-testid='UserName'></div>)

test('should render Logo', () => {
    const {getByTestId} = render(<Header></Header>)
    expect(getByTestId(/Logo/)).toBeInTheDocument
})

test('should render UserName', () => {
    const {getByTestId} = render(<Header></Header>)
    expect(getByTestId(/UserName/)).toBeInTheDocument
})