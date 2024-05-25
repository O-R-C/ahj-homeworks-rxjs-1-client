import setTitle from './setTitle'
import ServerApi from './Classes/ServerApi'
import OnlineReport from '@components/OnlineReport/OnlineReport'

setTitle('Online report')

new OnlineReport('body', ServerApi)
