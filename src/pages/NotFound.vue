<template>
    <div>
        <mytitle>страница не найдена</mytitle>
        <div class="wrapper">
            <div class="twoBigCells">
                <router-link to="/" class="firstBigCell circle">
                    вернуться на главную
                </router-link>

                <div class="x secondBigCell"></div>
            </div>
            <div class="line3"></div>
        </div>
    </div>
</template>
<script>
import mytitle from "@/components/mytitle.vue";
export default {
    name: "NotFound",
    components: {
        mytitle,
    },
};
</script>
<style lang="scss">
.circle {
    background-image: url("@/assets/img/circle.svg");
    background-size: contain;
    &:hover {
        background-image: url("@/assets/img/circlehover.svg");
    }
    @media (max-width: 768px) {
        background-image: url("@/assets/img/circleSmall.svg");
        &:hover {
            background-image: url("@/assets/img/circleSmall.svg");
        }
    }
}
.x {
    background-image: url("@/assets/img/x.svg");
    background-size: contain;
    &:hover {
        margin-top: unset;
        height: unset;
        border: unset;
        border-left: 1px solid #515151;
        border-right: 1px solid #515151;
    }
    @media (max-width: 768px) {
        background-image: url("@/assets/img/xSmall.svg");
        &:hover {
            background-image: url("@/assets/img/xSmall.svg");
        }
    }
}
</style>
