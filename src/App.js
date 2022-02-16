import './App.css';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Statename from './component/Statename';
import Ap from './component/States/Ap';
import Up from './component/States/Up';
import Delhi from './component/States/Delhi';
import Tourism from './component/Apdetails/Tourism';
import Food from './component/Apdetails/Food';
import Culture from './component/Apdetails/Culture';
// import Tradition from './component/Apdetails/Tourism';
import Festival from './component/Apdetails/Festival'
import Dtourism from './component/Delhidetails/Dtourism';
import Dfood from './component/Delhidetails/Dfood';
import Dculture from './component/Delhidetails/Dculture';
import Dfestival from './component/Delhidetails/Dfestival';
import Utourism from './component/updetails/Utourism';
import Ufood from './component/updetails/Ufood';
import Uculture from './component/updetails/Uculture';
import Ufestival from './component/updetails/Ufestival';
import Teammembers from './component/Teammembers';
import TeamB from './component/TeamB';
import Title from './component/usecontext/Title';
function App() {
  return (
    <div >
        <center><h1><kbd>We Have Vacation Connection || Make Your Holidays Memorable</kbd></h1></center>
        <Title/>
        <Router>
          <Statename />
          <Routes>
            {/* <Route exact path='/' element={<Ap />} /> */}
            <Route exact path='/' element={<Up />} />
            <Route exact path='/ap' element={<Ap />}/>
            <Route exact path='/teamA' element={<Teammembers />} />
            <Route exact path='/teamB' element={<TeamB />} />
            <Route exact path="/tourism" element={<Tourism />} />
            <Route exact path="/food" element={<Food />} />
            <Route exact path="/culture" element={<Culture />} />
            <Route exact path="/festival" element={<Festival />} />
            <Route exact path='/delhi' element={<Delhi />} />
            <Route exact path="/delhi/tourism" element={<Dtourism/>} />
            <Route exact path="/delhi/food" element={<Dfood />} />
             <Route exact path="/delhi/culture" element={<Dculture />} />
            <Route exact path="/delhi/festival" element={<Dfestival />} />
            <Route exact path='/up' element={<Up />} />
            <Route exact path="/up/tourism" element={<Utourism/>} />
            <Route exact path="/up/food" element={<Ufood />} />
            <Route exact path="/up/culture" element={<Uculture />} />
            <Route exact path="/up/festival" element={<Ufestival />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
