import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal />', () => {
    it('Renders without crashing', () => {
        shallow(<InfoModal />);
    });

    it('Renders the add button initially', () => {
        const wrapper = shallow(<InfoModal />);
        expect(wrapper.hasClass('overlay')).toEqual(true);
    });

    it('Should fire the close callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<InfoModal onClose={callback} />);
        wrapper.find('.close').simulate('click');
        expect(callback).toHaveBeenCalled();
    });

    it('Should not fire onGuess if the input is empty', () => {
        const callback = jest.fn();
        const wrapper = mount(<InfoModal onGuess={callback} />);
        wrapper.find('.close').simulate('submit');
        expect(callback).not.toHaveLength(1);
    });
});