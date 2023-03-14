<template>
    <footer>
        <myfooterDesktop v-if="width > 768"></myfooterDesktop>
        <myfooterMobile v-else></myfooterMobile>
    </footer>
</template>
<script>
import myfooterDesktop from "./myfooterDesktop.vue";
import myfooterMobile from "./myfooterMobile.vue";
export default {
    name: "myfooter",
    components: { myfooterDesktop, myfooterMobile },
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
footer {
    display: flex;
    position: relative;
    flex-direction: column;
}
</style>
