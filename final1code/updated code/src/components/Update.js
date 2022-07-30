import { useState } from "react";
import axios from "axios";

import styles from "../Eventregisteration.module.css";
function EventRegisteration(props){

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
        name: props.name,
        deptname:props.deptname,
        due: props.due,
        location: props.location,
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
                            <input name="name" className={styles.input_f} value={inputs.name} onChange={handleChange} ></input>
                
                            <div className={styles.label}>Select date and time</div>
                            <input name="due" className={styles.input_f} value={inputs.due} onChange={handleChange}  ></input>

                            <div className={styles.label}>Enter Venue</div>
                            <input name="location" className={styles.input_f}  value={inputs.location}     onChange={handleChange}></input>

                            <div className={styles.label}>Department Name</div>
                            <input name="deptname" className={styles.input_f} value={inputs.deptname} onChange={handleChange}></input>

                            <button className={styles.label} onClick={(e)=>handleSubmit(e)}>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    </>
}


export default EventRegisteration