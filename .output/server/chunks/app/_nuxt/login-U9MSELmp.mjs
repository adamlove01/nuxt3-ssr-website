import { _ as __nuxt_component_0 } from './nuxt-link-B8s5modA.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import { _ as _export_sfc, p as pageHead, H as useRouter$1, L as useRoute$1, u as useSessionStore, j as useLoginStore, t as translate, V as VContainer, e as VCard, g as VCardTitle, k as VCardText, o as VForm, q as VTextField, l as VBtn, F as VAlert, x as validateField, y as userSchema, z as validate } from '../server.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, withModifiers, openBlock, createBlock, createCommentVNode, isRef, useSSRContext } from 'vue';
import { a as apiFetch } from './paginateSchema-iCtz-bQy.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import '@unhead/shared';
import 'unhead';
import 'vue-router';
import 'vue-i18n';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  emits: ["banner"],
  setup(__props, { emit: __emit }) {
    useHead({ title: pageHead("signIn") });
    const router = useRouter$1();
    const route = useRoute$1();
    const session = useSessionStore();
    const login2 = useLoginStore();
    const form = ref(null);
    const refreshing = ref(false);
    const showPassword = ref(false);
    const alert = ref(null);
    const forgot = ref(false);
    const user = ref({
      email: "",
      password: ""
    });
    const rules = {};
    for (const key in user.value) {
      rules[key] = [() => validateField(key, user.value[key], userSchema)];
    }
    if (route.query.m === "registered")
      alert.value = { status: "success", title: translate("registered") };
    if (route.query.m === "unauthorized")
      alert.value = { status: "info", title: translate("unauthorized") };
    if (route.query.m === "loginError")
      alert.value = { status: "info", title: translate("loginError") };
    async function submit() {
      refreshing.value = true;
      alert.value = null;
      const [vErr, v] = await validate(user.value, userSchema);
      if (vErr)
        return refreshing.value = false;
      const { status, code, field, details } = await apiFetch("/api/login", {
        method: "POST",
        body: user.value
      });
      refreshing.value = false;
      if (["email", "password"].includes(field)) {
        forgot.value = true;
        return alert.value = { status: "error", title: translate(code, field) };
      }
      session.setBanner({ type: status, title: translate(code, field) });
      if (status !== "success")
        return;
      login2.setToken(details.token);
      login2.setUser(details.user);
      login2.setLoggedIn(true);
      return route.query.to ? router.push({ path: route.query.to }) : router.push({ path: "/" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: "bg_white_geometric pt-12",
        fluid: "",
        style: `background-image: url(/img/bg_geometric_${unref(session).theme}.jpg); background-size: cover`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              class: "mx-auto mt-6 pa-3 rounded-lg",
              elevation: "8",
              "max-width": "400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "text-h4 justify-center mb-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("login.signIn"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("login.signIn")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, {
                          ref_key: "form",
                          ref: form,
                          "validate-on": "blur lazy",
                          onSubmit: submit
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(user).email,
                                "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                variant: "outlined",
                                density: "comfortable",
                                class: "mb-3",
                                label: _ctx.$t("fields.email"),
                                rules: rules.email
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(user).password,
                                "onUpdate:modelValue": ($event) => unref(user).password = $event,
                                variant: "outlined",
                                density: "comfortable",
                                label: _ctx.$t("fields.password"),
                                autocomplete: "",
                                rules: rules.password,
                                "append-inner-icon": unref(showPassword) ? "mdi-eye-outline" : "mdi-eye-off-outline",
                                type: unref(showPassword) ? "text" : "password",
                                hint: "At least 8 characters",
                                "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword)
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                disabled: unref(refreshing),
                                loading: unref(refreshing),
                                type: "submit",
                                class: "mt-6",
                                rounded: "xl",
                                size: "x-large",
                                block: "",
                                color: "blue darken-2"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(_ctx.$t("all.buttons.signIn"))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t("all.buttons.signIn")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: unref(user).email,
                                  "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                  variant: "outlined",
                                  density: "comfortable",
                                  class: "mb-3",
                                  label: _ctx.$t("fields.email"),
                                  rules: rules.email
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                createVNode(VTextField, {
                                  modelValue: unref(user).password,
                                  "onUpdate:modelValue": ($event) => unref(user).password = $event,
                                  variant: "outlined",
                                  density: "comfortable",
                                  label: _ctx.$t("fields.password"),
                                  autocomplete: "",
                                  rules: rules.password,
                                  "append-inner-icon": unref(showPassword) ? "mdi-eye-outline" : "mdi-eye-off-outline",
                                  type: unref(showPassword) ? "text" : "password",
                                  hint: "At least 8 characters",
                                  "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules", "append-inner-icon", "type", "onClick:appendInner"]),
                                createVNode(VBtn, {
                                  disabled: unref(refreshing),
                                  loading: unref(refreshing),
                                  type: "submit",
                                  class: "mt-6",
                                  rounded: "xl",
                                  size: "x-large",
                                  block: "",
                                  color: "blue darken-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("all.buttons.signIn")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "loading"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(forgot)) {
                          _push4(ssrRenderComponent(_component_nuxt_link, { to: "/forgot-password" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="forgot mt-4 mb-0 text-center text-body-1" data-v-20fb5c7f${_scopeId4}>${ssrInterpolate(_ctx.$t("login.forgotPassword"))}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "forgot mt-4 mb-0 text-center text-body-1" }, toDisplayString(_ctx.$t("login.forgotPassword")), 1)
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
                          createVNode(VForm, {
                            ref_key: "form",
                            ref: form,
                            "validate-on": "blur lazy",
                            onSubmit: withModifiers(submit, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(user).email,
                                "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                variant: "outlined",
                                density: "comfortable",
                                class: "mb-3",
                                label: _ctx.$t("fields.email"),
                                rules: rules.email
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                              createVNode(VTextField, {
                                modelValue: unref(user).password,
                                "onUpdate:modelValue": ($event) => unref(user).password = $event,
                                variant: "outlined",
                                density: "comfortable",
                                label: _ctx.$t("fields.password"),
                                autocomplete: "",
                                rules: rules.password,
                                "append-inner-icon": unref(showPassword) ? "mdi-eye-outline" : "mdi-eye-off-outline",
                                type: unref(showPassword) ? "text" : "password",
                                hint: "At least 8 characters",
                                "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules", "append-inner-icon", "type", "onClick:appendInner"]),
                              createVNode(VBtn, {
                                disabled: unref(refreshing),
                                loading: unref(refreshing),
                                type: "submit",
                                class: "mt-6",
                                rounded: "xl",
                                size: "x-large",
                                block: "",
                                color: "blue darken-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("all.buttons.signIn")), 1)
                                ]),
                                _: 1
                              }, 8, ["disabled", "loading"])
                            ]),
                            _: 1
                          }, 512),
                          unref(forgot) ? (openBlock(), createBlock(_component_nuxt_link, {
                            key: 0,
                            to: "/forgot-password"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "forgot mt-4 mb-0 text-center text-body-1" }, toDisplayString(_ctx.$t("login.forgotPassword")), 1)
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
                    createVNode(VCardTitle, { class: "text-h4 justify-center mb-6" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("login.signIn")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VForm, {
                          ref_key: "form",
                          ref: form,
                          "validate-on": "blur lazy",
                          onSubmit: withModifiers(submit, ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: unref(user).email,
                              "onUpdate:modelValue": ($event) => unref(user).email = $event,
                              variant: "outlined",
                              density: "comfortable",
                              class: "mb-3",
                              label: _ctx.$t("fields.email"),
                              rules: rules.email
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                            createVNode(VTextField, {
                              modelValue: unref(user).password,
                              "onUpdate:modelValue": ($event) => unref(user).password = $event,
                              variant: "outlined",
                              density: "comfortable",
                              label: _ctx.$t("fields.password"),
                              autocomplete: "",
                              rules: rules.password,
                              "append-inner-icon": unref(showPassword) ? "mdi-eye-outline" : "mdi-eye-off-outline",
                              type: unref(showPassword) ? "text" : "password",
                              hint: "At least 8 characters",
                              "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules", "append-inner-icon", "type", "onClick:appendInner"]),
                            createVNode(VBtn, {
                              disabled: unref(refreshing),
                              loading: unref(refreshing),
                              type: "submit",
                              class: "mt-6",
                              rounded: "xl",
                              size: "x-large",
                              block: "",
                              color: "blue darken-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("all.buttons.signIn")), 1)
                              ]),
                              _: 1
                            }, 8, ["disabled", "loading"])
                          ]),
                          _: 1
                        }, 512),
                        unref(forgot) ? (openBlock(), createBlock(_component_nuxt_link, {
                          key: 0,
                          to: "/forgot-password"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "forgot mt-4 mb-0 text-center text-body-1" }, toDisplayString(_ctx.$t("login.forgotPassword")), 1)
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
            _push2(ssrRenderComponent(VAlert, {
              modelValue: unref(alert),
              "onUpdate:modelValue": ($event) => isRef(alert) ? alert.value = $event : null,
              variant: "elevated",
              elevation: "8",
              class: "mx-auto mt-4",
              "max-width": "400",
              closable: "",
              prominent: "",
              type: unref(alert) && unref(alert).status,
              title: unref(alert) && unref(alert).title
            }, null, _parent2, _scopeId));
            _push2(`<div class="mt-8 text-center" data-v-20fb5c7f${_scopeId}>${ssrInterpolate(_ctx.$t("login.noAccount"))} `);
            _push2(ssrRenderComponent(VBtn, {
              class: "ml-2",
              variant: "outlined",
              rounded: "xl",
              color: "blue darken-2",
              to: "/register"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("all.buttons.signUpNow"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("all.buttons.signUpNow")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(VCard, {
                class: "mx-auto mt-6 pa-3 rounded-lg",
                elevation: "8",
                "max-width": "400"
              }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "text-h4 justify-center mb-6" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("login.signIn")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VForm, {
                        ref_key: "form",
                        ref: form,
                        "validate-on": "blur lazy",
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(user).email,
                            "onUpdate:modelValue": ($event) => unref(user).email = $event,
                            variant: "outlined",
                            density: "comfortable",
                            class: "mb-3",
                            label: _ctx.$t("fields.email"),
                            rules: rules.email
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                          createVNode(VTextField, {
                            modelValue: unref(user).password,
                            "onUpdate:modelValue": ($event) => unref(user).password = $event,
                            variant: "outlined",
                            density: "comfortable",
                            label: _ctx.$t("fields.password"),
                            autocomplete: "",
                            rules: rules.password,
                            "append-inner-icon": unref(showPassword) ? "mdi-eye-outline" : "mdi-eye-off-outline",
                            type: unref(showPassword) ? "text" : "password",
                            hint: "At least 8 characters",
                            "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules", "append-inner-icon", "type", "onClick:appendInner"]),
                          createVNode(VBtn, {
                            disabled: unref(refreshing),
                            loading: unref(refreshing),
                            type: "submit",
                            class: "mt-6",
                            rounded: "xl",
                            size: "x-large",
                            block: "",
                            color: "blue darken-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("all.buttons.signIn")), 1)
                            ]),
                            _: 1
                          }, 8, ["disabled", "loading"])
                        ]),
                        _: 1
                      }, 512),
                      unref(forgot) ? (openBlock(), createBlock(_component_nuxt_link, {
                        key: 0,
                        to: "/forgot-password"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "forgot mt-4 mb-0 text-center text-body-1" }, toDisplayString(_ctx.$t("login.forgotPassword")), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VAlert, {
                modelValue: unref(alert),
                "onUpdate:modelValue": ($event) => isRef(alert) ? alert.value = $event : null,
                variant: "elevated",
                elevation: "8",
                class: "mx-auto mt-4",
                "max-width": "400",
                closable: "",
                prominent: "",
                type: unref(alert) && unref(alert).status,
                title: unref(alert) && unref(alert).title
              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "title"]),
              createVNode("div", { class: "mt-8 text-center" }, [
                createTextVNode(toDisplayString(_ctx.$t("login.noAccount")) + " ", 1),
                createVNode(VBtn, {
                  class: "ml-2",
                  variant: "outlined",
                  rounded: "xl",
                  color: "blue darken-2",
                  to: "/register"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("all.buttons.signUpNow")), 1)
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-20fb5c7f"]]);

export { login as default };
//# sourceMappingURL=login-U9MSELmp.mjs.map
