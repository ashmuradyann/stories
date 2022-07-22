import { useState } from 'react'
import { ClickAwayListener } from '@mui/material';

import './form.scss'

const Form = ({ close, setSubmited, setShowForm }) => {

    const [state, setState] = useState("form")
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [phoneNumberWarnMessage, setPhoneNumberWarnMessage] = useState(null)

    const submit = () => {
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
        setTimeout(() => {
            if (event.target.value.length < 12) {
                setPhoneNumberWarnMessage(true)
            }
        }, 1000)
        setPhoneNumberWarnMessage(false)
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
                            <label className={`${name.length ? "shrink" : ""} form-input-label`}>ВАШЕ ИМЯ</label>
                        </div>
                        <div className="group">
                            <input value={number !== "+7" ? number : ""} className="form-input" type="text" onChange={phoneNumberHandleChange} />
                            <label className={`${number.length ? "shrink" : ""} form-input-label`}>ВАШ ТЕЛЕФОН</label>
                        </div>
                        {phoneNumberWarnMessage && <p>Неверный номер телефона</p>}
                        <button onClick={submit} disabled={name === "" || number.length !== 12}>ОТПРАВИТЬ</button>
                    </div>
                    : <div className="finish__container">
                        <h2>ЗАЯВКА ОТПРАВЛЕНА!</h2>
                    </div>}
            </ClickAwayListener>
        </div>
    )
}

export default Form