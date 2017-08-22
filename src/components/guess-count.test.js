import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Renders the add wrapper initially', () => {
        const wrapper = shallow(<GuessCount />);
        expect(wrapper.hasClass('guess-count')).toEqual(true);
    });
});