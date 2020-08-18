import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import s from './users.module.css'
import * as axios from "axios";
import userPhoto from "../../assets/images/avatarUser.png"


class Users extends React.Component {

componentDidMount() {

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
        response => {
            this.props.setUsers(response.data.items)
            this.props.setUsersCount(response.data.totalCount)
        }
    )
}
onPageChanged=(pageNumber)=>{
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(
        response => {
            this.props.setUsers(response.data.items)

        }
    )
}
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && s.selectedPage}
                                 onClick={(e) => {
                                     this.onPageChanged(p)
                                 }}>{p}</span>
                })}

            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>

                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" className={s.userPhoto}/>
                    </div>

                    {
                        u.followed ?
                            <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>
                                Unfollow
                            </button> :
                            <button onClick={() => {
                                this.props.follow(u.id)
                            }}>
                                Follow
                            </button>
                    }

                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                       <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}


//берём данные из state и закидываем в  пропс
// когда мы запускаем функцию MapStateToProps происходит сравнение
// данных и если данные изменены происходит перерисовка
let mapStateToProps = (state) => {
    return {
        // в пропсы попадает свойство что мы напишем
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        // в пропсы попадает свойство что мы напишем

        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}
//Вызываем connect функцыю два раза 1 передаём mapStateToProps,mapDispatchToProps вторым презентационную коспоненту Dialogs
const UsersConnect = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersConnect;
