import toast from "react-hot-toast"

// validate username
export async function userNameValidate(values){
      const error =  usernameVerify({}, values);
      return error;
}

// validate password:

export async function passwordValidate(values){
      const error = passwordVerify({}, values);
      return error;
}

// for now, toast.error is not working bcoz it requires diresct insteraction with the DOM and it should be defined the component itself. not in other file. So I am leaving it for now.

// /////////////////////////////////////////////////////////////

// validate the reset password:

export async function resetPasswordValidation(values){
      const error = passwordVerify({}, values);
      if(values.password !== values.confirm_pwd ){
            error.exist = toast.error("Password not matched!");
      } 
      return error;
}




// password verification:
function passwordVerify(error={}, values){
      const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

      if(!values.password){
            error.password = toast.error("Passsword Required...!");
      }
      else if(values.password.includes(" ")){
            error.password = toast.error("Whitespace not allowed");
            
      }
      else if(values.password.length < 4){
            error.password = toast.error("length should be more that 4");
      }
      else if(!specialCharacterRegex.test(values.password)){
            error.password = toast.error("special character required!");
      }
      return error;
}



// username verification:
function usernameVerify(error={}, values){
      if(!values.username){
            // that error object gets all the properties we define inside the intialValues internally by formik.
            error.username = toast.error("Username required...");
      }
      else if(values.username.includes(" ")){
            error.username = toast.error("invalid username!!");
      }

      return error;
}



