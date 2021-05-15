import React from 'react'
import {render} from '@testing-library/react'
import Courses from "../Courses";

jest.mock('../Card', () => () => <div data-testid='Card'></div>)

it('expects the matches array', () => {
    const {getByTestId} = render(<Courses></Courses>)
    let amount = [];
    amount.push(getByTestId(/Card/))
    expect(amount).to.eq(2);
});