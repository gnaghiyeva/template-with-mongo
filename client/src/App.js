import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddEmployee from "./pages/Home/AddEmployee";
import EditEmployee from "./pages/Home/EditEmployee";
import { EmployeeContextProvider } from "./context/EmployeeContext";


function App() {
  return (
    <>
    <EmployeeContextProvider>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/add-employee" element={<AddEmployee/>}></Route>
      <Route path="/edit-employee/:id" element={<EditEmployee/>}></Route>
      {/* <Route path='/product' element={<Product/>}></Route>
      <Route path='/pricing' element={<Pricing/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route> */}
    </Routes>
    </EmployeeContextProvider>
    </>
  );
}

export default App;
