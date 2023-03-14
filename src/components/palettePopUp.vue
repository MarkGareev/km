<template>
    <div class="palettePopUp">
        <div class="mainColor" @click.stop="isPopUp">
            {{ colors[id][indexColor].caption }}
        </div>
        <hr class="linePopUp" />
        <img
            class="mainImgColor"
            :src="
                require(`@/assets/img/colors/1200x1200/${colors[id][indexColor].caption}.jpg`)
            "
            alt="color"
        />
        <div class="sliderColors"></div>
    </div>
</template>
<script>
export default {
    name: "palettePopUp",
    data() {
        return {
            indexColor: 0,
        };
    },
    props: {
        id: {
            type: Number,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
        colors: {
            type: Array,
            required: true,
        },
    },
    mounted() {
        this.indexColor = this.index;
    },
    methods: {
        isPopUp() {
            this.$emit("isPopUp", false);
        },
    },
};
</script>
<style lang="scss">
.linePopUp {
    position: absolute;
    top: 400rem;
    width: 100%;
    border: 1px solid #515151;
    height: 1px;
}
.mainImgColor {
    width: 680rem;
    height: 680rem;
    position: absolute;
    top: 30rem;
    right: 50%;
    transform: translate(50%);
    padding: 30rem;
    border: 1px solid #515151;
    // background-color: rgba($color: #000000, $alpha: 0.0);
}
.palettePopUp {
    position: fixed;
    top: 60rem;
    width: 100vw;
    font-size: 100rem;

    height: 100vh;
    // background-color: rgba($color: #000000, $alpha: 0.4);
}
.palettePopUp > div {
    background-color: unset;
}
</style>
