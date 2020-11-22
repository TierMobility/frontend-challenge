import moxios from 'moxios';
import { createShortLink } from './shortenService';

const mockSucces = {
    link: 'minifiedLink',
};
describe('shorten service', () => {
    beforeEach(() => moxios.install());
    afterEach(() => {
        moxios.uninstall();
    });

    it('creates a minified link correctly', async () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({ status: 200, response: mockSucces });
        });

        const responce = await createShortLink('link');

        expect(responce).toEqual(mockSucces);
    });

    it('handles error correctly', async () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({ status: 500 });
        });

        const responce = await createShortLink('link');

        expect(responce).toEqual(null);
    });
});
