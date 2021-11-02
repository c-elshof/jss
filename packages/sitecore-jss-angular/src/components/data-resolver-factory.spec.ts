import { Injector } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Resolve, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { dataResolverFactory } from './data-resolver-factory';
import { DataResolver, DATA_RESOLVER } from './placeholder.token';

const mockSyncResolver: Resolve<string> = {
  resolve() {
    return 'Sync';
  },
};

class MockAsyncResolver implements Resolve<string> {
  resolve() {
    return Promise.resolve('Async');
  }
}

describe('dataResolverFactory', () => {
  let resolver: DataResolver;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        MockAsyncResolver,
        {
          provide: DATA_RESOLVER,
          useFactory: dataResolverFactory,
          deps: [Injector, ActivatedRoute, Router],
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    resolver = TestBed.get(DATA_RESOLVER);
  });

  it('Resolves data from sync, async, literal and type resolvers', (done) => {
    const pending = resolver([
      {
        resolve: { sync: mockSyncResolver, async: MockAsyncResolver },
        componentDefinition: {} as any,
      },
    ]);

    pending.then((rendering: any[]) => {
      const first = rendering[0];
      expect(first.data).toEqual({
        sync: 'Sync',
        async: 'Async',
      });

      done();
    });
  });
});