import {BrowserRouter, Routes, Route} from "react-router-dom";
import DokterList from "./components/DokterList";
import AddDokter from "./components/AddDokter";
import EditDokter from "./components/EditDokter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DokterList/>}/>
        <Route path="add" element={<AddDokter/>}/>
        <Route path="edit/:id" element={<EditDokter/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
