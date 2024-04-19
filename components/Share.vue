<template>
    <div v-if="shareUrl">
        <a href="#">URL 공유하기</a>
    </div>
    <div v-if="shareFacebook">
        <a href="#">페이스북 공유하기</a>
    </div>
    <div v-if="shareTwitter">
        <a href="#">트위터 공유하기</a>
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
    props: {
        shareUrl: Boolean,
        shareFacebook: Boolean,
        shareTwitter: Boolean
    }
    // data() {
    //     return {
    //         urlText: window.location.href
    //     };
    // },
    // methods: {
    //     clip: function (val) {
    //         const t = document.createElement("textarea");
    //         document.body.appendChild(t);
    //         t.value = val;
    //         t.select();
    //         document.execCommand("copy");
    //         document.body.removeChild(t);
    //         alert("주소가 복사되었습니다.\n원하는 곳에 붙여넣기(Ctrl+V) 해주세요.");
    //         this.modalStore.layerToggle(null);
    //     },
    //     btnShareTw: function () {
    //         const sendText = "어둠의 실력자가 되고 싶어서! 공식 홈페이지";
    //         const pageUrl = "https://shadow-garden.webzen.co.kr/brand";
    //         window.open(`https://twitter.com/intent/tweet?text=${sendText}&url=${pageUrl}`);
    //         this.modalStore.layerToggle(null);
    //     },
    //     btnShareFb: function () {
    //         const sendText = "어둠의 실력자가 되고 싶어서! 공식 홈페이지";
    //         const pageUrl = "https://shadow-garden.webzen.co.kr/brand";
    //         window.open(`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}&t=${sendText}`);
    //         this.modalStore.layerToggle(null);
    //     }
    // }
};
</script>

<style lang="scss" scoped>
div {
    height: 5.6rem;
    margin-right: 0;
    border-bottom: solid 1px #2d2d2d;
    &:last-child {
        border-bottom: none;
    }
    @include tablet {
        height: 5rem;
    }
    a {
        display: block;
        padding: 1.4rem;
        margin: 0.1rem;
        box-sizing: border-box;
        @include tablet {
            padding: 0.8rem;
        }
        &:hover {
            background-color: #1a1a1a;
            > img {
                opacity: 1;
            }
        }
        img {
            display: block;
            width: 100%;
            opacity: 0.7;
        }
    }
}
</style>
