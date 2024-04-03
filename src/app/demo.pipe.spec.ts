import {ChangeDetectorRef} from '@angular/core';
import {TestBed} from '@angular/core/testing';

import {DemoPipe} from "./demo.pipe";

describe('DemoPipe', () => {
  let sut: DemoPipe;

  beforeEach(() => {
    const mockCdr: Partial<ChangeDetectorRef> = {
      markForCheck: () => null,
    };

    TestBed.configureTestingModule({
      providers: [
        DemoPipe,
        { provide: ChangeDetectorRef, useValue: mockCdr },
      ],
    });
    sut = TestBed.inject(DemoPipe);
  });

  it('create an instance', () => {
    expect(sut).toBeTruthy();
  });
});
