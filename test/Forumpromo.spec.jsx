import {Forumpromo} from '../src/Eventpromo';
import {shallow} from 'enzyme';

import forumpromoFixture from './fixtures/forumpromoFixture';

describe('Component: Eventpromo', () => {
    test('it should set the eventpromo id', () => {
        const promoElement = <Forumpromo {...forumpromoFixture} />;
        expect(shallow(promoElement).prop('data-forum-id')).toEqual(forumpromoFixture.id)
    });
});
