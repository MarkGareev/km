<template>
    <div class="breezeBlock">
        <mytitle>бриз-блок</mytitle>
        <div class="wrapper">
            <div class="firstStringT">
                <router-link class="firstCellT" to="/articles">
                    подробнее <br />
                    о бриз-блоках
                </router-link>
                <a
                    class="secondCell"
                    href="./files/recommendations-breeze-block.pdf"
                    target="_blank"
                >
                    рекомендации <br />
                    по монтажу (pdf)
                </a>
                <a
                    class="secondCell borderleft"
                    href="./files/breeze-block-2022.pdf"
                    target="_blank"
                >
                    скачать прайс <br />
                    (pdf)
                </a>
                <router-link class="secondCell" to="/articles">
                    другие статьи
                </router-link>
            </div>
            <div class="line3"></div>
        </div>
        <div class="wrapper">
            <div class="firstStringT">
                <div class="cellP firstCell cell">
                    <h6>
                        паттерны <br />
                        бриз-блоков
                    </h6>
                    <p>Размеры блока 250X250X80 мм</p>
                </div>
                <div class="cell">
                    <span class="white">2W</span>
                    <img
                        class="patternImg"
                        src="@/assets/img/patterns/2W.jpg"
                        alt="pattern"
                    />
                </div>
                <div class="cell borderleft">
                    <span class="white">3G</span>
                    <img
                        class="patternImg"
                        src="@/assets/img/patterns/3G.jpg"
                        alt="pattern"
                    />
                </div>
                <div class="cell">
                    <span class="white">4W</span>
                    <img
                        class="patternImg"
                        src="@/assets/img/patterns/4W.jpg"
                        alt="pattern"
                    />
                </div>
            </div>
            <div class="line3"></div>
        </div>
        <div class="wrapper" v-for="(patterns, id) in getArrPatterns" :key="id">
            <div class="firstStringT">
                <div
                    v-for="(pattern, index) in patterns"
                    :key="index"
                    class="cell"
                    :class="{
                        firstCell: index === 0,
                        borderleft: index % 2 === 0,
                    }"
                >
                    <span v-if="pattern.title !== ''" class="white">{{
                        pattern.title
                    }}</span>
                    <img
                        v-if="pattern.title !== ''"
                        class="patternImg"
                        :src="
                            require(`@/assets/img/patterns/${pattern.title}.jpg`)
                        "
                        alt="pattern"
                    />
                </div>
            </div>
            <div class="line3"></div>
        </div>

        <div class="wrapper">
            <div class="twoBigCells">
                <router-link
                    to="/price"
                    class="firstBigCell firstBigCellMobile pricebg"
                >
                    прайс-лист и оплата
                </router-link>

                <router-link
                    to="/contacts"
                    class="secondBigCell secondBigCellMobile"
                >
                    контакты
                </router-link>
            </div>
            <div class="line2"></div>
            <div class="line"></div>
            <div class="line4"></div>
        </div>
        <galleryBlock />
    </div>
</template>
<script>
import mytitle from "@/components/mytitle.vue";
import galleryBlock from "@/components/galleryBlock.vue";

export default {
    name: "BreezeBlockPage",
    components: {
        mytitle,
        galleryBlock,
    },
    computed: {
        getPatterns() {
            return [
                [
                    { title: "5G" },
                    { title: "6W" },
                    { title: "7G" },
                    { title: "8W" },
                ],
                [
                    { title: "9G" },
                    { title: "10W" },
                    { title: "11G" },
                    { title: "12W" },
                ],
                [
                    { title: "13G" },
                    { title: "14W" },
                    { title: "15G" },
                    { title: "16W" },
                ],
                [
                    { title: "17G" },
                    { title: "18W" },
                    { title: "19G" },
                    { title: "20W" },
                ],
                [{ title: "21G" }, { title: "22W" }, { title: "23G" }],
            ];
        },
        getArrPatterns() {
            let emptyObj = { title: "" };

            if (this.getPatterns[this.getPatterns.length - 1].length < 4)
                for (let i = 0; i < 4; i++)
                    if (!this.getPatterns[this.getPatterns.length - 1][i]) {
                        this.getPatterns[this.getPatterns.length - 1].push(
                            emptyObj
                        );
                    }

            return this.getPatterns;
        },
    },
};
</script>
<style lang="scss">
.borderleft {
    @media (max-width: 768px) {
        border-left: 1px solid #515151;
        &:hover {
            border-left: 1px solid #515151 !important;
        }
    }
}
.cellP {
    padding: 25rem 30rem;
}
.cell {
    padding: 30rem;
    position: relative;
    border-right: 1px solid #515151;
    @media (max-width: 768px) {
        padding: 15rem;
    }
    h6 {
        font-size: 32rem;
        line-height: 120%;
        @media (max-width: 768px) {
            font-size: 16rem;
            line-height: 150%;
        }
    }
    p {
        position: absolute;
        bottom: 30rem;
        font-family: "GolosText";

        font-size: 18rem;
        line-height: 120%;
        font-variant: normal;
        @media (max-width: 768px) {
            font-size: 12rem;
            line-height: 150%;
            bottom: 15rem;
        }
    }
    .patternImg {
        width: 370rem;
        height: 370rem;
        @media (max-width: 768px) {
            width: 148rem;
            height: 148rem;
        }
    }
    span {
        background-color: transparent;
        top: 40rem;
        left: 40rem;
        position: absolute;
        font-family: "GolosText";
        background-color: #060606;
        width: 45rem;
        height: 32rem;
        align-items: center;
        display: flex;
        justify-content: center;
        font-size: 18rem;
        line-height: 120%;
        font-variant: normal;
        color: #515151;
        @media (max-width: 768px) {
            font-size: 12rem;
            line-height: 16rem;
            width: 35rem;
            height: 22rem;
            top: 25rem;
            left: 25rem;
        }
    }
    .white {
        color: #ffffff;
    }
}

.pricebg {
    background-image: url("@/assets/img/pricebg.svg");
    z-index: 3;
    background-size: 862rem;
    background-position-x: -3rem;

    &:hover {
        background-image: url("@/assets/img/pricebghover.svg");
    }
    @media (max-width: 768px) {
        background-position-x: -1rem;
        background-size: 355rem;

        &:hover {
            background-image: url("@/assets/img/pricebg.svg");
        }
    }
}
</style>
