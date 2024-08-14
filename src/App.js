import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import Home from './Pages/Home';
import Blog from './Pages/Blog';

function App() {
  return (
    <div className="App">
      
      <Router> {/* Wrap your components with Router */}
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Define your routes */}
          <Route path='blog' element={<Blog/>}/>
        </Routes>
        
      </Router>

    </div>
  );
}

export default App;
