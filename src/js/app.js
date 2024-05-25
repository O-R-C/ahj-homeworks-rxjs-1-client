import setTitle from './setTitle'
import Messages from '@/components/Messages/Messages'
import ServerApi from './Classes/ServerApi'
import { pollingStoreInstance } from '@/store/pollingStore'

setTitle('Polling')

new Messages('body', pollingStoreInstance, ServerApi, 'http://localhost:10000/messages/unread')
