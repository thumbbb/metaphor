<template>
    <div v-if="modalStore.layerType === 'test'" class="dimmed" @click="closeLayerOutside($event)">
        <div class="layer">
            <button class="close-btn" @click="closeLayer($event)">
                <img src="@images/common/ico-close.png" alt="" />
            </button>
        </div>
    </div>
</template>

<script>
import { useModalStore } from "../store/useModalStore";
export default {
    setup() {
        return {
            modalStore: useModalStore()
        };
    },
    methods: {
        closeLayerOutside($event) {
            const layerTarget = this.modalStore.layerTarget;

            if ($event.target.closest("." + layerTarget)) {
                return true;
            } else if (!$event.target.closest("." + layerTarget)) {
                this.modalStore.layerVisible = false;
                this.modalStore.layerTarget = null;
            }
        },
        closeLayer($event) {
            this.modalStore.layerVisible = false;
            this.modalStore.layerTarget = null;
        }
    },
    mounted() {}
};
</script>

<style lang="scss" scoped>
.dimmed {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1500;
    background: rgba(0 0 0 / 80%);
    display: flex;
    align-items: center;
    justify-content: center;
    .layer {
        position: relative;
        z-index: 1510;
        width: 50%;
        max-width: 50rem;
        min-height: 22rem;
        background: #3c3c3c;
        padding: 2rem 2rem 3rem;
        @include tablet {
            width: 90%;
            max-width: 60rem;
            max-height: 60rem;
        }
        @include device-rotate {
            min-height: auto;
            height: 90%;
        }

        .close-btn {
        }
    }
}
</style>
