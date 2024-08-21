import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectAppState = (state: AppState) => state.count;

export const selectCount = createSelector(
  selectAppState,
  (state: number) => state
);
