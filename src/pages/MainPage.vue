<template>
    <main>
        <div class="wrapper">
            <div class="emptyString">
                <div class="emptyCell firstCell"></div>
                <div class="emptyCell"></div>
                <div class="emptyCell"></div>
                <div class="emptyCell"></div>
            </div>
        </div>
        <div class="wrapper">
            <div class="firstString">
                <router-link class="firstCell" to="/breeze-block">
                    паттерны <br />
                    бриз-блоков
                </router-link>
                <router-link class="secondCell" to="/tile">
                    цементная <br />
                    плитка
                </router-link>
                <router-link class="doubleCell" to="/configurator">
                    перейти <br />
                    к конфигуратору
                </router-link>
            </div>
            <div class="line3"></div>
        </div>
        <div class="wrapper">
            <div class="twoBigCells">
                <a
                    href="https://ru.pinterest.com/kamennaya_manufaktura/"
                    class="firstBigCell pinterest"
                    target="_blank"
                >
                    пинтерест
                </a>

                <router-link to="/articles" class="secondBigCell"
                    >статьи</router-link
                >
            </div>
            <div class="line2"></div>
            <div class="line"></div>
        </div>

        <div class="wrapper">
            <div class="videoCell">
                <video
                    preload="auto"
                    loop
                    autoplay="autoplay"
                    muted="muted"
                    src="@/assets/video/video.mp4"
                ></video>
            </div>
        </div>
        <div class="wrapper">
            <div class="twoBigCells">
                <router-link to="/articles" class="cellGallery">
                    <img src="@/assets/img/photo.jpg" alt="photo" />
                    <span>как в перми запустилось производство</span>
                </router-link>

                <router-link to="/articles" class="history">
                    история плитки
                </router-link>
            </div>
            <div class="line"></div>
        </div>
        <div class="wrapper">
            <div class="twoBigCells twoSmallCells">
                <router-link to="/gallery" class="firstBigCell galeryBg">
                    галерея
                </router-link>
                <router-link to="/contacts" class="secondBigCell">
                    контакты
                </router-link>
            </div>
            <div class="line"></div>
        </div>
    </main>
</template>
<script>
export default {
    name: "MainPage",
};
</script>
<style lang="scss">
.wrapper {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #515151;
    position: relative;
}
.line {
    position: absolute;
    height: 1px;
    width: 50%;
    top: 430rem;
    right: 50%;
    background-color: #515151;
    @media (max-width: 768px) {
        right: 0%;
        top: 354rem;
        width: 100%;
        z-index: 2;
    }
}
.line2 {
    position: absolute;
    height: 1px;
    width: 100%;
    top: 430rem;

    background-color: #515151;
    @media (max-width: 768px) {
        display: none;
    }
}
.line3 {
    @media (max-width: 768px) {
        position: absolute;
        height: 1px;
        z-index: 1;
        width: 100%;
        background-color: #515151;
        display: block;
        top: 50%;
    }
}
.line4 {
    display: none;
    position: absolute;
    height: 1px;
    background-color: #515151;
    @media (max-width: 768px) {
        display: unset;
        right: 0%;
        top: 177rem;
        width: 100%;
        z-index: 0;
    }
}
.emptyString {
    display: grid;
    grid-template-columns: repeat(4, 430rem);
    grid-template-rows: 370rem;
    .emptyCell {
        border-right: 1px solid #515151;
    }
    @media (max-width: 768px) {
        display: none;
    }
}
.firstCell {
    border-left: 1px solid #515151;
}
.firstString {
    display: grid;
    grid-template-columns: repeat(2, 430rem) 860rem;
    grid-template-rows: 430rem;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 178rem);
        grid-template-rows: repeat(2, 178rem);
    }
    .firstCell,
    .secondCell,
    .doubleCell {
        font-size: 32rem;
        line-height: 110%;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.7);
        padding: 25rem 30rem;
        border-right: 1px solid #515151;
        @media (max-width: 768px) {
            padding: 15rem;
            font-size: 16rem;
        }

        &:hover {
            border: 1px solid #fff;
            z-index: 2;
            margin: -1px;
            width: 431rem;

            color: rgba(255, 255, 255, 1);
            @media (max-width: 768px) {
                border: 1px solid #515151;
                border-bottom: none;
                border-top: none;
                z-index: unset;
                margin: unset;
                width: unset;

                color: unset;
            }
        }
    }
    .firstCell {
        border-left: 1px solid #515151;

        &:hover {
            margin: -1px 0;
            width: 430rem;
            background-image: url("@/assets/img/k.svg");
            background-repeat: no-repeat;
            background-position: 212rem;
            @media (max-width: 768px) {
                margin: unset;
                width: unset;
                background-image: unset;
            }
        }
    }
    .secondCell {
        position: relative;
        &:hover {
            background-image: url("@/assets/img/m.svg");
            background-repeat: no-repeat;
            background-size: contain;
            @media (max-width: 768px) {
                background-image: unset;
                border-left: none;
            }
        }
    }
    .doubleCell {
        position: relative;
        @media (max-width: 768px) {
            border-left: 1px solid #515151;
            width: 356rem;
            background-image: url("@/assets/img/configuratorbgSmall.svg");
            background-repeat: no-repeat;
            background-position: calc(178rem - 2px);

            background-size: 179rem;
        }

        &:hover {
            width: 861rem;
            color: rgba(255, 255, 255, 1);
            background-image: url("@/assets/img/configuratorbg.svg");
            background-repeat: no-repeat;
            background-position: 429rem;
            background-size: contain;
            @media (max-width: 768px) {
                border-top: 1px solid #515151;
                border-left: 1px solid #515151;
                width: 356rem;
                background-image: url("@/assets/img/configuratorbgSmall.svg");
                background-repeat: no-repeat;
                background-position: 176.5rem;
                background-size: 179rem;
            }
        }
    }
}
.videoCell {
    position: relative;
    @media (max-width: 768px) {
        height: 373rem;
        width: 100%;
    }
    video {
        width: 100%;
        // @media (min-width: 2559px) {
        //     width: 1720rem;
        // }
        @media (max-width: 768px) {
            position: absolute;
            top: 0;
            left: 50%;
            display: block;
            min-width: 100%;
            height: calc(100% - 1px);
            -o-object-fit: cover;
            object-fit: cover;
            -o-object-position: center top;
            object-position: center top;
            transform: translateX(-50%);
        }
    }
}
.twoBigCells {
    width: 1720rem;
    display: grid;
    grid-template-columns: calc(50% - 1px) calc(50% + 1px);
    grid-template-rows: 860rem;
    z-index: 2;
    @media (max-width: 768px) {
        width: unset;

        grid-template-columns: 356rem;
        grid-template-rows: 355rem 355rem;
    }
    .cellGallery {
        border-left: 1px solid #515151;
        position: relative;
        text-align: center;

        img {
            width: 100%;
            height: 100%;
        }
        span {
            display: none;
            @media (max-width: 768px) {
                display: unset;
                font-size: 16rem;
                line-height: 120%;
                text-decoration: none;
                color: rgba(255, 255, 255, 0.7);
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: transparent;
            }
        }
        &:hover {
            margin-top: -1px;
            height: calc(100% + 2rem);
            width: calc(100% + 1px);
            border: 1px solid #fff;
            z-index: 3;
            img {
                cursor: url("@/assets/img/cursorHover.svg"), auto;

                opacity: 0.3;
                @media (max-width: 768px) {
                    opacity: unset;
                }
            }
            span {
                cursor: url("@/assets/img/cursorHover.svg"), auto;

                display: unset;
                font-size: 32rem;
                line-height: 120%;
                text-decoration: none;
                color: rgba(255, 255, 255, 1);
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: transparent;
                text-align: center;
                @media (max-width: 768px) {
                    font-size: 16rem;
                    line-height: 120%;
                    color: rgba(255, 255, 255, 0.7);
                }
            }
            @media (max-width: 768px) {
                width: 100%;
                margin-top: unset;
                height: unset;
                border: 1px solid #515151;
                border-top: none;
            }
        }
        @media (max-width: 768px) {
            border-right: 1px solid #515151;
            border-bottom: 1px solid #515151;
        }
    }
    .history {
        z-index: 2;
        border-left: 1px solid #515151;
        border-right: 1px solid #515151;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        font-size: 32rem;
        line-height: 120%;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.7);
        background-image: url("@/assets/img/history.svg");
        background-size: cover;

        &:hover {
            margin-top: -1px;
            height: 862rem;
            border: 1px solid #fff;
            color: rgba(255, 255, 255, 1);
            background-image: url("@/assets/img/historyhover.svg");
            background-size: cover;
            @media (max-width: 768px) {
                margin-top: unset;
                height: 355rem;
                border: 1px solid #515151;
                color: unset;
                border-top: none;
                border-bottom: none;
                background-image: url("@/assets/img/history.svg");
                background-size: 355rem;
            }
        }
        @media (max-width: 768px) {
            font-size: 16rem;
            background-position: 0px;
        }
    }

    .pinterest {
        background-image: url("@/assets/img/pinterestbg.svg");
        background-size: cover;
        background-position: 50%;
        @media (max-width: 768px) {
            background-image: url("@/assets/img/pinterestbgSmall.svg");
            background-position: -2.5px;
            background-size: 357rem;
        }
        &:hover {
            background-image: url("@/assets/img/pinterestbghover.svg");
            @media (max-width: 768px) {
                background-image: url("@/assets/img/pinterestbg.svg");
            }
        }
    }
}

.firstBigCell {
    border-left: 1px solid #515151;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32rem;
    line-height: 120%;

    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    &:hover {
        border: 1px solid #fff;
        color: rgba(255, 255, 255, 1);
        margin-top: -1px;
        height: 862rem;
        width: 860rem;
        z-index: 2;
        @media (max-width: 768px) {
            border: 1px solid #515151;

            color: unset;
            height: unset;
            width: unset;
        }
    }
    @media (max-width: 768px) {
        font-size: 16rem;
        line-height: 120%;
        border: 1px solid #515151;
        border-top: none;
    }
}

.secondBigCell {
    border-left: 1px solid #515151;
    border-right: 1px solid #515151;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32rem;
    line-height: 120%;
    text-align: center;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    &:hover {
        margin-top: -1px;
        height: 862rem;
        border: 1px solid #fff;
        color: rgba(255, 255, 255, 1);
    }
    @media (max-width: 768px) {
        font-size: 16rem;
        line-height: 120%;

        &:hover {
            margin-top: unset;
            height: unset;
            border: none;
            border-left: 1px solid #515151;
            border-right: 1px solid #515151;
            color: unset;
        }
    }
}

.galeryBg {
    background-image: url("@/assets/img/galerybg.svg");
    background-size: cover;
    &:hover {
        background-image: url("@/assets/img/galerybghover.svg");
    }
    @media (max-width: 768px) {
        background-image: url("@/assets/img/galerybg.svg");

        &:hover {
            background-image: url("@/assets/img/galerybg.svg");
        }
    }
}
</style>
