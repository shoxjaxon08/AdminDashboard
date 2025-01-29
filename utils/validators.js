
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

exports.validateEmail = (email) => {
    if(!emailRegex.test(email)){
        return {message:"Yaroqsiz Email"}
    }
    return null
}

exports.validatePassword = (password) => {
    if(!passwordRegex.test(password)){
        return {message:'Yaroqsiz Parol'}
    }
    return null
}

exports.validateRole = (role) => {
    if(!['admin','store'].includes(role)){
        return {message:'Yaroqsiz Role'}
    }
    return null
}