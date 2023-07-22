import {Route, Routes} from "react-router-dom";
import Homepage from "../pages/Homepage";
import SignupPage from "../pages/SignupPage";

import NotesPage from "../pages/NotesPage";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/LoginPage";


export default function AllRoutes(){

    return <Routes>
        <Route path = "/" element ={<Homepage/>}></Route>
        <Route path = "/register" element ={<SignupPage/>}></Route>
        <Route path = "/login" element={<LoginPage/>}></Route>
        <Route path = "/notes" element ={<PrivateRoute><NotesPage/></PrivateRoute>}></Route>
    </Routes>
}