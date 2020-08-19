import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/avatarUser.png";

let Users=(props)=>{
    //число страниц
    let pagesCount = Math.ceil( props.totalUsersCount /  props.pageSize)
    //создаём масив страниц и заполняем ого
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={ props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}> {p} </span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>

                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" className={s.userPhoto}/>
                    </div>

                    {
                        u.followed ?
                            <button onClick={() => {
                                 props.unfollow(u.id)
                            }}>
                                Unfollow
                            </button> :
                            <button onClick={() => {
                                 props.follow(u.id)
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
export default Users;
