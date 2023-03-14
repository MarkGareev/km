<template>
    <div class="preloader">
        <div class="loader">
            {{}}
        </div>
    </div>
</template>
<script>
export default {
    name: "preloader",
    data() {
        return {};
    },

    mounted() {},
};
</script>

<style lang="scss">
.preloader {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #060606;
    z-index: 99999990;
    .loader {
        // width: 100%;
        // height: 75rem;
        // border: 10rem solid white;
        // border-radius: 50%;
        color: rgba(255, 255, 255, 0.7);
        font-size: 64rem;
        line-height: 100%;
        background-color: #060606;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
