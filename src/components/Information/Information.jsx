import './information.scss'

const Information = () => {

    const url = "https://ashmuradyann.github.io/stories/"

    return (
        <div className="info__wrapper">
            <div className="info__container">
                <h1>Попробуйте промо сайт в формате сторис</h1>
                <h5>Привычный и полюбившийся пользователям формат с вашим торговым предложением. Попробуйте бесплатно.</h5>
                <div className="qr__block">
                    <img src={`http://api.qrserver.com/v1/create-qr-code/?data=${url}&size=200x200`} alt="QrCode" />
                    <div>
                        <p>Наведите камеру на QR-код</p>
                        <p>и откройте этот стори-лендинг на своём смартфоне.</p>
                        <p>Так намного удобнее!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information