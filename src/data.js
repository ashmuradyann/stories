import image1 from './assets/images/image1.jpg'
import image2 from './assets/images/image2.jpg'
import image3 from './assets/images/image3.jpg'
import image4 from './assets/images/image4.jpg'
import image5 from './assets/images/image5.jpg'

export const DATA = [
    {
        id: 0,
        url: image1,
        duration: 5000,
        paused: false,
        playAfterPause: true,
        popup: {
            needed: false
        },
        buttons: {
            needed: false,
        },
        form: {
            needed: false
        }
    },
    {
        id: 1,
        url: image2,
        duration: 5000,
        paused: false,
        playAfterPause: false,
        popup: {
            needed: true,
            data: {
                button: {
                    text: "Подробнее",
                    backgroundColor: "#333333",
                    iconUrl: "https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.svg"
                },
                h1: "Если хочется сказать",
                text: [{
                    h2: undefined,
                    p: "Краткость - сестра таланта. Но иногда предложение может быть на столько интересным, что парой фраз не обойтись. Тогда не стоит молчать - дайте своему пользователю максимальное количество необходимой информции."
                }],
            }
        },
        buttons: {
            needed: false
        },
        form: {
            needed: false
        }
    },
    {
        id: 2,
        url: image3,
        duration: 5000,
        paused: false,
        playAfterPause: false,
        popup: {
            needed: false
        },
        buttons: {
            needed: false,
        },
        form: {
            needed: false
        }
    },
    {
        id: 3,
        url: image4,
        duration: 5000,
        paused: false,
        playAfterPause: false,
        popup: {
            needed: false
        },
        buttons: {
            needed: true,
            buttonData: [
                {
                    text: "наш WhatsApp",
                    backgroundColor: "#48c857",
                    appName: "whatsapp",
                    link: "https://api.whatsapp.com/send?phone=79066715422",
                    username: "79066715422",
                    iconUrl: "https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.svg"
                },
                {
                    text: "наш Telegram",
                    backgroundColor: "#27a3e1",
                    appName: "telegram",
                    link: "https://t.me/easy_int",
                    username: "easy_int",
                    iconUrl: "https://img.icons8.com/ios-glyphs/30/ffffff/telegram-app.svg"
                },
            ]
        },
        form: {
            needed: false
        }
    },
    {
        id: 4,
        url: image5,
        duration: 1000,
        paused: false,
        playAfterPause: false,
        popup: {
            needed: false
        },
        buttons: {
            needed: false
        },
        form: {
            needed: true,
            toggleButton: {
                backgroundColor: "#333333"
            }
        }
    }
]