import { pollingReducer } from '@/reducers/pollingReducer'
import { Subject, scan, share, startWith } from 'rxjs'

export default class pollingStore {
  constructor() {
    this.actions$ = new Subject()
    this.state$ = this.actions$.asObservable().pipe(
      startWith({
        type: 'INIT',
      }),
      scan((state, action) => pollingReducer(state, action), { messages: [] }),
      share(),
    )
  }

  dispatch = (action, payload = null) => this.actions$.next({ type: action, payload })
}

export const pollingStoreInstance = new pollingStore()
