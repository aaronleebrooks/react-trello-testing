import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it('Renders the add wrapper initially', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.hasClass('header')).toEqual(true);
    });

    it('Should show infoModal when button is clicked', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.state('showInfoModal')).toEqual(false);
    });

});