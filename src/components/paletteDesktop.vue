<template>
    <div class="paletteDesktop">
        <div class="wrapper" v-for="(colors, id) in getArrColor" :key="id">
            <div class="stringColors">
                <div
                    v-for="(color, index) in colors"
                    :key="index"
                    class="cell"
                    :class="{
                        firstCell: index === 0 || index === 8,
                        borderBottom: index < 8,
                        borderleft: index % 2 === 0,
                        cellHover: color.caption !== '',
                    }"
                    @click="openPopUp(id, index)"
                >
                    <span class="white" v-if="color.caption !== ''">{{
                        color.caption
                    }}</span>
                    <img
                        v-if="color.caption !== ''"
                        class="imgColor"
                        :src="
                            require(`@/assets/img/colors/300x300/${color.caption}.jpg`)
                        "
                        alt="color"
                    />
                </div>
            </div>
        </div>
        <palettePopUp
            :id="this.id"
            :index="this.index"
            :colors="this.colors"
            v-if="this.isPopUp"
            @isPopUp="closePopUp"
        />
    </div>
</template>
<script>
import palettePopUp from "@/components/palettePopUp.vue";
export default {
    name: "paletteDesktop",
    components: { palettePopUp },
    data() {
        return {
            id: 0,
            index: 0,
            isPopUp: false,
            colors: [],
        };
    },
    methods: {
        openPopUp(id, index) {
            this.id = id;
            this.index = index;
            this.isPopUp = true;
            this.colors = this.getArrColor;
        },
        closePopUp() {
            this.isPopUp = false;
        },
    },
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

            if (this.getColor[this.getColor.length - 1].length < 16)
                for (let i = 0; i < 16; i++)
                    if (!this.getColor[this.getColor.length - 1][i]) {
                        this.getColor[this.getColor.length - 1].push(emptyObj);
                    }
            return this.getColor;
        },
    },
};
</script>
<style lang="scss" scoped>
.cellHover > span,
img {
    cursor: url("@/assets/img/cursorHover.svg"), auto;
}
.cellHover {
    cursor: url("@/assets/img/cursorHover.svg"), auto;

    &:hover {
        margin-top: -1px;
        border: 1px solid #fff;
        &:nth-child(n + 9) {
            height: 217rem;
        }
    }
    &:not(:first-child, :nth-child(9)) {
        &:hover {
            margin-top: -1px;
            border: 1px solid #fff;
            margin-left: -1px;
        }
    }
}
</style>
