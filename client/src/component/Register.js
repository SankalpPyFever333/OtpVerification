import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profileIcon.jpeg";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import convertToBase64 from "../helper/convert"

import { passwordValidate } from "../helper/validate";

function Register() {

      const [File ,setFile] = useState();

  const formik = useFormik({
    initialValues: {
      email: "example@gmail.com",
      username:"username123",
      password: "admin@123",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: File || "" });
      // This code is using the Object.assign() method to add a new property named profile to an object named values. The value assigned to the profile property is the file variable. The await keyword suggests that this code is likely inside an async function.

      //  || "" : this means that if nothing is in the file, return the "" to values object.
      console.log(values);
    },
  });

  const onUpload = async e=>{
      const base64 = await convertToBase64(e.target.files[0]);
      // since this function is returning a promise, so use await.
      setFile(base64);
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen ">
        <div className={styles.glass} styles = {{width:"45%"}}>
          <div className="title flex flex-col item-center">
            <h4 className="text-5xl font-bold">Register</h4>
            <span className="py-4 text-xl w-2/3 text-grey-500 ">
              Happy to join you
            </span>

            <form className="py-1" onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center py-4">
                  <label htmlFor="profile">
                        <img src={File || avatar} className={styles.profile_img} alt="avatar" />
                        {/* here, using the file to be uploaded, but if nothing in the file then use avatar as a default profile. */}
                  </label>
                  <input onChange={onUpload} type="file" id="profile" name="profile" />
              </div>
              <div className="textbox flex flex-col item-center gap-6">
                <input
                  {...formik.getFieldProps("email")}
                  className={styles.textbox}
                  type="text"
                  placeholder="email"
                />
                <input
                  {...formik.getFieldProps("username")}
                  className={styles.textbox}
                  type="text"
                  placeholder="username"
                />
                <input
                  {...formik.getFieldProps("password")}
                  className={styles.textbox}
                  type="text"
                  placeholder="Password"
                />
                <button className={styles.btn} type="submit">
                  Register
                </button>
              </div>

              <div className="text-center">
                <span className="text-grey-500">
                  Already registered?
                  <Link className="text-red-500" to="/">
                    login Now
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;


