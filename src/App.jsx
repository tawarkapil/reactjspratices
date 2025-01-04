import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Outlet } from "react-router-dom";
import { Suspense } from 'react';



function App() {
    return (
        <div >
            <Header />
            <Suspense className='mt-5' fallback={<h1 className='mt-5'>Loading...</h1>}>
                <Outlet  />
            </Suspense>
        </div>
    );
}

export default App;