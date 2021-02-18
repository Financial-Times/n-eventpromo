import {EventDetails} from '../src/Details';
import {shallow} from 'enzyme';

import eventpromoFixture from './fixtures/eventpromoFixture';
import {BDPLogo, ForumsLogo, FTLiveLogo} from '../src/BrandLogo';

describe('Component: EventDetails', () => {
    describe.each([
        [undefined, 'details'],
        ['ft-live', 'details'],
        ['ft-forums', 'details details--ft-forums'],
        ['ft-bdp:workshop', 'details details--ft-bdp-workshop'],
        ['ft-bdp:diploma', 'details details--ft-bdp-diploma'],
        ['ft-bdp:masterclass', 'details details--ft-bdp-masterclass']
    ])('when the brand prop is \'%s\'', (brand, expectedClassnames) => {
        test('it should apply the correct classNames', () => {
            const eventDetailsElement = <EventDetails {...eventpromoFixture} brand={brand}/>;
            expect(shallow(eventDetailsElement).children('.details').prop('className')).toEqual(expectedClassnames)
        })
    })

    describe.each([
        [undefined, FTLiveLogo],
        ['ft-live', FTLiveLogo],
        ['ft-forums', ForumsLogo],
        ['ft-bdp:workshop', BDPLogo],
        ['ft-bdp:diploma', BDPLogo],
        ['ft-bdp:masterclass', BDPLogo]
    ])('when the brand prop is \'%s\'', (brand, BrandLogo) => {
        test('it should render the correct logo', () => {
            const promoElement = <EventDetails {...eventpromoFixture} brand={brand}/>;
            expect(shallow(promoElement).children('.details').childAt(3).childAt(0).is(BrandLogo)).toEqual(true)
        })
    })
});
