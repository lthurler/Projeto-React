import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";


function App() {
  return (
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Company</Link>
          <Link to="/company">Contact</Link>
          <Link to="/newproject">NewProject</Link>
        </div>
        <Container customClass="minHeight">
        <Routes>          
            <Route  path="/" element ={<Home/>} />
            <Route  path="/company" element ={<Company />} />
            <Route  path="/Contact" element ={<Contact />} />
            <Route  path="/newproject" element ={<NewProject />} />          
        </Routes>
        </Container>
        <p>Footer</p>
      </Router>

  );
}

export default App;
