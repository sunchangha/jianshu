import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeWeapper, HomeLeft, HomeRight, BackTop } from './style';
import List from './componnets/List';
import Recommend from './componnets/Recommend';
import Topic from './componnets/Topic';
import Writer from './componnets/Writer';
import * as  actionCreators from './store/actionCreators'
class Home extends Component {
    handleScrollTop() {
        window.scrollTo(0, 0);
    }
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
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
            </HomeWeapper>
        )
    }
    componentDidMount() {
        this.props.changHomeData();
        this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}
const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})



const mapDispactch = (dispatch) => ({
    changHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(e) {
        if (document.documentElement.scrollTop > 200) {
            const action = actionCreators.toggleTopShow(true);
            dispatch(action);
        } else {
            const action = actionCreators.toggleTopShow(false);
            dispatch(action);
        }
    }
});

export default connect(mapState, mapDispactch)(Home);