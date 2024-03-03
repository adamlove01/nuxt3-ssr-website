import { a as __nuxt_component_0, _ as _sfc_main$3 } from './Update-BFo6vTep.mjs';
import { ref, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, createCommentVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { _ as _export_sfc, p as pageHead, u as useSessionStore, t as translate, V as VContainer, B as VDataTableServer, C as VToolbar, w as VSpacer, s as VSelect, q as VTextField, l as VBtn, D as VIcon, m as VDialog, j as useLoginStore, o as VForm, e as VCard, g as VCardTitle, n as VDivider, k as VCardText, a as VRow, b as VCol, v as VCardActions, x as validateField, y as userSchema, z as validate } from '../server.mjs';
import { a as apiFetch } from './paginateSchema-iCtz-bQy.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './index-BabADJUJ.mjs';
import { useDebounceFn } from '@vueuse/core';
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
  __name: "Create",
  __ssrInlineRender: true,
  emits: ["done"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    useLoginStore();
    const form = ref(null);
    const refreshing = ref(false);
    const showPassword = ref(false);
    const user = ref({
      name: "",
      email: "",
      password: "",
      role: "client",
      status: "active"
    });
    const rules = {};
    for (const key in user.value) {
      rules[key] = [() => validateField(key, user.value[key], userSchema)];
    }
    function cancel() {
      emit("done", { status: "cancel" });
    }
    async function submit() {
      refreshing.value = true;
      const [vErr, v] = await validate(user.value, userSchema);
      if (vErr)
        return refreshing.value = false;
      const { status, code, field } = await apiFetch(`/api/users/create`, {
        method: "POST",
        body: user.value
      });
      return emit("done", { status, message: translate(code, field) });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VForm, mergeProps({
        ref_key: "form",
        ref: form,
        "validate-on": "blur lazy",
        onSubmit: submit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex justify-space-between"${_scopeId3}><span class="text-h5 align-self-center"${_scopeId3}>${ssrInterpolate(_ctx.$t("users.addNewUser"))}</span>`);
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "mdi-close",
                          class: "mr-n3",
                          flat: "",
                          onClick: cancel
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex justify-space-between" }, [
                            createVNode("span", { class: "text-h5 align-self-center" }, toDisplayString(_ctx.$t("users.addNewUser")), 1),
                            createVNode(VBtn, {
                              icon: "mdi-close",
                              class: "mr-n3",
                              flat: "",
                              onClick: cancel
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pa-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VContainer, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      class: "pb-0 mt-2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(user).name,
                                            "onUpdate:modelValue": ($event) => unref(user).name = $event,
                                            variant: "outlined",
                                            class: "mb-2",
                                            autocomplete: "name",
                                            label: _ctx.$t("fields.fullName"),
                                            rules: rules.name,
                                            required: ""
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(user).email,
                                            "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                            variant: "outlined",
                                            class: "mb-2",
                                            autocomplete: "email",
                                            label: _ctx.$t("fields.email"),
                                            rules: rules.email,
                                            required: ""
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(user).password,
                                            "onUpdate:modelValue": ($event) => unref(user).password = $event,
                                            variant: "outlined",
                                            class: "mb-2",
                                            autocomplete: "current-password",
                                            label: _ctx.$t("fields.password"),
                                            rules: rules.password,
                                            "append-inner-icon": unref(showPassword) ? "mdi-eye-outline" : "mdi-eye-off-outline",
                                            type: unref(showPassword) ? "text" : "password",
                                            hint: _ctx.$t("users.atLeast", { limit: 8 }),
                                            counter: "",
                                            required: "",
                                            "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword)
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(user).name,
                                              "onUpdate:modelValue": ($event) => unref(user).name = $event,
                                              variant: "outlined",
                                              class: "mb-2",
                                              autocomplete: "name",
                                              label: _ctx.$t("fields.fullName"),
                                              rules: rules.name,
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                            createVNode(VTextField, {
                                              modelValue: unref(user).email,
                                              "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                              variant: "outlined",
                                              class: "mb-2",
                                              autocomplete: "email",
                                              label: _ctx.$t("fields.email"),
                                              rules: rules.email,
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                            createVNode(VTextField, {
                                              modelValue: unref(user).password,
                                              "onUpdate:modelValue": ($event) => unref(user).password = $event,
                                              variant: "outlined",
                                              class: "mb-2",
                                              autocomplete: "current-password",
                                              label: _ctx.$t("fields.password"),
                                              rules: rules.password,
                                              "append-inner-icon": unref(showPassword) ? "mdi-eye-outline" : "mdi-eye-off-outline",
                                              type: unref(showPassword) ? "text" : "password",
                                              hint: _ctx.$t("users.atLeast", { limit: 8 }),
                                              counter: "",
                                              required: "",
                                              "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules", "append-inner-icon", "type", "hint", "onClick:appendInner"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "py-0"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: unref(user).role,
                                            "onUpdate:modelValue": ($event) => unref(user).role = $event,
                                            variant: "outlined",
                                            label: _ctx.$t("fields.role"),
                                            items: _ctx.$tm("fields.roleSelect")
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: unref(user).role,
                                              "onUpdate:modelValue": ($event) => unref(user).role = $event,
                                              variant: "outlined",
                                              label: _ctx.$t("fields.role"),
                                              items: _ctx.$tm("fields.roleSelect")
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "items"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "py-0"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: unref(user).status,
                                            "onUpdate:modelValue": ($event) => unref(user).status = $event,
                                            variant: "outlined",
                                            label: _ctx.$t("fields.status"),
                                            items: _ctx.$tm("fields.statusSelect")
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: unref(user).status,
                                              "onUpdate:modelValue": ($event) => unref(user).status = $event,
                                              variant: "outlined",
                                              label: _ctx.$t("fields.status"),
                                              items: _ctx.$tm("fields.statusSelect")
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "items"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "pb-0 mt-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(user).name,
                                            "onUpdate:modelValue": ($event) => unref(user).name = $event,
                                            variant: "outlined",
                                            class: "mb-2",
                                            autocomplete: "name",
                                            label: _ctx.$t("fields.fullName"),
                                            rules: rules.name,
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                          createVNode(VTextField, {
                                            modelValue: unref(user).email,
                                            "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                            variant: "outlined",
                                            class: "mb-2",
                                            autocomplete: "email",
                                            label: _ctx.$t("fields.email"),
                                            rules: rules.email,
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                          createVNode(VTextField, {
                                            modelValue: unref(user).password,
                                            "onUpdate:modelValue": ($event) => unref(user).password = $event,
                                            variant: "outlined",
                                            class: "mb-2",
                                            autocomplete: "current-password",
                                            label: _ctx.$t("fields.password"),
                                            rules: rules.password,
                                            "append-inner-icon": unref(showPassword) ? "mdi-eye-outline" : "mdi-eye-off-outline",
                                            type: unref(showPassword) ? "text" : "password",
                                            hint: _ctx.$t("users.atLeast", { limit: 8 }),
                                            counter: "",
                                            required: "",
                                            "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules", "append-inner-icon", "type", "hint", "onClick:appendInner"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        class: "py-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(user).role,
                                            "onUpdate:modelValue": ($event) => unref(user).role = $event,
                                            variant: "outlined",
                                            label: _ctx.$t("fields.role"),
                                            items: _ctx.$tm("fields.roleSelect")
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        class: "py-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(user).status,
                                            "onUpdate:modelValue": ($event) => unref(user).status = $event,
                                            variant: "outlined",
                                            label: _ctx.$t("fields.status"),
                                            items: _ctx.$tm("fields.statusSelect")
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "items"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "pb-0 mt-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(user).name,
                                          "onUpdate:modelValue": ($event) => unref(user).name = $event,
                                          variant: "outlined",
                                          class: "mb-2",
                                          autocomplete: "name",
                                          label: _ctx.$t("fields.fullName"),
                                          rules: rules.name,
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                        createVNode(VTextField, {
                                          modelValue: unref(user).email,
                                          "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                          variant: "outlined",
                                          class: "mb-2",
                                          autocomplete: "email",
                                          label: _ctx.$t("fields.email"),
                                          rules: rules.email,
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                        createVNode(VTextField, {
                                          modelValue: unref(user).password,
                                          "onUpdate:modelValue": ($event) => unref(user).password = $event,
                                          variant: "outlined",
                                          class: "mb-2",
                                          autocomplete: "current-password",
                                          label: _ctx.$t("fields.password"),
                                          rules: rules.password,
                                          "append-inner-icon": unref(showPassword) ? "mdi-eye-outline" : "mdi-eye-off-outline",
                                          type: unref(showPassword) ? "text" : "password",
                                          hint: _ctx.$t("users.atLeast", { limit: 8 }),
                                          counter: "",
                                          required: "",
                                          "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules", "append-inner-icon", "type", "hint", "onClick:appendInner"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "py-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(user).role,
                                          "onUpdate:modelValue": ($event) => unref(user).role = $event,
                                          variant: "outlined",
                                          label: _ctx.$t("fields.role"),
                                          items: _ctx.$tm("fields.roleSelect")
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "items"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "py-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(user).status,
                                          "onUpdate:modelValue": ($event) => unref(user).status = $event,
                                          variant: "outlined",
                                          label: _ctx.$t("fields.status"),
                                          items: _ctx.$tm("fields.statusSelect")
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "items"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "pb-0 mt-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(user).name,
                                        "onUpdate:modelValue": ($event) => unref(user).name = $event,
                                        variant: "outlined",
                                        class: "mb-2",
                                        autocomplete: "name",
                                        label: _ctx.$t("fields.fullName"),
                                        rules: rules.name,
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                      createVNode(VTextField, {
                                        modelValue: unref(user).email,
                                        "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                        variant: "outlined",
                                        class: "mb-2",
                                        autocomplete: "email",
                                        label: _ctx.$t("fields.email"),
                                        rules: rules.email,
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                      createVNode(VTextField, {
                                        modelValue: unref(user).password,
                                        "onUpdate:modelValue": ($event) => unref(user).password = $event,
                                        variant: "outlined",
                                        class: "mb-2",
                                        autocomplete: "current-password",
                                        label: _ctx.$t("fields.password"),
                                        rules: rules.password,
                                        "append-inner-icon": unref(showPassword) ? "mdi-eye-outline" : "mdi-eye-off-outline",
                                        type: unref(showPassword) ? "text" : "password",
                                        hint: _ctx.$t("users.atLeast", { limit: 8 }),
                                        counter: "",
                                        required: "",
                                        "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules", "append-inner-icon", "type", "hint", "onClick:appendInner"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    class: "py-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(user).role,
                                        "onUpdate:modelValue": ($event) => unref(user).role = $event,
                                        variant: "outlined",
                                        label: _ctx.$t("fields.role"),
                                        items: _ctx.$tm("fields.roleSelect")
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "items"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    class: "py-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(user).status,
                                        "onUpdate:modelValue": ($event) => unref(user).status = $event,
                                        variant: "outlined",
                                        label: _ctx.$t("fields.status"),
                                        items: _ctx.$tm("fields.statusSelect")
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "items"])
                                    ]),
                                    _: 1
                                  })
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, { class: "mx-2 my-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "flat",
                          onClick: cancel
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("all.buttons.cancel"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("all.buttons.cancel")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          disabled: unref(refreshing),
                          loading: unref(refreshing),
                          type: "submit",
                          variant: "tonal",
                          "min-width": "100"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("all.buttons.save"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("all.buttons.save")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            variant: "flat",
                            onClick: cancel
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("all.buttons.cancel")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            disabled: unref(refreshing),
                            loading: unref(refreshing),
                            type: "submit",
                            variant: "tonal",
                            "min-width": "100"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("all.buttons.save")), 1)
                            ]),
                            _: 1
                          }, 8, ["disabled", "loading"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex justify-space-between" }, [
                          createVNode("span", { class: "text-h5 align-self-center" }, toDisplayString(_ctx.$t("users.addNewUser")), 1),
                          createVNode(VBtn, {
                            icon: "mdi-close",
                            class: "mr-n3",
                            flat: "",
                            onClick: cancel
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(VCardText, { class: "pa-0" }, {
                      default: withCtx(() => [
                        createVNode(VContainer, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "pb-0 mt-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(user).name,
                                      "onUpdate:modelValue": ($event) => unref(user).name = $event,
                                      variant: "outlined",
                                      class: "mb-2",
                                      autocomplete: "name",
                                      label: _ctx.$t("fields.fullName"),
                                      rules: rules.name,
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                    createVNode(VTextField, {
                                      modelValue: unref(user).email,
                                      "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                      variant: "outlined",
                                      class: "mb-2",
                                      autocomplete: "email",
                                      label: _ctx.$t("fields.email"),
                                      rules: rules.email,
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                    createVNode(VTextField, {
                                      modelValue: unref(user).password,
                                      "onUpdate:modelValue": ($event) => unref(user).password = $event,
                                      variant: "outlined",
                                      class: "mb-2",
                                      autocomplete: "current-password",
                                      label: _ctx.$t("fields.password"),
                                      rules: rules.password,
                                      "append-inner-icon": unref(showPassword) ? "mdi-eye-outline" : "mdi-eye-off-outline",
                                      type: unref(showPassword) ? "text" : "password",
                                      hint: _ctx.$t("users.atLeast", { limit: 8 }),
                                      counter: "",
                                      required: "",
                                      "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword)
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules", "append-inner-icon", "type", "hint", "onClick:appendInner"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  class: "py-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(user).role,
                                      "onUpdate:modelValue": ($event) => unref(user).role = $event,
                                      variant: "outlined",
                                      label: _ctx.$t("fields.role"),
                                      items: _ctx.$tm("fields.roleSelect")
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "items"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  class: "py-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(user).status,
                                      "onUpdate:modelValue": ($event) => unref(user).status = $event,
                                      variant: "outlined",
                                      label: _ctx.$t("fields.status"),
                                      items: _ctx.$tm("fields.statusSelect")
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "items"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(VCardActions, { class: "mx-2 my-1" }, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          variant: "flat",
                          onClick: cancel
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("all.buttons.cancel")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          disabled: unref(refreshing),
                          loading: unref(refreshing),
                          type: "submit",
                          variant: "tonal",
                          "min-width": "100"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("all.buttons.save")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled", "loading"])
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex justify-space-between" }, [
                        createVNode("span", { class: "text-h5 align-self-center" }, toDisplayString(_ctx.$t("users.addNewUser")), 1),
                        createVNode(VBtn, {
                          icon: "mdi-close",
                          class: "mr-n3",
                          flat: "",
                          onClick: cancel
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VCardText, { class: "pa-0" }, {
                    default: withCtx(() => [
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                class: "pb-0 mt-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(user).name,
                                    "onUpdate:modelValue": ($event) => unref(user).name = $event,
                                    variant: "outlined",
                                    class: "mb-2",
                                    autocomplete: "name",
                                    label: _ctx.$t("fields.fullName"),
                                    rules: rules.name,
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                  createVNode(VTextField, {
                                    modelValue: unref(user).email,
                                    "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                    variant: "outlined",
                                    class: "mb-2",
                                    autocomplete: "email",
                                    label: _ctx.$t("fields.email"),
                                    rules: rules.email,
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                  createVNode(VTextField, {
                                    modelValue: unref(user).password,
                                    "onUpdate:modelValue": ($event) => unref(user).password = $event,
                                    variant: "outlined",
                                    class: "mb-2",
                                    autocomplete: "current-password",
                                    label: _ctx.$t("fields.password"),
                                    rules: rules.password,
                                    "append-inner-icon": unref(showPassword) ? "mdi-eye-outline" : "mdi-eye-off-outline",
                                    type: unref(showPassword) ? "text" : "password",
                                    hint: _ctx.$t("users.atLeast", { limit: 8 }),
                                    counter: "",
                                    required: "",
                                    "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword)
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules", "append-inner-icon", "type", "hint", "onClick:appendInner"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                class: "py-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(user).role,
                                    "onUpdate:modelValue": ($event) => unref(user).role = $event,
                                    variant: "outlined",
                                    label: _ctx.$t("fields.role"),
                                    items: _ctx.$tm("fields.roleSelect")
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "items"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                class: "py-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(user).status,
                                    "onUpdate:modelValue": ($event) => unref(user).status = $event,
                                    variant: "outlined",
                                    label: _ctx.$t("fields.status"),
                                    items: _ctx.$tm("fields.statusSelect")
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "items"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VCardActions, { class: "mx-2 my-1" }, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        variant: "flat",
                        onClick: cancel
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("all.buttons.cancel")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        disabled: unref(refreshing),
                        loading: unref(refreshing),
                        type: "submit",
                        variant: "tonal",
                        "min-width": "100"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("all.buttons.save")), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled", "loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/users/Create.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Delete",
  __ssrInlineRender: true,
  props: {
    userData: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  emits: ["reload", "message"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const user = ref({ ...props.userData });
    useLoginStore();
    const refreshing = ref(false);
    function cancel() {
      emit("done", { status: "cancel" });
    }
    async function submit() {
      refreshing.value = true;
      const { status, code, field } = await apiFetch(
        `/api/users/delete/${user.value.id}`,
        {
          method: "DELETE"
        }
      );
      return emit("done", { status, message: translate(code, field) });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex justify-space-between"${_scopeId2}><span class="text-h5 align-self-center"${_scopeId2}>${ssrInterpolate(_ctx.$t("users.deleteUser"))}</span>`);
                  _push3(ssrRenderComponent(VBtn, {
                    icon: "mdi-close",
                    class: "mr-n3",
                    flat: "",
                    onClick: cancel
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-space-between" }, [
                      createVNode("span", { class: "text-h5 align-self-center" }, toDisplayString(_ctx.$t("users.deleteUser")), 1),
                      createVNode(VBtn, {
                        icon: "mdi-close",
                        class: "mr-n3",
                        flat: "",
                        onClick: cancel
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "pa-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                class: "my-2"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<p${_scopeId5}>${ssrInterpolate(unref(user).name)}</p><p${_scopeId5}>${ssrInterpolate(unref(user).email)}</p>`);
                                  } else {
                                    return [
                                      createVNode("p", null, toDisplayString(unref(user).name), 1),
                                      createVNode("p", null, toDisplayString(unref(user).email), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "my-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", null, toDisplayString(unref(user).name), 1),
                                    createVNode("p", null, toDisplayString(unref(user).email), 1)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                class: "my-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("p", null, toDisplayString(unref(user).name), 1),
                                  createVNode("p", null, toDisplayString(unref(user).email), 1)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              class: "my-2"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", null, toDisplayString(unref(user).name), 1),
                                createVNode("p", null, toDisplayString(unref(user).email), 1)
                              ]),
                              _: 1
                            })
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardActions, { class: "mx-2 my-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "flat",
                    onClick: cancel
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("all.buttons.cancel"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("all.buttons.cancel")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    disabled: unref(refreshing),
                    loading: unref(refreshing),
                    variant: "tonal",
                    "min-width": "100",
                    onClick: submit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("all.buttons.ok"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("all.buttons.ok")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "flat",
                      onClick: cancel
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("all.buttons.cancel")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      disabled: unref(refreshing),
                      loading: unref(refreshing),
                      variant: "tonal",
                      "min-width": "100",
                      onClick: submit
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("all.buttons.ok")), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled", "loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardTitle, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex justify-space-between" }, [
                    createVNode("span", { class: "text-h5 align-self-center" }, toDisplayString(_ctx.$t("users.deleteUser")), 1),
                    createVNode(VBtn, {
                      icon: "mdi-close",
                      class: "mr-n3",
                      flat: "",
                      onClick: cancel
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VCardText, { class: "pa-0" }, {
                default: withCtx(() => [
                  createVNode(VContainer, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            class: "my-2"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", null, toDisplayString(unref(user).name), 1),
                              createVNode("p", null, toDisplayString(unref(user).email), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VCardActions, { class: "mx-2 my-1" }, {
                default: withCtx(() => [
                  createVNode(VSpacer),
                  createVNode(VBtn, {
                    variant: "flat",
                    onClick: cancel
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("all.buttons.cancel")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VBtn, {
                    disabled: unref(refreshing),
                    loading: unref(refreshing),
                    variant: "tonal",
                    "min-width": "100",
                    onClick: submit
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("all.buttons.ok")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/users/Delete.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$1;
const _sfc_main = {
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: pageHead("admin") });
    const session = useSessionStore();
    const search = ref({ show: false, string: null });
    const modal = ref({ create: false, update: false, delete: false });
    const users = ref([]);
    const user = ref({});
    const options = ref({
      page: 1,
      itemsPerPage: 10,
      sortBy: { key: "name", order: "desc" },
      search: null,
      column: "name",
      itemsLength: 0,
      totalPages: 0
    });
    const onSearch = useDebounceFn(() => {
      options.value.search = search.value.string;
      getAllUsers();
    }, 800);
    async function getAllUsers() {
      const {
        status,
        code,
        field,
        details = null
      } = await apiFetch("/api/users/read", {
        method: "GET",
        params: options.value
      });
      if (status !== "success") {
        session.setBanner({ type: status, title: translate(code, field) });
        return;
      }
      users.value = details.rows;
      options.value = details.options;
    }
    function open(userData, type) {
      user.value = userData;
      modal.value[type] = true;
    }
    function close(result, type) {
      if (result.status !== "cancel") {
        session.setBanner({ type: result.status, title: result.message });
      }
      modal.value[type] = false;
      getAllUsers();
    }
    function updateOptions(event, type) {
      if (type === "page")
        options.value.page = event;
      if (type === "itemsPerPage")
        options.value.itemsPerPage = event;
      if (type === "sortBy")
        options.value.sortBy = event[0];
      getAllUsers();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageTitle = __nuxt_component_0;
      const _component_users_create = __nuxt_component_1;
      const _component_users_update = _sfc_main$3;
      const _component_users_delete = __nuxt_component_3;
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: "bg_white_geometric",
        fluid: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PageTitle, {
              title: _ctx.$t("all.titles.admin")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VContainer, { class: "pt-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDataTableServer, {
                    class: "elevation-1 pb2",
                    headers: _ctx.$tm("admin.headers"),
                    items: unref(users),
                    page: unref(options).page,
                    "items-per-page": unref(options).itemsPerPage,
                    "items-per-page-text": _ctx.$t("admin.itemsPerPageText"),
                    "items-per-page-options": _ctx.$tm("admin.itemsPerPageOptions"),
                    "items-length": unref(options).itemsLength,
                    "show-current-page": true,
                    "onUpdate:page": ($event) => updateOptions($event, "page"),
                    "onUpdate:sortBy": ($event) => updateOptions($event, "sortBy"),
                    "onUpdate:itemsPerPage": ($event) => updateOptions($event, "itemsPerPage")
                  }, {
                    top: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VToolbar, {
                          flat: "",
                          class: "py-0",
                          title: _ctx.$t("admin.usersList")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                              if (unref(search).show) {
                                _push5(`<!--[-->`);
                                _push5(ssrRenderComponent(VSelect, {
                                  modelValue: unref(options).column,
                                  "onUpdate:modelValue": ($event) => unref(options).column = $event,
                                  class: "search-columns mr-3",
                                  items: _ctx.$tm("admin.columns"),
                                  placeholder: _ctx.$t("admin.columnSearchPlaceholder"),
                                  label: "Search columns",
                                  variant: "outlined",
                                  density: "compact",
                                  multiple: "",
                                  "hide-details": ""
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VTextField, {
                                  modelValue: unref(search).string,
                                  "onUpdate:modelValue": [($event) => unref(search).string = $event, unref(onSearch)],
                                  class: "search mr-3",
                                  variant: "outlined",
                                  density: "compact",
                                  label: _ctx.$t("fields.search"),
                                  autofocus: "",
                                  "hide-details": ""
                                }, null, _parent5, _scopeId4));
                                _push5(`<!--]-->`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(VBtn, {
                                icon: "mdi-magnify",
                                onClick: ($event) => unref(search).show = !unref(search).show
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                icon: "mdi-account-plus",
                                onClick: ($event) => unref(modal).create = true
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSpacer),
                                unref(search).show ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createVNode(VSelect, {
                                    modelValue: unref(options).column,
                                    "onUpdate:modelValue": ($event) => unref(options).column = $event,
                                    class: "search-columns mr-3",
                                    items: _ctx.$tm("admin.columns"),
                                    placeholder: _ctx.$t("admin.columnSearchPlaceholder"),
                                    label: "Search columns",
                                    variant: "outlined",
                                    density: "compact",
                                    multiple: "",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder"]),
                                  createVNode(VTextField, {
                                    modelValue: unref(search).string,
                                    "onUpdate:modelValue": [($event) => unref(search).string = $event, unref(onSearch)],
                                    class: "search mr-3",
                                    variant: "outlined",
                                    density: "compact",
                                    label: _ctx.$t("fields.search"),
                                    autofocus: "",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                ], 64)) : createCommentVNode("", true),
                                createVNode(VBtn, {
                                  icon: "mdi-magnify",
                                  onClick: ($event) => unref(search).show = !unref(search).show
                                }, null, 8, ["onClick"]),
                                createVNode(VBtn, {
                                  icon: "mdi-account-plus",
                                  onClick: ($event) => unref(modal).create = true
                                }, null, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VToolbar, {
                            flat: "",
                            class: "py-0",
                            title: _ctx.$t("admin.usersList")
                          }, {
                            default: withCtx(() => [
                              createVNode(VSpacer),
                              unref(search).show ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createVNode(VSelect, {
                                  modelValue: unref(options).column,
                                  "onUpdate:modelValue": ($event) => unref(options).column = $event,
                                  class: "search-columns mr-3",
                                  items: _ctx.$tm("admin.columns"),
                                  placeholder: _ctx.$t("admin.columnSearchPlaceholder"),
                                  label: "Search columns",
                                  variant: "outlined",
                                  density: "compact",
                                  multiple: "",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder"]),
                                createVNode(VTextField, {
                                  modelValue: unref(search).string,
                                  "onUpdate:modelValue": [($event) => unref(search).string = $event, unref(onSearch)],
                                  class: "search mr-3",
                                  variant: "outlined",
                                  density: "compact",
                                  label: _ctx.$t("fields.search"),
                                  autofocus: "",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                              ], 64)) : createCommentVNode("", true),
                              createVNode(VBtn, {
                                icon: "mdi-magnify",
                                onClick: ($event) => unref(search).show = !unref(search).show
                              }, null, 8, ["onClick"]),
                              createVNode(VBtn, {
                                icon: "mdi-account-plus",
                                onClick: ($event) => unref(modal).create = true
                              }, null, 8, ["onClick"])
                            ]),
                            _: 1
                          }, 8, ["title"])
                        ];
                      }
                    }),
                    "item.role": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t(`fields.roles.${item.role}`))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t(`fields.roles.${item.role}`)), 1)
                        ];
                      }
                    }),
                    "item.status": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t(`fields.statuses.${item.status}`))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t(`fields.statuses.${item.status}`)), 1)
                        ];
                      }
                    }),
                    "item.actions": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          small: "",
                          class: "mr-4",
                          onClick: ($event) => open(item, "update")
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` mdi-pencil `);
                            } else {
                              return [
                                createTextVNode(" mdi-pencil ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VIcon, {
                          small: "",
                          onClick: ($event) => open(item, "delete")
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` mdi-delete `);
                            } else {
                              return [
                                createTextVNode(" mdi-delete ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, {
                            small: "",
                            class: "mr-4",
                            onClick: ($event) => open(item, "update")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-pencil ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode(VIcon, {
                            small: "",
                            onClick: ($event) => open(item, "delete")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-delete ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ];
                      }
                    }),
                    "footer.prepend": withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="flex-grow-1 ml-4" data-v-6650cfd6${_scopeId3}>${ssrInterpolate(_ctx.$t("admin.pages"))} ${ssrInterpolate(unref(options).totalPages)}</p>`);
                      } else {
                        return [
                          createVNode("p", { class: "flex-grow-1 ml-4" }, toDisplayString(_ctx.$t("admin.pages")) + " " + toDisplayString(unref(options).totalPages), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDialog, {
                    modelValue: unref(modal).create,
                    "onUpdate:modelValue": ($event) => unref(modal).create = $event,
                    "max-width": "500px"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_users_create, {
                          onDone: ($event) => close($event, "create")
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_users_create, {
                            onDone: ($event) => close($event, "create")
                          }, null, 8, ["onDone"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDialog, {
                    modelValue: unref(modal).update,
                    "onUpdate:modelValue": ($event) => unref(modal).update = $event,
                    "max-width": "500px"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_users_update, {
                          "user-data": unref(user),
                          onDone: ($event) => close($event, "update")
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_users_update, {
                            "user-data": unref(user),
                            onDone: ($event) => close($event, "update")
                          }, null, 8, ["user-data", "onDone"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDialog, {
                    modelValue: unref(modal).delete,
                    "onUpdate:modelValue": ($event) => unref(modal).delete = $event,
                    "max-width": "500px"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_users_delete, {
                          "user-data": unref(user),
                          onDone: ($event) => close($event, "delete")
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_users_delete, {
                            "user-data": unref(user),
                            onDone: ($event) => close($event, "delete")
                          }, null, 8, ["user-data", "onDone"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDataTableServer, {
                      class: "elevation-1 pb2",
                      headers: _ctx.$tm("admin.headers"),
                      items: unref(users),
                      page: unref(options).page,
                      "items-per-page": unref(options).itemsPerPage,
                      "items-per-page-text": _ctx.$t("admin.itemsPerPageText"),
                      "items-per-page-options": _ctx.$tm("admin.itemsPerPageOptions"),
                      "items-length": unref(options).itemsLength,
                      "show-current-page": true,
                      "onUpdate:page": ($event) => updateOptions($event, "page"),
                      "onUpdate:sortBy": ($event) => updateOptions($event, "sortBy"),
                      "onUpdate:itemsPerPage": ($event) => updateOptions($event, "itemsPerPage")
                    }, {
                      top: withCtx(() => [
                        createVNode(VToolbar, {
                          flat: "",
                          class: "py-0",
                          title: _ctx.$t("admin.usersList")
                        }, {
                          default: withCtx(() => [
                            createVNode(VSpacer),
                            unref(search).show ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createVNode(VSelect, {
                                modelValue: unref(options).column,
                                "onUpdate:modelValue": ($event) => unref(options).column = $event,
                                class: "search-columns mr-3",
                                items: _ctx.$tm("admin.columns"),
                                placeholder: _ctx.$t("admin.columnSearchPlaceholder"),
                                label: "Search columns",
                                variant: "outlined",
                                density: "compact",
                                multiple: "",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder"]),
                              createVNode(VTextField, {
                                modelValue: unref(search).string,
                                "onUpdate:modelValue": [($event) => unref(search).string = $event, unref(onSearch)],
                                class: "search mr-3",
                                variant: "outlined",
                                density: "compact",
                                label: _ctx.$t("fields.search"),
                                autofocus: "",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                            ], 64)) : createCommentVNode("", true),
                            createVNode(VBtn, {
                              icon: "mdi-magnify",
                              onClick: ($event) => unref(search).show = !unref(search).show
                            }, null, 8, ["onClick"]),
                            createVNode(VBtn, {
                              icon: "mdi-account-plus",
                              onClick: ($event) => unref(modal).create = true
                            }, null, 8, ["onClick"])
                          ]),
                          _: 1
                        }, 8, ["title"])
                      ]),
                      "item.role": withCtx(({ item }) => [
                        createTextVNode(toDisplayString(_ctx.$t(`fields.roles.${item.role}`)), 1)
                      ]),
                      "item.status": withCtx(({ item }) => [
                        createTextVNode(toDisplayString(_ctx.$t(`fields.statuses.${item.status}`)), 1)
                      ]),
                      "item.actions": withCtx(({ item }) => [
                        createVNode(VIcon, {
                          small: "",
                          class: "mr-4",
                          onClick: ($event) => open(item, "update")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-pencil ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        createVNode(VIcon, {
                          small: "",
                          onClick: ($event) => open(item, "delete")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-delete ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      "footer.prepend": withCtx(() => [
                        createVNode("p", { class: "flex-grow-1 ml-4" }, toDisplayString(_ctx.$t("admin.pages")) + " " + toDisplayString(unref(options).totalPages), 1)
                      ]),
                      _: 1
                    }, 8, ["headers", "items", "page", "items-per-page", "items-per-page-text", "items-per-page-options", "items-length", "onUpdate:page", "onUpdate:sortBy", "onUpdate:itemsPerPage"]),
                    createVNode(VDialog, {
                      modelValue: unref(modal).create,
                      "onUpdate:modelValue": ($event) => unref(modal).create = $event,
                      "max-width": "500px"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_users_create, {
                          onDone: ($event) => close($event, "create")
                        }, null, 8, ["onDone"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VDialog, {
                      modelValue: unref(modal).update,
                      "onUpdate:modelValue": ($event) => unref(modal).update = $event,
                      "max-width": "500px"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_users_update, {
                          "user-data": unref(user),
                          onDone: ($event) => close($event, "update")
                        }, null, 8, ["user-data", "onDone"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VDialog, {
                      modelValue: unref(modal).delete,
                      "onUpdate:modelValue": ($event) => unref(modal).delete = $event,
                      "max-width": "500px"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_users_delete, {
                          "user-data": unref(user),
                          onDone: ($event) => close($event, "delete")
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
                title: _ctx.$t("all.titles.admin")
              }, null, 8, ["title"]),
              createVNode(VContainer, { class: "pt-6" }, {
                default: withCtx(() => [
                  createVNode(VDataTableServer, {
                    class: "elevation-1 pb2",
                    headers: _ctx.$tm("admin.headers"),
                    items: unref(users),
                    page: unref(options).page,
                    "items-per-page": unref(options).itemsPerPage,
                    "items-per-page-text": _ctx.$t("admin.itemsPerPageText"),
                    "items-per-page-options": _ctx.$tm("admin.itemsPerPageOptions"),
                    "items-length": unref(options).itemsLength,
                    "show-current-page": true,
                    "onUpdate:page": ($event) => updateOptions($event, "page"),
                    "onUpdate:sortBy": ($event) => updateOptions($event, "sortBy"),
                    "onUpdate:itemsPerPage": ($event) => updateOptions($event, "itemsPerPage")
                  }, {
                    top: withCtx(() => [
                      createVNode(VToolbar, {
                        flat: "",
                        class: "py-0",
                        title: _ctx.$t("admin.usersList")
                      }, {
                        default: withCtx(() => [
                          createVNode(VSpacer),
                          unref(search).show ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode(VSelect, {
                              modelValue: unref(options).column,
                              "onUpdate:modelValue": ($event) => unref(options).column = $event,
                              class: "search-columns mr-3",
                              items: _ctx.$tm("admin.columns"),
                              placeholder: _ctx.$t("admin.columnSearchPlaceholder"),
                              label: "Search columns",
                              variant: "outlined",
                              density: "compact",
                              multiple: "",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder"]),
                            createVNode(VTextField, {
                              modelValue: unref(search).string,
                              "onUpdate:modelValue": [($event) => unref(search).string = $event, unref(onSearch)],
                              class: "search mr-3",
                              variant: "outlined",
                              density: "compact",
                              label: _ctx.$t("fields.search"),
                              autofocus: "",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                          ], 64)) : createCommentVNode("", true),
                          createVNode(VBtn, {
                            icon: "mdi-magnify",
                            onClick: ($event) => unref(search).show = !unref(search).show
                          }, null, 8, ["onClick"]),
                          createVNode(VBtn, {
                            icon: "mdi-account-plus",
                            onClick: ($event) => unref(modal).create = true
                          }, null, 8, ["onClick"])
                        ]),
                        _: 1
                      }, 8, ["title"])
                    ]),
                    "item.role": withCtx(({ item }) => [
                      createTextVNode(toDisplayString(_ctx.$t(`fields.roles.${item.role}`)), 1)
                    ]),
                    "item.status": withCtx(({ item }) => [
                      createTextVNode(toDisplayString(_ctx.$t(`fields.statuses.${item.status}`)), 1)
                    ]),
                    "item.actions": withCtx(({ item }) => [
                      createVNode(VIcon, {
                        small: "",
                        class: "mr-4",
                        onClick: ($event) => open(item, "update")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" mdi-pencil ")
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createVNode(VIcon, {
                        small: "",
                        onClick: ($event) => open(item, "delete")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" mdi-delete ")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    "footer.prepend": withCtx(() => [
                      createVNode("p", { class: "flex-grow-1 ml-4" }, toDisplayString(_ctx.$t("admin.pages")) + " " + toDisplayString(unref(options).totalPages), 1)
                    ]),
                    _: 1
                  }, 8, ["headers", "items", "page", "items-per-page", "items-per-page-text", "items-per-page-options", "items-length", "onUpdate:page", "onUpdate:sortBy", "onUpdate:itemsPerPage"]),
                  createVNode(VDialog, {
                    modelValue: unref(modal).create,
                    "onUpdate:modelValue": ($event) => unref(modal).create = $event,
                    "max-width": "500px"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_users_create, {
                        onDone: ($event) => close($event, "create")
                      }, null, 8, ["onDone"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VDialog, {
                    modelValue: unref(modal).update,
                    "onUpdate:modelValue": ($event) => unref(modal).update = $event,
                    "max-width": "500px"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_users_update, {
                        "user-data": unref(user),
                        onDone: ($event) => close($event, "update")
                      }, null, 8, ["user-data", "onDone"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VDialog, {
                    modelValue: unref(modal).delete,
                    "onUpdate:modelValue": ($event) => unref(modal).delete = $event,
                    "max-width": "500px"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_users_delete, {
                        "user-data": unref(user),
                        onDone: ($event) => close($event, "delete")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6650cfd6"]]);

export { admin as default };
//# sourceMappingURL=admin-B00UH0VQ.mjs.map
