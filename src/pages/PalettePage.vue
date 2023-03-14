<template>
    <div class="palette">
        <mytitle>палитра</mytitle>
        <paletteDesktop v-if="width > 768" />
        <paletteMobile v-else />

        <div class="wrapper">
            <div class="twoBigCells">
                <router-link
                    to="/configurator"
                    class="firstBigCell firstBigCellMobile pricebg"
                >
                    конфигуратор
                </router-link>

                <router-link
                    to="/tile"
                    class="secondBigCell secondBigCellMobile"
                >
                    плитка
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
import paletteDesktop from "@/components/paletteDesktop.vue";
import paletteMobile from "@/components/paletteMobile.vue";

export default {
    name: "PalettePage",
    components: {
        mytitle,
        galleryBlock,
        paletteDesktop,
        paletteMobile,
    },
    data() {
        return {
            width: document.documentElement.clientWidth,
        };
    },
    methods: {
        updateWidth() {
            this.width = document.documentElement.clientWidth;
        },
    },
    mounted() {
        window.addEventListener("resize", this.updateWidth);
    },
};
</script>
<style lang="scss">
.borderBottom {
    border-bottom: 1px solid #515151;
}
.stringColors {
    display: grid;
    grid-template-columns: repeat(8, 215rem);
    grid-template-rows: repeat(2, 215rem);
}
.imgColor {
    height: 155rem;
    width: 155rem;
}
</style>
