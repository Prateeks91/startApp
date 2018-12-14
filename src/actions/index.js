import appConstants from '../constants';
export function handlePost(data){
    return{
        type:"POST_COMMENT",
        payload:data
    }
}

export function handleAuth(isAuthenticated=false){
    return{
        type:"HANDLE_AUTH",
        payload:isAuthenticated
    }
}

export function handleTabSelect(data){
    return{
        type:appConstants.TAB_SELECT,
        payload:data
    }
}