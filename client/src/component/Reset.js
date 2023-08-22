import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profileIcon.jpeg";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import {resetPasswordValidation} from "../helper/validate"

import { passwordValidate } from "../helper/validate";

function Reset() {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_pwd: "",
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen ">
        <div className={styles.glass} styles={{width:"50%"}}>
          <div className="title flex flex-col item-center">
            <h4 className="text-5xl font-bold">Reset</h4>
            <span className="py-4 text-xl w-2/3 text-grey-500 ">
              Reset your password
            </span>

            <form className="pt-20" onSubmit={formik.handleSubmit}>
              
              <div className="textbox flex flex-col item-center gap-6">
                <input
                  {...formik.getFieldProps("password")}
                  className={styles.textbox}
                  type="text"
                  placeholder="New Password"
                />
                <input
                  {...formik.getFieldProps("confirm_pwd")}
                  className={styles.textbox}
                  type="text"
                  placeholder="Confirm Password"
                />
                <button className={styles.btn} type="submit">
                  Reset
                </button>
              </div>

              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reset;
