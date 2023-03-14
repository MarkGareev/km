<template>
    <div class="tileList">
        <div class="tileListDesktop">
            <div class="wrapper">
                <div class="collection">
                    <router-link class="collectionList" to="/configurator">
                        <div
                            to="/configurator"
                            @mouseenter="isHover(index)"
                            v-for="(item, index) in getCollection"
                            :key="`collectionItem-${index}`"
                            class="collectionItem"
                            :class="{ active: index === activeIndex }"
                        >
                            <h6 class="title">{{ item.title }}</h6>
                            <p class="description">{{ item.description }}</p>
                            <p class="size">{{ item.size }}</p>
                        </div>
                    </router-link>
                    <div class="imgCell">
                        <img :src="getImgCollection" alt="tile" />
                    </div>
                </div>
            </div>
        </div>
        <div class="collectionMobile">
            <div
                class="wrapper"
                v-for="(item, index) in getCollection"
                :key="`collectionItem-${index}`"
            >
                <div class="infoCell">
                    <h6 class="titleM">{{ item.title }}</h6>
                    <p class="descriptionM">{{ item.description }}</p>
                    <p class="sizeM">{{ item.size }}</p>
                </div>

                <div class="imgCellM">
                    <img
                        :src="
                            require(`@/assets/img/collection/${item.img}.jpg`)
                        "
                        alt="tile"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "tileList",
    computed: {
        getImgCollection() {
            const currentImg = this.getCollection[this.activeIndex].img;
            return require(`@/assets/img/collection/${currentImg}.jpg`);
        },
        getCollection() {
            return [
                {
                    title: "тунис",
                    description:
                        "Этнические традиционные мотивы Северной Африки",
                    size: "200х200х12/16 мм",
                    img: "0",
                    link: "t",
                },

                {
                    title: "марракеш",
                    description:
                        "Этнические традиционные мотивы Северной Африки",
                    size: "200х200х12/16 мм",
                    img: "1",
                    link: "mr",
                },
                {
                    title: "франкфурт",
                    description: "Геометрия форм и новаторский дизайн Европы",
                    size: "200х200х12/16 мм",
                    img: "2",
                    link: "f",
                },
                {
                    title: "барселона",
                    description: "Геометрия форм и новаторский дизайн Европы",
                    size: "200х200х12/16 мм",
                    img: "3",
                    link: "br",
                },
                {
                    title: "меконг",
                    description:
                        "Цветочный дизайн экзотической флоры Юго-Восточной Азии",
                    size: "200х200х12/16 мм",
                    img: "4",
                    link: "me",
                },
                {
                    title: "бангкок",
                    description:
                        "Цветочный дизайн экзотической флоры Юго-Восточной Азии",
                    size: "200х200х12/16 мм",
                    img: "5",
                    link: "bk",
                },
                {
                    title: "сантьяго",
                    description:
                        "Южноамериканский темперамент для нестандартных форм и решений",
                    size: "230х200х12/16 мм",
                    img: "6",
                    link: "s",
                },
                {
                    title: "рио",
                    description:
                        "Южноамериканский темперамент для нестандартных форм и решений",
                    size: "230х200х12/16 мм",
                    img: "7",
                    link: "r",
                },
            ];
        },
    },
    data() {
        return {
            activeIndex: 0,
        };
    },

    methods: {
        isHover(index) {
            this.activeIndex = index;
        },
    },
};
</script>
<style lang="scss">
.tileListDesktop {
    @media (max-width: 768px) {
        display: none;
    }
    .collection {
        width: 1720rem;
        display: grid;
        grid-template-columns: calc(50% - 1px) calc(50% - 1px);

        border-left: 1px solid #515151;
        border-right: 1px solid #515151;
        .collectionList {
            display: flex;
            flex-direction: column;

            .collectionItem {
                cursor: url("@/assets/img/cursorHover.svg"), auto;
                height: 88rem;
                padding: 25rem 30rem;
                position: relative;

                &:not(:last-child) {
                    border-bottom: 1rem solid #515151;
                }
                &:last-child {
                    &:hover {
                        position: absolute;
                        bottom: -1px;

                        height: 246rem;
                        z-index: 2;
                        border-bottom: 1px solid #fff;
                        .size,
                        .description {
                            bottom: 31rem;
                        }
                    }
                }
                .title {
                    cursor: url("@/assets/img/cursorHover.svg"), auto;
                    font-size: 32rem;
                    line-height: 120%;
                    color: rgba(255, 255, 255, 0.7);
                }
                .description {
                    cursor: url("@/assets/img/cursorHover.svg"), auto;

                    width: 330rem;
                    position: absolute;
                    left: 30rem;
                    bottom: 30rem;

                    display: none;
                    font-family: "GolosText";

                    font-size: 18rem;
                    line-height: 120%;
                    font-variant: normal;

                    color: rgba(255, 255, 255, 0.7);
                }
                .size {
                    cursor: url("@/assets/img/cursorHover.svg"), auto;

                    display: none;
                    position: absolute;
                    left: 430rem;
                    bottom: 30rem;
                    font-family: "GolosText";

                    font-size: 18rem;
                    line-height: 120%;
                    font-variant: normal;

                    color: rgba(255, 255, 255, 0.7);
                }
            }
            .active {
                z-index: 1;
                height: 245rem;
                border-top: 1px solid #515151;
                border-left: 1px solid #515151;

                width: 860rem;
                height: calc(245rem - 1px);

                margin-left: -1px;
                margin-top: -1px;
                // margin-right: -1px;
                .description {
                    display: unset;
                }
                .size {
                    display: unset;
                }
                &:hover {
                    border: 1px solid #fff;
                    z-index: 2;
                    .title,
                    .size,
                    .description {
                        color: rgba(255, 255, 255, 1);
                    }
                }
            }
        }
        .imgCell {
            padding: 30rem;
            border-left: 1px solid #515151;
            z-index: 1;
            img {
                height: 800rem;
                width: 800rem;
            }
        }
    }
}
.collectionMobile {
    display: none;
    @media (max-width: 768px) {
        display: unset;
    }
    .infoCell {
        width: 178rem;
        position: relative;
        border-left: 1px solid #515151;
        border-right: 1px solid #515151;
        padding: 15rem;
        .titleM {
            color: #ffffff;
            font-size: 16rem;
            line-height: 120%;
        }
        .descriptionM {
            width: 135rem;
            margin-top: 5rem;
            font-size: 10rem;
            line-height: 120%;
            font-family: "GolosText";
            font-variant: normal;
            color: rgba(255, 255, 255, 0.7);
        }
        .sizeM {
            font-size: 10rem;
            line-height: 120%;
            font-family: "GolosText";
            font-variant: normal;
            color: rgba(255, 255, 255, 0.7);
            position: absolute;
            bottom: 15rem;
        }
    }
    .imgCellM {
        border-right: 1px solid #515151;

        width: 178rem;
        height: 178rem;
        padding: 15rem;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
