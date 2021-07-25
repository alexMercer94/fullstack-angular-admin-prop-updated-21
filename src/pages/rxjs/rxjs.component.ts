import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit, OnDestroy {
  public intervalSub: Subscription;

  constructor() {
    let i = 0;
    /* const obs$ = new Observable((observer) => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llego a 2');
        }
      }, 1000);
    });

    obs$.pipe(retry()).subscribe(
      (value) => console.log('Subs', value),
      (err) => {
        console.warn('errr', err);
      },
      () => console.log('Obs terminado')
    ); */
    this.intervalSub = this.returnInterval().subscribe(console.log);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }

  returnInterval(): Observable<number> {
    return interval(500).pipe(
      take(10),
      map((value) => {
        return value + 1;
      }),
      filter((value) => (value % 2 === 0 ? true : false))
    );
  }
}
