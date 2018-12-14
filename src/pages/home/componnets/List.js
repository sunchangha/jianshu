import React, { PureComponent } from 'react';
import { ListItem, ListInfo } from '../style';
import { connect } from 'react-redux';
// import { actionCreators } from '../store';
// import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <div>
                {list.map((item) => {
                    return (
                        <ListItem key={Math.random()}>
                            <img alt='' className='pic' src={item.get('imgUrl')} />
                            <ListInfo>
                                <h3 className='title'>{item.get('tittle')}</h3>
                                <p className='desc'>{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    );
                })
                }
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
});

// const mapDispatch = (dispatch) => ({
//     getMoreList(page) {
//         dispatch(actionCreators.getMoreList(page))
//     }
// })

export default connect(mapState, null)(List);