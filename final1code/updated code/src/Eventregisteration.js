import { useState } from "react";
import axios from "axios";

import styles from "./Eventregisteration.module.css";
function EventRegisteration(){

    const sendRequest = async () => {
        await axios
          .post("http://localhost:5000/", {
            name: String(inputs.name),
            deptname: String(inputs.deptname),
            due: Date(inputs.due),
            location: String(inputs.location),

          })
          .then((res) => res.data);
      };


    const [inputs, setInputs] = useState({
        name: "",
        deptname: "",
        due: "",
        location: "",
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
            sendRequest().then(() => console.log("submitted"));

          };
    return<>
        <div className={styles.container}>
            <div className={styles.parent}>
                <div className={styles.img_container}>
                </div>
                <div  className={styles.form}>
                    <h1>Organize Event Form</h1>

                    <div className={styles.field}>

                
                            <div className={styles.label}>Event Title</div>
                            <input name="name" className={styles.input_f} onChange={handleChange} ></input>
                
                            <div className={styles.label}>Select date and time</div>
                            <input name="due" className={styles.input_f} onChange={handleChange}  ></input>

                            <div className={styles.label}>Enter Venue</div>
                            <input name="location" className={styles.input_f} onChange={handleChange}></input>

                            <div className={styles.label}>Department Name</div>
                            <input name="deptname" className={styles.input_f} onChange={handleChange}></input>

                            <button className={styles.labelsubmit} onClick={(e)=>handleSubmit(e)}>Submit</button>
                            <button className={styles.labelback} onClick={(e)=>handleSubmit(e)}>Back</button>
                    </div>
                </div>

            </div>
        </div>
    </>
}


export default EventRegisteration