import {Forumpromo} from '../src/Eventpromo';
import {render, screen} from '@testing-library/react'

import forumpromoFixture from './fixtures/forumpromoFixture';

describe('Component: Eventpromo', () => {
    test('it should set the eventpromo id', () => {
        render(<Forumpromo {...forumpromoFixture} />);
        const elem = screen.getByTestId('forumpromo');
        expect(elem).toHaveAttribute('data-forum-id', forumpromoFixture.id);
    });
});
