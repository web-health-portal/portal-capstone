import ReactDOM from 'react-dom'
import {App} from "./ui/App"
import store from "./store/store"
import 'bootstrap/dist/css/bootstrap.css';



ReactDOM.render(App(store), document.querySelector('#root'));