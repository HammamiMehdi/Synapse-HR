import 'bootstrap/dist/css/bootstrap.min.css';
import './lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css'
import './lib/bootstrap/css/bootstrap.min.css'
import './lib/animate/animate.min.css'
import './lib/owlcarousel/assets/owl.carousel.min.css'
import './assets/css/style.css'
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './components/Error/ErrorPage';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';


function App() {
  
    return (
        <>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/Privacy' exact element={<PrivacyPolicy />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </>
  );
}

export default App;
