<template>
    <div class="headerContainer">
        <div class="headerMenu">
            <div class="wrapper">
                <div class="headerString">
                    <div class="logoCell">
                        <div
                            class="logoWrapper"
                            :class="{ smallWrapper: isSmall }"
                        >
                            <router-link to="/">
                                <svg
                                    class="logo"
                                    :class="{ small: isSmall }"
                                    width="296"
                                    height="60"
                                    viewBox="0 0 296 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        class="letter"
                                        d="M3.26702 15.7325L7.56491 11.6408L16.0972 24.8516H20.0621L9.80108 9.49976L19.7925 0H15.2567L3.26702 11.5932V0.0792956H0V24.8516H3.26702V15.7325Z"
                                        fill="white"
                                    />
                                    <path
                                        class="letter"
                                        d="M100.628 21.6797H87.1955V13.7659H100.375V10.6416H87.1955V3.17187H100.628V0.0317135H83.8333V24.804H100.628V21.6797Z"
                                        fill="white"
                                    />
                                    <path
                                        class="letter"
                                        d="M123.925 24.804H127.288V0.0317135H123.925V10.7209H108.843V0.0317135H105.481V24.804H108.843V13.8452H123.925V24.804Z"
                                        fill="white"
                                    />
                                    <path
                                        class="letter"
                                        d="M79.3603 45.7701H64.2781V35.0809H60.9159V59.8532H64.2781V48.8944H79.3603V59.8532H82.7225V35.0809H79.3603V45.7701Z"
                                        fill="white"
                                    />
                                    <path
                                        class="letter"
                                        d="M134.9 13.8452H149.982V24.804H153.328V0.0317135H149.982V10.7209H134.9V0.0317135H131.537V24.804H134.9V13.8452Z"
                                        fill="white"
                                    />
                                    <path
                                        class="letter"
                                        d="M210.248 35.065H207.029H197.196H197.101H193.834V59.8849H197.196V38.1576H207.029V59.8849H210.248V38.1576H220.478V59.8849H223.808V35.065H220.478H210.248Z"
                                        fill="white"
                                    />
                                    <path
                                        class="letter"
                                        d="M271.719 48.9737V35.065H268.594H256.097V35.0967H252.735V59.8691H256.097V48.9578H269.609H271.719V48.9737ZM256.097 38.0307H268.594V45.9287H256.097V38.0307Z"
                                        fill="white"
                                    />
                                    <path
                                        class="letter"
                                        d="M189.155 24.804L200.4 13.9404H200.638V24.804H204V0.0317135H200.638H187.665H184.54V13.9404H185.952H195.911L184.477 24.804H189.155ZM200.638 3.01327V10.9112H187.665V3.01327H200.638Z"
                                        fill="white"
                                    />
                                    <path
                                        class="letter"
                                        d="M104.132 51.9711L90.176 35.0967H85.6085L104.085 56.8082H87.4482V59.8849H104.132H104.814H107.494V35.0967H104.132V51.9711Z"
                                        fill="white"
                                    />
                                    <path
                                        class="letter"
                                        d="M137.961 36.9681H128.017V34.4623H124.655V36.9681H114.711H113.807H111.586V53.7473H113.807H114.711H124.655V59.869H128.017V53.7473H137.961H138.88H141.069V36.9681H138.88H137.961ZM114.727 50.6072V39.8704H124.67V50.6072H114.727ZM128.017 50.6072V39.8704H137.961V50.6072H128.017Z"
                                        fill="white"
                                    />
                                    <path
                                        class="letter"
                                        d="M52.6846 5.04327L52.6687 4.96397L64.0082 18.381L75.3318 4.96397V5.04327V24.804H78.7098V0.0317135H75.4745V0.0475702L64.0082 13.6549L52.526 0.0475702V0.0317135H49.2907V24.804H52.6846V5.04327Z"
                                        fill="white"
                                    />
                                    <path
                                        class="letter"
                                        d="M26.1045 35.0967V35.1284L14.654 46.563L3.37804 35.287V35.0967H0V59.8849H3.37804V39.6166L14.654 50.8926L16.8268 48.7199V48.7358L26.1045 39.458V59.8849H29.4825V35.0967H26.1045Z"
                                        fill="white"
                                    />
                                    <path
                                        class="letter"
                                        d="M43.5342 35.0967L32.6547 59.8849H36.1279V59.869L49.8303 49.3701L54.4771 59.8849H58.0613L47.1977 35.1126H43.5342V35.0967ZM38.4592 54.2231L45.247 38.6333L48.6092 46.3886L38.4592 54.2231Z"
                                        fill="white"
                                    />
                                    <path
                                        class="letter"
                                        d="M153.187 35.0968L142.291 59.8691H145.764V59.8532L159.546 49.5129L164.13 59.8532H167.714L156.85 35.0809H153.187V35.0968ZM148.112 54.2231L154.899 38.6334L158.262 46.3886L148.112 54.2231Z"
                                        fill="white"
                                    />
                                    <path
                                        class="letter"
                                        d="M285.136 35.0967H281.473L270.577 59.869H274.051V59.8532L287.832 49.5129L292.416 59.8532H296L285.136 35.0967ZM276.398 54.2231L283.186 38.6333L286.548 46.3886L276.398 54.2231Z"
                                        fill="white"
                                    />
                                    <path
                                        class="letter"
                                        d="M25.3911 24.804L39.1729 14.4637L43.7562 24.804H47.3405L36.4768 0.0317135H32.8133L21.9179 24.804H25.3911ZM34.5261 3.56835L37.8883 11.3236L27.7383 19.1581L34.5261 3.56835Z"
                                        fill="white"
                                    />
                                    <path
                                        class="letter"
                                        d="M159.91 24.804L173.692 14.4637L178.275 24.804H181.859L170.995 0.0317078H167.332L156.437 24.804H159.91ZM169.029 3.56834L172.391 11.3236L162.241 19.1581L169.029 3.56834Z"
                                        fill="white"
                                    />
                                    <path
                                        class="letter"
                                        d="M245.265 51.9711L231.309 35.0967H226.725L245.201 56.8082H228.581V59.8849H245.265H245.947H248.611V35.0967H245.265V51.9711Z"
                                        fill="white"
                                    />
                                    <path
                                        class="letter"
                                        d="M189.709 35.065H185.174L173.184 46.6741V35.1443H169.917V59.9166H173.184V50.7975L177.482 46.7058L185.998 59.9166H189.979L179.718 44.5648L189.709 35.065Z"
                                        fill="white"
                                    />
                                </svg>
                            </router-link>
                        </div>
                    </div>
                    <ul class="tiles">
                        <li>
                            <router-link class="menu-item" to="/tile">
                                плитка
                            </router-link>
                        </li>
                        <li>
                            <router-link class="menu-item" to="/breeze-block">
                                бриз-блок
                            </router-link>
                        </li>
                        <li>
                            <router-link class="menu-item" to="/gallery">
                                галерея
                            </router-link>
                        </li>
                    </ul>

                    <ul class="services">
                        <router-link class="menu-item" to="/configurator">
                            конфигуратор
                        </router-link>
                        <router-link class="menu-item" to="/price">
                            прайс-лист и оплата
                        </router-link>
                    </ul>

                    <div class="contacts">
                        <router-link to="/contacts" class="contact">
                            контакты
                        </router-link>

                        <ul class="socials">
                            <li>
                                <a
                                    href="https://wa.me/79024728657"
                                    target="_blank"
                                >
                                    <img
                                        class="wu"
                                        src="@/assets/img/Whatsup.svg"
                                        alt="Whatsup"
                                /></a>
                            </li>
                            <li>
                                <a href="https://t.me/cemtiles" target="_blank"
                                    ><img
                                        class="tg"
                                        src="@/assets/img/Telegram.svg"
                                        alt="Telegram"
                                /></a>
                            </li>

                            <li>
                                <a
                                    href="https://www.instagram.com/kamennaya_manufaktura/"
                                    target="_blank"
                                >
                                    <img
                                        class="inst"
                                        src="@/assets/img/Instagram.svg"
                                        alt="Instagram"
                                /></a>
                            </li>
                            <li>
                                <a
                                    href="https://ru.pinterest.com/kamennaya_manufaktura/"
                                    target="_blank"
                                >
                                    <img
                                        class="pt"
                                        src="@/assets/img/pinterest.svg"
                                        alt="pinterest"
                                /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="marginBottom"></div>
    </div>
</template>
<script>
export default {
    name: "myheaderDesktop",

    data() {
        return {
            isSmall: false,
            isMainPage: true,
            logoHeight: 0,
            emptyCellHeight: 0,
            width: document.documentElement.clientWidth,
        };
    },

    mounted() {
        this.isMainPage = this.$route.fullPath == "/" ? true : false;

        this.toggleLogo();
        addEventListener("scroll", this.toggleLogo);
        this.update();
        window.addEventListener("resize", this.update);
    },
    watch: {
        "$route.path"() {
            this.isMainPage = this.$route.fullPath == "/" ? true : false;
            this.update();
            this.toggleLogo();
        },
    },

    methods: {
        toggleLogo() {
            if (this.$route.fullPath == "/") {
                this.isSmall =
                    window.pageYOffset > this.emptyCellHeight - this.logoHeight
                        ? true
                        : false;
            } else this.isSmall = true;
        },
        update() {
            if (this.width > 768) {
                this.width = document.documentElement.clientWidth;
                if (document.querySelector(".logo"))
                    this.logoHeight =
                        document.querySelector(".logo").clientHeight;
                if (!document.querySelector(".emptyCell"))
                    this.emptyCellHeight = 0;
                else
                    this.emptyCellHeight =
                        document.querySelector(".emptyCell").clientHeight;
            }
        },
    },
};
</script>
<style lang="scss">
.marginBottom {
    margin-bottom: 60rem;
    @media (max-width: 768px) {
        margin-bottom: 55rem;
    }
}
.logo,
.letter {
    cursor: url("@/assets/img/cursorHover.svg"), auto !important;
}
.headerString {
    display: grid;
    grid-template-columns: repeat(4, 430rem);
    grid-template-rows: 60rem;

    .tiles,
    .services,
    .contacts {
        display: flex;
        align-items: center;
        padding-left: 30rem;
        border-right: 1px solid #515151;
    }
    .logoCell {
        border-left: 1px solid #515151;
        position: relative;
        width: 430rem;
        border-right: 1px solid #515151;

        .logoWrapper {
            padding: 28rem 30rem;
            position: absolute;
            width: 100%;
            height: 88rem;

            .logo {
                width: 296rem;
                height: 60rem;
                &:hover {
                    .letter {
                        fill: rgba(255, 255, 255, 1);
                    }
                }
            }
        }
        .smallWrapper {
            padding: 15rem 30rem 12rem 30rem;
            height: 59rem;
            .small {
                height: 33rem;
                width: 163rem;
            }
            .logo {
                cursor: url("@/assets/img/cursorHover.svg"), auto;
                .letter {
                    fill: rgba(255, 255, 255, 0.7);
                }
            }
        }
    }
    .tiles,
    .services {
        gap: 30rem;
        .router-link-active {
            color: rgba(255, 255, 255, 1) !important;
        }
        .menu-item {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            font-size: 18rem;
            line-height: 22rem;
            cursor: url("@/assets/img/cursorHover.svg"), auto;
            &:hover {
                color: rgba(255, 255, 255, 1);
            }
        }
    }

    .contacts {
        justify-content: space-between;
        padding-right: 30rem;
        .router-link-active {
            color: rgba(255, 255, 255, 1) !important;
        }
        .contact {
            cursor: url("@/assets/img/cursorHover.svg"), auto;
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            font-size: 18rem;
            line-height: 22rem;
            &:hover {
                color: rgba(255, 255, 255, 1);
            }
        }
    }
}
.socials {
    display: flex;
    gap: 5rem;

    .wu,
    .tg,
    .inst,
    .pt {
        width: 30rem;
        height: 30rem;
        cursor: url("@/assets/img/cursorHover.svg"), auto;
        @media (max-width: 768px) {
            width: 40rem;
            height: 40rem;
        }
    }
}
.inst {
    &:hover {
        content: url(@/assets/img/InstagramHover.svg);
    }
}
.wu {
    &:hover {
        content: url(@/assets/img/WhatsupHover.svg);
    }
}
.tg {
    &:hover {
        content: url(@/assets/img/TelegramHover.svg);
    }
}
.pt {
    &:hover {
        content: url(@/assets/img/pinteresthover.svg);
    }
}
</style>
