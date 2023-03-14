<template>
    <div>
        <mytitle>контакты</mytitle>

        <div class="wrapper">
            <div class="firstStringC">
                <div class="firstCellC">
                    <h6 class="cellTitle">Адрес</h6>
                    <ul class="list">
                        <li class="item">
                            <a
                                href="https://yandex.ru/maps/50/perm/house/promyshlennaya_ulitsa_63_1/YU8YdwRhSUwBQFttfXV1eX5mYQ==/?ll=56.129709%2C57.948571&z=17.23"
                                target="_blank"
                            >
                                промышленная, 63/1
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="secondCellC">
                    <h6 class="cellTitle">Email</h6>
                    <ul class="list">
                        <li class="item">
                            <a href="mailto:cemtiles@gmail.com">
                                cemtiles@gmail.com</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="secondCellC borderleft">
                    <h6 class="cellTitle">Телефоны</h6>
                    <ul class="list">
                        <li class="item">
                            <a href="tel:+7 342 298–86–57"> +7 342 298–86–57</a>
                        </li>
                        <li class="item">
                            <a href="tel:+7 902 472–86–57 ">
                                +7 902 472–86–57</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="secondCellC">
                    <h6 class="cellTitle">Соцсети</h6>
                    <ul class="list">
                        <li class="item" style="text-decoration: underline">
                            <a href="https://wa.me/79024728657" target="_blank">
                                what's up</a
                            >
                        </li>
                        <li class="item" style="text-decoration: underline">
                            <a href="https://t.me/cemtiles" target="_blank">
                                telegram</a
                            >
                        </li>
                        <li class="item" style="text-decoration: underline">
                            <a
                                href="https://www.instagram.com/kamennaya_manufaktura/"
                                target="_blank"
                            >
                                instagram</a
                            >
                        </li>
                        <li class="item" style="text-decoration: underline">
                            <a
                                href="https://ru.pinterest.com/kamennaya_manufaktura/"
                                target="_blank"
                            >
                                pinterest</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
            <div class="line3"></div>
        </div>

        <!-- MAP -->
        <div class="wrapper">
            <iframe
                class="map"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad66e0009ef4aed78adf6be4d9cb0d0298dc4386f7b0a15dc8bee5176a36f5ca1"
            ></iframe>
        </div>

        <div class="wrapper">
            <div class="twoBigCells">
                <router-link to="/price" class="firstBigCell pricebg">
                    прайс-лист и оплата
                </router-link>

                <router-link to="/articles" class="secondBigCell">
                    история создания
                </router-link>
                <div class="line"></div>
                <div class="line4"></div>
            </div>
        </div>

        <galleryBlock />
    </div>
</template>
<script>
import mytitle from "@/components/mytitle.vue";
import galleryBlock from "@/components/galleryBlock.vue";
export default {
    name: "ContactsPage",
    components: {
        mytitle,
        galleryBlock,
    },
};
</script>
<style lang="scss">
.firstStringC {
    display: grid;
    grid-template-columns: repeat(4, 430rem);
    grid-template-rows: 430rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 178rem);
        grid-template-rows: repeat(2, 178rem);
    }
    .firstCellC {
        border-left: 1px solid #515151;
    }
    .firstCellC,
    .secondCellC {
        border-right: 1px solid #515151;
        padding: 25rem 30rem;
        @media (max-width: 768px) {
            padding: 15rem;
        }
        .cellTitle {
            font-family: "GolosText";
            font-size: 20rem;
            line-height: 150%;
            font-variant: normal;
            color: #515151;
            @media (max-width: 768px) {
                font-size: 12rem;
            }
        }
        .list {
            margin-top: 15rem;
            .item {
                a {
                    font-size: 32rem;
                    line-height: 120%;
                    color: rgba(255, 255, 255, 0.7);
                    &:hover {
                        color: rgba(255, 255, 255, 1);
                    }

                    @media (max-width: 768px) {
                        font-size: 16rem;
                    }
                }
            }
        }
    }
}
.map {
    width: 1720rem;
    height: 860rem;
    max-width: 1920rem;
    @media (max-width: 768px) {
        // width: 375rem;
        height: 356rem;
    }
}
</style>
