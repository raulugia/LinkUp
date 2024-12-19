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