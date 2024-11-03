import { BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home"; 
import {About} from "./pages/about"; 
import {Contact} from "./pages/contact"; 
import {Service} from "./pages/Service"; 
import {Register} from "./pages/register"; 
import {Login} from "./pages/login"; 
import {Logout} from "./pages/logout";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Error } from "./pages/Error";
import { AdminLayout } from "./components/layout/adminlayout";
import { AdminUsers } from "./pages/Admin-Users";
import { AdminContacts } from "./pages/Admin-Contacts";
import { AdminUpdate } from "./pages/Admin-Update";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />}/>
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/users/:id/edit" element={<AdminUpdate />} />
            <Route path="contacts" element={<AdminContacts />}/>
            
          </Route>
        </Routes>
      <Footer />
      </BrowserRouter>  
    </>
  );
};

export default App;