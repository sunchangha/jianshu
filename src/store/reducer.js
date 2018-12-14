import { combineReducers } from 'redux-immutable'; //这个combineReducers用来整合reducer
import { reducer as headerReducer } from '../common/header/store'; //导入heder的reducer
import { reducer as homeReducer } from '../pages/home/store'; //导入home的reducer
//redux-immutable

//reducer as headerReducer起别名
//使用 header 的headerReducer
const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer
})
export default reducer;