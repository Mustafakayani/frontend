import styles from "./Student.module.css";
import {Link} from "react-router-dom";

function Faculty(){
    return(<>
    <div className={styles.parent}>
     <div className={styles.contact_form}>
           <img src="./stdlogo.jpg" className={styles.avatar}></img>
            <h2>Faculty Login</h2>
            <form>
                <p>Email</p>
                <input type="email" placeholder="Enter Email"></input>
                <p>Password</p>
                <input type="password" placeholder="Enter Password"></input>
                <Link to="/facultydashboard">
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

export default Faculty;