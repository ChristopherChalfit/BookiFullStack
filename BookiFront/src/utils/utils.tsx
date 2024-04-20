import Cookies from 'js-cookie';
export const getSession = ()=>{
    return Cookies.get("session")
}
export const setSession = (session: string) =>{
    Cookies.set("session", session);
}
export const destroySession = () =>{
    Cookies.remove("session");
}