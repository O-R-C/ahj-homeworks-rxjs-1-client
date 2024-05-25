import { ajax } from 'rxjs/ajax'
import { catchError, of, interval, switchMap } from 'rxjs'
import { map } from 'rxjs/operators'

/**
 * This class is responsible for making API calls to the server.
 *
 * @class
 * @constructor
 * @param {string} url - The URL of the server.
 */
export default class ServerApi {
  #url

  constructor(url) {
    this.#url = url
  }

  /**
   * Initializes the server API listeners.
   */
  init() {
    this.#addListeners()
  }

  /**
   * Adds event listeners for the server API.
   */
  #addListeners() {}

  /**
   * Creates an observable that will make an AJAX request to the server every 5 seconds.
   * @returns {Observable<any>} An observable that will make an AJAX request to the server every 5 seconds.
   */
  #createAjax() {
    return interval(5000).pipe(
      switchMap(() =>
        ajax.getJSON(this.#url).pipe(
          map((data) => data),
          catchError((error) => of(error)),
        ),
      ),
    )
  }

  /**
   * Starts listening for server messages.
   *
   * @param {function} listener - The listener function that will receive the server messages.
   */
  getMessages(listener, errorListener) {
    const obs$ = this.#createAjax()

    obs$.subscribe({ next: listener, error: errorListener })
  }
}
