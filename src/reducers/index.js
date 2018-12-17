import {combineReducers} from 'redux';
import CommentList from './reducer_commentList';
import Auth from './reducer_auth';
import TabSelect from './delivery/reducer_tabSelect';
import getProducts from './delivery/reducer_getProducts';
import getProfile from './delivery/reducer_getProfile';
const rootReducer = combineReducers({
    commentList: CommentList,
    auth:Auth,
    tabSelected:TabSelect,
    getProducts: getProducts,
    getProfile: getProfile
});

export default rootReducer;