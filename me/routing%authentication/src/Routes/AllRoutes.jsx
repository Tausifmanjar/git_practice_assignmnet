import { Route, Routes } from "react-router-dom"
import Login from '../Pages/Login'
import Home  from '../Pages/Home'
import About  from '../Pages/About'
import Contact from '../Pages/Contact'
import AllProducts  from '../Pages/Products'

export const AllRoutes = () => {
    return (
        <div>
         <Routes>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/AllProduct" element={<AllProducts/>}/>
        </Routes>
        </div>
    )
}
