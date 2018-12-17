import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeWeapper, HomeLeft, HomeRight } from './style';
import List from './componnets/List';
import Recommend from './componnets/Recommend';
import Topic from './componnets/Topic';
import Writer from './componnets/Writer';
import * as  actionCreators from './store/actionCreators'
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
        this.props.changHomeData();

    }
}
const mapDispactch = (dispatch) => ({
    changHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    }
});

export default connect(null, mapDispactch)(Home);