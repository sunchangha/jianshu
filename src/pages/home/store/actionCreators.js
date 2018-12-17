import axios from 'axios';
import * as conseants from './constants';
import { fromJS } from 'immutable';

const changHomeData = (result) => ({
    type: conseants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    recommendList: result.recommendList,
    articleList: result.articleList,
})

const addHomeList = (list, nextPage) => ({
    type: conseants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changHomeData(result))
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, page + 1));
        });
    }
}
export const toggleTopShow = (show) => ({
    type: conseants.TOGGLE_SCROOL_TOP,
    show
})
