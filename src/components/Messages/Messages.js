import { map, distinctUntilChanged, tap } from 'rxjs/operators'
import { pollingSetMessages } from '@/actions/actions'
import { SET_MESSAGES } from '@/actions/actionTypes'
import Messages_UI from './Messages_UI'

export default class Messages {
  #ui
  #store
  #serverApi

  constructor(element, store, ServerApi, url) {
    if (!store) {
      throw new Error('Store not found')
    }

    this.#ui = new Messages_UI(element)
    this.#serverApi = new ServerApi(url)
    this.#store = store

    this.#init()
  }

  #init() {
    this.#subscribes()
    this.#serverApi.getMessages((messages) => this.#store.dispatch(SET_MESSAGES, pollingSetMessages(messages.messages)))
  }

  #subscribes() {
    this.#store.state$
      .pipe(
        map((state) => state.messages),
        distinctUntilChanged(),
      )
      .subscribe((state) => this.#ui.render(state.payload))
  }
}
