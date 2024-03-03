import { _ as __nuxt_component_0 } from './nuxt-link-B8s5modA.mjs';
import { _ as _export_sfc, u as useSessionStore, j as useLoginStore, P as useTheme, Q as VApp, R as VAppBar, S as VAppBarNavIcon, d as VImg, T as VAppBarTitle, U as VChip, W as VMenu, D as VIcon, X as VList, Y as VListItem, n as VDivider, l as VBtn, Z as VListSubheader, F as VAlert, $ as VNavigationDrawer, a0 as VMain, O as useNuxtApp, N as VFooter, a as VRow, b as VCol } from '../server.mjs';
import { defineComponent, h, ref, watchEffect, unref, withCtx, createVNode, createTextVNode, toDisplayString, withModifiers, mergeProps, openBlock, createBlock, createCommentVNode, Fragment, renderList, isRef, renderSlot, useSSRContext, computed } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { useI18n } from 'vue-i18n';
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

const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const session = useSessionStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VFooter, mergeProps({
        class: "footer-bg pt-5 pb-3",
        style: {
          backgroundColor: unref(session).theme === "light" ? "#2b354f" : "",
          maxHeight: "200px",
          color: unref(session).theme === "light" ? "white" : "inherit"
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              justify: "center",
              "no-gutters": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.$tm("footer.pageLinks"), (item) => {
                    _push3(ssrRenderComponent(VBtn, {
                      key: item.text,
                      text: item.text,
                      variant: "text",
                      rounded: "xl",
                      class: "text-uppercase my-2",
                      to: item.to
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(VCol, {
                    class: "pt-2 text-center",
                    cols: "12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(_ctx.$tm("footer.socialLinks"), (item) => {
                          _push4(ssrRenderComponent(VBtn, {
                            key: item.icon,
                            variant: "plain",
                            class: "mx-2",
                            icon: item.icon,
                            href: item.href
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$tm("footer.socialLinks"), (item) => {
                            return openBlock(), createBlock(VBtn, {
                              key: item.icon,
                              variant: "plain",
                              class: "mx-2",
                              icon: item.icon,
                              href: item.href
                            }, null, 8, ["icon", "href"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    class: "pt-5 pb-4 text-center text-caption",
                    cols: "12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} \u2014 ${ssrInterpolate(_ctx.$t("all.website"))}, ${ssrInterpolate(_ctx.$t("footer.rights"))}`);
                      } else {
                        return [
                          createTextVNode(" \xA9 " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " \u2014 " + toDisplayString(_ctx.$t("all.website")) + ", " + toDisplayString(_ctx.$t("footer.rights")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$tm("footer.pageLinks"), (item) => {
                      return openBlock(), createBlock(VBtn, {
                        key: item.text,
                        text: item.text,
                        variant: "text",
                        rounded: "xl",
                        class: "text-uppercase my-2",
                        to: item.to
                      }, null, 8, ["text", "to"]);
                    }), 128)),
                    createVNode(VCol, {
                      class: "pt-2 text-center",
                      cols: "12"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$tm("footer.socialLinks"), (item) => {
                          return openBlock(), createBlock(VBtn, {
                            key: item.icon,
                            variant: "plain",
                            class: "mx-2",
                            icon: item.icon,
                            href: item.href
                          }, null, 8, ["icon", "href"]);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      class: "pt-5 pb-4 text-center text-caption",
                      cols: "12"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \xA9 " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " \u2014 " + toDisplayString(_ctx.$t("all.website")) + ", " + toDisplayString(_ctx.$t("footer.rights")), 1)
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
              createVNode(VRow, {
                justify: "center",
                "no-gutters": ""
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$tm("footer.pageLinks"), (item) => {
                    return openBlock(), createBlock(VBtn, {
                      key: item.text,
                      text: item.text,
                      variant: "text",
                      rounded: "xl",
                      class: "text-uppercase my-2",
                      to: item.to
                    }, null, 8, ["text", "to"]);
                  }), 128)),
                  createVNode(VCol, {
                    class: "pt-2 text-center",
                    cols: "12"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$tm("footer.socialLinks"), (item) => {
                        return openBlock(), createBlock(VBtn, {
                          key: item.icon,
                          variant: "plain",
                          class: "mx-2",
                          icon: item.icon,
                          href: item.href
                        }, null, 8, ["icon", "href"]);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    class: "pt-5 pb-4 text-center text-caption",
                    cols: "12"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \xA9 " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " \u2014 " + toDisplayString(_ctx.$t("all.website")) + ", " + toDisplayString(_ctx.$t("footer.rights")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
function defaultEstimatedProgress(duration, elapsed) {
  const completionPercentage = elapsed / duration * 100;
  return 2 / Math.PI * 100 * Math.atan(completionPercentage / 50);
}
function createLoadingIndicator(opts = {}) {
  const { duration = 2e3, throttle = 200 } = opts;
  opts.estimatedProgress || defaultEstimatedProgress;
  const nuxtApp = useNuxtApp();
  const progress = ref(0);
  const isLoading = ref(false);
  let _throttle = null;
  const start = () => set(0);
  function set(at = 0) {
    if (nuxtApp.isHydrating) {
      return;
    }
    if (at >= 100) {
      return finish();
    }
    clear();
    progress.value = at < 0 ? 0 : at;
    if (throttle && false) {
      _throttle = setTimeout(() => {
        isLoading.value = true;
      }, throttle);
    } else {
      isLoading.value = true;
    }
  }
  function finish() {
    progress.value = 100;
    clear();
  }
  function clear() {
    clearTimeout(_throttle);
    _throttle = null;
  }
  let _cleanup = () => {
  };
  return {
    _cleanup,
    progress: computed(() => progress.value),
    isLoading: computed(() => isLoading.value),
    start,
    set,
    finish,
    clear
  };
}
function useLoadingIndicator(opts = {}) {
  const nuxtApp = useNuxtApp();
  const indicator = nuxtApp._loadingIndicator = nuxtApp._loadingIndicator || createLoadingIndicator(opts);
  return indicator;
}
const __nuxt_component_2 = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    },
    estimatedProgress: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      estimatedProgress: props.estimatedProgress
    });
    expose({
      progress,
      isLoading,
      start,
      finish,
      clear
    });
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: isLoading.value ? 1 : 0,
        background: props.color || void 0,
        backgroundSize: `${100 / progress.value * 100}% auto`,
        transform: `scaleX(${progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const session = useSessionStore();
    const login = useLoginStore();
    const theme = useTheme();
    const i18n = useI18n({ useScope: "global" });
    const drawer = ref(false);
    const isLoaded = ref(false);
    const banner = ref(false);
    const bannerTimeout = ref(null);
    watchEffect(() => {
      banner.value = !!session.banner;
      if (bannerTimeout.value) {
        clearTimeout(bannerTimeout.value);
        bannerTimeout.value = null;
      }
      if (banner.value && !session.banner.fixed) {
        bannerTimeout.value = setTimeout(() => {
          session.setBanner(null);
        }, 5e3);
      }
    });
    async function changeLocale(locale) {
      i18n.locale.value = locale;
      session.setLocale(locale);
    }
    async function toggleTheme() {
      const newTheme = theme.global.name.value === "light" ? "dark" : "light";
      theme.global.name.value = newTheme;
      session.setTheme(newTheme);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      const _component_NuxtLoadingIndicator = __nuxt_component_2;
      if (unref(isLoaded)) {
        _push(ssrRenderComponent(VApp, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VAppBar, { app: "" }, {
                prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VAppBarNavIcon, {
                      variant: "text",
                      onClick: ($event) => drawer.value = !unref(drawer)
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_nuxt_link, {
                      to: "/",
                      class: "d-flex"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VImg, {
                            width: 25,
                            class: "ml-4",
                            src: "/favicon.ico"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VImg, {
                              width: 25,
                              class: "ml-4",
                              src: "/favicon.ico"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VAppBarTitle, { class: "ml-6" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("all.website"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("all.website")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VAppBarNavIcon, {
                        variant: "text",
                        onClick: withModifiers(($event) => drawer.value = !unref(drawer), ["stop"])
                      }, null, 8, ["onClick"]),
                      createVNode(_component_nuxt_link, {
                        to: "/",
                        class: "d-flex"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            width: 25,
                            class: "ml-4",
                            src: "/favicon.ico"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VAppBarTitle, { class: "ml-6" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("all.website")), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3)
                    ;
                  else {
                    return [];
                  }
                }),
                append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(_ctx.$tm("layout.guestItems"), (item) => {
                      _push3(ssrRenderComponent(VChip, {
                        class: "action-items",
                        variant: "text",
                        size: "large",
                        key: item.title,
                        text: item.title,
                        to: item.to
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                    if (!unref(login).loggedIn) {
                      _push3(ssrRenderComponent(VChip, {
                        class: "action-items",
                        variant: "text",
                        size: "large",
                        text: _ctx.$t("layout.signIn.title"),
                        to: _ctx.$t("layout.signIn.to")
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (unref(login).loggedIn) {
                      _push3(ssrRenderComponent(VMenu, {
                        transition: "fade-transition",
                        location: "bottom right"
                      }, {
                        activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VIcon, mergeProps(props, {
                              icon: "mdi-account",
                              class: "mx-3"
                            }), null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VIcon, mergeProps(props, {
                                icon: "mdi-account",
                                class: "mx-3"
                              }), null, 16)
                            ];
                          }
                        }),
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VList, { class: "mt-5" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VListItem, {
                                    title: unref(login).name,
                                    subtitle: unref(login).role.toUpperCase(),
                                    "prepend-avatar": "img/users/default.png",
                                    class: "py-4",
                                    disabled: ""
                                  }, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VDivider, null, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VListItem, {
                                    title: _ctx.$t("layout.account.title"),
                                    to: `${_ctx.$t("layout.account.to")}/${unref(login).id}`,
                                    "prepend-icon": _ctx.$t("layout.account.icon")
                                  }, null, _parent5, _scopeId4));
                                  if (unref(login).role === "admin") {
                                    _push5(ssrRenderComponent(VListItem, {
                                      key: _ctx.$t("layout.admin.title"),
                                      title: _ctx.$t("layout.admin.title"),
                                      to: _ctx.$t("layout.admin.to"),
                                      "prepend-icon": _ctx.$t("layout.admin.icon")
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(ssrRenderComponent(VListItem, {
                                    title: _ctx.$t("layout.signOut.title"),
                                    to: _ctx.$t("layout.signOut.to"),
                                    "prepend-icon": _ctx.$t("layout.signOut.icon")
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VListItem, {
                                      title: unref(login).name,
                                      subtitle: unref(login).role.toUpperCase(),
                                      "prepend-avatar": "img/users/default.png",
                                      class: "py-4",
                                      disabled: ""
                                    }, null, 8, ["title", "subtitle"]),
                                    createVNode(VDivider),
                                    createVNode(VListItem, {
                                      title: _ctx.$t("layout.account.title"),
                                      to: `${_ctx.$t("layout.account.to")}/${unref(login).id}`,
                                      "prepend-icon": _ctx.$t("layout.account.icon")
                                    }, null, 8, ["title", "to", "prepend-icon"]),
                                    unref(login).role === "admin" ? (openBlock(), createBlock(VListItem, {
                                      key: _ctx.$t("layout.admin.title"),
                                      title: _ctx.$t("layout.admin.title"),
                                      to: _ctx.$t("layout.admin.to"),
                                      "prepend-icon": _ctx.$t("layout.admin.icon")
                                    }, null, 8, ["title", "to", "prepend-icon"])) : createCommentVNode("", true),
                                    createVNode(VListItem, {
                                      title: _ctx.$t("layout.signOut.title"),
                                      to: _ctx.$t("layout.signOut.to"),
                                      "prepend-icon": _ctx.$t("layout.signOut.icon")
                                    }, null, 8, ["title", "to", "prepend-icon"])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VList, { class: "mt-5" }, {
                                default: withCtx(() => [
                                  createVNode(VListItem, {
                                    title: unref(login).name,
                                    subtitle: unref(login).role.toUpperCase(),
                                    "prepend-avatar": "img/users/default.png",
                                    class: "py-4",
                                    disabled: ""
                                  }, null, 8, ["title", "subtitle"]),
                                  createVNode(VDivider),
                                  createVNode(VListItem, {
                                    title: _ctx.$t("layout.account.title"),
                                    to: `${_ctx.$t("layout.account.to")}/${unref(login).id}`,
                                    "prepend-icon": _ctx.$t("layout.account.icon")
                                  }, null, 8, ["title", "to", "prepend-icon"]),
                                  unref(login).role === "admin" ? (openBlock(), createBlock(VListItem, {
                                    key: _ctx.$t("layout.admin.title"),
                                    title: _ctx.$t("layout.admin.title"),
                                    to: _ctx.$t("layout.admin.to"),
                                    "prepend-icon": _ctx.$t("layout.admin.icon")
                                  }, null, 8, ["title", "to", "prepend-icon"])) : createCommentVNode("", true),
                                  createVNode(VListItem, {
                                    title: _ctx.$t("layout.signOut.title"),
                                    to: _ctx.$t("layout.signOut.to"),
                                    "prepend-icon": _ctx.$t("layout.signOut.icon")
                                  }, null, 8, ["title", "to", "prepend-icon"])
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(VMenu, null, {
                      activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VBtn, mergeProps({ icon: "mdi-web" }, props), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VBtn, mergeProps({ icon: "mdi-web" }, props), null, 16)
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VList, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListSubheader, {
                                  title: _ctx.$t("layout.language")
                                }, null, _parent5, _scopeId4));
                                _push5(`<!--[-->`);
                                ssrRenderList(_ctx.$i18n.availableLocales, (locale) => {
                                  _push5(ssrRenderComponent(VListItem, {
                                    key: locale,
                                    title: _ctx.$t(`layout.${locale}`),
                                    active: locale === _ctx.$i18n.locale,
                                    onClick: ($event) => changeLocale(locale)
                                  }, null, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  createVNode(VListSubheader, {
                                    title: _ctx.$t("layout.language")
                                  }, null, 8, ["title"]),
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$i18n.availableLocales, (locale) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: locale,
                                      title: _ctx.$t(`layout.${locale}`),
                                      active: locale === _ctx.$i18n.locale,
                                      onClick: ($event) => changeLocale(locale)
                                    }, null, 8, ["title", "active", "onClick"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VList, null, {
                              default: withCtx(() => [
                                createVNode(VListSubheader, {
                                  title: _ctx.$t("layout.language")
                                }, null, 8, ["title"]),
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$i18n.availableLocales, (locale) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: locale,
                                    title: _ctx.$t(`layout.${locale}`),
                                    active: locale === _ctx.$i18n.locale,
                                    onClick: ($event) => changeLocale(locale)
                                  }, null, 8, ["title", "active", "onClick"]);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VBtn, {
                      icon: "mdi-white-balance-sunny",
                      onClick: toggleTheme
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$tm("layout.guestItems"), (item) => {
                        return openBlock(), createBlock(VChip, {
                          class: "action-items",
                          variant: "text",
                          size: "large",
                          key: item.title,
                          text: item.title,
                          to: item.to
                        }, null, 8, ["text", "to"]);
                      }), 128)),
                      !unref(login).loggedIn ? (openBlock(), createBlock(VChip, {
                        key: 0,
                        class: "action-items",
                        variant: "text",
                        size: "large",
                        text: _ctx.$t("layout.signIn.title"),
                        to: _ctx.$t("layout.signIn.to")
                      }, null, 8, ["text", "to"])) : createCommentVNode("", true),
                      unref(login).loggedIn ? (openBlock(), createBlock(VMenu, {
                        key: 1,
                        transition: "fade-transition",
                        location: "bottom right"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(VIcon, mergeProps(props, {
                            icon: "mdi-account",
                            class: "mx-3"
                          }), null, 16)
                        ]),
                        default: withCtx(() => [
                          createVNode(VList, { class: "mt-5" }, {
                            default: withCtx(() => [
                              createVNode(VListItem, {
                                title: unref(login).name,
                                subtitle: unref(login).role.toUpperCase(),
                                "prepend-avatar": "img/users/default.png",
                                class: "py-4",
                                disabled: ""
                              }, null, 8, ["title", "subtitle"]),
                              createVNode(VDivider),
                              createVNode(VListItem, {
                                title: _ctx.$t("layout.account.title"),
                                to: `${_ctx.$t("layout.account.to")}/${unref(login).id}`,
                                "prepend-icon": _ctx.$t("layout.account.icon")
                              }, null, 8, ["title", "to", "prepend-icon"]),
                              unref(login).role === "admin" ? (openBlock(), createBlock(VListItem, {
                                key: _ctx.$t("layout.admin.title"),
                                title: _ctx.$t("layout.admin.title"),
                                to: _ctx.$t("layout.admin.to"),
                                "prepend-icon": _ctx.$t("layout.admin.icon")
                              }, null, 8, ["title", "to", "prepend-icon"])) : createCommentVNode("", true),
                              createVNode(VListItem, {
                                title: _ctx.$t("layout.signOut.title"),
                                to: _ctx.$t("layout.signOut.to"),
                                "prepend-icon": _ctx.$t("layout.signOut.icon")
                              }, null, 8, ["title", "to", "prepend-icon"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(VMenu, null, {
                        activator: withCtx(({ props }) => [
                          createVNode(VBtn, mergeProps({ icon: "mdi-web" }, props), null, 16)
                        ]),
                        default: withCtx(() => [
                          createVNode(VList, null, {
                            default: withCtx(() => [
                              createVNode(VListSubheader, {
                                title: _ctx.$t("layout.language")
                              }, null, 8, ["title"]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$i18n.availableLocales, (locale) => {
                                return openBlock(), createBlock(VListItem, {
                                  key: locale,
                                  title: _ctx.$t(`layout.${locale}`),
                                  active: locale === _ctx.$i18n.locale,
                                  onClick: ($event) => changeLocale(locale)
                                }, null, 8, ["title", "active", "onClick"]);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        icon: "mdi-white-balance-sunny",
                        onClick: toggleTheme
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VAlert, {
                modelValue: unref(banner),
                "onUpdate:modelValue": ($event) => isRef(banner) ? banner.value = $event : null,
                variant: "elevated",
                elevation: "8",
                class: "mx-auto",
                closable: "",
                type: unref(session).banner ? unref(session).banner.type : null,
                title: unref(session).banner ? unref(session).banner.title : null,
                text: unref(session).banner ? unref(session).banner.text : null,
                "onClick:close": ($event) => unref(session).setBanner(null)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(VNavigationDrawer, {
                app: "",
                modelValue: unref(drawer),
                "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : null,
                temporary: "",
                location: "left"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VList, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (unref(login).loggedIn) {
                            _push4(ssrRenderComponent(VListItem, {
                              title: unref(login).name,
                              subtitle: unref(login).role.toUpperCase(),
                              "prepend-avatar": "img/users/default.png",
                              class: "py-4",
                              disabled: ""
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (unref(login).loggedIn) {
                            _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<!--[-->`);
                          ssrRenderList(_ctx.$tm("layout.guestItems"), (item) => {
                            _push4(ssrRenderComponent(VListItem, {
                              key: item.title,
                              title: item.title,
                              to: item.to,
                              "prepend-icon": item.icon
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                          if (unref(login).role === "admin") {
                            _push4(ssrRenderComponent(VListItem, {
                              key: _ctx.$t("layout.admin.title"),
                              title: _ctx.$t("layout.admin.title"),
                              to: _ctx.$t("layout.admin.to"),
                              "prepend-icon": _ctx.$t("layout.admin.icon")
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (unref(login).loggedIn) {
                            _push4(`<!--[-->`);
                            _push4(ssrRenderComponent(VListItem, {
                              title: _ctx.$t("layout.account.title"),
                              to: `${_ctx.$t("layout.account.to")}/${unref(login).id}`,
                              "prepend-icon": _ctx.$t("layout.account.icon")
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VListItem, {
                              title: _ctx.$t("layout.signOut.title"),
                              to: _ctx.$t("layout.signOut.to"),
                              "prepend-icon": _ctx.$t("layout.signOut.icon")
                            }, null, _parent4, _scopeId3));
                            _push4(`<!--]-->`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!unref(login).loggedIn) {
                            _push4(ssrRenderComponent(VListItem, {
                              title: _ctx.$t("layout.signIn.title"),
                              to: _ctx.$t("layout.signIn.to"),
                              "prepend-icon": _ctx.$t("layout.signIn.icon")
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            unref(login).loggedIn ? (openBlock(), createBlock(VListItem, {
                              key: 0,
                              title: unref(login).name,
                              subtitle: unref(login).role.toUpperCase(),
                              "prepend-avatar": "img/users/default.png",
                              class: "py-4",
                              disabled: ""
                            }, null, 8, ["title", "subtitle"])) : createCommentVNode("", true),
                            unref(login).loggedIn ? (openBlock(), createBlock(VDivider, { key: 1 })) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$tm("layout.guestItems"), (item) => {
                              return openBlock(), createBlock(VListItem, {
                                key: item.title,
                                title: item.title,
                                to: item.to,
                                "prepend-icon": item.icon
                              }, null, 8, ["title", "to", "prepend-icon"]);
                            }), 128)),
                            unref(login).role === "admin" ? (openBlock(), createBlock(VListItem, {
                              key: _ctx.$t("layout.admin.title"),
                              title: _ctx.$t("layout.admin.title"),
                              to: _ctx.$t("layout.admin.to"),
                              "prepend-icon": _ctx.$t("layout.admin.icon")
                            }, null, 8, ["title", "to", "prepend-icon"])) : createCommentVNode("", true),
                            unref(login).loggedIn ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                              createVNode(VListItem, {
                                title: _ctx.$t("layout.account.title"),
                                to: `${_ctx.$t("layout.account.to")}/${unref(login).id}`,
                                "prepend-icon": _ctx.$t("layout.account.icon")
                              }, null, 8, ["title", "to", "prepend-icon"]),
                              createVNode(VListItem, {
                                title: _ctx.$t("layout.signOut.title"),
                                to: _ctx.$t("layout.signOut.to"),
                                "prepend-icon": _ctx.$t("layout.signOut.icon")
                              }, null, 8, ["title", "to", "prepend-icon"])
                            ], 64)) : createCommentVNode("", true),
                            !unref(login).loggedIn ? (openBlock(), createBlock(VListItem, {
                              key: 4,
                              title: _ctx.$t("layout.signIn.title"),
                              to: _ctx.$t("layout.signIn.to"),
                              "prepend-icon": _ctx.$t("layout.signIn.icon")
                            }, null, 8, ["title", "to", "prepend-icon"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VList, null, {
                        default: withCtx(() => [
                          unref(login).loggedIn ? (openBlock(), createBlock(VListItem, {
                            key: 0,
                            title: unref(login).name,
                            subtitle: unref(login).role.toUpperCase(),
                            "prepend-avatar": "img/users/default.png",
                            class: "py-4",
                            disabled: ""
                          }, null, 8, ["title", "subtitle"])) : createCommentVNode("", true),
                          unref(login).loggedIn ? (openBlock(), createBlock(VDivider, { key: 1 })) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$tm("layout.guestItems"), (item) => {
                            return openBlock(), createBlock(VListItem, {
                              key: item.title,
                              title: item.title,
                              to: item.to,
                              "prepend-icon": item.icon
                            }, null, 8, ["title", "to", "prepend-icon"]);
                          }), 128)),
                          unref(login).role === "admin" ? (openBlock(), createBlock(VListItem, {
                            key: _ctx.$t("layout.admin.title"),
                            title: _ctx.$t("layout.admin.title"),
                            to: _ctx.$t("layout.admin.to"),
                            "prepend-icon": _ctx.$t("layout.admin.icon")
                          }, null, 8, ["title", "to", "prepend-icon"])) : createCommentVNode("", true),
                          unref(login).loggedIn ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                            createVNode(VListItem, {
                              title: _ctx.$t("layout.account.title"),
                              to: `${_ctx.$t("layout.account.to")}/${unref(login).id}`,
                              "prepend-icon": _ctx.$t("layout.account.icon")
                            }, null, 8, ["title", "to", "prepend-icon"]),
                            createVNode(VListItem, {
                              title: _ctx.$t("layout.signOut.title"),
                              to: _ctx.$t("layout.signOut.to"),
                              "prepend-icon": _ctx.$t("layout.signOut.icon")
                            }, null, 8, ["title", "to", "prepend-icon"])
                          ], 64)) : createCommentVNode("", true),
                          !unref(login).loggedIn ? (openBlock(), createBlock(VListItem, {
                            key: 4,
                            title: _ctx.$t("layout.signIn.title"),
                            to: _ctx.$t("layout.signIn.to"),
                            "prepend-icon": _ctx.$t("layout.signIn.icon")
                          }, null, 8, ["title", "to", "prepend-icon"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VMain, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", {}, void 0, true)
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(VAppBar, { app: "" }, {
                  prepend: withCtx(() => [
                    createVNode(VAppBarNavIcon, {
                      variant: "text",
                      onClick: withModifiers(($event) => drawer.value = !unref(drawer), ["stop"])
                    }, null, 8, ["onClick"]),
                    createVNode(_component_nuxt_link, {
                      to: "/",
                      class: "d-flex"
                    }, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          width: 25,
                          class: "ml-4",
                          src: "/favicon.ico"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VAppBarTitle, { class: "ml-6" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("all.website")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => []),
                  append: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$tm("layout.guestItems"), (item) => {
                      return openBlock(), createBlock(VChip, {
                        class: "action-items",
                        variant: "text",
                        size: "large",
                        key: item.title,
                        text: item.title,
                        to: item.to
                      }, null, 8, ["text", "to"]);
                    }), 128)),
                    !unref(login).loggedIn ? (openBlock(), createBlock(VChip, {
                      key: 0,
                      class: "action-items",
                      variant: "text",
                      size: "large",
                      text: _ctx.$t("layout.signIn.title"),
                      to: _ctx.$t("layout.signIn.to")
                    }, null, 8, ["text", "to"])) : createCommentVNode("", true),
                    unref(login).loggedIn ? (openBlock(), createBlock(VMenu, {
                      key: 1,
                      transition: "fade-transition",
                      location: "bottom right"
                    }, {
                      activator: withCtx(({ props }) => [
                        createVNode(VIcon, mergeProps(props, {
                          icon: "mdi-account",
                          class: "mx-3"
                        }), null, 16)
                      ]),
                      default: withCtx(() => [
                        createVNode(VList, { class: "mt-5" }, {
                          default: withCtx(() => [
                            createVNode(VListItem, {
                              title: unref(login).name,
                              subtitle: unref(login).role.toUpperCase(),
                              "prepend-avatar": "img/users/default.png",
                              class: "py-4",
                              disabled: ""
                            }, null, 8, ["title", "subtitle"]),
                            createVNode(VDivider),
                            createVNode(VListItem, {
                              title: _ctx.$t("layout.account.title"),
                              to: `${_ctx.$t("layout.account.to")}/${unref(login).id}`,
                              "prepend-icon": _ctx.$t("layout.account.icon")
                            }, null, 8, ["title", "to", "prepend-icon"]),
                            unref(login).role === "admin" ? (openBlock(), createBlock(VListItem, {
                              key: _ctx.$t("layout.admin.title"),
                              title: _ctx.$t("layout.admin.title"),
                              to: _ctx.$t("layout.admin.to"),
                              "prepend-icon": _ctx.$t("layout.admin.icon")
                            }, null, 8, ["title", "to", "prepend-icon"])) : createCommentVNode("", true),
                            createVNode(VListItem, {
                              title: _ctx.$t("layout.signOut.title"),
                              to: _ctx.$t("layout.signOut.to"),
                              "prepend-icon": _ctx.$t("layout.signOut.icon")
                            }, null, 8, ["title", "to", "prepend-icon"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(VMenu, null, {
                      activator: withCtx(({ props }) => [
                        createVNode(VBtn, mergeProps({ icon: "mdi-web" }, props), null, 16)
                      ]),
                      default: withCtx(() => [
                        createVNode(VList, null, {
                          default: withCtx(() => [
                            createVNode(VListSubheader, {
                              title: _ctx.$t("layout.language")
                            }, null, 8, ["title"]),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$i18n.availableLocales, (locale) => {
                              return openBlock(), createBlock(VListItem, {
                                key: locale,
                                title: _ctx.$t(`layout.${locale}`),
                                active: locale === _ctx.$i18n.locale,
                                onClick: ($event) => changeLocale(locale)
                              }, null, 8, ["title", "active", "onClick"]);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      icon: "mdi-white-balance-sunny",
                      onClick: toggleTheme
                    })
                  ]),
                  _: 1
                }),
                createVNode(VAlert, {
                  modelValue: unref(banner),
                  "onUpdate:modelValue": ($event) => isRef(banner) ? banner.value = $event : null,
                  variant: "elevated",
                  elevation: "8",
                  class: "mx-auto",
                  closable: "",
                  type: unref(session).banner ? unref(session).banner.type : null,
                  title: unref(session).banner ? unref(session).banner.title : null,
                  text: unref(session).banner ? unref(session).banner.text : null,
                  "onClick:close": ($event) => unref(session).setBanner(null)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "title", "text", "onClick:close"]),
                createVNode(VNavigationDrawer, {
                  app: "",
                  modelValue: unref(drawer),
                  "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : null,
                  temporary: "",
                  location: "left"
                }, {
                  default: withCtx(() => [
                    createVNode(VList, null, {
                      default: withCtx(() => [
                        unref(login).loggedIn ? (openBlock(), createBlock(VListItem, {
                          key: 0,
                          title: unref(login).name,
                          subtitle: unref(login).role.toUpperCase(),
                          "prepend-avatar": "img/users/default.png",
                          class: "py-4",
                          disabled: ""
                        }, null, 8, ["title", "subtitle"])) : createCommentVNode("", true),
                        unref(login).loggedIn ? (openBlock(), createBlock(VDivider, { key: 1 })) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$tm("layout.guestItems"), (item) => {
                          return openBlock(), createBlock(VListItem, {
                            key: item.title,
                            title: item.title,
                            to: item.to,
                            "prepend-icon": item.icon
                          }, null, 8, ["title", "to", "prepend-icon"]);
                        }), 128)),
                        unref(login).role === "admin" ? (openBlock(), createBlock(VListItem, {
                          key: _ctx.$t("layout.admin.title"),
                          title: _ctx.$t("layout.admin.title"),
                          to: _ctx.$t("layout.admin.to"),
                          "prepend-icon": _ctx.$t("layout.admin.icon")
                        }, null, 8, ["title", "to", "prepend-icon"])) : createCommentVNode("", true),
                        unref(login).loggedIn ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                          createVNode(VListItem, {
                            title: _ctx.$t("layout.account.title"),
                            to: `${_ctx.$t("layout.account.to")}/${unref(login).id}`,
                            "prepend-icon": _ctx.$t("layout.account.icon")
                          }, null, 8, ["title", "to", "prepend-icon"]),
                          createVNode(VListItem, {
                            title: _ctx.$t("layout.signOut.title"),
                            to: _ctx.$t("layout.signOut.to"),
                            "prepend-icon": _ctx.$t("layout.signOut.icon")
                          }, null, 8, ["title", "to", "prepend-icon"])
                        ], 64)) : createCommentVNode("", true),
                        !unref(login).loggedIn ? (openBlock(), createBlock(VListItem, {
                          key: 4,
                          title: _ctx.$t("layout.signIn.title"),
                          to: _ctx.$t("layout.signIn.to"),
                          "prepend-icon": _ctx.$t("layout.signIn.icon")
                        }, null, 8, ["title", "to", "prepend-icon"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(VMain, null, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ]),
                  _: 3
                }),
                createVNode(_component_Footer)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_NuxtLoadingIndicator, _attrs, null, _parent));
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ead4a213"]]);

export { _default as default };
//# sourceMappingURL=default-DC8T_OkV.mjs.map
