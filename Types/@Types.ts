interface Validate {
    emailError: boolean,
    passwordError: boolean,
    passwordMismatch: boolean
}

interface IUser {
    email: string,
    name: string,
    password: string,
    gender: string,
    goal: string,
    split: string,
    weight: string,
}