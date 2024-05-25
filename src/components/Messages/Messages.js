import { map, distinctUntilChanged, tap } from 'rxjs/operators'
import { pollingSetMessages } from '@/actions/actions'
import { SET_MESSAGES } from '@/actions/actionTypes'
import Messages_UI from './Messages_UI'

/**
 * Class representing a messages component.
 *
 * @class
 * @param {HTMLElement} element - the element to render the messages component.
 * @param {pollingStore} store - the polling store instance.
 * @param {ServerApi} ServerApi - the server api instance.
 * @param {string} url - the server api url.
 */
export default class Messages {
  #ui
  #store
  #serverApi

  /**
   * Constructor.
   *
   * @param {HTMLElement} element - the element to render the messages component.
   * @param {pollingStore} store - the polling store instance.
   * @param {ServerApi} ServerApi - the server api instance.
   * @param {string} url - the server api url.
   */
  constructor(element, store, ServerApi, url) {
    if (!store) {
      throw new Error('Store not found')
    }

    if (!ServerApi) {
      throw new Error('ServerApi not found')
    }

    if (!url) {
      throw new Error('Url not found')
    }

    this.#ui = new Messages_UI(element)
    this.#serverApi = new ServerApi(url)
    this.#store = store

    this.#init()
  }

  /**
   * Initializes the component.
   */
  #init() {
    this.#subscribes()
    this.#serverApi.getMessages(
      (messages) => this.#store.dispatch(SET_MESSAGES, pollingSetMessages(JSON.parse(messages.messages))),
      () => this.#store.dispatch(SET_MESSAGES, pollingSetMessages([])),
    )
  }

  /**
   * Subscribes to the store state.
   */
  #subscribes() {
    this.#store.state$
      .pipe(
        map((state) => state.messages),
        distinctUntilChanged(),
      )
      .subscribe((state) => this.#ui.render(state.payload))
  }
}
