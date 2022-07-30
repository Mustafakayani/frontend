import styles from "./app.module.css";
import { Link } from "react-router-dom";

function App() {
  return (<>
  <div className={styles.parent}>

  <img src="./emsdashboardlogo.png"  className={styles.logo}></img>
  <div className={styles.title}>CUST Event Management System</div>
 

  <div className={styles.container}>
  <Link to='/studentlogin'>
      <div className={styles.box}>
            <img src="./ss.jpg" ></img>
            <h1>Student</h1>
      </div>
      </Link>


      <Link to='/facultylogin'>
      <div className={styles.box}>
           <img src="./ts.jpg"></img>
           <h1>Faculty</h1>
      </div>
      </Link>


      <Link to="/Adminlogin">
      <div className={styles.box}>
          <img src="./as.jpg"></img>
          <h1>Admin</h1>
      </div>
      </Link>
     
  </div>
  </div>
  </>  );
}

export default App;
