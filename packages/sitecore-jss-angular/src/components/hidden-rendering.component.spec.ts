import {
  Component,
  DebugElement,
} from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { JssModule } from '../lib.module';

@Component({
  selector: 'test-hidden-rendering',
  template: `
    <sc-hidden-rendering></sc-hidden-rendering>
  `,
})
class TestHiddenRenderingComponent {
}

describe('<sc-hidden-rendering />', () => {
  let fixture: ComponentFixture<TestHiddenRenderingComponent>;
  let de: DebugElement;
  let comp: TestHiddenRenderingComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHiddenRenderingComponent,
      ],
      imports: [
        JssModule.withComponents([
          { name: 'TestComponent', type: TestHiddenRenderingComponent },
        ]),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHiddenRenderingComponent);
    de = fixture.debugElement;

    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(comp).toBeDefined();
  });

  it('should show section', () => {
    const div = de.nativeElement.getElementsByTagName('div')[0];
    expect(div).toBeDefined();
    expect(div.getAttribute('style')).toBe('height: 100px; background-image: linear-gradient(45deg, #ffffff 25%, #dcdcdc 25%, #dcdcdc 50%, #ffffff 50%, #ffffff 75%, #dcdcdc 75%, #dcdcdc 100%); background-size: 3px 3px;');
  });
});
