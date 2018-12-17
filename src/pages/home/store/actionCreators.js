import axios from 'axios';
import * as conseants from './constants';

const changHomeData = (result) => ({
    type: conseants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    recommendList: result.recommendList,
    articleList: result.articleList,
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changHomeData(result))
        })
    }
}