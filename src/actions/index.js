import axios from 'axios';
import appConstants from '../constants';

const productUrl = '../../mocks/products.json';
const profileUrl = '../../mocks/profile.json';


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

export function getProducts(){
    return{
        type: appConstants.GET_PRODUCTS,
        payload: axios.get(productUrl)
    }
}

export function getProfile(){
    return{
        type: appConstants.GET_PROFILE,
        payload: axios.get(profileUrl)
    }
}