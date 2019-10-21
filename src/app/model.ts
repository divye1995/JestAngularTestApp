export interface UserModel{
    firstName:string;
    lastName:string;
    gender:string;
}

export const toUserModel=(res:any)=>{
    return {
        firstName:res.firstName,
        lastName:res.lastName,
        gender:res.gender,
    }
}