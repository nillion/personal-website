import React from 'react';
import renderer from 'react-test-renderer';

import IndexPage from '../index';

describe("IndexPage", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(<IndexPage></IndexPage>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})