import React from "react";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import s from './users.module.css'
let Users = (props) => {

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                    <img src={u.photoUrl} alt="" className={s.userPhoto}/>
                    </div>
                    { u.followed ?
                        <button onClick={()=>{props.unfollow(u.userId) }}>Unfollow</button> :
                        <button onClick={()=>{props.follow(u.userId)}}>Follow</button>
                    }
                    <div>
                    <button>Follow</button>
                </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                       <div>{u.location.country}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
//берём данные из state и закидываем в  пропс
// когда мы запускаем функцию MapStateToProps происходит сравнение
// данных и если данные изменены происходит перерисовка
let mapStateToProps = (state) => {
    return {
        // в пропсы попадает свойство что мы напишем
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        }
        , setUsers: (userId) => {
            dispatch(setUsersAC(userId))
        }
    }
}
//Вызываем connect функцыю два раза 1 передаём mapStateToProps,mapDispatchToProps вторым презентационную коспоненту Dialogs
const UsersConnect = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersConnect;
