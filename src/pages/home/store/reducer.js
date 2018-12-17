import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

const changehomedata = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        recommendList: fromJS(action.recommendList),
        articleList: fromJS(action.articleList),
    });
}
const addArticleList = (state, action) => {
    return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
    });
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return changehomedata(state, action);
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state, action);
        case constants.TOGGLE_SCROOL_TOP:
            return state.set('showScroll', action.show);
        default:
            return state;
    }

}