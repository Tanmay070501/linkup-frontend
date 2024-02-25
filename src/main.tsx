import ReactDOM from 'react-dom/client'
import RouterApp from './RouterApp.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
        <Provider store={store}>
            <RouterApp />
        </Provider>
)
