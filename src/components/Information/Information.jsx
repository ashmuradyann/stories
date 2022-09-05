import './information.scss'

const Information = () => {

    // const url = "https://ashmuradyann.github.io/stories/"

    return (
        <div className="info__wrapper">
            <div className="info__container">
                <h1>Магазин корейской косметики Korean House</h1>
                <div>
                    <h5>Только оригинальная, сертифицированная косметика из Корее, Тайланда и Беларуси. В наличии более 700 наименований.
Работаем ежедневно с 10:00 до 20:00.</h5>
                </div>
                {/* <div className="qr__block">
                    <img src={`http://api.qrserver.com/v1/create-qr-code/?data=${url}&size=200x200`} alt="QrCode" />
                    <div>
                        <p>Наведите камеру на QR-код</p>
                        <p>и откройте этот стори-лендинг на своём смартфоне.</p>
                        <p>Так намного удобнее!</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Information