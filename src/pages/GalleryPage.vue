<template>
    <div>
        <mytitle>галерея</mytitle>
        <div class="wrapper">
            <div class="twoBigCells">
                <router-link to="/" class="firstBigCell circle">
                    вернуться на главную
                </router-link>

                <div class="x secondBigCell"></div>
            </div>
            <div class="line"></div>
        </div>
    </div>
</template>
<script>
import mytitle from "@/components/mytitle.vue";
export default {
    name: "GaleryPage",
    components: {
        mytitle,
    },
};
</script>
<style lang="scss"></style>
