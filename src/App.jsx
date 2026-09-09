import './App.css'
import { CounterLayout } from './features/counter/counterLayout'
import { GLOBAL_CONSTANTS } from './shared/constants/global.constants'

function App() {

  return (
    <>
      <h1>{GLOBAL_CONSTANTS.APP_NAME}</h1>
      <CounterLayout/>
    </>
  )
}

export default App
