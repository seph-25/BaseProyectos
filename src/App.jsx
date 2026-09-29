import { GLOBAL_CONSTS } from './consts/global.consts'
import { UserCounterLayout } from './features/user_counter/userCounterLayout'

function App() {

  return (
    <>
      <h1>{GLOBAL_CONSTS.PRINCIPAL_NAME}</h1>
      <UserCounterLayout/>
    </>
  )
}

export default App
