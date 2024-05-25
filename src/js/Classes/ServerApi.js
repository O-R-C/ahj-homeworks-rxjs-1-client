import { ajax } from 'rxjs/ajax'
import { catchError, of, interval, switchMap } from 'rxjs'
import { map, tap } from 'rxjs/operators'

export default class ServerApi {
  #url

  constructor(url) {
    this.#url = url
  }

  init() {
    this.#addListeners()
  }

  #addListeners() {}

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

  getMessages(listener) {
    const obs$ = this.#createAjax()

    obs$.subscribe({ next: listener, error: (error) => console.log(error) })
  }
}
