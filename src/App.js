import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Rating from './components/Rating/Rating';
import EntranceContainer from './components/Entrance/EntranceContainer';
import ProfileVolunteer from './components/ProfileVolunteer/ProfileVolunteer';
import Footer from './components/Footer/Footer';
import ProfileOrg from './components/ProfileOrg/ProfileOrg';
import { Provider } from 'react-redux';
import store from './redux/redux-store';


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='app-wrapper'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/rating' element={<Rating />} />
            <Route path="/entrance" element={<EntranceContainer />} />
            <Route path="/profileVolunteer" element={<ProfileVolunteer />} />
            <Route path="/profileOrg" element={<ProfileOrg />} />
          </Routes>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
