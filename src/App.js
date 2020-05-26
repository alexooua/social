import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
 import {connect} from "react-redux";
import Users from "./components/Users/Users";


const App = (props) => {
 return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar stete={props.state}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' //Route компонета контролирующая состояние строки URL при совпадении
                        // адреса отрисовывает нужную компоненту без перезагрузки всей страницы
                           render={() => <DialogsContainer/>}
                        //метод render используеться для вызова анонимной функции,
                        // которая отрисовывает компоненту, это для передачи props
                    />
                    <Route path='/profile'
                           render={() => <Profile
                            />}/>
                    <Route path='/users'
                           render={() => <Users
                               // store={props.store}
                           />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={()=><Music/> } />
                    <Route path='/settings' render={()=><Settings/> } />
                </div>
            </div>
    );
};

//берём данные из state и закидываем в  пропс
 // когда мы запускаем функцию MapStateToProps происходит сравнение
// данных и если данные изменены происходит перерисовка
let mapStateToProps=(state)=>{
    return{
        state: state.sidebar
    }
}

//Вызываем connect функцыю два раза 1 передаём mapStateToProps,mapDispatchToProps вторым презентационную коспоненту Dialogs
const AppConnect = connect(mapStateToProps, null)(App);
export default AppConnect;


