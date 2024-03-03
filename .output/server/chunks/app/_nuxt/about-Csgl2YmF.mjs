import { unref, useSSRContext, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { p as pageHead, u as useSessionStore, V as VContainer, a as VRow, b as VCol, d as VImg, _ as _export_sfc, e as VCard, f as VAvatar, g as VCardTitle, h as VCardSubtitle } from '../server.mjs';
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

const _sfc_main$2 = {
  __name: "Text",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    imageLeft: {
      type: String,
      default: null
    },
    imageRight: {
      type: String,
      default: null
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: "min-h-[400px] border-b-[1px] border-solid border-my-light-blue bg-cover",
        style: `background-color: ${__props.backgroundColor}; background-image: url('${__props.backgroundImage}')`,
        fluid: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, { class: "py-10" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (__props.imageLeft) {
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VImg, {
                                  src: __props.imageLeft,
                                  width: "100%",
                                  cover: ""
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VImg, {
                                    src: __props.imageLeft,
                                    width: "100%",
                                    cover: ""
                                  }, null, 8, ["src"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (__props.text) {
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            md: "8"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="${ssrRenderClass([{ "text-center": !__props.imageLeft && !__props.imageRight }, "text-h3 mb-8"])}" data-v-4ff23995${_scopeId4}>${ssrInterpolate(__props.title)}</div><div class="text-body-1" data-v-4ff23995${_scopeId4}>${__props.text}</div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: ["text-h3 mb-8", { "text-center": !__props.imageLeft && !__props.imageRight }]
                                  }, toDisplayString(__props.title), 3),
                                  createVNode("div", {
                                    class: "text-body-1",
                                    innerHTML: __props.text
                                  }, null, 8, ["innerHTML"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (__props.imageRight) {
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VImg, {
                                  src: __props.imageRight,
                                  width: "100%",
                                  cover: ""
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VImg, {
                                    src: __props.imageRight,
                                    width: "100%",
                                    cover: ""
                                  }, null, 8, ["src"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          __props.imageLeft ? (openBlock(), createBlock(VCol, {
                            key: 0,
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: __props.imageLeft,
                                width: "100%",
                                cover: ""
                              }, null, 8, ["src"])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          __props.text ? (openBlock(), createBlock(VCol, {
                            key: 1,
                            cols: "12",
                            md: "8"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: ["text-h3 mb-8", { "text-center": !__props.imageLeft && !__props.imageRight }]
                              }, toDisplayString(__props.title), 3),
                              createVNode("div", {
                                class: "text-body-1",
                                innerHTML: __props.text
                              }, null, 8, ["innerHTML"])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          __props.imageRight ? (openBlock(), createBlock(VCol, {
                            key: 2,
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: __props.imageRight,
                                width: "100%",
                                cover: ""
                              }, null, 8, ["src"])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        __props.imageLeft ? (openBlock(), createBlock(VCol, {
                          key: 0,
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              src: __props.imageLeft,
                              width: "100%",
                              cover: ""
                            }, null, 8, ["src"])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        __props.text ? (openBlock(), createBlock(VCol, {
                          key: 1,
                          cols: "12",
                          md: "8"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: ["text-h3 mb-8", { "text-center": !__props.imageLeft && !__props.imageRight }]
                            }, toDisplayString(__props.title), 3),
                            createVNode("div", {
                              class: "text-body-1",
                              innerHTML: __props.text
                            }, null, 8, ["innerHTML"])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        __props.imageRight ? (openBlock(), createBlock(VCol, {
                          key: 2,
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              src: __props.imageRight,
                              width: "100%",
                              cover: ""
                            }, null, 8, ["src"])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
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
              createVNode(VContainer, { class: "py-10" }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      __props.imageLeft ? (openBlock(), createBlock(VCol, {
                        key: 0,
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: __props.imageLeft,
                            width: "100%",
                            cover: ""
                          }, null, 8, ["src"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      __props.text ? (openBlock(), createBlock(VCol, {
                        key: 1,
                        cols: "12",
                        md: "8"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: ["text-h3 mb-8", { "text-center": !__props.imageLeft && !__props.imageRight }]
                          }, toDisplayString(__props.title), 3),
                          createVNode("div", {
                            class: "text-body-1",
                            innerHTML: __props.text
                          }, null, 8, ["innerHTML"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      __props.imageRight ? (openBlock(), createBlock(VCol, {
                        key: 2,
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: __props.imageRight,
                            width: "100%",
                            cover: ""
                          }, null, 8, ["src"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Text.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4ff23995"]]);
const _sfc_main$1 = {
  __name: "TeamIcons",
  __ssrInlineRender: true,
  props: {
    heroTitle: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    cards: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    },
    image: {
      type: String,
      default: "img/users/default.png"
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: "section-team-images",
        style: `background-color: ${__props.backgroundColor}; 
    ${__props.backgroundImage ? `background-image: url('${__props.backgroundImage}')` : ""}`,
        fluid: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, { class: "py-8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="ma-auto" data-v-ef38ffd2${_scopeId2}>`);
                  if (__props.heroTitle) {
                    _push3(`<h1 class="text-h3 mb-8 text-center" data-v-ef38ffd2${_scopeId2}>${ssrInterpolate(__props.heroTitle)}</h1>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (__props.title) {
                    _push3(`<h2 class="text-h4 text-center mb-12" data-v-ef38ffd2${_scopeId2}>${ssrInterpolate(__props.title)}</h2>`);
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
                            md: "4"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCard, { flat: "" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="d-flex flex-column align-center" data-v-ef38ffd2${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VAvatar, {
                                        size: "120",
                                        color: "white",
                                        class: "mt-4"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VImg, {
                                              size: "50",
                                              src: card.image
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VImg, {
                                                size: "50",
                                                src: card.image
                                              }, null, 8, ["src"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCardTitle, { class: "mt-2" }, {
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
                                      _push6(ssrRenderComponent(VCardSubtitle, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(card.subTitle)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(card.subTitle), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "d-flex flex-column align-center" }, [
                                          createVNode(VAvatar, {
                                            size: "120",
                                            color: "white",
                                            class: "mt-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, {
                                                size: "50",
                                                src: card.image
                                              }, null, 8, ["src"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VCardTitle, { class: "mt-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(card.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VCardSubtitle, { class: "text-center" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(card.subTitle), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCard, { flat: "" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex flex-column align-center" }, [
                                        createVNode(VAvatar, {
                                          size: "120",
                                          color: "white",
                                          class: "mt-4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, {
                                              size: "50",
                                              src: card.image
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCardTitle, { class: "mt-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(card.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCardSubtitle, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(card.subTitle), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
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
                                createVNode(VCard, { flat: "" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex flex-column align-center" }, [
                                      createVNode(VAvatar, {
                                        size: "120",
                                        color: "white",
                                        class: "mt-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, {
                                            size: "50",
                                            src: card.image
                                          }, null, 8, ["src"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardTitle, { class: "mt-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(card.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardSubtitle, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(card.subTitle), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
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
                      __props.heroTitle ? (openBlock(), createBlock("h1", {
                        key: 0,
                        class: "text-h3 mb-8 text-center"
                      }, toDisplayString(__props.heroTitle), 1)) : createCommentVNode("", true),
                      __props.title ? (openBlock(), createBlock("h2", {
                        key: 1,
                        class: "text-h4 text-center mb-12"
                      }, toDisplayString(__props.title), 1)) : createCommentVNode("", true)
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
                              createVNode(VCard, { flat: "" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex flex-column align-center" }, [
                                    createVNode(VAvatar, {
                                      size: "120",
                                      color: "white",
                                      class: "mt-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, {
                                          size: "50",
                                          src: card.image
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCardTitle, { class: "mt-2" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(card.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCardSubtitle, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(card.subTitle), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
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
                    __props.heroTitle ? (openBlock(), createBlock("h1", {
                      key: 0,
                      class: "text-h3 mb-8 text-center"
                    }, toDisplayString(__props.heroTitle), 1)) : createCommentVNode("", true),
                    __props.title ? (openBlock(), createBlock("h2", {
                      key: 1,
                      class: "text-h4 text-center mb-12"
                    }, toDisplayString(__props.title), 1)) : createCommentVNode("", true)
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
                            createVNode(VCard, { flat: "" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex flex-column align-center" }, [
                                  createVNode(VAvatar, {
                                    size: "120",
                                    color: "white",
                                    class: "mt-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, {
                                        size: "50",
                                        src: card.image
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCardTitle, { class: "mt-2" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(card.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCardSubtitle, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(card.subTitle), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/TeamIcons.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ef38ffd2"]]);
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: pageHead("about") });
    const session = useSessionStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionText = __nuxt_component_0;
      const _component_SectionTeamIcons = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionText, {
        imageRight: `/img/cityscape_${unref(session).theme}.jpg`,
        title: _ctx.$t("about.who.title"),
        text: _ctx.$t("about.who.text")
      }, null, _parent));
      _push(ssrRenderComponent(_component_SectionText, {
        imageLeft: `/img/cityscape_${unref(session).theme}.jpg`,
        "background-image": `/img/bg_sky_${unref(session).theme}.jpg`,
        title: _ctx.$t("about.what.title"),
        text: _ctx.$t("about.what.text")
      }, null, _parent));
      _push(ssrRenderComponent(_component_SectionTeamIcons, {
        heroTitle: _ctx.$t("about.team.heroTitle"),
        cards: _ctx.$tm("about.team.cards")
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-Csgl2YmF.mjs.map
