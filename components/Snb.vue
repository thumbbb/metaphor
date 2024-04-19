<template>
    <nav id="snb" class="snb">
        <div class="mob-snb-header">
            <a href="#" class="snb-logo"><img src="" alt="Snb 로고" /></a>
            <button class="snb-close" @click="modalStore.layerToggle(null)"><img src="" alt="Snb 닫기" /></button>
        </div>
        <ul class="snb-list">
            <li data-menuanchor="pre-register" class="snb-menu">
                <a href="#" :class="{ __active: indexStore.currentPageIndex === 0 }" @click.prevent="[indexStore.goToPage(0)]">화면1</a>
            </li>
            <li data-menuanchor="event" class="snb-menu">
                <a href="#" :class="{ __active: indexStore.currentPageIndex === 1 }" @click.prevent="[indexStore.goToPage(1)]">화면2</a>
            </li>
            <li data-menuanchor="event-sns" class="snb-menu">
                <a href="#" :class="{ __active: indexStore.currentPageIndex === 2 }" @click.prevent="[indexStore.goToPage(2)]">화면3</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import { useIndexStore } from "../store/useIndexStore";
import { useModalStore } from "../store/useModalStore";
export default {
    setup() {
        return {
            indexStore: useIndexStore(),
            modalStore: useModalStore()
        };
    },
    methods: {
        // mobileSnbClose() {
        //     document.getElementById("snb").classList.remove("__active");
        //     document.querySelector(".snb-bg").classList.remove("__active");
        //     document.getElementById("snb").scrollTo(0, 0);
        //     setTimeout(() => this.modalStore.layerToggle(null), 700);
        // }
    }
};
</script>

<style lang="scss">
#snb {
    display: none;
    position: fixed;
    z-index: 1000;
    width: 17.3rem;
    height: 40%;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto 0;
    // display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 2rem;
    line-height: 4.4rem;
    min-height: 40rem;
    background-color: #0000003d;
    @include tablet {
        right: 0;
        top: 0;
        left: unset;
        bottom: unset;
        max-width: 50rem;
        width: 60%;
        height: 100vh;
        align-items: flex-start;
        justify-content: space-between;
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        background-color: #171622;
        padding: 0;
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        @include mobile {
            width: 70%;
            max-height: 100%;
            min-width: 23rem;
        }
        @include device-rotate {
            min-height: 100%;
            height: 100%;
        }
        &.__active {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
    }
    .mob-snb-header {
        display: none;
        @include tablet {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem;
        }
        .snb-logo {
            display: block;
            width: 50%;
            > img {
                width: 100%;
            }
        }
        .snb-close {
            width: 5rem;
            height: 5rem;
            border: solid 1px #3b3a41;
            background-color: #100f18;
            display: flex;
            justify-content: center;
            align-items: center;
            > img {
                width: 50%;
            }
        }
    }
    .snb-list {
        margin-left: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        &:before {
            content: "";
            display: block;
            width: 0.1rem;
            height: 89%;
            background-color: #b8b8b8;
            position: absolute;
            right: calc(100% - 2.5rem);
            top: 2rem;
            @include tablet {
                display: none;
            }
        }
        @include tablet {
            width: 100%;
            margin-left: 0;
            align-items: center;
        }
        @include mobile {
            height: 70%;
        }
        > li {
            position: relative;
            height: calc(100% / 8);
            &:last-child {
                border-bottom: none;
            }
            > a {
                display: block;
                font-size: 1.6rem;
                color: #fff;
                font-weight: 500;
                padding-left: 1.5rem;
                @include tablet {
                    padding-left: 0;
                    font-size: 2rem;
                }
                @include mobile {
                    font-size: 1.5rem;
                }
                &:before,
                &:after {
                    content: "";
                    display: block;
                    position: absolute;
                    right: 100%;
                    background: {
                        repeat: no-repeat;
                        position: center;
                        size: contain;
                    }
                    @include tablet {
                        display: none;
                    }
                }
                &:before {
                    width: 1rem;
                    height: 1rem;
                    top: 1.7rem;
                    //background-image: url("@images/common/ico-snb.png");
                }
                &:after {
                    display: none;
                    width: 1.5rem;
                    height: 2.5rem;
                    top: 1rem;
                    right: calc(100% - 0.25rem);
                    //background-image: url("@images/common/ico-snb-active.png");
                }
                &.__active {
                    text-shadow: 0.3rem 0.2rem 1rem #ff1100;
                    @include tablet {
                        text-shadow: none;
                    }
                    &:before {
                        display: none;
                    }
                    &:after {
                        display: block;
                        @include tablet {
                            display: none;
                        }
                    }
                }
            }
        }
        .snb-min-menu {
            padding-left: 1rem;
        }
    }

    .login-btn,
    .logout-btn {
        z-index: 999;
        width: 100%;
        @include tablet {
            width: 60%;
            margin: 0 auto 3rem;
            &:hover {
                &:after {
                    display: none;
                }
            }
        }
        @include mobile {
            width: 90%;
        }
        > span {
            font-size: 1.6rem;
            font-weight: bold;
            color: #fff;
            top: 1rem;
            justify-content: flex-start;
            width: 80%;
            @include tablet {
                justify-content: center;
                left: -20%;
            }
            &:after {
                content: "";
                display: inline-block;
                width: 1.5rem;
                height: 1.5rem;
                background: {
                    //image: url("@images/common/ico-btn-arrow-w.png");
                    repeat: no-repeat;
                    position: center;
                    size: contain;
                }
                vertical-align: middle;
                margin-left: 0.3rem;
            }
        }
    }
    .login-btn {
        &:after {
            //background-image: url("@images/common/snb-login-bg-hover.png");
        }
    }
    .logout-btn {
        &:after {
            display: none;
        }
    }
    .mob-snb-footer {
        display: none;
        @include tablet {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 100%;
            height: 20%;
            background-color: #13121d;
            padding: 3rem;
            > ul {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 90%;
                gap: 1rem;
            }
            .download-list {
                > li {
                    > a {
                        display: block;
                        font-size: 1.5rem;
                        color: #fff;
                        &:after {
                            content: "";
                            display: inline-block;
                            vertical-align: middle;
                            margin-left: 1rem;
                            width: 2rem;
                            height: 2rem;
                            //background: no-repeat center url("@images/common/ico-download.png");
                        }
                    }
                }
                & + .sns-list {
                    margin-top: 1rem;
                }
            }
            .sns-list {
                > li {
                    width: 5rem;
                    height: 5rem;
                    background-color: #0d0d14;
                    border: solid 1px #56565b;
                    > a {
                        display: block;
                        padding: 1rem;
                        box-sizing: border-box;
                        height: 100%;
                        > img {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}

@keyframes opacity {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
