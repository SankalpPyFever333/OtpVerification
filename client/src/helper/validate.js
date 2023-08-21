import toast from "react-hot-toast"


export async function userNameValidate(values){
      const errors = usernameVerify({}, values);
      return error;
}



function usernameVerify(error={}, values){
      if(!values.username){
            error.username = toast.error("Username required...");
      }
      else if(values.username.includes(" ")){
            error.username = toast.error("invalid username!!");
      }

      return error;
}



