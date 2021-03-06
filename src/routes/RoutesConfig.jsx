import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';


const RoutesConfig = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path= "/home" element={<Home />} />
             
            </Routes>
        </Router>
    )
}

export default RoutesConfig
