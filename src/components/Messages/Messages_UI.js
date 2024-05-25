import BaseUI from '@/js/Classes/BaseUI'
import getElement from '@/js/getElement'

import styles from './Messages.module.css'
import Message from '../ui/Message/Message'

/**
 * Messages_UI class - UI component for messages.
 *
 * @class
 * @extends {BaseUI}
 */
export default class Messages_UI extends BaseUI {
  /**
   * Creates app element.
   *
   * @returns {HTMLElement} - app element.
   */
  createApp() {
    const app = getElement({
      tag: 'div',
      classes: styles['messages'],
    })

    const header = getElement({
      tag: 'h3',
      classes: styles['messages__header'],
      textContent: 'Incoming messages',
    })

    this.messagesContainer = getElement({
      tag: 'div',
      classes: styles['messages__container'],
    })

    app.append(header, this.messagesContainer)
    return app
  }

  /**
   * Adds a message to the messages container.
   *
   * @param {Object} message - message object.
   */
  addMessage(message) {
    this.messagesContainer.append(Message(message))
  }

  /**
   * Clears messages container.
   */
  #clearMessages() {
    this.messagesContainer.innerHTML = ''
  }

  /**
   * Renders messages from the given state.
   *
   * @param {Object[]} state - messages state.
   */
  render(state) {
    this.#clearMessages()
    if (!state || state.length === 0) return
    state.forEach((message) => this.addMessage(message))
  }
}
