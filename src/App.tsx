import './App.css';
import { Routes, Route } from "react-router-dom";
import { Layout } from './components/Layout/Layout';
import { Overview } from './modules/Overview/Overview';
import { Contacts } from './modules/Contacts/Contacts';
import { Templates } from './modules/Templates/Templates';

function App() {
  return (
    <div className="app-container">
    <Routes>
      <Route path = "/" element={<Layout/>}>
      <Route index element={<Overview/>} />
      <Route path = "/overview" element ={<Overview/>}></Route>
      <Route path = "/templates" element ={<Templates/>}></Route>
      <Route path = "/contacts" element ={<Contacts/>}></Route>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
