import { pollingReducer } from '@/reducers/pollingReducer'
import { Subject, scan, share, startWith } from 'rxjs'

/**
 * Class representing a polling store.
 *
 * @class
 * @property {Subject} actions$ - the actions subject.
 * @property {Observable} state$ - the state observable.
 */
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

  /**
   * Dispatches an action with a payload.
   *
   * @param {string} action - the action type.
   * @param {Object} payload - the action payload.
   */
  dispatch = (action, payload = null) => this.actions$.next({ type: action, payload })
}

export const pollingStoreInstance = new pollingStore()
