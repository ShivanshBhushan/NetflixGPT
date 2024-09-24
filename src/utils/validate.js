export const signInValidation = (email, password, name) =>{
    
    const isEmailValid = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

    if(!isEmailValid){
        return "Email id is not valid"
    }

    if(!isPasswordValid){
        return "Password not valid"
    }
    
    if(!name){
        return "Name field cannot be empty"
    }

    return null;
} 