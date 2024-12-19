export const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.trim().length === 0) {
        return {
            isValid: false,
            errorMessage: 'Email cannot be empty',
        }
    }

    return {
        isValid: regex.test(email),
        errorMessage: 'Invalid email address',
    }
}

export const validatePassword = (password: string) => {
    const errors: string[] = [];
  
    // Check for at least one lowercase letter
    if (!/(?=.*[a-z])/.test(password)) {
      errors.push("lowercase");
    }
  
    // Check for at least one uppercase letter
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.push("uppercase");
    }
  
    // Check for at least one digit
    if (!/(?=.*\d)/.test(password)) {
      errors.push("number");
    }
  
    // Check for minimum length
    if (!/^.{8,}$/.test(password)) {
      errors.push("long");
    }
  
    return {
      isValid: errors.length === 0,
      errors,
    };
  };

type NameType = "first_name" | "last_name"
export const validateName = (value: string, type: NameType) => {
const regex = /^[a-zA-Zà-žÀ-Ž\s'-]+$/;
    const errors: string[] = []

    const cleanedType = type.charAt(0).toUpperCase() + type.replace("_", " ").slice(1);

    if (!value.trim()) {
        errors.push(`${cleanedType} cannot be empty`);
        return { isValid: false, errors };
    }

    if(value.length > 50 || value.length < 2){
        errors.push(`${cleanedType} must be between 2 and 50 characters long`)
    }

    if(!regex.test(value)){
        errors.push(`${cleanedType} contains invalid characters`)
    }

    return {
        isValid: errors.length === 0,
        errors,
    }
}

type Location = "city" | "country"
export const validateLocation = (value: string, type: Location) => {
    const errors: string[] = [];
    const regex = /^[a-zA-Z\s'-]+$/;

    if (!value.trim()) {
       errors.push(`${type} cannot be empty`);
       return {isDataValid: false, errors}
    }

    if (!regex.test(value)) {
        errors.push(`${type} contains invalid characters`);
    }

    if (value.length > 50) {
        errors.push(`${type} cannot exceed 50 characters`);
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
};

export const validateUsername = (username: string) => {
    const errors: string[] = []
    const usernameRegex = /^[a-zA-Z0-9_]+$/

    if (!username.trim()) {
      errors.push("Username cannot be empty.")
      return {isValid: false, errors}
    }
  
    if (username.length < 3 || username.length > 20) {
      errors.push("Username must be between 3 and 20 characters long.")
    }
    
    if (!usernameRegex.test(username)) {
      errors.push("Username can only contain letters, numbers, and underscores")
    }
  
    if (!/^[a-zA-Z]/.test(username)) {
      errors.push("Username must start with a letter");
    }
  
    return {
      isValid: errors.length === 0,
      errors,
    }
}
  