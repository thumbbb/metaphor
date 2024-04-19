import { _ as __nuxt_component_0 } from './nuxt-layout-DPP7XRnc.mjs';
import { d as defineStore, _ as _export_sfc } from './server.mjs';
import { useSSRContext, mergeProps, withCtx, unref, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, FreeMode } from 'swiper/modules';
import 'vue-router';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';

const useIndexStore = defineStore("indexInfo", {
  state: () => ({
    swiper: null,
    currentPageIndex: 0
  }),
  getters: {},
  actions: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    onSlideChange(swiper) {
      this.currentPageIndex = swiper.activeIndex;
    },
    goToPage(page) {
      this.swiper.slideTo(page);
    }
  }
});
const useModalStore = defineStore("modalInfo", {
  state: () => ({
    layerType: "",
    layerTarget: null,
    layerVisible: false
  }),
  getters: {},
  actions: {
    layerFlow(target, layerType) {
      this.layerToggle(target);
      this.layerType = layerType;
    },
    layerToggle(el) {
      if (this.layerTarget !== el || null) {
        this.layerTarget = el;
        this.layerVisible = true;
      } else {
        this.layerTarget = el;
        this.layerVisible = !this.layerVisible;
        this.layerTarget = null;
      }
      if (event === null || event === void 0) {
        return true;
      } else {
        event.stopPropagation();
      }
    }
  }
});
const _sfc_main$5 = {
  setup() {
    return {
      indexStore: useIndexStore(),
      modalStore: useModalStore()
    };
  },
  methods: {
    mobileSnbClose() {
      (void 0).getElementById("snb").classList.remove("__active");
      (void 0).querySelector(".snb-bg").classList.remove("__active");
      (void 0).getElementById("snb").scrollTo(0, 0);
      setTimeout(() => this.modalStore.layerToggle(null), 700);
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<nav${ssrRenderAttrs(mergeProps({
    id: "snb",
    class: "snb"
  }, _attrs))}><div class="mob-snb-header"><a href="#" class="snb-logo"><img${ssrRenderAttr("src", "")} alt="Snb \uB85C\uACE0"></a><button class="snb-close"><img${ssrRenderAttr("src", "")} alt="Snb \uB2EB\uAE30"></button></div><ul class="snb-list"><li data-menuanchor="pre-register" class="snb-menu"><a href="#" class="${ssrRenderClass({ __active: $setup.indexStore.currentPageIndex === 0 })}">\uD654\uBA741</a></li><li data-menuanchor="event" class="snb-menu"><a href="#" class="${ssrRenderClass({ __active: $setup.indexStore.currentPageIndex === 1 })}">\uD654\uBA742</a></li><li data-menuanchor="event-sns" class="snb-menu"><a href="#" class="${ssrRenderClass({ __active: $setup.indexStore.currentPageIndex === 2 })}">\uD654\uBA743</a></li></ul></nav>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Snb.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  setup() {
    return {
      modalStore: useModalStore()
    };
  },
  props: {
    shareUrl: Boolean,
    shareFacebook: Boolean,
    shareTwitter: Boolean
  },
  data() {
    return {
      urlText: (void 0).location.href
    };
  },
  methods: {
    clip: function(val) {
      const t = (void 0).createElement("textarea");
      (void 0).body.appendChild(t);
      t.value = val;
      t.select();
      (void 0).execCommand("copy");
      (void 0).body.removeChild(t);
      alert("\uC8FC\uC18C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.\n\uC6D0\uD558\uB294 \uACF3\uC5D0 \uBD99\uC5EC\uB123\uAE30(Ctrl+V) \uD574\uC8FC\uC138\uC694.");
      this.modalStore.layerToggle(null);
    },
    btnShareTw: function() {
      const sendText = "\uC5B4\uB460\uC758 \uC2E4\uB825\uC790\uAC00 \uB418\uACE0 \uC2F6\uC5B4\uC11C! \uACF5\uC2DD \uD648\uD398\uC774\uC9C0";
      const pageUrl = "https://shadow-garden.webzen.co.kr/brand";
      (void 0).open(`https://twitter.com/intent/tweet?text=${sendText}&url=${pageUrl}`);
      this.modalStore.layerToggle(null);
    },
    btnShareFb: function() {
      const sendText = "\uC5B4\uB460\uC758 \uC2E4\uB825\uC790\uAC00 \uB418\uACE0 \uC2F6\uC5B4\uC11C! \uACF5\uC2DD \uD648\uD398\uC774\uC9C0";
      const pageUrl = "https://shadow-garden.webzen.co.kr/brand";
      (void 0).open(`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}&t=${sendText}`);
      this.modalStore.layerToggle(null);
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  if ($props.shareUrl) {
    _push(`<div data-v-eb83e9e4><a href="#" data-v-eb83e9e4>URL \uACF5\uC720\uD558\uAE30</a></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.shareFacebook) {
    _push(`<div data-v-eb83e9e4><a href="#" data-v-eb83e9e4>\uD398\uC774\uC2A4\uBD81 \uACF5\uC720\uD558\uAE30</a></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.shareTwitter) {
    _push(`<div data-v-eb83e9e4><a href="#" data-v-eb83e9e4>\uD2B8\uC704\uD130 \uACF5\uC720\uD558\uAE30</a></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Share.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-eb83e9e4"]]);
const _sfc_main$3 = {
  setup() {
    return {
      modalStore: useModalStore()
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer-container" }, _attrs))} data-v-1b2d13cf><ul class="foot-list" data-v-1b2d13cf><li data-v-1b2d13cf><a href="https://privacy.webzen.co.kr/Policy/main/4" target="_blank" data-v-1b2d13cf>\uC774\uC6A9\uC57D\uAD00</a></li><li data-v-1b2d13cf><a href="https://privacy.webzen.co.kr/Policy/main/2" target="_blank" data-v-1b2d13cf><strong data-v-1b2d13cf>\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68</strong></a></li><li data-v-1b2d13cf><a href="https://shadow-garden.webzen.co.kr/community-policy" target="_blank" data-v-1b2d13cf>\uC6B4\uC601\uC815\uCC45</a></li><li data-v-1b2d13cf><a href="https://company.webzen.com/ko" target="_blank" data-v-1b2d13cf>\uD68C\uC0AC\uC18C\uAC1C</a></li></ul><p class="copyright" data-v-1b2d13cf> \xA9Daisuke Aizawa,KADOKAWA/Shadow Garden<br data-v-1b2d13cf> \xA9Master of Garden Project. Published by WEBZEN </p></footer>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-1b2d13cf"]]);
const _imports_0 = "data:image/png;base64,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";
const _sfc_main$2 = {
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
  mounted() {
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.modalStore.layerType === "test") {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "dimmed" }, _attrs))} data-v-8934c795><div class="layer" data-v-8934c795><button class="close-btn" data-v-8934c795><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-8934c795></button></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-8934c795"]]);
const _sfc_main$1 = {
  setup() {
    return {
      indexStore: useIndexStore()
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: "button",
    class: "top-btn"
  }, _attrs))}><span class="top-btn-txt">TOP</span></button>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Top-btn.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    return {
      modalStore: useModalStore(),
      indexStore: useIndexStore()
    };
  },
  data() {
    return {
      shareUrl: true,
      shareFacebook: true,
      shareTwitter: true
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_Snb = __nuxt_component_1;
  const _component_Swiper = Swiper;
  const _component_SwiperSlide = SwiperSlide;
  const _component_Share = __nuxt_component_4;
  const _component_Footer = __nuxt_component_5;
  const _component_Layer = __nuxt_component_6;
  const _component_Top_btn = __nuxt_component_7;
  _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="body-container"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Snb, {
          class: { __active: $setup.modalStore.layerVisible && $setup.modalStore.layerTarget === "snb" }
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Swiper, {
          modules: ["SwiperMousewheel" in _ctx ? _ctx.SwiperMousewheel : unref(Mousewheel), "SwiperFreeMode" in _ctx ? _ctx.SwiperFreeMode : unref(FreeMode)],
          direction: "vertical",
          mousewheel: true,
          onSwiper: $setup.indexStore.onSwiper,
          onSlideChange: $setup.indexStore.onSlideChange
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_SwiperSlide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<button class="store-test"${_scopeId3}>\uC5F4\uB824\uB77C \uCC38\uAE68\uB77C\uBA74!</button>`);
                    _push4(ssrRenderComponent(_component_Share, { shareUrl: $data.shareUrl }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_Share, { shareFacebook: $data.shareFacebook }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("button", {
                        class: "store-test",
                        onClick: ($event) => $setup.modalStore.layerFlow("layer", "test")
                      }, "\uC5F4\uB824\uB77C \uCC38\uAE68\uB77C\uBA74!", 8, ["onClick"]),
                      createVNode(_component_Share, { shareUrl: $data.shareUrl }, null, 8, ["shareUrl"]),
                      createVNode(_component_Share, { shareFacebook: $data.shareFacebook }, null, 8, ["shareFacebook"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_SwiperSlide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Swiper 02 `);
                  } else {
                    return [
                      createTextVNode(" Swiper 02 ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_SwiperSlide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Swiper 03 `);
                    _push4(ssrRenderComponent(_component_Footer, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createTextVNode(" Swiper 03 "),
                      createVNode(_component_Footer)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_SwiperSlide, null, {
                  default: withCtx(() => [
                    createVNode("button", {
                      class: "store-test",
                      onClick: ($event) => $setup.modalStore.layerFlow("layer", "test")
                    }, "\uC5F4\uB824\uB77C \uCC38\uAE68\uB77C\uBA74!", 8, ["onClick"]),
                    createVNode(_component_Share, { shareUrl: $data.shareUrl }, null, 8, ["shareUrl"]),
                    createVNode(_component_Share, { shareFacebook: $data.shareFacebook }, null, 8, ["shareFacebook"])
                  ]),
                  _: 1
                }),
                createVNode(_component_SwiperSlide, null, {
                  default: withCtx(() => [
                    createTextVNode(" Swiper 02 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_SwiperSlide, null, {
                  default: withCtx(() => [
                    createTextVNode(" Swiper 03 "),
                    createVNode(_component_Footer)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
        if ($setup.modalStore.layerVisible && $setup.modalStore.layerTarget === "layer") {
          _push2(ssrRenderComponent(_component_Layer, {
            layerType: $setup.modalStore.layerType
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(ssrRenderComponent(_component_Top_btn, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "body-container" }, [
            createVNode(_component_Snb, {
              class: { __active: $setup.modalStore.layerVisible && $setup.modalStore.layerTarget === "snb" }
            }, null, 8, ["class"]),
            createVNode(_component_Swiper, {
              modules: ["SwiperMousewheel" in _ctx ? _ctx.SwiperMousewheel : unref(Mousewheel), "SwiperFreeMode" in _ctx ? _ctx.SwiperFreeMode : unref(FreeMode)],
              direction: "vertical",
              mousewheel: true,
              onSwiper: $setup.indexStore.onSwiper,
              onSlideChange: $setup.indexStore.onSlideChange
            }, {
              default: withCtx(() => [
                createVNode(_component_SwiperSlide, null, {
                  default: withCtx(() => [
                    createVNode("button", {
                      class: "store-test",
                      onClick: ($event) => $setup.modalStore.layerFlow("layer", "test")
                    }, "\uC5F4\uB824\uB77C \uCC38\uAE68\uB77C\uBA74!", 8, ["onClick"]),
                    createVNode(_component_Share, { shareUrl: $data.shareUrl }, null, 8, ["shareUrl"]),
                    createVNode(_component_Share, { shareFacebook: $data.shareFacebook }, null, 8, ["shareFacebook"])
                  ]),
                  _: 1
                }),
                createVNode(_component_SwiperSlide, null, {
                  default: withCtx(() => [
                    createTextVNode(" Swiper 02 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_SwiperSlide, null, {
                  default: withCtx(() => [
                    createTextVNode(" Swiper 03 "),
                    createVNode(_component_Footer)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modules", "onSwiper", "onSlideChange"])
          ]),
          $setup.modalStore.layerVisible && $setup.modalStore.layerTarget === "layer" ? (openBlock(), createBlock(_component_Layer, {
            key: 0,
            layerType: $setup.modalStore.layerType
          }, null, 8, ["layerType"])) : createCommentVNode("", true),
          createVNode(_component_Top_btn)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CWhcbbId.mjs.map
