import { defineStore } from "pinia"

export const useModalStore = defineStore("modalInfo", {
    state: () => ({
        layerType: "",
        layerTarget: null,
        layerVisible: false
    }),
    getters: {},
    actions: {
        layerFlow(target, layerType) {
            this.layerToggle(target)
            this.layerType = layerType
        },
        layerToggle(el) {
            if (this.layerTarget !== el || null) {
                this.layerTarget = el
                this.layerVisible = true
            } else {
                this.layerTarget = el
                this.layerVisible = !this.layerVisible
                this.layerTarget = null
            }
            if (event === null || event === undefined) {
                return true
            } else {
                event.stopPropagation()
            }
        }
    }
})
