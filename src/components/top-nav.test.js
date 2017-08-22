import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Renders the add button initially', () => {
        const wrapper = shallow(<TopNav />);
        expect(wrapper.hasClass('nav-list')).toEqual(true);
    });
});