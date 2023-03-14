<template>
    <div>
        <mytitle>прайс-лист и оплата</mytitle>
        <div class="wrapper">
            <div class="bigRow twoBigCells">
                <a
                    href="./files/breeze-block-2022.pdf"
                    target="_blank"
                    class="firstBigCell circleandcube"
                >
                    скачать прайс <br />
                    бриз-блок (pdf)
                </a>
                <a
                    href="./files/tsement-2022.pdf"
                    target="_blank"
                    class="secondBigCell"
                >
                    скачать прайс <br />
                    плитка (pdf)
                </a>
            </div>
        </div>
        <div class="line5"></div>
        <div class="wrapper bgcolor">
            <div class="twoBigCells bigRow">
                <div class="qr bgcolor">
                    оплата по сбп
                    <a
                        href="https://qr.nspk.ru/BS1A003LBBPURI9D8IF87JI3UOFK5FTS?type=01&bank=100000000004&crc=39B1"
                        target="_blank"
                        class="howTo"
                        >Как оплатить по QR?</a
                    >
                    <a href="https://goo.su/wfiq" target="_blank"
                        ><img
                            src="@/assets/img/qr.png"
                            alt="qr"
                            class="bgcolor"
                    /></a>
                </div>
                <a
                    class="qrM bgcolor"
                    href="https://goo.su/wfiq"
                    target="_blank"
                >
                    оплата по сбп
                </a>
                <div class="requisites bgcolor">
                    <div class="requisitesTable bgcolor">
                        <h6 class="requisitesTitle bgcolor">
                            реквизиты для оплаты
                        </h6>
                        <p
                            class="toCopy bgcolor"
                            v-clipboard:copy="'ИП Леонтьев Сергей Владимирович'"
                        >
                            ИП Леонтьев Сергей Владимирович
                            <button
                                class="copy bgcolor"
                                v-clipboard:copy="
                                    'ИП Леонтьев Сергей Владимирович'
                                "
                            ></button>
                        </p>
                        <p
                            class="toCopy bgcolor"
                            v-clipboard:copy="'р/с 40802810300000011718'"
                        >
                            р/с 40802810300000011718
                            <button
                                class="copy bgcolor"
                                v-clipboard:copy="'р/с 40802810300000011718'"
                            ></button>
                        </p>
                        <p
                            class="toCopy half bgcolor"
                            v-clipboard:copy="'к/с 30101810900000000974'"
                        >
                            к/с 30101810900000000974
                            <button
                                class="copy bgcolor"
                                v-clipboard:copy="'к/с 30101810900000000974'"
                            ></button>
                        </p>
                        <p
                            class="toCopy half bgcolor bl"
                            v-clipboard:copy="'БИК 044525974'"
                        >
                            БИК 044525974
                            <button
                                class="copy bgcolor"
                                v-clipboard:copy="'БИК 044525974'"
                            ></button>
                        </p>
                        <p
                            class="toCopy half bgcolor"
                            v-clipboard:copy="'ИНН 590400216301'"
                        >
                            ИНН 590400216301
                            <button
                                class="copy bgcolor"
                                v-clipboard:copy="'ИНН 590400216301'"
                            ></button>
                        </p>
                        <p
                            class="toCopy half bgcolor bl"
                            v-clipboard:copy="'АО «Тинькофф Банк»'"
                        >
                            АО «Тинькофф Банк»
                            <button
                                class="copy bgcolor"
                                v-clipboard:copy="'АО «Тинькофф Банк»'"
                            ></button>
                        </p>
                    </div>
                    <button
                        class="toPay bgcolor"
                        :class="{ wasCopied: isCopy }"
                        v-clipboard:copy="
                            'ИП Леонтьев Сергей Владимирович\nр/с 40802810300000011718\nк/с 30101810900000000974\nБИК 044525974\nИНН 590400216301\nАО «Тинькофф Банк»'
                        "
                        @click="toCopy"
                    >
                        {{ copyText }}
                    </button>
                </div>
            </div>
            <div class="line"></div>
            <div class="line2"></div>
            <div class="line4"></div>
        </div>
    </div>
</template>
<script>
import mytitle from "@/components/mytitle.vue";
export default {
    name: "PricePage",
    components: {
        mytitle,
    },
    data() {
        return {
            isCopy: false,
            copyText: "скопировать текст",
            width: document.documentElement.clientWidth,
        };
    },
    methods: {
        toCopy() {
            this.isCopy = true;
            this.copyText = "текст скопирован";
            this.up();
        },
        up() {
            this.width <= 768
                ? (this.copyText =
                      this.copyText[0].toUpperCase() + this.copyText.slice(1))
                : (this.copyText = this.copyText.toLowerCase());
        },
        updateWidth() {
            this.width = document.documentElement.clientWidth;

            this.up();
        },
    },
    mounted() {
        window.addEventListener("resize", this.updateWidth);
        this.up();
    },
};
</script>
<style lang="scss">
.line5 {
    display: none;
    position: absolute;
    height: 1px;
    width: 50%;
    top: 430rem;
    right: 50%;
    background-color: #515151;
    @media (max-width: 768px) {
        display: unset;
        right: 0%;
        top: 588rem;
        width: 100%;
        z-index: 2;
    }
}
.bigRow {
    @media (max-width: 768px) {
        grid-template-rows: 355rem 379rem;
    }
}
.requisites {
    border-left: 1px solid #515151;
    border-right: 1px solid #515151;
    .requisitesTable {
        display: flex;
        flex-wrap: wrap;
        .requisitesTitle {
            width: 100%;
            color: #060606;
            font-size: 32rem;
            line-height: 120%;
            border-bottom: 1px solid #515151;
            height: 102rem;
            padding: 30rem;
            margin-top: 1px;
            @media (max-width: 768px) {
                font-size: 16rem;
                padding: 15rem;
                height: 49rem;
            }
        }

        .toCopy {
            height: 82rem;
            position: relative;
            width: 100%;
            font-family: "GolosText";

            font-size: 18rem;
            line-height: 120%;
            font-variant: normal;
            color: #515151;
            padding: 30rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #515151;
            cursor: url("@/assets/img/cursorHover.svg"), auto;

            &:hover {
                color: #000;
                .copy {
                    display: unset;
                }
                @media (max-width: 768px) {
                    color: #515151;
                }
            }
            @media (max-width: 768px) {
                font-size: 14rem;
                padding: 15rem;
                height: 47rem;
            }
            .copy {
                display: none;

                border: none;
                font-family: "GolosText";
                font-size: 18rem;
                line-height: 120%;
                font-variant: normal;
                cursor: url("@/assets/img/cursorHover.svg"), auto;
                color: #515151;
                opacity: 0.5;
                &::after {
                    content: "Скопировать";
                }
                @media (max-width: 768px) {
                    display: unset;
                    &::after {
                        content: url("@/assets/img/tocopy.svg");
                    }
                }
            }
        }
        .half {
            width: 50%;
            @media (max-width: 768px) {
                width: 100%;
            }
        }
        .bl {
            border-left: 1px solid #515151;
            @media (max-width: 768px) {
                border-left: none;
            }
        }
    }

    .toPay {
        height: 50%;
        font-size: 32rem;
        line-height: 120%;
        width: 100%;
        border: none;
        border-bottom: 1px solid #515151;

        display: flex;
        align-items: center;
        text-decoration-line: underline;
        text-underline-offset: 4px;
        text-decoration-thickness: 1px;
        font-variant: small-caps;
        color: #515151;
        justify-content: center;

        &:hover {
            color: #060606;
        }
        @media (max-width: 768px) {
            font-family: "GolosText";
            font-variant: normal;
            font-size: 12rem;
            line-height: 150%;
            padding: 15rem;
            justify-content: end;

            height: 48rem;

            text-decoration-line: underline;
            color: #060606;
        }
    }
    .wasCopied {
        text-decoration: none;
        color: #515151;
        cursor: url("@/assets/img/cursor.svg"), auto;
        &:hover {
            color: #515151;
        }
    }
}
.qr {
    display: flex;
    flex-direction: column;
    font-size: 32rem;
    line-height: 120%;

    color: #060606;
    position: relative;
    padding: 30rem;
    border-left: 1px solid #515151;
    background-image: url("@/assets/img/qrbg.svg");

    background-position-y: 1rem;
    background-position-x: -1px;
    background-size: 860rem;
    background-repeat: no-repeat;
    @media (max-width: 768px) {
        display: none;
    }

    .howTo {
        margin-top: 10rem;
        font-family: "GolosText";
        font-variant: normal;
        font-size: 18rem;
        line-height: 120%;
        color: #515151;
        background-color: transparent;
        text-decoration: underline;
        text-underline-offset: 4rem;
        &:hover {
            color: #000;
        }
        @media (max-width: 768px) {
            display: none;
        }
    }
    img {
        position: absolute;
        top: 215rem;
        left: 215rem;
        width: 427rem;
        height: 428rem;
        margin-top: 2rem;
        cursor: url("@/assets/img/cursorHover.svg"), auto;

        @media (max-width: 768px) {
            display: none;
        }
    }
}
.qrM {
    display: none;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #060606;

        background-image: url("@/assets/img/sbppayment.svg");
        background-position-y: -0.5px;
        background-size: 355rem;
        background-repeat: no-repeat;
        border-right: 1px solid #515151;
        border-left: 1px solid #515151;

        padding: 0;

        font-size: 16rem;
    }
}
.circleandcube {
    background-image: url("@/assets/img/circleandcube.svg");
    background-size: 860rem;
    background-repeat: no-repeat;
    &:hover {
        background-image: url("@/assets/img/circleandcubehover.svg");
    }
    @media (max-width: 768px) {
        background-image: url("@/assets/img/circleandcubeSmall.svg");
        background-size: 356rem;
        &:hover {
            background-image: url("@/assets/img/circleandcubeSmall.svg");
        }
    }
}
.bgcolor {
    background-color: #c3beab;
}
</style>
