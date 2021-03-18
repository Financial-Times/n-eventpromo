import {Eventpromo} from '../src/Eventpromo';
import {shallow} from 'enzyme';

import eventpromoFixture from './fixtures/eventpromoFixture';
import {getBranding} from '../src/utils/brands';

describe('Component: Eventpromo', () => {
    test('it should set the eventpromo id', () => {
        const promoElement = <Eventpromo isPaused={true} {...eventpromoFixture} />;
        expect(shallow(promoElement).prop('data-focus-concept')).toEqual(eventpromoFixture.id)
    });

    describe.each([
        [undefined, getBranding('ft-live')],
        ['ft-live', getBranding('ft-live')],
        ['ft-forums', getBranding('ft-forums')],
        ['ft-bdp:workshop', getBranding('ft-bdp:workshop')],
        ['ft-bdp:diploma', getBranding('ft-bdp:diploma')],
        ['ft-bdp:masterclass', getBranding('ft-bdp:masterclass')]
    ])('when the brand prop is \'%s\'', (brand, brandConfig) => {
        let details, image;
        beforeAll(() => {
            [details, image] = shallow(<Eventpromo {...eventpromoFixture} brand={brand}/>).children().getElements()
        })
        test.each(Object.entries(brandConfig))('it should pass the brand config %s as a prop to the details', (key, value) => {
            expect(details.props).toHaveProperty(key, value)
        })

        test.each(Object.entries(brandConfig))('it should pass the brand config %s as a prop to the image', (key, value) => {
            expect(image.props).toHaveProperty(key, value)
        })
    })
});
