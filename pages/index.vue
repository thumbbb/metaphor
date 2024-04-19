<template>
    <NuxtLayout name="default">
        <div class="body-container">
            <Snb :class="{ __active: modalStore.layerVisible && modalStore.layerTarget === 'snb' }" />
            <section class="banner-container">
                <swiper
                    :modules="modules"
                    :pagination="{
                        clickable: true
                    }"
                    :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false
                    }"
                    class="banner-slider"
                >
                    <swiper-slide class="slide-01">Slide 1</swiper-slide>
                    <swiper-slide class="slide-02">Slide 2</swiper-slide>
                    <swiper-slide class="slide-03">Slide 3</swiper-slide>
                    <swiper-slide class="slide-04">Slide 3</swiper-slide>
                </swiper>
            </section>
            <section class="company-container"></section>
            <Footer />
        </div>
        <Layer v-if="modalStore.layerVisible && modalStore.layerTarget === 'layer'" :layerType="modalStore.layerType" />
        <Top-btn />
    </NuxtLayout>
</template>
<script setup>
import { useModalStore } from "../store/useModalStore";
import { useIndexStore } from "../store/useIndexStore";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import { ref } from "vue";
const modules = [Autoplay, Pagination];
const components = {
    Swiper,
    SwiperSlide
};
const modalStore = useModalStore();
const indexStore = useIndexStore();
const licenseInfo = ref("");
const licenseLayer = (layerNum) => {
    licenseInfo.value = layerNum;
};
const closeLicenseLayer = () => {
    licenseInfo.value = 0;
};
</script>

<style lang="scss">
.body-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    .store-test {
        margin: auto;
        background-color: #ffdf15;
        padding: 2rem;
        color: #393939;
        font-size: 2rem;
        border-radius: 3rem;
    }
}
.banner-container {
    height: 70rem;
    .banner-slider {
        height: 100%;
        .slide-01 {
            background-color: blueviolet;
        }
        .slide-02 {
            background-color: #c281ff;
        }
        .slide-03 {
            background-color: #ff8ce6;
        }
        .slide-04 {
            background-color: #c4f0a0;
        }
        .swiper-pagination {
            top: calc(100% - 20rem);
            left: -50rem;
            .swiper-pagination-bullet {
                width: 6rem;
                height: 0.4rem;
                background-color: #fff;
                border-radius: 0;
                text-indent: -9999em;
                &.swiper-pagination-bullet-active {
                    background: #977257;
                }
            }
        }
    }
}
.company-container {
    height: 70rem;
}
</style>
