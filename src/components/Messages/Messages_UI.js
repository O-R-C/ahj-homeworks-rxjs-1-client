import BaseUI from '@/js/Classes/BaseUI'
import getElement from '@/js/getElement'

import styles from './Messages.module.css'
import Message from '../ui/Message/Message'

export default class Messages_UI extends BaseUI {
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

  addMessage(message) {
    this.messagesContainer.append(Message(message))
  }

  #clearMessages() {
    this.messagesContainer.innerHTML = ''
  }

  render(state) {
    this.#clearMessages()
    if (!state || state.length === 0) return
    state.forEach((message) => this.addMessage(message))
  }
}
