import { useState, memo } from 'react'
import { ClickAwayListener } from '@mui/material';

import './form.scss'

const Form = ({ close, setSubmited, setShowForm }) => {

    const [state, setState] = useState("form")
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [warnMessage, setWarnMessage] = useState(null)

    const submit = () => {
        if (number.length < 12 && name === "") {
            setWarnMessage("Заполните пожалуйста все поля")
            return
        }
        if (name === "") {
            setWarnMessage("Напишите пожалуйста верное имя")
            return
        }
        if (number === "") {
            setWarnMessage("Напишите пожалуйста номер телефона")
            return
        }
        if (number.length < 12) {
            setWarnMessage("Некорректный номер телефона")
            return
        }
        console.log("ИМЯ: " + name, "НОМЕР: " + number)
        setState("finish")
        setTimeout(() => {
            close && close()
            setShowForm && setShowForm(false)
            setSubmited(true)
        }, 4000)
    }

    const phoneNumberHandleChange = (event) => {
        if (event.target.value.length !== 13) {
            setNumber("+7" + event.target.value.replaceAll("+7", "").replace(/[^+\d]/g, ''))
        }
    }

    return (
        <div className="form__wrapper">
            <ClickAwayListener onClickAway={() => {
                close && close()
                setShowForm && setShowForm(false)
            }}>
                {state === "form"
                    ? <div className="form__container">
                        <h3>МЫ СВЯЖЕМСЯ С ВАМИ</h3>
                        <div className="group">
                            <input value={name} className="form-input" type="text" onChange={(e) => setName(e.target.value)} />
                            <label className={`${name.length ? "shrink" : ""} form-input-label`}>ИМЯ</label>
                        </div>
                        <div className="group">
                            <input value={number !== "+7" ? number : ""} className="form-input" type="text" onChange={phoneNumberHandleChange} />
                            <label className={`${number.length ? "shrink" : ""} form-input-label`}>НОМЕР ТЕЛЕФОНА</label>
                        </div>
                        <div>
                            <p>{warnMessage}</p>
                        </div>
                        <button onClick={submit}>ОТПРАВИТЬ</button>
                    </div>
                    : <div className="finish__container">
                        <h2>ЗАЯВКА ОТПРАВЛЕНА!</h2>
                    </div>}
            </ClickAwayListener>
        </div>
    )
}

export default memo(Form)