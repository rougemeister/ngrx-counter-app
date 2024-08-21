
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../state/counter.actions';
import { AsyncPipe } from '@angular/common';
import { selectCount } from '../../state/counter.selector';
import { OptionsComponent } from '../options/options.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe, OptionsComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select(selectCount);
    this.store
      .select((state) => state.count)
      .subscribe((count) =>
        localStorage.setItem('count', JSON.stringify(count))
      );
  }


  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
