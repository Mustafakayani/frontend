import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import styles from "./dashboard.module.css";
import axios from "axios";
const URL = "http://localhost:5000/";




function Dashboard(){

    const [Events,setEvents] = useState([])
    const [todayEvents,setTodayEvents] = useState([])

    useEffect( ()=>{
        fetchData().then((data) =>{
            setEvents(data.events)
            const tEvents = data.events.filter(obj=>{
            //DUE DATE FROM OBJECT 
            let text = obj.due;
            let result = text.slice(8,10);
            let xaesh = new Date();
            let xxx = xaesh.getDate();
             if(xxx == result){
                console.log(obj.due)
                return obj  }
            });
            

            console.log("Tevents");
            console.log(tEvents);
            setTodayEvents(tEvents);
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
                <li>Home</li>              
                <li>
                    <Link className={styles.lnk} to="/eventregisteration">
                    Events Notification
                    </Link>
                </li>
                <li>     <Link className={styles.lnk}  to="/status" >
                    Edit Societies
                   </Link></li>
                <li>
                    
                    <a className={styles.lnk} href="https://cust.edu.pk/societies-clubs/">

                    Edit Event Types
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
                 {/* <h2>WELCOME to C.U.S.T EMS</h2>
                <h2>NAME</h2> */}

                <h1>Welcome to C.U.S.T EMS</h1>
            </div>
            <div>
                
            <h1 style={{backgroundColor: "lightblue",fontSize: "35px",top:"-300px",padding:"1px"}}>Today's Event</h1>
               
               {!todayEvents && <h1>Loading.....</h1> }
               {todayEvents && <div>
                
                    {todayEvents.map(obj=>{
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

export default Dashboard;