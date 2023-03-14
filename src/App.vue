<template>
    <div id="app">
        <!-- <preloader /> -->
        <myheader />
        <router-view />
        <myfooter />
    </div>
</template>
<script>
import myheader from "./components/myheader.vue";
import myfooter from "./components/myfooter.vue";
// import preloader from "./components/preloader.vue";

export default {
    name: "App",
    components: {
        myheader,
        myfooter,
        // preloader,
    },
    data() {
        return {
            screenWidth: document.documentElement.clientWidth,
        };
    },

    mounted() {
        window.addEventListener("resize", this.update);
    },
    methods: {
        update() {
            this.screenWidth = document.documentElement.clientWidth;
        },
    },
};
</script>
<style lang="scss">
html {
    margin-right: calc(-1 * (100vw - 100%));
    overflow-x: hidden;
    font-size: 1px;

    @media (min-width: 2559px) {
        font-size: 1.21px;
    }
    @media (max-width: 1820px) {
        font-size: 0.925px;
    }
    @media (max-width: 1720px) {
        font-size: 0.9px;
    }
    @media (max-width: 1670px) {
        font-size: 0.86px;
    }
    @media (max-width: 1620px) {
        font-size: 0.825px;
    }
    @media (max-width: 1570px) {
        font-size: 0.8px;
    }

    @media (max-width: 1420px) {
        font-size: 0.76px;
    }
    @media (max-width: 1370px) {
        font-size: 0.7px;
    }
    @media (max-width: 1290px) {
        font-size: 0.66px;
    }
    @media (max-width: 1290px) {
        font-size: 0.65px;
    }
    @media (max-width: 1200px) {
        font-size: 0.625px;
    }
    @media (max-width: 1140px) {
        font-size: 0.6px;
    }
    @media (max-width: 1080px) {
        font-size: 0.56px;
    }
    @media (max-width: 1020px) {
        font-size: 0.525px;
    }
    @media (max-width: 950px) {
        font-size: 0.5px;
    }
    @media (max-width: 900px) {
        font-size: 0.46px;
    }
    @media (max-width: 840px) {
        font-size: 0.425px;
    }
    @media (max-width: 768px) {
        font-size: 1.5px;
    }
    @media (max-width: 630px) {
        font-size: 1.4px;
    }
    @media (max-width: 550px) {
        font-size: 1.2px;
    }
    @media (max-width: 470px) {
        font-size: 1.1px;
    }
    @media (max-width: 420px) {
        font-size: 1px;
    }
    @media (max-width: 374px) {
        font-size: 0.94px;
    }
    @media (max-width: 360px) {
        font-size: 0.9px;
    }
    @media (max-width: 340px) {
        font-size: 0.84px;
    }
    @media (max-width: 330px) {
        font-size: 0.82px;
    }
    @media (max-width: 310px) {
        font-size: 0.8px;
    }
    @media (max-width: 300px) {
        font-size: 0.76px;
    }
}
* {
    cursor: url("@/assets/img/cursor.svg"), auto;

    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border-collapse: collapse;
    background: #060606;
    font-family: "Spectral", serif;
    font-style: normal;
    font-weight: 300;
    font-variant: small-caps;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    ul {
        list-style-type: none;
    }
    a {
        cursor: url("@/assets/img/cursorHover.svg"), auto;
    }
    button {
        cursor: url("@/assets/img/cursorHover.svg"), auto;
    }
}

@font-face {
    font-family: "GolosText";
    src: url("@/assets/fonts/golos-text_regular.ttf") format("truetype");
    src: url("@/assets/fonts/golos-text_regular.woff") format("woff"),
        url("@/assets/fonts/golos-text_regular.woff2") format("woff2");
}
@font-face {
    font-family: "Spectral";
    src: url("@/assets/fonts/Spectralextralight.ttf") format("truetype");
    src: url("@/assets/fonts/Spectralextralight.woff") format("woff"),
        url("@/assets/fonts/Spectralextralight.woff2") format("woff2");
}
.noScroll {
    overflow: hidden;
}
// SCROLL
// ::-webkit-scrollbar {
//     width: 10px;
// }

// ::-webkit-scrollbar-track {
//     background-color: darkgrey;
// }

// ::-webkit-scrollbar-thumb {
//     // box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
//     background-color: #fff;
// }
</style>
