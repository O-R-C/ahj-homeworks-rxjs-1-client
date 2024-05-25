import getElement from '@/js/getElement'

import styles from './Message.module.css'

/**
 * Creates a message element with the given id, from, subject, and received.
 *
 * @param {Object} props - The properties of the message.
 * @param {string} props.id - The id of the message.
 * @param {string} props.from - The sender of the message.
 * @param {string} props.subject - The subject of the message.
 * @param {string} props.received - The date the message was received.
 * @return {HTMLElement} The created message element.
 */
export const Message = ({ id, from, subject, received }) => {
  const message = getElement({
    tag: 'div',
    classes: styles['message'],
    data: {
      id,
    },
  })

  const fromElement = getElement({
    tag: 'div',
    classes: styles['message__from'],
    textContent: from,
  })

  const subjectElement = getElement({
    tag: 'div',
    classes: styles['message__body'],
    textContent: `${subject.substring(0, 15)}...`,
  })

  const receivedElement = getElement({
    tag: 'div',
    classes: styles['message__received'],
    textContent: received,
  })

  message.append(fromElement, subjectElement, receivedElement)
  return message
}

export default Message
