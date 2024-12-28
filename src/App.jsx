import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Outlet } from "react-router-dom";



function App() {
    return (
        <div >
            <Header />
            <div className='mt-5'>
            <Outlet />
            </div>
        </div>
    );
}

export default App;