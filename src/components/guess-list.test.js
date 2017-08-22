import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
	const fakeGuesses = ['test']

    it('Renders without crashing', () => {
        shallow(<GuessList guesses={fakeGuesses}/>);
    });

    it('Renders the add wrapper initially', () => {
        const wrapper = shallow(<GuessList guesses={fakeGuesses}/>);
        expect(wrapper.hasClass('clearfix')).toEqual(true);
    });
});