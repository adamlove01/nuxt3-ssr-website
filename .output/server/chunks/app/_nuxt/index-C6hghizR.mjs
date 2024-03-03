import { unref, useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { p as pageHead, u as useSessionStore, V as VContainer, a as VRow, b as VCol, G as VHover, e as VCard, g as VCardTitle, k as VCardText, v as VCardActions, D as VIcon, f as VAvatar } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-B8s5modA.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'lru-cache';
import 'fs';
import 'path';
import 'knex';
import 'cheerio/lib/slim';
import 'cheerio';
import 'node:crypto';
import 'node:fs';
import 'node:url';
import 'joi';
import 'jsonwebtoken';
import 'xss';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-i18n';

const _sfc_main$4 = {
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String
    },
    subTitle: {
      type: String
    },
    backgroundImage: {
      type: String
    },
    backgroundColor: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: "fill-height minh-[60vh] bg-cover border-b-[1px] border-solid border-my-light-blue bg-cover bg-bottom",
        style: `background-color: ${__props.backgroundColor}; 
    ${__props.backgroundImage ? `background-image: url('${__props.backgroundImage}')` : ""}`,
        fluid: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, {
              color: "transparent",
              class: "d-flex flex-column justify-center align-center h-[35vh] md:h-[40vh] lg:h-[60vh]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="ma-auto"${_scopeId2}>`);
                  if (__props.title) {
                    _push3(`<div class="text-h2 text-center"${_scopeId2}>${ssrInterpolate(__props.title)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (__props.subTitle) {
                    _push3(`<div class="text-h4 text-center mb-12"${_scopeId2}>${ssrInterpolate(__props.subTitle)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "ma-auto" }, [
                      __props.title ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-h2 text-center"
                      }, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
                      __props.subTitle ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "text-h4 text-center mb-12"
                      }, toDisplayString(__props.subTitle), 1)) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, {
                color: "transparent",
                class: "d-flex flex-column justify-center align-center h-[35vh] md:h-[40vh] lg:h-[60vh]"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "ma-auto" }, [
                    __props.title ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-h2 text-center"
                    }, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
                    __props.subTitle ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-h4 text-center mb-12"
                    }, toDisplayString(__props.subTitle), 1)) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Hero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "Technology",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String
    },
    subTitle: {
      type: String
    },
    cards: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    },
    buttonText: {
      type: String,
      required: true
    },
    backgroundImage: {
      type: String
    },
    backgroundColor: {
      type: String
    },
    avatarBgColor: {
      type: String
    }
  },
  setup(__props) {
    const session = useSessionStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: ["min-h-[400px] border-b-[1px] border-solid border-my-light-blue bg-cover", __props.backgroundColor],
        style: `background-image: url('${__props.backgroundImage}')`,
        fluid: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, { class: "py-8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="ma-auto"${_scopeId2}>`);
                  if (__props.title) {
                    _push3(`<div class="text-h2 text-center mb-2"${_scopeId2}>${ssrInterpolate(__props.title)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (__props.subTitle) {
                    _push3(`<div class="text-h4 text-center mb-12"${_scopeId2}>${ssrInterpolate(__props.subTitle)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(__props.cards, (card, i) => {
                          _push4(ssrRenderComponent(VCol, {
                            key: i,
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VHover, null, {
                                  default: withCtx(({ isHovering, props }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCard, mergeProps(props, {
                                        class: [{ "on-hover": isHovering }, "d-flex flex-no-wrap justify-space-between pa-6"],
                                        style: { height: "100%", maxWidth: "700px", margin: "auto", border: "1px solid #3dbbfe" }
                                      }), {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VCardTitle, { class: "text-h4 pt-3" }, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(card.title)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(card.title), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCardText, {
                                              class: "min-h-[66px] text-h6 pr-0",
                                              style: { "line-height": "1.8rem" }
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCardActions, null, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_NuxtLink, {
                                                    to: card.href,
                                                    target: "_blank",
                                                    class: ["mx-2 text-h6", [
                                                      unref(session).theme === "dark" ? "text-my-light-blue hover:text-my-blue" : "text-my-blue hover:text-my-light-blue"
                                                    ]]
                                                  }, {
                                                    default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(__props.buttonText)} `);
                                                        _push9(ssrRenderComponent(VIcon, { icon: "mdi-chevron-right" }, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(__props.buttonText) + " ", 1),
                                                          createVNode(VIcon, { icon: "mdi-chevron-right" })
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_NuxtLink, {
                                                      to: card.href,
                                                      target: "_blank",
                                                      class: ["mx-2 text-h6", [
                                                        unref(session).theme === "dark" ? "text-my-light-blue hover:text-my-blue" : "text-my-blue hover:text-my-light-blue"
                                                      ]]
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(__props.buttonText) + " ", 1),
                                                        createVNode(VIcon, { icon: "mdi-chevron-right" })
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["to", "class"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                            _push7(ssrRenderComponent(VAvatar, {
                                              class: "mx-5 d-flex align-self-center pa-5",
                                              size: "125",
                                              rounded: "1",
                                              color: "white",
                                              style: [{ "border": "1px solid #3dbbfe" }, `background-color: ${__props.avatarBgColor} !important`],
                                              image: card.image
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode("div", null, [
                                                createVNode(VCardTitle, { class: "text-h4 pt-3" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(card.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(VCardText, {
                                                  class: "min-h-[66px] text-h6 pr-0",
                                                  style: { "line-height": "1.8rem" },
                                                  innerHTML: card.subTitle
                                                }, null, 8, ["innerHTML"]),
                                                createVNode(VCardActions, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_NuxtLink, {
                                                      to: card.href,
                                                      target: "_blank",
                                                      class: ["mx-2 text-h6", [
                                                        unref(session).theme === "dark" ? "text-my-light-blue hover:text-my-blue" : "text-my-blue hover:text-my-light-blue"
                                                      ]]
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(__props.buttonText) + " ", 1),
                                                        createVNode(VIcon, { icon: "mdi-chevron-right" })
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["to", "class"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              createVNode(VAvatar, {
                                                class: "mx-5 d-flex align-self-center pa-5",
                                                size: "125",
                                                rounded: "1",
                                                color: "white",
                                                style: [{ "border": "1px solid #3dbbfe" }, `background-color: ${__props.avatarBgColor} !important`],
                                                image: card.image
                                              }, null, 8, ["style", "image"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCard, mergeProps(props, {
                                          class: [{ "on-hover": isHovering }, "d-flex flex-no-wrap justify-space-between pa-6"],
                                          style: { height: "100%", maxWidth: "700px", margin: "auto", border: "1px solid #3dbbfe" }
                                        }), {
                                          default: withCtx(() => [
                                            createVNode("div", null, [
                                              createVNode(VCardTitle, { class: "text-h4 pt-3" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(card.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VCardText, {
                                                class: "min-h-[66px] text-h6 pr-0",
                                                style: { "line-height": "1.8rem" },
                                                innerHTML: card.subTitle
                                              }, null, 8, ["innerHTML"]),
                                              createVNode(VCardActions, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_NuxtLink, {
                                                    to: card.href,
                                                    target: "_blank",
                                                    class: ["mx-2 text-h6", [
                                                      unref(session).theme === "dark" ? "text-my-light-blue hover:text-my-blue" : "text-my-blue hover:text-my-light-blue"
                                                    ]]
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(__props.buttonText) + " ", 1),
                                                      createVNode(VIcon, { icon: "mdi-chevron-right" })
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["to", "class"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            createVNode(VAvatar, {
                                              class: "mx-5 d-flex align-self-center pa-5",
                                              size: "125",
                                              rounded: "1",
                                              color: "white",
                                              style: [{ "border": "1px solid #3dbbfe" }, `background-color: ${__props.avatarBgColor} !important`],
                                              image: card.image
                                            }, null, 8, ["style", "image"])
                                          ]),
                                          _: 2
                                        }, 1040, ["class"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VHover, null, {
                                    default: withCtx(({ isHovering, props }) => [
                                      createVNode(VCard, mergeProps(props, {
                                        class: [{ "on-hover": isHovering }, "d-flex flex-no-wrap justify-space-between pa-6"],
                                        style: { height: "100%", maxWidth: "700px", margin: "auto", border: "1px solid #3dbbfe" }
                                      }), {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode(VCardTitle, { class: "text-h4 pt-3" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(card.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VCardText, {
                                              class: "min-h-[66px] text-h6 pr-0",
                                              style: { "line-height": "1.8rem" },
                                              innerHTML: card.subTitle
                                            }, null, 8, ["innerHTML"]),
                                            createVNode(VCardActions, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_NuxtLink, {
                                                  to: card.href,
                                                  target: "_blank",
                                                  class: ["mx-2 text-h6", [
                                                    unref(session).theme === "dark" ? "text-my-light-blue hover:text-my-blue" : "text-my-blue hover:text-my-light-blue"
                                                  ]]
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(__props.buttonText) + " ", 1),
                                                    createVNode(VIcon, { icon: "mdi-chevron-right" })
                                                  ]),
                                                  _: 2
                                                }, 1032, ["to", "class"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          createVNode(VAvatar, {
                                            class: "mx-5 d-flex align-self-center pa-5",
                                            size: "125",
                                            rounded: "1",
                                            color: "white",
                                            style: [{ "border": "1px solid #3dbbfe" }, `background-color: ${__props.avatarBgColor} !important`],
                                            image: card.image
                                          }, null, 8, ["style", "image"])
                                        ]),
                                        _: 2
                                      }, 1040, ["class"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.cards, (card, i) => {
                            return openBlock(), createBlock(VCol, {
                              key: i,
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VHover, null, {
                                  default: withCtx(({ isHovering, props }) => [
                                    createVNode(VCard, mergeProps(props, {
                                      class: [{ "on-hover": isHovering }, "d-flex flex-no-wrap justify-space-between pa-6"],
                                      style: { height: "100%", maxWidth: "700px", margin: "auto", border: "1px solid #3dbbfe" }
                                    }), {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode(VCardTitle, { class: "text-h4 pt-3" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(card.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VCardText, {
                                            class: "min-h-[66px] text-h6 pr-0",
                                            style: { "line-height": "1.8rem" },
                                            innerHTML: card.subTitle
                                          }, null, 8, ["innerHTML"]),
                                          createVNode(VCardActions, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_NuxtLink, {
                                                to: card.href,
                                                target: "_blank",
                                                class: ["mx-2 text-h6", [
                                                  unref(session).theme === "dark" ? "text-my-light-blue hover:text-my-blue" : "text-my-blue hover:text-my-light-blue"
                                                ]]
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(__props.buttonText) + " ", 1),
                                                  createVNode(VIcon, { icon: "mdi-chevron-right" })
                                                ]),
                                                _: 2
                                              }, 1032, ["to", "class"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        createVNode(VAvatar, {
                                          class: "mx-5 d-flex align-self-center pa-5",
                                          size: "125",
                                          rounded: "1",
                                          color: "white",
                                          style: [{ "border": "1px solid #3dbbfe" }, `background-color: ${__props.avatarBgColor} !important`],
                                          image: card.image
                                        }, null, 8, ["style", "image"])
                                      ]),
                                      _: 2
                                    }, 1040, ["class"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "ma-auto" }, [
                      __props.title ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-h2 text-center mb-2"
                      }, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
                      __props.subTitle ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "text-h4 text-center mb-12"
                      }, toDisplayString(__props.subTitle), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.cards, (card, i) => {
                          return openBlock(), createBlock(VCol, {
                            key: i,
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VHover, null, {
                                default: withCtx(({ isHovering, props }) => [
                                  createVNode(VCard, mergeProps(props, {
                                    class: [{ "on-hover": isHovering }, "d-flex flex-no-wrap justify-space-between pa-6"],
                                    style: { height: "100%", maxWidth: "700px", margin: "auto", border: "1px solid #3dbbfe" }
                                  }), {
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode(VCardTitle, { class: "text-h4 pt-3" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(card.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCardText, {
                                          class: "min-h-[66px] text-h6 pr-0",
                                          style: { "line-height": "1.8rem" },
                                          innerHTML: card.subTitle
                                        }, null, 8, ["innerHTML"]),
                                        createVNode(VCardActions, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_NuxtLink, {
                                              to: card.href,
                                              target: "_blank",
                                              class: ["mx-2 text-h6", [
                                                unref(session).theme === "dark" ? "text-my-light-blue hover:text-my-blue" : "text-my-blue hover:text-my-light-blue"
                                              ]]
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(__props.buttonText) + " ", 1),
                                                createVNode(VIcon, { icon: "mdi-chevron-right" })
                                              ]),
                                              _: 2
                                            }, 1032, ["to", "class"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      createVNode(VAvatar, {
                                        class: "mx-5 d-flex align-self-center pa-5",
                                        size: "125",
                                        rounded: "1",
                                        color: "white",
                                        style: [{ "border": "1px solid #3dbbfe" }, `background-color: ${__props.avatarBgColor} !important`],
                                        image: card.image
                                      }, null, 8, ["style", "image"])
                                    ]),
                                    _: 2
                                  }, 1040, ["class"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, { class: "py-8" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "ma-auto" }, [
                    __props.title ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-h2 text-center mb-2"
                    }, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
                    __props.subTitle ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-h4 text-center mb-12"
                    }, toDisplayString(__props.subTitle), 1)) : createCommentVNode("", true)
                  ]),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.cards, (card, i) => {
                        return openBlock(), createBlock(VCol, {
                          key: i,
                          cols: "12",
                          lg: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VHover, null, {
                              default: withCtx(({ isHovering, props }) => [
                                createVNode(VCard, mergeProps(props, {
                                  class: [{ "on-hover": isHovering }, "d-flex flex-no-wrap justify-space-between pa-6"],
                                  style: { height: "100%", maxWidth: "700px", margin: "auto", border: "1px solid #3dbbfe" }
                                }), {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode(VCardTitle, { class: "text-h4 pt-3" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(card.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardText, {
                                        class: "min-h-[66px] text-h6 pr-0",
                                        style: { "line-height": "1.8rem" },
                                        innerHTML: card.subTitle
                                      }, null, 8, ["innerHTML"]),
                                      createVNode(VCardActions, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_NuxtLink, {
                                            to: card.href,
                                            target: "_blank",
                                            class: ["mx-2 text-h6", [
                                              unref(session).theme === "dark" ? "text-my-light-blue hover:text-my-blue" : "text-my-blue hover:text-my-light-blue"
                                            ]]
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(__props.buttonText) + " ", 1),
                                              createVNode(VIcon, { icon: "mdi-chevron-right" })
                                            ]),
                                            _: 2
                                          }, 1032, ["to", "class"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    createVNode(VAvatar, {
                                      class: "mx-5 d-flex align-self-center pa-5",
                                      size: "125",
                                      rounded: "1",
                                      color: "white",
                                      style: [{ "border": "1px solid #3dbbfe" }, `background-color: ${__props.avatarBgColor} !important`],
                                      image: card.image
                                    }, null, 8, ["style", "image"])
                                  ]),
                                  _: 2
                                }, 1040, ["class"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Technology.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "BenefitsIcons",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String
    },
    subTitle: {
      type: String
    },
    cards: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    },
    icon: {
      type: String,
      default: "/img/icon-checkmark.png"
    },
    iconColor: {
      type: String,
      default: "primary"
    },
    backgroundImage: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    useSessionStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: "bg-cover border-b-[1px] border-solid border-my-light-blue",
        style: `background-color: '${__props.backgroundColor}'; background-image: url('${__props.backgroundImage}')`,
        fluid: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, { class: "py-8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="ma-auto"${_scopeId2}><h2 class="text-h2 text-center mb-2"${_scopeId2}>${ssrInterpolate(__props.title)}</h2><h3 class="text-h4 text-center mb-9"${_scopeId2}>${ssrInterpolate(__props.subTitle)}</h3></div>`);
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(__props.cards, (card, i) => {
                          _push4(ssrRenderComponent(VCol, {
                            key: i,
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCard, {
                                  flat: "",
                                  class: "bg-transparent"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="d-flex flex-column align-center"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VAvatar, {
                                        size: "120",
                                        style: [{ "border": "1px solid #3dbbfe" }, `background-color: ${__props.backgroundColor}`],
                                        class: "mt-4"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, {
                                              size: "50",
                                              color: card.iconColor,
                                              icon: card.icon
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, {
                                                size: "50",
                                                color: card.iconColor,
                                                icon: card.icon
                                              }, null, 8, ["color", "icon"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCardTitle, { class: "text-h4 mt-4" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(card.title)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(card.title), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<div class="text-h6 text-center pt-2"${_scopeId5}>${ssrInterpolate(card.subTitle)}</div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "d-flex flex-column align-center" }, [
                                          createVNode(VAvatar, {
                                            size: "120",
                                            style: [{ "border": "1px solid #3dbbfe" }, `background-color: ${__props.backgroundColor}`],
                                            class: "mt-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                size: "50",
                                                color: card.iconColor,
                                                icon: card.icon
                                              }, null, 8, ["color", "icon"])
                                            ]),
                                            _: 2
                                          }, 1032, ["style"]),
                                          createVNode(VCardTitle, { class: "text-h4 mt-4" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(card.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode("div", { class: "text-h6 text-center pt-2" }, toDisplayString(card.subTitle), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCard, {
                                    flat: "",
                                    class: "bg-transparent"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex flex-column align-center" }, [
                                        createVNode(VAvatar, {
                                          size: "120",
                                          style: [{ "border": "1px solid #3dbbfe" }, `background-color: ${__props.backgroundColor}`],
                                          class: "mt-4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              size: "50",
                                              color: card.iconColor,
                                              icon: card.icon
                                            }, null, 8, ["color", "icon"])
                                          ]),
                                          _: 2
                                        }, 1032, ["style"]),
                                        createVNode(VCardTitle, { class: "text-h4 mt-4" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(card.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode("div", { class: "text-h6 text-center pt-2" }, toDisplayString(card.subTitle), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.cards, (card, i) => {
                            return openBlock(), createBlock(VCol, {
                              key: i,
                              cols: "12",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  flat: "",
                                  class: "bg-transparent"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex flex-column align-center" }, [
                                      createVNode(VAvatar, {
                                        size: "120",
                                        style: [{ "border": "1px solid #3dbbfe" }, `background-color: ${__props.backgroundColor}`],
                                        class: "mt-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            size: "50",
                                            color: card.iconColor,
                                            icon: card.icon
                                          }, null, 8, ["color", "icon"])
                                        ]),
                                        _: 2
                                      }, 1032, ["style"]),
                                      createVNode(VCardTitle, { class: "text-h4 mt-4" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(card.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("div", { class: "text-h6 text-center pt-2" }, toDisplayString(card.subTitle), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "ma-auto" }, [
                      createVNode("h2", { class: "text-h2 text-center mb-2" }, toDisplayString(__props.title), 1),
                      createVNode("h3", { class: "text-h4 text-center mb-9" }, toDisplayString(__props.subTitle), 1)
                    ]),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.cards, (card, i) => {
                          return openBlock(), createBlock(VCol, {
                            key: i,
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                flat: "",
                                class: "bg-transparent"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex flex-column align-center" }, [
                                    createVNode(VAvatar, {
                                      size: "120",
                                      style: [{ "border": "1px solid #3dbbfe" }, `background-color: ${__props.backgroundColor}`],
                                      class: "mt-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          size: "50",
                                          color: card.iconColor,
                                          icon: card.icon
                                        }, null, 8, ["color", "icon"])
                                      ]),
                                      _: 2
                                    }, 1032, ["style"]),
                                    createVNode(VCardTitle, { class: "text-h4 mt-4" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(card.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "text-h6 text-center pt-2" }, toDisplayString(card.subTitle), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, { class: "py-8" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "ma-auto" }, [
                    createVNode("h2", { class: "text-h2 text-center mb-2" }, toDisplayString(__props.title), 1),
                    createVNode("h3", { class: "text-h4 text-center mb-9" }, toDisplayString(__props.subTitle), 1)
                  ]),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.cards, (card, i) => {
                        return openBlock(), createBlock(VCol, {
                          key: i,
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              flat: "",
                              class: "bg-transparent"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex flex-column align-center" }, [
                                  createVNode(VAvatar, {
                                    size: "120",
                                    style: [{ "border": "1px solid #3dbbfe" }, `background-color: ${__props.backgroundColor}`],
                                    class: "mt-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        size: "50",
                                        color: card.iconColor,
                                        icon: card.icon
                                      }, null, 8, ["color", "icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["style"]),
                                  createVNode(VCardTitle, { class: "text-h4 mt-4" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(card.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "text-h6 text-center pt-2" }, toDisplayString(card.subTitle), 1)
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/BenefitsIcons.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Benefits",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String
    },
    subTitle: {
      type: String
    },
    cards: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    },
    backgroundImage: {
      type: String
    },
    backgroundColor: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: ["min-h-[100px] border-b-[1px] border-solid border-my-light-blue bg-cover", __props.backgroundColor],
        style: `background-image: url('${__props.backgroundImage}')`,
        fluid: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, { class: "py-8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="ma-auto"${_scopeId2}><h2 class="text-h2 text-center mb-2"${_scopeId2}>${ssrInterpolate(__props.title)}</h2><h3 class="text-h4 text-center mb-9"${_scopeId2}>${ssrInterpolate(__props.subTitle)}</h3></div>`);
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(__props.cards, (card, i) => {
                          _push4(ssrRenderComponent(VCol, {
                            key: i,
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCard, {
                                  variant: "flat",
                                  class: "h-full max-w-[700px] m-auto bg-transparent"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCardText, mergeProps({ class: "py-0" }, props), {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VCol, {
                                                    cols: "12",
                                                    class: "py-4"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VCardTitle, {
                                                          class: "d-flex pt-4 text-h4 items-center",
                                                          style: { "font-size": "35px" }
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(VIcon, {
                                                                icon: "mdi-check-circle-outline",
                                                                color: "green accent-4",
                                                                size: "45",
                                                                class: "pr-5",
                                                                style: { "margin-top": "-5px" }
                                                              }, null, _parent10, _scopeId9));
                                                              _push10(` ${ssrInterpolate(card.title)}`);
                                                            } else {
                                                              return [
                                                                createVNode(VIcon, {
                                                                  icon: "mdi-check-circle-outline",
                                                                  color: "green accent-4",
                                                                  size: "45",
                                                                  class: "pr-5",
                                                                  style: { "margin-top": "-5px" }
                                                                }),
                                                                createTextVNode(" " + toDisplayString(card.title), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(VCardText, {
                                                          class: "text-h6 pt-1 pb-5",
                                                          style: { "line-height": "1.8rem" }
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(card.subTitle)}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(card.subTitle), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VCardTitle, {
                                                            class: "d-flex pt-4 text-h4 items-center",
                                                            style: { "font-size": "35px" }
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VIcon, {
                                                                icon: "mdi-check-circle-outline",
                                                                color: "green accent-4",
                                                                size: "45",
                                                                class: "pr-5",
                                                                style: { "margin-top": "-5px" }
                                                              }),
                                                              createTextVNode(" " + toDisplayString(card.title), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(VCardText, {
                                                            class: "text-h6 pt-1 pb-5",
                                                            style: { "line-height": "1.8rem" }
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(card.subTitle), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      class: "py-4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VCardTitle, {
                                                          class: "d-flex pt-4 text-h4 items-center",
                                                          style: { "font-size": "35px" }
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VIcon, {
                                                              icon: "mdi-check-circle-outline",
                                                              color: "green accent-4",
                                                              size: "45",
                                                              class: "pr-5",
                                                              style: { "margin-top": "-5px" }
                                                            }),
                                                            createTextVNode(" " + toDisplayString(card.title), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(VCardText, {
                                                          class: "text-h6 pt-1 pb-5",
                                                          style: { "line-height": "1.8rem" }
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(card.subTitle), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VRow, { "no-gutters": "" }, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    class: "py-4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VCardTitle, {
                                                        class: "d-flex pt-4 text-h4 items-center",
                                                        style: { "font-size": "35px" }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            icon: "mdi-check-circle-outline",
                                                            color: "green accent-4",
                                                            size: "45",
                                                            class: "pr-5",
                                                            style: { "margin-top": "-5px" }
                                                          }),
                                                          createTextVNode(" " + toDisplayString(card.title), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(VCardText, {
                                                        class: "text-h6 pt-1 pb-5",
                                                        style: { "line-height": "1.8rem" }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(card.subTitle), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCardText, mergeProps({ class: "py-0" }, props), {
                                          default: withCtx(() => [
                                            createVNode(VRow, { "no-gutters": "" }, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  class: "py-4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VCardTitle, {
                                                      class: "d-flex pt-4 text-h4 items-center",
                                                      style: { "font-size": "35px" }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          icon: "mdi-check-circle-outline",
                                                          color: "green accent-4",
                                                          size: "45",
                                                          class: "pr-5",
                                                          style: { "margin-top": "-5px" }
                                                        }),
                                                        createTextVNode(" " + toDisplayString(card.title), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VCardText, {
                                                      class: "text-h6 pt-1 pb-5",
                                                      style: { "line-height": "1.8rem" }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(card.subTitle), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCard, {
                                    variant: "flat",
                                    class: "h-full max-w-[700px] m-auto bg-transparent"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCardText, mergeProps({ class: "py-0" }, props), {
                                        default: withCtx(() => [
                                          createVNode(VRow, { "no-gutters": "" }, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "12",
                                                class: "py-4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VCardTitle, {
                                                    class: "d-flex pt-4 text-h4 items-center",
                                                    style: { "font-size": "35px" }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        icon: "mdi-check-circle-outline",
                                                        color: "green accent-4",
                                                        size: "45",
                                                        class: "pr-5",
                                                        style: { "margin-top": "-5px" }
                                                      }),
                                                      createTextVNode(" " + toDisplayString(card.title), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(VCardText, {
                                                    class: "text-h6 pt-1 pb-5",
                                                    style: { "line-height": "1.8rem" }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(card.subTitle), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.cards, (card, i) => {
                            return openBlock(), createBlock(VCol, {
                              key: i,
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  variant: "flat",
                                  class: "h-full max-w-[700px] m-auto bg-transparent"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardText, mergeProps({ class: "py-0" }, props), {
                                      default: withCtx(() => [
                                        createVNode(VRow, { "no-gutters": "" }, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "py-4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCardTitle, {
                                                  class: "d-flex pt-4 text-h4 items-center",
                                                  style: { "font-size": "35px" }
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      icon: "mdi-check-circle-outline",
                                                      color: "green accent-4",
                                                      size: "45",
                                                      class: "pr-5",
                                                      style: { "margin-top": "-5px" }
                                                    }),
                                                    createTextVNode(" " + toDisplayString(card.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(VCardText, {
                                                  class: "text-h6 pt-1 pb-5",
                                                  style: { "line-height": "1.8rem" }
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(card.subTitle), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "ma-auto" }, [
                      createVNode("h2", { class: "text-h2 text-center mb-2" }, toDisplayString(__props.title), 1),
                      createVNode("h3", { class: "text-h4 text-center mb-9" }, toDisplayString(__props.subTitle), 1)
                    ]),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.cards, (card, i) => {
                          return openBlock(), createBlock(VCol, {
                            key: i,
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                variant: "flat",
                                class: "h-full max-w-[700px] m-auto bg-transparent"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardText, mergeProps({ class: "py-0" }, props), {
                                    default: withCtx(() => [
                                      createVNode(VRow, { "no-gutters": "" }, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "py-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCardTitle, {
                                                class: "d-flex pt-4 text-h4 items-center",
                                                style: { "font-size": "35px" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: "mdi-check-circle-outline",
                                                    color: "green accent-4",
                                                    size: "45",
                                                    class: "pr-5",
                                                    style: { "margin-top": "-5px" }
                                                  }),
                                                  createTextVNode(" " + toDisplayString(card.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VCardText, {
                                                class: "text-h6 pt-1 pb-5",
                                                style: { "line-height": "1.8rem" }
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(card.subTitle), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1040)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, { class: "py-8" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "ma-auto" }, [
                    createVNode("h2", { class: "text-h2 text-center mb-2" }, toDisplayString(__props.title), 1),
                    createVNode("h3", { class: "text-h4 text-center mb-9" }, toDisplayString(__props.subTitle), 1)
                  ]),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.cards, (card, i) => {
                        return openBlock(), createBlock(VCol, {
                          key: i,
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              variant: "flat",
                              class: "h-full max-w-[700px] m-auto bg-transparent"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardText, mergeProps({ class: "py-0" }, props), {
                                  default: withCtx(() => [
                                    createVNode(VRow, { "no-gutters": "" }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "py-4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCardTitle, {
                                              class: "d-flex pt-4 text-h4 items-center",
                                              style: { "font-size": "35px" }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: "mdi-check-circle-outline",
                                                  color: "green accent-4",
                                                  size: "45",
                                                  class: "pr-5",
                                                  style: { "margin-top": "-5px" }
                                                }),
                                                createTextVNode(" " + toDisplayString(card.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VCardText, {
                                              class: "text-h6 pt-1 pb-5",
                                              style: { "line-height": "1.8rem" }
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(card.subTitle), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1040)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Benefits.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: pageHead("home") });
    const session = useSessionStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHero = __nuxt_component_0;
      const _component_SectionTechnology = __nuxt_component_1;
      const _component_SectionBenefitsIcons = __nuxt_component_2;
      const _component_SectionBenefits = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionHero, {
        "background-image": `/img/bg_retro_80s_city_${unref(session).theme}.jpg`
      }, null, _parent));
      _push(ssrRenderComponent(_component_SectionTechnology, {
        title: _ctx.$t("index.technology.title"),
        "sub-title": _ctx.$t("index.technology.subTitle"),
        "button-text": _ctx.$t("index.technology.buttonText"),
        "background-color": unref(session).theme === "dark" ? "" : "bg-my-off-white",
        "avatar-bg-color": unref(session).theme === "dark" ? "#121212" : "#F8FCFE",
        cards: _ctx.$tm("index.technology.cards")
      }, null, _parent));
      _push(ssrRenderComponent(_component_SectionBenefitsIcons, {
        title: _ctx.$t("index.benefitsIcons.title"),
        "sub-title": _ctx.$t("index.benefitsIcons.subTitle"),
        cards: _ctx.$tm("index.benefitsIcons.cards"),
        "background-image": `/img/bg_sky_${unref(session).theme}.jpg`,
        "background-color": unref(session).theme === "dark" ? "#121212" : "#F8FCFE"
      }, null, _parent));
      _push(ssrRenderComponent(_component_SectionBenefits, {
        title: _ctx.$t("index.benefits.title"),
        "sub-title": _ctx.$t("index.benefits.subTitle"),
        cards: _ctx.$tm("index.benefits.cards"),
        "background-image": `/img/bg_geometric_${unref(session).theme}.jpg`
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C6hghizR.mjs.map
