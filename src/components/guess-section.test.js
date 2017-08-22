import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });

    it('Renders the add wrapper initially', () => {
        const wrapper = shallow(<GuessSection />);
        expect(wrapper.hasClass('guess-section')).toEqual(true);
    });
});