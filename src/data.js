import image1 from './assets/images/image1.jpg'
import image2 from './assets/images/image2.jpg'
import image3 from './assets/images/image3.jpg'
import image4 from './assets/images/image4.jpg'
import image5 from './assets/images/image5.jpg'
import image6 from './assets/images/image6.jpg'

export const DATA = [
    {
        url: image1,
        duration: 15000,
        paused: false,
        popup: {
            needed: true,
            data: {
                button: {
                    text: "Подробнее",
                    backgroundColor: "#333333",
                    iconUrl: "https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.svg"
                },
                h1: "Заголовок",
                text: [{
                    h2: "Заголовокh2",
                    p: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
                },
                {
                    h2: "Заголовокh2",
                    p: "Contrary to popular belief, Lorem Ipsum is not simply random text."
                },
                {
                    h2: "Заголовокh2",
                    p: "from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,comes from a line in section 1.10.32."
                }],
            }
        },
        buttons: {
            needed: false,
        },
        form: {
            needed: false
        }
    },
    {
        url: image2,
        duration: 5000,
        paused: false,
        popup: {
            needed: false
        },
        buttons: {
            needed: false
        },
        form: {
            needed: false
        }
    },
    {
        url: image3,
        duration: 5000,
        paused: false,
        popup: {
            needed: false
        },
        buttons: {
            needed: true,
            buttonData: [
                {
                    text: "Мы в Facebook",
                    backgroundColor: "#1673ea",
                    iconUrl: "https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.svg"
                },
                {
                    text: "Мы в Instagram",
                    backgroundColor: "#d83364",
                    iconUrl: "https://img.icons8.com/material-outlined/24/ffffff/instagram-new--v1.svg"
                },
            ]
        },
        form: {
            needed: false
        }
    },
    {
        url: image4,
        duration: 5000,
        paused: false,
        popup: {
            needed: false
        },
        buttons: {
            needed: true,
            buttonData: [
                {
                    text: "наш WhatsApp",
                    backgroundColor: "#48c857",
                    iconUrl: "https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.svg"
                },
                {
                    text: "наш Telegram",
                    backgroundColor: "#27a3e1",
                    iconUrl: "https://img.icons8.com/ios-glyphs/30/ffffff/telegram-app.svg"
                },
                {
                    text: "наш Viber",
                    backgroundColor: "#7d539f",
                    iconUrl: "https://img.icons8.com/ios-glyphs/30/ffffff/viber.png"
                },
            ]
        },
        form: {
            needed: false
        }
    },
    {
        url: image5,
        duration: 5000,
        paused: false,
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
        url: image6,
        duration: 10000,
        paused: true,
        popup: {
            needed: false
        },
        buttons: {
            needed: false,
        },
        form: {
            needed: true,
            toggleButton: {
                backgroundColor: "#333333"
            }
        }
    }
]