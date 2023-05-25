import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/Home";
import { Searchlist } from "./pages/searchlist/Searchlist";
import { List } from "./pages/list/List";
import { bootstrap } from "bootstrap";

function App() {
  return (
  <div>
 <Routes>
        <Route path="/" element={ 
          <Home/>
        } />
        <Route path="/Search" element={ 
          <List/>
        } />
        
      </Routes>
  </div>
  );
}

export default App;
