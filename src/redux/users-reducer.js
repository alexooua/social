//константы для определения типов (type) экшенов (action) для исключения ошибок при написании

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
//инициализация первичных данных для state

let initialState = {
 users: [
  // {id: 1,photoUrl:"https://materiell.com/wp-content/uploads/2015/03/john-full.png", followed: false, fullName: "Nike", status: "I am a boss", location: {city: 'Kiev', country: "Ukraine"}},
  // {id: 2,photoUrl:"https://materiell.com/wp-content/uploads/2015/03/john-full.png", followed: true, fullName: "Ira", status: "I am a boss", location: {city: 'Moskva', country: "Russia"}},
  // {id: 3,photoUrl:"https://materiell.com/wp-content/uploads/2015/03/john-full.png", followed: false, fullName: "Max", status: "I am a boss", location: {city: 'Minsk', country: "Belarus"}},
 ],
 pageSize: 5,
 totalUsersCount: 0,
 currentPage: 2,
}
//блок по обработке экшенов (action) и пиходящих с ними данных
export const usersReducer = (state = initialState, action) => {
 switch (action.type) {
  case FOLLOW:
   return {
    ...state,
    users: state.users.map(u => {
     if (u.id === action.userId) {
      return {
       ...u, followed: true
      }
     }
     return u
    })
   }

  case UNFOLLOW:
   return {
    ...state,
    users: state.users.map(u => {
     if (u.id === action.userId) {
      return {
       ...u, followed: false
      }
     }
     return u
    })
   }

  case SET_USERS:
   return {
    ...state,
    users:action.users
   }
   case SET_CURRENT_PAGE:
   return {
    ...state,currentPage: action.currentPage
   }

  default:
   return state
 }

}

// блок функций (action creator) для пропроса в диспачи методов и свойств
//функции колбеки экшен криэйторы (action creat) для правильной передачи данных из места их вызова в редьюсеры
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})

export const setUsersAC = (users) =>
    ({type: SET_USERS,users})
export const setCurrentPageAC = (currentPage) =>
    ({type: SET_CURRENT_PAGE,currentPage})
export const setTotalUsersCountAC = (TotalUsersCount) =>
    ({type: SET_CURRENT_PAGE,TotalUsersCount})


export default usersReducer
