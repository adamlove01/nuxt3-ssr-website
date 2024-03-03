import { _ as _sfc_main$1, a as __nuxt_component_0 } from './Update-BFo6vTep.mjs';
import { _ as _export_sfc, u as useSessionStore, j as useLoginStore, V as VContainer, e as VCard, f as VAvatar, d as VImg, k as VCardText, l as VBtn, m as VDialog, t as translate } from '../server.mjs';
import { ref, mergeProps, withCtx, createVNode, unref, toDisplayString, createTextVNode, isRef, useSSRContext } from 'vue';
import { a as apiFetch } from './paginateSchema-iCtz-bQy.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const session = useSessionStore();
    const login = useLoginStore();
    const user = ref([]);
    const updateModal = ref(false);
    async function getUser() {
      const {
        status,
        code,
        field,
        details = null
      } = await apiFetch(`/api/users/read/${login.id}`, { method: "GET" });
      if (status !== "success") {
        session.setBanner({ type: status, title: translate(code, field) });
        return;
      }
      user.value = details.row;
    }
    function close(result) {
      if (result.status !== "cancel") {
        session.setBanner({ type: result.status, title: result.message });
      }
      updateModal.value = false;
      getUser();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageTitle = __nuxt_component_0;
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: "bg_white_geometric",
        fluid: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PageTitle, {
              title: _ctx.$t("all.titles.account")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VContainer, { class: "pt-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex flex-wrap justify-space-between" style="${ssrRenderStyle({ "gap": "20px" })}" data-v-7027b3fd${_scopeId2}>`);
                  _push3(ssrRenderComponent(VCard, {
                    class: "pa-6 flex-1-0",
                    style: { "min-width": "400px" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VAvatar, {
                          size: "120",
                          color: "white",
                          class: "mb-6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VImg, {
                                size: "120",
                                src: "/img/users/default.png"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VImg, {
                                  size: "120",
                                  src: "/img/users/default.png"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, { class: "text-body-1 pa-0 mb-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<b data-v-7027b3fd${_scopeId4}>${ssrInterpolate(unref(user).name)}</b>`);
                            } else {
                              return [
                                createVNode("b", null, toDisplayString(unref(user).name), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, { class: "text-body-1 pa-0 mb-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(user).email)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(user).email), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, { class: "text-body-1 pa-0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a = unref(user).role) == null ? void 0 : _a.toUpperCase())}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b = unref(user).role) == null ? void 0 : _b.toUpperCase()), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "outlined",
                          rounded: "",
                          class: "mt-6",
                          onClick: ($event) => updateModal.value = true
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("account.editProfile"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("account.editProfile")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VAvatar, {
                            size: "120",
                            color: "white",
                            class: "mb-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                size: "120",
                                src: "/img/users/default.png"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "text-body-1 pa-0 mb-2" }, {
                            default: withCtx(() => [
                              createVNode("b", null, toDisplayString(unref(user).name), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "text-body-1 pa-0 mb-4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(user).email), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "text-body-1 pa-0" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = unref(user).role) == null ? void 0 : _a.toUpperCase()), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            variant: "outlined",
                            rounded: "",
                            class: "mt-6",
                            onClick: ($event) => updateModal.value = true
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("account.editProfile")), 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCard, {
                    class: "pa-6 flex-1-0",
                    style: { "min-width": "400px" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "text-body-1 pt-1 pb-5" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` (${ssrInterpolate(_ctx.$t("account.otherUserData"))}) `);
                            } else {
                              return [
                                createTextVNode(" (" + toDisplayString(_ctx.$t("account.otherUserData")) + ") ", 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "text-body-1 pt-1 pb-5" }, {
                            default: withCtx(() => [
                              createTextVNode(" (" + toDisplayString(_ctx.$t("account.otherUserData")) + ") ", 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VDialog, {
                    modelValue: unref(updateModal),
                    "onUpdate:modelValue": ($event) => isRef(updateModal) ? updateModal.value = $event : null,
                    "max-width": "500px"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$1), {
                          "user-data": unref(user),
                          onDone: ($event) => close($event)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$1), {
                            "user-data": unref(user),
                            onDone: ($event) => close($event)
                          }, null, 8, ["user-data", "onDone"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", {
                      class: "d-flex flex-wrap justify-space-between",
                      style: { "gap": "20px" }
                    }, [
                      createVNode(VCard, {
                        class: "pa-6 flex-1-0",
                        style: { "min-width": "400px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(VAvatar, {
                            size: "120",
                            color: "white",
                            class: "mb-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                size: "120",
                                src: "/img/users/default.png"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "text-body-1 pa-0 mb-2" }, {
                            default: withCtx(() => [
                              createVNode("b", null, toDisplayString(unref(user).name), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "text-body-1 pa-0 mb-4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(user).email), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "text-body-1 pa-0" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = unref(user).role) == null ? void 0 : _a.toUpperCase()), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            variant: "outlined",
                            rounded: "",
                            class: "mt-6",
                            onClick: ($event) => updateModal.value = true
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("account.editProfile")), 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCard, {
                        class: "pa-6 flex-1-0",
                        style: { "min-width": "400px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardText, { class: "text-body-1 pt-1 pb-5" }, {
                            default: withCtx(() => [
                              createTextVNode(" (" + toDisplayString(_ctx.$t("account.otherUserData")) + ") ", 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(VDialog, {
                      modelValue: unref(updateModal),
                      "onUpdate:modelValue": ($event) => isRef(updateModal) ? updateModal.value = $event : null,
                      "max-width": "500px"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1), {
                          "user-data": unref(user),
                          onDone: ($event) => close($event)
                        }, null, 8, ["user-data", "onDone"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PageTitle, {
                title: _ctx.$t("all.titles.account")
              }, null, 8, ["title"]),
              createVNode(VContainer, { class: "pt-6" }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "d-flex flex-wrap justify-space-between",
                    style: { "gap": "20px" }
                  }, [
                    createVNode(VCard, {
                      class: "pa-6 flex-1-0",
                      style: { "min-width": "400px" }
                    }, {
                      default: withCtx(() => [
                        createVNode(VAvatar, {
                          size: "120",
                          color: "white",
                          class: "mb-6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              size: "120",
                              src: "/img/users/default.png"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, { class: "text-body-1 pa-0 mb-2" }, {
                          default: withCtx(() => [
                            createVNode("b", null, toDisplayString(unref(user).name), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, { class: "text-body-1 pa-0 mb-4" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(user).email), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, { class: "text-body-1 pa-0" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString((_a = unref(user).role) == null ? void 0 : _a.toUpperCase()), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          variant: "outlined",
                          rounded: "",
                          class: "mt-6",
                          onClick: ($event) => updateModal.value = true
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("account.editProfile")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCard, {
                      class: "pa-6 flex-1-0",
                      style: { "min-width": "400px" }
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "text-body-1 pt-1 pb-5" }, {
                          default: withCtx(() => [
                            createTextVNode(" (" + toDisplayString(_ctx.$t("account.otherUserData")) + ") ", 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(VDialog, {
                    modelValue: unref(updateModal),
                    "onUpdate:modelValue": ($event) => isRef(updateModal) ? updateModal.value = $event : null,
                    "max-width": "500px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$1), {
                        "user-data": unref(user),
                        onDone: ($event) => close($event)
                      }, null, 8, ["user-data", "onDone"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7027b3fd"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-Xqw6JtpS.mjs.map
