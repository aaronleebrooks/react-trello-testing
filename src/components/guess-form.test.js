import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Renders the add wrapper initially', () => {
        const wrapper = shallow(<GuessForm />);
        expect(wrapper.hasClass('guess-form')).toEqual(true);
    });

    it('Should fire the onGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onGuess={callback} />);
        const value = Math.floor(Math.random()*100);
        const stringValue = value.toString();
        wrapper.find('input[type="text"]').node.value = parseInt(value);
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(stringValue);
    });

    it('Should not fire onGuess if the input is empty', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onGuess={callback} />);
        wrapper.simulate('submit');
        expect(callback).not.toHaveLength(1);
    });
});