import { GLOBAL_CONSTS } from './consts/global.consts'
import { UserCounterLayoutSingle } from './features/user_counter/userCounterLayoutSingle'

function App() {

  return (
    <>
      <h1>{GLOBAL_CONSTS.PRINCIPAL_NAME}</h1>
      <UserCounterLayoutSingle/>
    </>
  )
}

export default App
