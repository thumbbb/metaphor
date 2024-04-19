import { defineStore } from "pinia"

export const useIndexStore = defineStore("indexInfo", {
    state: () => ({
        swiper: null,
        currentPageIndex: 0
    }),
    getters: {},
    actions: {
        onSwiper(swiper) {
            this.swiper = swiper
        },
        onSlideChange(swiper) {
            this.currentPageIndex = swiper.activeIndex
        },
        goToPage(page) {
            this.swiper.slideTo(page)
        }
    }
})
