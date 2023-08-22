import React from "react";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

import { passwordValidate } from "../helper/validate";

function Recovery() {
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
            <h4 className="text-5xl font-bold">Recover</h4>
            <span className="py-4 text-xl w-2/3 text-grey-500 ">
              Enter otp to recover password
            </span>

            <form className="pt-20" onSubmit={formik.handleSubmit}>
              
              <div className="textbox flex flex-col item-center gap-6">
                  <div className="imput text-center">

                        <span className="py-4 text-sm text-left text-gray-500" >
                              Enter otp sent to your email address
                        </span> 
                        <input
                              className={styles.textbox}
                              type="text"
                              placeholder="Enter 4 digit"
                        />
                  </div>
                <button className={styles.btn} type="submit">
                  Sign up
                </button>
              </div>

              <div className="text-center">
                <span className="text-grey-500">
                  Can't get otp
                  <button className="text-red-500">
                    Resend
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recovery;


