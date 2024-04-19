<template>
    <button type="button" class="top-btn" @click="indexStore.goToPage(0)">
        <span class="top-btn-txt">TOP</span>
    </button>
</template>

<script>
import { useIndexStore } from "../store/useIndexStore";
export default {
    setup() {
        return {
            indexStore: useIndexStore()
        };
    }
};
</script>

<style lang="scss">
.top-btn {
    position: fixed;
    right: 3%;
    bottom: 30%;
    z-index: 999;
    touch-action: none;
    padding: 0 3rem;
    height: 4rem;
    @include tablet {
        right: 5%;
        bottom: 28%;
    }
    &:after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.63);
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        z-index: 20;
    }
    &-txt {
        display: block;
        font-size: 1.5rem;
        color: #fff;
        position: relative;
        z-index: 25;
        margin: auto;
        line-height: 4rem;
        text-align: center;
        &:after {
            content: "↑";
            display: inline-block;
            width: 1.5rem;
            //height: 1.7rem;
            margin: 0 0 0.3rem 0.5rem;
            vertical-align: middle;
            //background: {
            //    image: url("@images/common/ico-top.png");
            //    repeat: no-repeat;
            //    position: center;
            //    size: contain;
            //}
        }
    }
}
</style>
