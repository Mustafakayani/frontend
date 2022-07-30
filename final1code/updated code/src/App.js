import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Home.js"
import Student from "./Student.js";
import Faculty from "./Faculty.js";
import Admin from "./Admin.js";
import Dashboard from "./Dashboard.js";
import EventRegisteration from "./Eventregisteration.js";
import Upcoming from "./Upcoming.js";
import Status from "./Status"
function App(){
    return(
<Router>
    <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/studentlogin" element={<Student/>}/>
         <Route path="/facultylogin" element={<Faculty/>}/>
         <Route path="/Adminlogin"  element={<Admin/>} />
         <Route path="/studentdashboard" element={<Dashboard/>} />
         <Route path="/upcomingevents" element={<Upcoming/>} />
         <Route path="/eventregisteration" element={<EventRegisteration/>}/>
         <Route path="/status" element={<Status/>}/>
    </Routes>
</Router>

    )
}

export default App