import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      {/* <Route path='/product' element={<Product/>}></Route>
      <Route path='/pricing' element={<Pricing/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route> */}
    </Routes>
    </>
  );
}

export default App;
