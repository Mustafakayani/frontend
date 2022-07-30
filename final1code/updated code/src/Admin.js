import styles from "./AdminDashboard.module.css";
import {Link} from "react-router-dom";

function Admin(){




    










    return(<>
    <div className={styles.parent}>
     <div className={styles.contact_form}>
           <img src="./stdlogo.jpg" className={styles.avatar}></img>
            <h2>Admin Login</h2>
            <form>
                <p>Email</p>
                <input type="email" placeholder="Enter Email"></input>
                <p>Password</p>
                <input type="password" placeholder="Enter Password"></input>
                <Link to="/admindashboard">
                <input type="submit" value="Sign in"></input>
                </Link>
                <p>
                <input type="checkbox" ></input>
                Remember Me
                </p>
            </form>

        </div>
    </div>

    
    </>)
}

export default Admin;