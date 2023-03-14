<template>
    <div class="wrapper">
        <nav>
            <div class="breadcrumbs">
                <router-link class="link active" to="/">главная</router-link> /
                <slot></slot>
            </div>
            <h1>
                <slot></slot>
                <span
                    v-if="
                        this.$route.fullPath == '/configurator' ||
                        this.$route.fullPath == '/gallery' ||
                        this.$route.fullPath == '/articles'
                    "
                    >(скоро)</span
                >
            </h1>
        </nav>
    </div>
</template>
<script>
export default {
    name: "mytitle",
};
</script>
<style lang="scss">
nav {
    display: flex;
    height: 368rem;
    padding: 20rem 30rem;
    width: 1720rem;
    border-left: 1px solid #515151;
    border-right: 1px solid #515151;
    position: relative;
    @media (max-width: 768px) {
        width: 356rem;
        height: 178rem;
    }
    .breadcrumbs {
        position: absolute;
        font-size: 18rem;
        line-height: 22rem;
        text-decoration: none;

        .active {
            color: #fff;
            cursor: url("@/assets/img/cursorHover.svg"), auto;
        }
        .link {
            font-size: 18rem;
            line-height: 22rem;
        }
        @media (max-width: 768px) {
            display: none;
        }
    }
    h1 {
        display: flex;
        flex-direction: column;
        margin: auto;

        text-align: center;
        font-size: 64rem;
        line-height: 100%;

        color: rgba(255, 255, 255, 0.7);
        @media (max-width: 768px) {
            font-size: 40rem;
        }
    }
}
</style>
