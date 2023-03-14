<template>
    <div>
        <mytitle>плитка</mytitle>
        <div class="wrapper">
            <div class="firstStringT">
                <router-link to="/palette" class="firstCellT">
                    смотреть <br />
                    палитру
                </router-link>
                <a
                    href="./files/recommendations-tile.pdf"
                    target="_blank"
                    class="secondCell"
                >
                    укладка и уход <br />
                    (pdf)
                </a>
                <a
                    class="secondCell borderleft"
                    href="./files/tsement-2022.pdf"
                    target="_blank"
                >
                    скачать прайс <br />
                    (pdf)
                </a>
                <router-link to="/configurator" class="secondCell">
                    перейти <br />
                    к конфигуратору
                </router-link>
            </div>
            <div class="line3"></div>
        </div>

        <tileList />

        <div class="wrapper">
            <div class="twoBigCells">
                <router-link
                    to="/price"
                    class="firstBigCell firstBigCellMobile pricebg"
                >
                    прайс-лист и оплата
                </router-link>
                <router-link to="/articles" class="secondBigCell square">
                    обязательно к прочтению
                </router-link>
            </div>
            <div class="line3"></div>
            <div class="line2"></div>
        </div>
        <galleryBlock />
    </div>
</template>
<script>
import tileList from "@/components/tileList.vue";
import mytitle from "@/components/mytitle.vue";
import galleryBlock from "@/components/galleryBlock.vue";
export default {
    name: "TilePage",
    components: {
        tileList,
        mytitle,
        galleryBlock,
    },
};
</script>
<style lang="scss">
.firstStringT {
    display: grid;
    grid-template-columns: repeat(4, 430rem);
    grid-template-rows: 430rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 178rem);
        grid-template-rows: repeat(2, 178rem);
    }
    .firstCellT {
        border-left: 1px solid #515151;
        &:hover {
            margin: -1px 0;
            width: 430rem;
        }
        @media (max-width: 768px) {
            &:hover {
                margin: unset;
                width: unset;
                border-left: 1px solid #515151;
            }
        }
    }
    a {
        font-size: 32rem;
        line-height: 120%;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.7);
        padding: 25rem 30rem;
        border-right: 1px solid #515151;
        &:hover {
            border: 1px solid #fff;
            z-index: 2;
            margin: -1px;
            width: 431rem;

            color: rgba(255, 255, 255, 1);
        }
        @media (max-width: 768px) {
            font-size: 16rem;
            line-height: 120%;
            padding: 15rem;
            &:hover {
                border: unset;
                border-right: 1px solid #515151;
                z-index: unset;
                margin: unset;
                width: unset;

                color: unset;
            }
        }
    }
}
</style>
