import useLocalStorage from 'use-local-storage'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate,Link } from 'react-router-dom'
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';

function App() {

  const defaultColor = window.matchMedia('(prefers-color-scheme: A)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultColor ? 'A' : 'B');
  const switchTheme = () => {
    const newTheme = theme === 'A' ? 'B' : 'A';
    setTheme(newTheme)
  }
 
  return (
    <div className="App"  data-theme={theme}>


      <Router>

      <div className='nav'>

        <br />
        <Link to="/About">
            <button>
          About
        </button> 
        </Link>
        <Link to="/">
        <button>
     Home
        </button>
        </Link>
        <Link to="/Blog">
        <button >
       Blog
        </button>
        </Link>
        <button onClick={switchTheme}>
          Theme
        </button>
        <br />
      </div>
      <img className='logo' src='logo.jpg' alt='logo' />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/About' element={<About />} />


        </Routes>


      </Router>

    </div>
  );
}

export default App;
