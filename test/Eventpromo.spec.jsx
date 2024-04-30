import {Eventpromo} from '../src/Eventpromo';
import {render, screen} from '@testing-library/react'

import eventpromoFixture from './fixtures/eventpromoFixture';
import {getBranding} from '../src/utils/brands';

describe('Component: Eventpromo', () => {
    test('it should set the eventpromo id', () => {
        render(<Eventpromo isPaused={true} {...eventpromoFixture} />);
        const elem = screen.getByTestId('eventpromo');
        expect(elem).toHaveAttribute('data-focus-concept', eventpromoFixture.id)
    });

    describe.each([
        [undefined, getBranding('ft-live')],
        ['ft-live', getBranding('ft-live')],
        ['ft-forums', getBranding('ft-forums')],
        ['ft-bdp:workshop', getBranding('ft-bdp:workshop')],
        ['ft-bdp:diploma', getBranding('ft-bdp:diploma')],
        ['ft-bdp:masterclass', getBranding('ft-bdp:masterclass')]
    ])('when the brand prop is \'%s\'', (brand, brandConfig) => {
        test('it should output the right brand information from the config', () => {
            render(<Eventpromo {...eventpromoFixture} brand={brand}/>)
            const elem = screen.getByTestId('eventpromo');
            expect(elem).toHaveTextContent(brandConfig.defaultCtaText)
        })

        test('it should show the right image for the brand', () => {
            render(<Eventpromo {...eventpromoFixture} brand={brand}/>)
            const elem = screen.getByTestId('promoimage');
            const srcSet = elem.getAttribute('srcSet')
            expect(srcSet.includes(brandConfig.defaultImageUrl)).toEqual(true)
        })
    })
});
