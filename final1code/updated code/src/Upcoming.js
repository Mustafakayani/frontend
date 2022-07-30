import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import styles from "./dashboard.module.css";
import axios from "axios";
const URL = "http://localhost:5000/";

function Upcoming(){

    const [Events,setEvents] = useState([])

    useEffect( ()=>{
        fetchData().then((data) =>{
            setEvents(data.events)
            
        });
    },[])


 
    const  fetchData = async()=>{
        
        return await axios.get(URL).then((res) => res.data);
            
    }


return(<>
 <div className={styles.dparent}>

 <div className={styles.sidebar} >  
             <img src="./emsdashboardlogo.png"  className={styles.logo}></img>
            <ul className={styles.event_panel}>
                <li>
                <Link className={styles.lnk} to="/studentdashboard">

                    Home
                    </Link>
                    </li>              
                <li>
                    <Link className={styles.lnk} to="/eventregisteration">
                    Organizing Event
                    </Link>
                </li>
                <li>
                <Link className={styles.lnk}  to="/status" >
                    Event Status
                   </Link>
                    </li>
 
 
                <li>
                <a className={styles.lnk} href="https://cust.edu.pk/societies-clubs/">

Other Socities
</a>
                    
                    </li>



                <li>
                        <Link className={styles.lnk} to="/upcomingevents">
                            
                            Upcoming Events

                        </Link>
                </li>
            </ul>
        </div>

       <div className={styles.right_panel}>
            <div className={styles.banner}> 
                 <h2>WELCOME to C.U.S.T EMS</h2>
                <h2></h2>
            </div>
            <div>
            
                <h1 style={{backgroundColor: "lightblue",fontSize: "35px",top:"-300px",padding:"1px"}}>Upcoming Events</h1>
               {!Events && <h1>Loading.....</h1> }
               {Events && <div>
                
                    {Events.map(obj=>{
                        return<div className={styles.evnt}>
                            <h2>{obj.name}</h2>
                            <li>{obj.deptname}</li>
                            <li>{obj.due}</li>
                            <li>{obj.location}</li>
                        </div>
                    })}
                </div>}
            </div>
        </div>
    </div>

    </>)
}

export default Upcoming;