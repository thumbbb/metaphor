<template>
    <footer class="footer-container">
        <ul class="foot-list">
            <li>
                <h4><i class="fa fa-phone"></i> Call</h4>
            </li>
            <li>
                <h4><i class="fa fa-envelope"></i> Email</h4>
            </li>
        </ul>
        <p class="copyright">©Copyright Eomji-LEE</p>
    </footer>
</template>

<script>
import { useModalStore } from "../store/useModalStore";

export default {
    setup() {
        return {
            modalStore: useModalStore()
        };
    }
};
</script>

<style lang="scss" scoped>
.footer-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 9rem;
    padding: 0.5rem 0;
    z-index: 60;
    background-color: #000;
    color: white;
    margin-top: auto;
    @include tablet {
        margin-top: 10rem;
        padding-bottom: 8rem;
    }
    .foot-list {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin-bottom: 3rem;
        > li {
            position: relative;
            h4 {
                display: inline-block;
                margin-right: 1rem;
            }
            > a {
                display: inline-block;
                font-size: 1.7rem;
                font-weight: bold;
                color: #d7d7d7;
                white-space: nowrap;
                font-family: "Noto Sans KR", sans-serif;
                @include tablet {
                    font-size: 1.2rem;
                    &:after {
                        padding-left: 0.5rem;
                        font-size: 1rem;
                    }
                }
            }
        }
        & + .copyright {
            margin-top: 1rem;
        }
    }
    .copyright {
        font-size: 1.2rem;
        line-height: 1.8rem;
        color: #7f7f7f;
        text-align: center;
        font-family: "Noto Sans KR", sans-serif;
        @include tablet {
            font-size: 1rem;
        }
    }
}
</style>
