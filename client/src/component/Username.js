import React from 'react'
import { Link } from 'react-router-dom'
import avatar from "../assets/profileIcon.jpeg"
import styles from "../styles/Username.module.css"
import {Toaster} from "react-hot-toast"
import {useFormik} from "formik"
// formik is used to validate the form data filled by user.

import {userNameValidate } from "../helper/validate"  



function Username() {
  const formik = useFormik({
    initialValues : {
      username : ""
    }, 
    validate : userNameValidate ,
    validateOnBlur : false,
    validateOnChange : false,
    onSubmit : async values=>{
      console.log(values);
    }

    // see from 43 min.

  })
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
                {/* ... is a spread operator. getFieldProps("username"), take the value of input and pass it to username which was initially '' . */}
                <input {...formik.getFieldProps('username')}
                  className={styles.textbox}
                  type="text"
                  placeholder="Username"
                />
                <button className={styles.btn} type="submit">
                  Let's Go
                </button>
              </div>

              <div className="text-center">
                {/* <span className='text-grey-500' >not a Member <a className='text-red-500' href="/register">Register Now</a> </span> */}

                {/* Above instead of using <a> tag , use <Link>(of react-roter-dom) tag bcoz when you use <a> tag , upon clicking on it, it will reload the page which we don't want. */}

                {/* <Link> :  prevent full page reloads and enable seamless navigation between different routes  */}

                <span className="text-grey-500">
                  not a Member{" "}
                  <Link className="text-red-500" to="/register">
                    Register Now
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

export default Username

// se how to resolve the error getting @apply of tailwind css.

