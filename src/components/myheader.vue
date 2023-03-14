<template>
    <header>
        <myheaderDesktop v-if="width > 768" />
        <myheaderMobile v-else />
    </header>
</template>
<script>
import myheaderMobile from "@/components/myheaderMobile.vue";
import myheaderDesktop from "@/components/myheaderDesktop.vue";

export default {
    name: "myheader",
    components: { myheaderMobile, myheaderDesktop },
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
<style lang="scss"></style>
