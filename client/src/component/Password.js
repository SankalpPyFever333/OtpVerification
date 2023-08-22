import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profileIcon.jpeg";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
// formik is used to validate the form data filled by user.

import { passwordValidate } from "../helper/validate";

function Password() {
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen ">
        <div className={styles.glass}>
          <div className="title flex flex-col item-center">
            <h4 className="text-5xl font-bold">Hello again</h4>
            <span className="py-4 text-xl w-2/3 text-grey-500 ">
              Explore more by connecting with us
            </span>

            <form className="py-1" onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center py-4">
                <img src={avatar} className={styles.profile_img} alt="avatar" />
              </div>
              <div className="textbox flex flex-col item-center gap-6">
                
                <input
                  {...formik.getFieldProps("password")}
                  className={styles.textbox}
                  type="text"
                  placeholder="Password"
                />
                <button className={styles.btn} type="submit">
                  Sign up 
                </button>
              </div>

              <div className="text-center">
                <span className="text-grey-500">
                  Forgot Password
                  <Link className="text-red-500" to="/recovery">
                    Recover Now
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

export default Password;

// se how to resolve the error getting @apply of tailwind css.
