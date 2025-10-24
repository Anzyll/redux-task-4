import './App.css'
import BuyCake from './BuyCake'
import {Provider} from "react-redux"
import store from './Redux/cake/CakeStore'
import HooksBuyCake from './HooksBuyCake'

function App() {
  return (
    <Provider store={store}>
    <div>
    <BuyCake/>
    <HooksBuyCake/>
    </div>
    </Provider>
  )
}

export default App
