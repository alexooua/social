import React from "react";
import s from './Dialogs.module.css';
const  Dialogs=(props)=>{
    return (
         <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog+' '+s.active}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Viktor
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
            </div>
             <div className={s.messages}>
                 <div className={s.message}>HI!</div>
                 <div className={s.message}>How are you?</div>
                 <div className={s.message}>I am fine and you.</div>
                 <div className={s.message}>Fine and Cool!!!</div>

             </div>
        </div>

    )
}

export default Dialogs