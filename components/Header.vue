<template>
    <header>
        <a class="btn-logo" href="#">
            Logo
            <!-- <img src="@images/common/ico-logo.png" alt="로고" /> -->
        </a>
        <nav>
            <ul>
                <li class="nav-menu">
                    <a href="#">HOME</a>
                </li>
                <li class="nav-menu">
                    <a href="#">111111</a>
                </li>
                <li class="nav-menu">
                    <a href="#">222222</a>
                </li>
                <li class="nav-menu">
                    <a href="#">333333</a>
                </li>
            </ul>
            <div class="sub-nav">
                <ul>
                    <li>
                        <a href="#none">HOME</a>
                        <ul>
                            <li><a href="#none" class="sub-nav-menu">요를레이요</a></li>
                            <li><a href="#none" class="sub-nav-menu">요플레이요</a></li>
                            <li><a href="#none" class="sub-nav-menu">요쿠르트요</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#none">111111</a>
                        <ul>
                            <li><a href="#none" class="sub-nav-menu">예시1</a></li>
                            <li><a href="#none" class="sub-nav-menu">예시2</a></li>
                            <li><a href="#none" class="sub-nav-menu">예시3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#none">222222</a>
                        <ul>
                            <li><a href="#none" class="sub-nav-menu">휘리릭</a></li>
                            <li><a href="#none" class="sub-nav-menu">뽕</a></li>
                            <li><a href="#none" class="sub-nav-menu">뿡짝</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#none">333333</a>
                        <ul>
                            <li><a href="#none" class="sub-nav-menu">집에</a></li>
                            <li><a href="#none" class="sub-nav-menu">가고</a></li>
                            <li><a href="#none" class="sub-nav-menu">싶다리</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { useIndexStore } from "../store/useIndexStore";
import { useModalStore } from "../store/useModalStore";
import { ref } from "vue";

const modalStore = useModalStore();
const indexStore = useIndexStore();
</script>

<style lang="scss">
header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .btn-snb {
        display: none;
        width: 3%;
        img {
            width: 100%;
        }
        @include tablet {
            display: block;
            pointer-events: all;
            width: 5rem;
            border-right: solid 0.1rem #373a54;
            padding: 0 1rem;
            height: 100%;
        }
    }
    .btn-logo {
        display: block;
        width: 100%;
        height: 11rem;
        line-height: 11rem;
        background-color: #fff;
        text-align: center;
        font-size: 30px;
    }
    nav {
        width: 100%;
        height: 100%;
        background-color: #af9483;
        position: relative;
        @include tablet {
            height: 100%;
            padding: 0 1.5rem;
        }
        &:hover .sub-nav {
            height: 20rem;
            opacity: 1;
        }
        > ul {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70%;
            height: 6rem;
            margin-left: auto;
            padding: 0 2rem;
            margin: 0 auto;
            li {
                pointer-events: all;
                text-align: center;
                a,
                button {
                    img {
                        width: 100%;
                    }
                }
                &.nav-menu {
                    width: calc(100% / 4);
                    > a {
                        display: block;
                        line-height: 6rem;
                        font-size: 1.5rem;
                        color: #fff;
                        position: relative;
                        &:hover:after {
                            width: 100%;
                        }
                        &:after {
                            content: "";
                            display: block;
                            width: 0;
                            height: 0.5rem;
                            background-color: #55403c;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            margin: auto;
                            transition: 0.3s;
                        }
                    }
                }
                &.btn-head {
                    width: 5.8rem;
                    height: 5.8rem;
                    &:hover {
                        background-color: #c5271c80;
                    }
                    @include tablet {
                        width: 5rem;
                        height: 5rem;
                    }
                    > a,
                    > button {
                        display: block;
                        padding: 1.5rem;
                        box-sizing: border-box;
                        border: solid 1px #2d2d2d;
                        width: 100%;
                        height: 100%;
                        @include tablet {
                            padding: 1rem;
                        }
                    }
                    img {
                        @include switch-device;
                    }
                }
                &.btn-head-first {
                    margin-left: auto;
                }
                &.btn-share {
                    position: relative;
                    > a {
                        &.__active {
                            background-color: #c3271c;
                            border-color: #424242;
                        }
                    }
                }
            }
        }
        .sub-nav {
            position: absolute;
            left: 0;
            top: 100%;
            width: 100%;
            height: 0;
            background-color: #fff;
            border-bottom: 0.3rem solid #977257;
            z-index: 9999;
            transition: 0.5s;
            overflow: hidden;
            opacity: 0;
            > ul {
                width: 100rem;
                height: 100%;
                margin: 0 auto;
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                border-right: 1px solid #e8e8e8;
                > li {
                    width: calc(100% / 4);
                    height: 100%;
                    padding: 2rem 0;
                    border-left: 1px solid #e8e8e8;
                    > a {
                        display: block;
                        text-align: center;
                        font-size: 1.5rem;
                        color: #444;
                        margin-bottom: 2rem;
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                    > ul {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 1rem;
                        > li {
                            > a {
                                display: block;
                                text-align: center;
                                font-size: 1.4rem;
                                color: #555;
                                &:hover {
                                    text-decoration: underline;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
