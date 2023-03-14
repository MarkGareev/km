<template>
    <div class="wrapper">
        <router-link class="galeryBlock" to="/gallery"> галерея </router-link>
    </div>
</template>
<script>
export default {
    name: "galleryBlock",
};
</script>
<style lang="scss">
.galeryBlock {
    max-width: 1920px;
    width: 100%;
    height: 860rem;
    background-image: url("@/assets/img/galery.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 32rem;
    line-height: 110%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    text-decoration: none;

    @media (max-width: 768px) {
        max-height: 356rem;
        font-size: 16rem;
    }
}
</style>
