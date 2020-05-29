import React from "react";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import s from './users.module.css'
import * as axios from "axios";
import userPhoto from "../../assets/images/avatarUser.png"
let Users = (props) => {
    //делаем проверку иначе будет ошибка зацыкливания
    if(props.users.length===0){
         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
             response=>{

                 props.setUsers(response.data.items)
             }
         )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>

                    <img src={u.photos.small!==null?u.photos.small:userPhoto} alt="" className={s.userPhoto}/>
                    </div>

                    {
                        u.followed ?
                            <button onClick={() => {props.unfollow(u.id)}}>
                                Unfollow
                            </button> :
                            <button onClick={() => {props.follow(u.id)}}>
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
        // в пропсы попадает свойство что мы напишем

        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        }
        , setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}
//Вызываем connect функцыю два раза 1 передаём mapStateToProps,mapDispatchToProps вторым презентационную коспоненту Dialogs
const UsersConnect = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersConnect;
