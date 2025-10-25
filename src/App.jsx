import './App.css'
import BuyCake from './BuyCake'
import {Provider} from "react-redux"
import store from './Redux/cake/CakeStore'
import HooksBuyCake from './HooksBuyCake'
import HooksBuyIcecream from './HooksBuyIcecream'
import NewBuyIcecream from './NewCake'
import UserContainer from './UserContainer'

function App() {
  return (
    <Provider store={store}>
    <div>
    <BuyCake/>
    <HooksBuyCake/>
    <HooksBuyIcecream/>
    <NewBuyIcecream/>
    <UserContainer/>
    </div>
    </Provider>
  )
}

export default App
