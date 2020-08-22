import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                //Число страниц
                this.props.setTotalUsersCount(response.data.totalCount)
            }
        )
    }

//клики по страницам
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(
            response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)

            }
        )
    }

    render() {

        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
            />
        </>
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
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps,
    {// в пропсы попадает свойство что мы напишем
        follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching ,
    }
    )(UsersContainer);
