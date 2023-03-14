<template>
    <div class="paletteMobile">
        <div class="wrapper" v-for="(colors, id) in getArrColor" :key="id">
            <div class="firstStringT">
                <div
                    v-for="(color, index) in colors"
                    :key="index"
                    class="cell"
                    :class="{
                        firstCell: index === 0,
                        borderleft: index % 2 === 0,
                    }"
                >
                    <span v-if="color.caption !== ''" class="white">{{
                        color.caption
                    }}</span>
                    <img
                        v-if="color.caption !== ''"
                        class="patternImg"
                        :src="
                            require(`@/assets/img/colors/300x300/${color.caption}.jpg`)
                        "
                        alt="pattern"
                    />
                    <div class="linePalette"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "paletteMobile",
    computed: {
        getColor() {
            return [
                [
                    { caption: "101" },
                    { caption: "102" },
                    { caption: "103" },
                    { caption: "104" },
                    { caption: "111" },
                    { caption: "112" },
                    { caption: "120" },
                    { caption: "127" },
                    { caption: "134" },
                    { caption: "200" },
                    { caption: "201" },
                    { caption: "210" },
                    { caption: "213" },
                    { caption: "309" },
                    { caption: "312" },
                    { caption: "313" },
                ],

                [
                    { caption: "314" },
                    { caption: "315" },
                    { caption: "316" },
                    { caption: "322" },
                    { caption: "409" },
                    { caption: "509" },
                    { caption: "512" },
                    { caption: "518" },
                    { caption: "520" },
                    { caption: "521" },
                    { caption: "524" },
                    { caption: "600" },
                    { caption: "601" },
                    { caption: "610" },
                    { caption: "613" },
                    { caption: "616" },
                ],

                [
                    { caption: "618" },
                    { caption: "619" },
                    { caption: "625" },
                    { caption: "627" },
                    { caption: "628" },
                    { caption: "633" },
                    { caption: "634" },
                    { caption: "706" },
                    { caption: "712" },
                    { caption: "722" },
                    { caption: "731" },
                    { caption: "733" },
                    { caption: "736" },
                    { caption: "739" },
                    { caption: "740" },
                    { caption: "743" },
                ],

                [
                    { caption: "744" },
                    { caption: "801" },
                    { caption: "802" },
                    { caption: "803" },
                    { caption: "804" },
                    { caption: "812" },
                    { caption: "815" },
                    { caption: "817" },
                    { caption: "824" },
                    { caption: "825" },
                    { caption: "901" },
                    { caption: "910" },
                    { caption: "911" },
                ],
            ];
        },
        getArrColor() {
            let emptyObj = { caption: "" };

            if (this.getColor[this.getColor.length - 1].length % 2 === 1)
                this.getColor[this.getColor.length - 1].push(emptyObj);

            return this.getColor;
        },
    },
};
</script>
<style lang="scss">
.linePalette {
    display: none;
    position: absolute;
    height: 1px;
    width: 100vw;
    background-color: #515151;
    @media (max-width: 768px) {
        display: unset;

        left: 0;
        top: 179rem;

        transform: translate(-50%);
        z-index: 2;
    }
}
</style>
