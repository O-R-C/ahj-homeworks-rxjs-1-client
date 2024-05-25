import getElement from '@/js/getElement'

import styles from './Message.module.css'

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
