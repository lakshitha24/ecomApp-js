export interface User {
    first_name:string;
    email:string;
    password:string,
    matchPassword: (pw: string) => Promise<boolean>
}

export interface IUser{
    id:string
}