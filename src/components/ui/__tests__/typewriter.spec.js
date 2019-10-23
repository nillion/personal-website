import React from 'react';
import renderer from 'react-test-renderer';

import TypeWriter from '../TypeWriter';

describe("TypeWriter", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(<TypeWriter text="Test" speed={100} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})