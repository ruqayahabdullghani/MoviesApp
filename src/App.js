import './App.css';
import Header from './Component/Header';
import { BrowserRouter as Router , Routes ,Route  } from 'react-router-dom';
import WatchList from './Component/WatchList';
import Add from './Component/Add';
import Watched from './Component/Watched';
import GlobalProvider from "./Component/Context/GlobalState"
function App() {
  return (
  <Router>
    <GlobalProvider>
    <Header/>
    <Routes>
      <Route path='/'element={<WatchList/>}/>
      <Route path='/watched' element={<Watched/>}/>
      <Route path='/Add' element={<Add/>}/>
    </Routes>
    </GlobalProvider>
  </Router>
  );
}

export default App;
