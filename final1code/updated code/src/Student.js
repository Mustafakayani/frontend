import styles from "./Student.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    useNavigate 
  } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import {Link} from "react-router-dom";

function Student(){
    const notify = () => toast("Incorrect Username or Password");

    const navigate = useNavigate();

    const sendRequest = async () => {
        await axios
          .post("http://localhost:5000/login", {
            email: String(inputs.email),
            password: String(inputs.password)
          })
          .then((res) => {
            res = res.data;

            console.log(res) 
          });
      };


    const [inputs, setInputs] = useState({
        email: "",
        password: "",
  
      });
      const [checked, setChecked] = useState(false);
  
      const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));}
    
    
        const handleSubmit = (e) => {
            e.preventDefault(); 
            console.log(inputs)
            sendRequest().then(() => navigate("/studentdashboard")).catch((e)=>{
                notify()
            });

          };








    return(<>
     <ToastContainer/>
    <div className={styles.parent}>
     <div className={styles.contact_form}>
           <img src="./stdlogo.jpg" className={styles.avatar}></img>
            <h2>Student Login</h2>
            <form>
                <p>Reg No</p>
                <input name="email" type="email" placeholder="Enter Email" onChange={handleChange} ></input>
                <p>Password</p>
                <input name="password" type="password" placeholder="Enter Password" onChange={handleChange}    ></input>
                {/* <Link to="/studentdashboard"> */}
                <input type="submit" value="Sign in"
                onClick={(e)=>handleSubmit(e)}
                ></input>
                {/* </Link> */}
              
               
            </form>

        </div>
    </div>

    
    </>)
}

export default Student;