import {combineReducers} from 'redux';
import CommentList from './reducer_commentList';
import Auth from './reducer_auth';
import TabSelect from './delivery/reducer_tabSelect';
const rootReducer = combineReducers({
    commentList: CommentList,
    auth:Auth,
    tabSelected:TabSelect
});

export default rootReducer;