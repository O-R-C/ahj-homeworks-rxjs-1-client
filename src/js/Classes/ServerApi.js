import firesEvent from '../firesEvent'

/**
 * Server API class for establishing WebSockets connection to server
 * and receiving messages from server.
 */
export default class ServerApi {
  /**
   * URL of WebSocket connection to server.
   * @private
   */
  #url

  /**
   * WebSocket connection to server.
   * @private
   */
  #sse

  /**
   * Constructor.
   * @param {string} url - URL of WebSocket connection to server.
   */
  constructor(url) {
    this.#url = url
  }

  /**
   * Initializes WebSocket connection and sets up event listeners.
   */
  init() {
    this.#createSSE()
    this.#addListeners()
  }

  /**
   * Creates WebSocket connection to server.
   * @private
   */
  #createSSE() {
    this.#sse = new EventSource(this.#url)
  }

  /**
   * Sets up event listeners for WebSocket connection.
   * @private
   */
  #addListeners() {
    this.#sse.addEventListener('open', this.#handleOpen)
    this.#sse.addEventListener('close', this.#handleClose)
    this.#sse.addEventListener('message', this.#handleMessage)
  }

  /**
   * Handles 'open' event from WebSocket connection.
   * @private
   */
  #handleOpen = () => {
    console.log('Connection opened')

    firesEvent('connectionOpen')
  }

  /**
   * Handles 'close' event from WebSocket connection.
   * @private
   */
  #handleClose = () => {
    console.log('Connection closed')
  }

  /**
   * Handles 'message' event from WebSocket connection.
   * @private
   */
  #handleMessage = ({ data }) => {
    firesEvent('reportMessage', JSON.parse(data))
  }
}
