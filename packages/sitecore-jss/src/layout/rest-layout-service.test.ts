/* eslint-disable no-unused-expressions */
import { expect, spy, use } from 'chai';
import spies from 'chai-spies';
import { IncomingMessage, ServerResponse } from 'http';
import axios, { AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { AxiosDataFetcher } from '../axios-fetcher';
import { RestLayoutService } from './rest-layout-service';
import { LayoutServiceData, PlaceholderData } from './models';

use(spies);

describe('RestLayoutService', () => {
  let mock: MockAdapter;

  type SetHeader = (name: string, value: unknown) => void;

  before(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  after(() => {
    mock.restore();
  });

  it('should fetch layout data', () => {
    mock.onGet().reply((config) => {
      return [200, { ...config, data: { sitecore: { context: {}, route: { name: 'xxx' } } } }];
    });

    const service = new RestLayoutService({
      apiHost: 'http://sctest',
      apiKey: '0FBFF61E-267A-43E3-9252-B77E71CEE4BA',
      siteName: 'supersite',
    });

    return service
      .fetchLayoutData('/styleguide', 'en')
      .then((layoutServiceData: LayoutServiceData & AxiosRequestConfig) => {
        expect(layoutServiceData.url).to.equal(
          'http://sctest/sitecore/api/layout/render/jss?item=%2Fstyleguide&sc_apikey=0FBFF61E-267A-43E3-9252-B77E71CEE4BA&sc_site=supersite&sc_lang=en&tracking=true'
        );
        expect(layoutServiceData.data).to.deep.equal({
          sitecore: {
            context: {},
            route: { name: 'xxx' },
          },
        });
      });
  });

  it('should fetch layout data and invoke callbacks', () => {
    mock.onGet().reply((config) => {
      return [
        200,
        {
          ...config,
          data: { sitecore: { context: {}, route: { name: 'xxx' } } },
        },
        {
          'set-cookie': 'test-set-cookie-value',
        },
      ];
    });

    const req = {
      connection: {
        remoteAddress: '192.168.1.10',
      },
      headers: {
        cookie: 'test-cookie-value',
        referer: 'http://sctest',
        'user-agent': 'test-user-agent-value',
      },
    } as IncomingMessage;

    const setHeaderSpy: SetHeader = spy();

    const res = {
      setHeader: setHeaderSpy,
    } as ServerResponse;

    const service = new RestLayoutService({
      apiHost: 'http://sctest',
      apiKey: '0FBFF61E-267A-43E3-9252-B77E71CEE4BA',
      siteName: 'supersite',
      tracking: false,
    });

    return service
      .fetchLayoutData('/home', 'da-DK', req, res)
      .then((layoutServiceData: LayoutServiceData & AxiosRequestConfig) => {
        expect(layoutServiceData.headers.cookie).to.equal('test-cookie-value');
        expect(layoutServiceData.headers.referer).to.equal('http://sctest');
        expect(layoutServiceData.headers['user-agent']).to.equal('test-user-agent-value');
        expect(layoutServiceData.headers['X-Forwarded-For']).to.equal('192.168.1.10');

        expect(layoutServiceData.url).to.equal(
          'http://sctest/sitecore/api/layout/render/jss?item=%2Fhome&sc_apikey=0FBFF61E-267A-43E3-9252-B77E71CEE4BA&sc_site=supersite&sc_lang=da-DK&tracking=false'
        );
        expect(layoutServiceData.data).to.deep.equal({
          sitecore: {
            context: {},
            route: { name: 'xxx' },
          },
        });
        expect(setHeaderSpy).to.be.called.with('set-cookie', 'test-set-cookie-value');
      });
  });

  it('should fetch layout data', () => {
    mock.onGet().reply((config) => {
      return [
        200,
        {
          ...config,
          data: { sitecore: { context: {}, route: { name: 'xxx' } } },
        },
        {
          'set-cookie': 'test-set-cookie-value',
        },
      ];
    });

    const req = {
      connection: {
        remoteAddress: '192.168.1.10',
      },
      headers: {
        cookie: 'test-cookie-value',
        referer: 'http://sctest',
        'user-agent': 'test-user-agent-value',
      },
    } as IncomingMessage;

    const setHeaderSpy: SetHeader = spy();

    const res = {
      setHeader: setHeaderSpy,
    } as ServerResponse;

    const service = new RestLayoutService({
      apiHost: 'http://sctest',
      apiKey: '0FBFF61E-267A-43E3-9252-B77E71CEE4BA',
      siteName: 'supersite',
      tracking: false,
    });

    return service
      .fetchLayoutData('/home', 'da-DK', req, res)
      .then((layoutServiceData: LayoutServiceData & AxiosRequestConfig) => {
        expect(layoutServiceData.headers.cookie).to.equal('test-cookie-value');
        expect(layoutServiceData.headers.referer).to.equal('http://sctest');
        expect(layoutServiceData.headers['user-agent']).to.equal('test-user-agent-value');
        expect(layoutServiceData.headers['X-Forwarded-For']).to.equal('192.168.1.10');

        expect(layoutServiceData.url).to.equal(
          'http://sctest/sitecore/api/layout/render/jss?item=%2Fhome&sc_apikey=0FBFF61E-267A-43E3-9252-B77E71CEE4BA&sc_site=supersite&sc_lang=da-DK&tracking=false'
        );
        expect(layoutServiceData.data).to.deep.equal({
          sitecore: {
            context: {},
            route: { name: 'xxx' },
          },
        });
        expect(setHeaderSpy).to.be.called.with('set-cookie', 'test-set-cookie-value');
      });
  });

  it('should fetch layout data using custom configuration name', () => {
    mock.onGet().reply((config) => {
      return [
        200,
        {
          ...config,
          data: { sitecore: { context: {}, route: { name: 'xxx' } } },
        },
        {
          'set-cookie': 'test-set-cookie-value',
        },
      ];
    });

    const service = new RestLayoutService({
      apiHost: 'http://sctest',
      apiKey: '0FBFF61E-267A-43E3-9252-B77E71CEE4BA',
      siteName: 'supersite',
      configurationName: 'listen',
      tracking: false,
    });

    return service
      .fetchLayoutData('/home', 'da-DK')
      .then((layoutServiceData: LayoutServiceData & AxiosRequestConfig) => {
        expect(layoutServiceData.url).to.equal(
          'http://sctest/sitecore/api/layout/render/listen?item=%2Fhome&sc_apikey=0FBFF61E-267A-43E3-9252-B77E71CEE4BA&sc_site=supersite&sc_lang=da-DK&tracking=false'
        );
        expect(layoutServiceData.data).to.deep.equal({
          sitecore: {
            context: {},
            route: { name: 'xxx' },
          },
        });
      });
  });

  it('should fetch layout data using custom fetcher resolver', () => {
    const fetcherSpy = spy((url: string) => {
      return new AxiosDataFetcher().fetch<never>(url);
    });

    mock.onGet().reply(() => {
      return [200, { sitecore: { context: {}, route: { name: 'xxx' } } }];
    });

    const service = new RestLayoutService({
      apiHost: 'http://sctest',
      apiKey: '0FBFF61E-267A-43E3-9252-B77E71CEE4BA',
      siteName: 'supersite',
      dataFetcherResolver: () => fetcherSpy,
    });

    return service
      .fetchLayoutData('/home', 'da-DK')
      .then((layoutServiceData: LayoutServiceData) => {
        expect(layoutServiceData).to.deep.equal({
          sitecore: {
            context: {},
            route: { name: 'xxx' },
          },
        });

        expect(fetcherSpy).to.be.called.once;
        expect(fetcherSpy).to.be.called.with(
          'http://sctest/sitecore/api/layout/render/jss?item=%2Fhome&sc_apikey=0FBFF61E-267A-43E3-9252-B77E71CEE4BA&sc_site=supersite&sc_lang=da-DK&tracking=true'
        );
      });
  });

  it('should catch 404 when request layout data', () => {
    mock.onGet().reply(() => {
      return [
        404,
        {
          sitecore: {
            context: {
              pageEditing: false,
              language: 'en',
            },
            route: null,
          },
        },
      ];
    });

    const service = new RestLayoutService({
      apiHost: 'http://sctest',
      apiKey: '0FBFF61E-267A-43E3-9252-B77E71CEE4BA',
      siteName: 'supersite',
    });

    return service
      .fetchLayoutData('/styleguide', 'en')
      .then((layoutServiceData: LayoutServiceData) => {
        expect(layoutServiceData).to.deep.equal({
          sitecore: {
            context: {
              pageEditing: false,
              language: 'en',
            },
            route: null,
          },
        });
      });
  });

  it('should allow non 404 errors through', () => {
    mock.onGet().reply(() => {
      return [401, { message: 'whoops' }];
    });

    const service = new RestLayoutService({
      apiHost: 'http://sctest',
      apiKey: '0FBFF61E-267A-43E3-9252-B77E71CEE4BA',
      siteName: 'supersite',
    });

    return service.fetchLayoutData('/styleguide', 'en').catch((error) => {
      expect(error.response.status).to.equal(401);
      expect(error.response.data.message).to.equal('whoops');
    });
  });

  it('should fetch placeholder data', () => {
    mock.onGet().reply(() => {
      return [
        200,
        {
          name: 'x1',
          path: 'x1/x2',
          elements: [],
        },
        {
          'set-cookie': 'test-set-cookie-value',
        },
      ];
    });

    const req = {
      connection: {
        remoteAddress: '192.168.1.10',
      },
      headers: {
        cookie: 'test-cookie-value',
        referer: 'http://sctest',
        'user-agent': 'test-user-agent-value',
      },
    } as IncomingMessage;

    const setHeaderSpy: SetHeader = spy();

    const res = {
      setHeader: setHeaderSpy,
    } as ServerResponse;

    const service = new RestLayoutService({
      apiHost: 'http://sctest',
      apiKey: '0FBFF61E-267A-43E3-9252-B77E71CEE4BA',
      siteName: 'supersite',
      tracking: false,
    });

    return service
      .fetchPlaceholderData('superPh', '/xxx', 'da-DK', req, res)
      .then((placeholderData: PlaceholderData) => {
        expect(placeholderData).to.deep.equal({
          name: 'x1',
          path: 'x1/x2',
          elements: [],
        });
        expect(setHeaderSpy).to.be.called.with('set-cookie', 'test-set-cookie-value');
      });
  });

  it('should fetch placeholder data using custom fetcher resolver', () => {
    const fetcherSpy = spy((url: string) => {
      return new AxiosDataFetcher().fetch<never>(url);
    });

    mock.onGet().reply(() => {
      return [
        200,
        {
          name: 'x1',
          path: 'x1/x2',
          elements: [],
        },
      ];
    });

    const service = new RestLayoutService({
      apiHost: 'http://sctest',
      apiKey: '0FBFF61E-267A-43E3-9252-B77E71CEE4BA',
      siteName: 'supersite',
      dataFetcherResolver: () => fetcherSpy,
    });

    return service
      .fetchPlaceholderData('superPh', '/xxx', 'da-DK')
      .then((placeholderData: PlaceholderData) => {
        expect(placeholderData).to.deep.equal({
          name: 'x1',
          path: 'x1/x2',
          elements: [],
        });

        expect(fetcherSpy).to.be.called.once;
        expect(fetcherSpy).to.be.called.with(
          'http://sctest/sitecore/api/layout/placeholder/jss?placeholderName=superPh&item=%2Fxxx&sc_apikey=0FBFF61E-267A-43E3-9252-B77E71CEE4BA&sc_site=supersite&sc_lang=da-DK&tracking=true'
        );
      });
  });
});
