import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeWeapper, HomeLeft, HomeRight } from './style';
import List from './componnets/List';
import Recommend from './componnets/Recommend';
import Topic from './componnets/Topic';
import Writer from './componnets/Writer';
import axios from 'axios';
class Home extends Component {
    render() {
        return (
            <HomeWeapper>
                <HomeLeft>
                    <img alt="" className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4584/fab2b75c99249e7c0c2a64a0e1dceb1127be254c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWeapper>
        )
    }
    componentDidMount() {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = {
                type: 'change_home_data',
                topicList: result.topicList,
                recommendList: result.recommendList,
                articleList: result.articleList,
            }
            this.props.changgeHomeData(action);

        })

    }
}
const mapDispactch = (dispatch) => ({
    changgeHomeData(action) {
        dispatch(action)
    }
});

export default connect(null, mapDispactch)(Home);