import {ChangeDetectorRef, effect, inject, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'demo',
  standalone: true
})
export class DemoPipe implements PipeTransform {

  private cdr = inject(ChangeDetectorRef);

  constructor() {
    effect(() => {
      console.log('do something');
    });
  }
  transform(value: unknown, ...args: unknown[]): unknown {
    this.cdr.markForCheck();
    return null;
  }

}
