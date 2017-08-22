import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';


describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('Renders the add wrapper initially', () => {
        const wrapper = shallow(<Game />);
        expect(wrapper.hasClass('main-game')).toEqual(true);
    });

    it('Can make guesses', () => {
        const wrapper = shallow(<Game />);
        // Set the correctAnswer so we know what we're aiming for
        wrapper.setState({
            correctAnswer: 100
        });

        wrapper.instance().guess(25);
        expect(wrapper.state('guesses')).toEqual([25]);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

        wrapper.instance().guess(60);
        expect(wrapper.state('guesses')).toEqual([25, 60]);
        expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

        wrapper.instance().guess(80);
        expect(wrapper.state('guesses')).toEqual([25, 60, 80]);
        expect(wrapper.state('feedback')).toEqual('You\'re Warm');

        wrapper.instance().guess(95);
        expect(wrapper.state('guesses')).toEqual([25, 60, 80, 95]);
        expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

        wrapper.instance().guess(100);
        expect(wrapper.state('guesses')).toEqual([25, 60, 80, 95, 100]);
        expect(wrapper.state('feedback')).toEqual('You got it!');
    });
});