import image1 from './assets/images/image1.jpg'
import image2 from './assets/images/image2.jpg'
import image3 from './assets/images/image3.jpg'
import image4 from './assets/images/image4.jpg'
// import image5 from './assets/images/image5.jpg'

export const DATA = [
    {
        id: 0,
        url: image1,
        duration: 5000,
        paused: false,
        popup: {
            needed: false
        },
        buttons: {
            needed: false,
        },
        quiz: {
            needed: false,
            // data: [
            //     {
            //         buttonText: "BMW",
            //         backgroundColor: "#000000",
            //         textColor: "#ffffff"
            //     },
            //     {
            //         buttonText: "Mercedes",
            //         backgroundColor: "#000000",
            //         textColor: "#ffffff"
            //     }
            // ]
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
        popup: {
            needed: false,
            // data: {
            //     button: {
            //         text: "Подробнее",
            //         backgroundColor: "#333333",
            //         iconUrl: "https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.svg"
            //     },
            //     h1: "Если хочется сказать",
            //     text: [{
            //         h2: undefined,
            //         p: "Краткость - сестра таланта. Но иногда предложение может быть на столько интересным, что парой фраз не обойтись. Тогда не стоит молчать - дайте своему пользователю максимальное количество необходимой информции."
            //     }],
            // }
        },
        buttons: {
            needed: false
        },
        quiz: {
            needed: false,
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
        popup: {
            needed: false
        },
        buttons: {
            needed: false,
        },
        quiz: {
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
        popup: {
            needed: false
        },
        buttons: {
            needed: true,
            buttonData: [
                {
                    text: "WhatsApp",
                    backgroundColor: "#48c857",
                    appName: "whatsapp",
                    link: "https://api.whatsapp.com/send?phone=79515485033",
                    username: "",
                    iconUrl: "https://img.icons8.com/material-outlined/30/ffffff/whatsapp--v1.svg"
                },
                {
                    text: "ВКонтакте",
                    backgroundColor: "#4c75a3",
                    appName: "vk",
                    link: "https://vk.com/koreanhouse_vrn",
                    username: "",
                    iconUrl: "https://img.icons8.com/fluency-systems-filled/30/ffffff/vkontakte.svg"
                },
            ]
        },
        quiz: {
            needed: false,
        },
        form: {
            needed: false
        }
    }
]