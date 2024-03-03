import { u as useHead } from './index-BabADJUJ.mjs';
import { p as pageHead, u as useSessionStore, V as VContainer, e as VCard, g as VCardTitle, k as VCardText, o as VForm, q as VTextField, E as VTextarea, l as VBtn, F as VAlert, x as validateField, z as validate, t as translate } from '../server.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, isRef, createVNode, withModifiers, useSSRContext } from 'vue';
import { m as mailSchema, a as apiFetch } from './paginateSchema-iCtz-bQy.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '@unhead/shared';
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
import 'vue-router';
import 'vue-i18n';

const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: pageHead("contactUs") });
    const session = useSessionStore();
    const emailSent = ref(false);
    const refreshing = ref(false);
    const mail = ref({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    const rules = {};
    for (const key in mail.value) {
      rules[key] = [() => validateField(key, mail.value[key], mailSchema)];
    }
    async function submit() {
      refreshing.value = true;
      const [vErr, v] = await validate(mail.value, mailSchema);
      if (vErr)
        return refreshing.value = false;
      const { status, code, field } = await apiFetch("/api/sendContactEmail", {
        method: "POST",
        body: mail.value
      });
      if (status === "success")
        emailSent.value = true;
      session.setBanner({ type: status, title: translate(code, field) });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        style: `background-image: url(/img/bg_geometric_${unref(session).theme}.jpg); background-size: cover`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, { class: "pt-8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "mx-auto mt-6 pa-3 rounded-lg",
                    elevation: "8",
                    "max-width": "500"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, { class: "text-h4 justify-center mb-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("contact.formTitle"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("contact.formTitle")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, {
                                ref: "form",
                                "validate-on": "blur lazy",
                                onSubmit: submit
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(mail).name,
                                      "onUpdate:modelValue": ($event) => unref(mail).name = $event,
                                      variant: "outlined",
                                      density: "comfortable",
                                      class: "mb-3",
                                      label: _ctx.$t("fields.name"),
                                      "prepend-inner-icon": "mdi-account-outline",
                                      rules: rules.name
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(mail).email,
                                      "onUpdate:modelValue": ($event) => unref(mail).email = $event,
                                      variant: "outlined",
                                      density: "comfortable",
                                      class: "mb-3",
                                      label: _ctx.$t("fields.email"),
                                      "prepend-inner-icon": "mdi-email-outline",
                                      rules: rules.email
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(mail).subject,
                                      "onUpdate:modelValue": ($event) => unref(mail).subject = $event,
                                      variant: "outlined",
                                      density: "comfortable",
                                      class: "mb-3",
                                      label: _ctx.$t("fields.subject"),
                                      "prepend-inner-icon": "mdi-pencil-outline",
                                      rules: rules.subject
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextarea, {
                                      modelValue: unref(mail).message,
                                      "onUpdate:modelValue": ($event) => unref(mail).message = $event,
                                      variant: "outlined",
                                      density: "comfortable",
                                      class: "mb-3",
                                      label: _ctx.$t("fields.message"),
                                      rules: rules.message
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      disabled: unref(refreshing),
                                      loading: unref(refreshing),
                                      type: "submit",
                                      class: "mt-6",
                                      rounded: "xl",
                                      size: "x-large",
                                      block: "",
                                      color: "blue darken-2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(_ctx.$t("all.buttons.send"))}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(_ctx.$t("all.buttons.send")), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VAlert, {
                                      modelValue: unref(emailSent),
                                      "onUpdate:modelValue": ($event) => isRef(emailSent) ? emailSent.value = $event : null,
                                      variant: "elevated",
                                      elevation: "8",
                                      class: "mt-6 mx-auto",
                                      closable: "",
                                      prominent: "",
                                      type: "success",
                                      title: _ctx.$t("all.alerts.emailSent")
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(mail).name,
                                        "onUpdate:modelValue": ($event) => unref(mail).name = $event,
                                        variant: "outlined",
                                        density: "comfortable",
                                        class: "mb-3",
                                        label: _ctx.$t("fields.name"),
                                        "prepend-inner-icon": "mdi-account-outline",
                                        rules: rules.name
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                      createVNode(VTextField, {
                                        modelValue: unref(mail).email,
                                        "onUpdate:modelValue": ($event) => unref(mail).email = $event,
                                        variant: "outlined",
                                        density: "comfortable",
                                        class: "mb-3",
                                        label: _ctx.$t("fields.email"),
                                        "prepend-inner-icon": "mdi-email-outline",
                                        rules: rules.email
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                      createVNode(VTextField, {
                                        modelValue: unref(mail).subject,
                                        "onUpdate:modelValue": ($event) => unref(mail).subject = $event,
                                        variant: "outlined",
                                        density: "comfortable",
                                        class: "mb-3",
                                        label: _ctx.$t("fields.subject"),
                                        "prepend-inner-icon": "mdi-pencil-outline",
                                        rules: rules.subject
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                      createVNode(VTextarea, {
                                        modelValue: unref(mail).message,
                                        "onUpdate:modelValue": ($event) => unref(mail).message = $event,
                                        variant: "outlined",
                                        density: "comfortable",
                                        class: "mb-3",
                                        label: _ctx.$t("fields.message"),
                                        rules: rules.message
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
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
                                          createTextVNode(toDisplayString(_ctx.$t("all.buttons.send")), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["disabled", "loading"]),
                                      createVNode(VAlert, {
                                        modelValue: unref(emailSent),
                                        "onUpdate:modelValue": ($event) => isRef(emailSent) ? emailSent.value = $event : null,
                                        variant: "elevated",
                                        elevation: "8",
                                        class: "mt-6 mx-auto",
                                        closable: "",
                                        prominent: "",
                                        type: "success",
                                        title: _ctx.$t("all.alerts.emailSent")
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "title"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VForm, {
                                  ref: "form",
                                  "validate-on": "blur lazy",
                                  onSubmit: withModifiers(submit, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(mail).name,
                                      "onUpdate:modelValue": ($event) => unref(mail).name = $event,
                                      variant: "outlined",
                                      density: "comfortable",
                                      class: "mb-3",
                                      label: _ctx.$t("fields.name"),
                                      "prepend-inner-icon": "mdi-account-outline",
                                      rules: rules.name
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                    createVNode(VTextField, {
                                      modelValue: unref(mail).email,
                                      "onUpdate:modelValue": ($event) => unref(mail).email = $event,
                                      variant: "outlined",
                                      density: "comfortable",
                                      class: "mb-3",
                                      label: _ctx.$t("fields.email"),
                                      "prepend-inner-icon": "mdi-email-outline",
                                      rules: rules.email
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                    createVNode(VTextField, {
                                      modelValue: unref(mail).subject,
                                      "onUpdate:modelValue": ($event) => unref(mail).subject = $event,
                                      variant: "outlined",
                                      density: "comfortable",
                                      class: "mb-3",
                                      label: _ctx.$t("fields.subject"),
                                      "prepend-inner-icon": "mdi-pencil-outline",
                                      rules: rules.subject
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                    createVNode(VTextarea, {
                                      modelValue: unref(mail).message,
                                      "onUpdate:modelValue": ($event) => unref(mail).message = $event,
                                      variant: "outlined",
                                      density: "comfortable",
                                      class: "mb-3",
                                      label: _ctx.$t("fields.message"),
                                      rules: rules.message
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
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
                                        createTextVNode(toDisplayString(_ctx.$t("all.buttons.send")), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["disabled", "loading"]),
                                    createVNode(VAlert, {
                                      modelValue: unref(emailSent),
                                      "onUpdate:modelValue": ($event) => isRef(emailSent) ? emailSent.value = $event : null,
                                      variant: "elevated",
                                      elevation: "8",
                                      class: "mt-6 mx-auto",
                                      closable: "",
                                      prominent: "",
                                      type: "success",
                                      title: _ctx.$t("all.alerts.emailSent")
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "title"])
                                  ]),
                                  _: 1
                                }, 512)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardTitle, { class: "text-h4 justify-center mb-6" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("contact.formTitle")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VForm, {
                                ref: "form",
                                "validate-on": "blur lazy",
                                onSubmit: withModifiers(submit, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(mail).name,
                                    "onUpdate:modelValue": ($event) => unref(mail).name = $event,
                                    variant: "outlined",
                                    density: "comfortable",
                                    class: "mb-3",
                                    label: _ctx.$t("fields.name"),
                                    "prepend-inner-icon": "mdi-account-outline",
                                    rules: rules.name
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                  createVNode(VTextField, {
                                    modelValue: unref(mail).email,
                                    "onUpdate:modelValue": ($event) => unref(mail).email = $event,
                                    variant: "outlined",
                                    density: "comfortable",
                                    class: "mb-3",
                                    label: _ctx.$t("fields.email"),
                                    "prepend-inner-icon": "mdi-email-outline",
                                    rules: rules.email
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                  createVNode(VTextField, {
                                    modelValue: unref(mail).subject,
                                    "onUpdate:modelValue": ($event) => unref(mail).subject = $event,
                                    variant: "outlined",
                                    density: "comfortable",
                                    class: "mb-3",
                                    label: _ctx.$t("fields.subject"),
                                    "prepend-inner-icon": "mdi-pencil-outline",
                                    rules: rules.subject
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                  createVNode(VTextarea, {
                                    modelValue: unref(mail).message,
                                    "onUpdate:modelValue": ($event) => unref(mail).message = $event,
                                    variant: "outlined",
                                    density: "comfortable",
                                    class: "mb-3",
                                    label: _ctx.$t("fields.message"),
                                    rules: rules.message
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
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
                                      createTextVNode(toDisplayString(_ctx.$t("all.buttons.send")), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["disabled", "loading"]),
                                  createVNode(VAlert, {
                                    modelValue: unref(emailSent),
                                    "onUpdate:modelValue": ($event) => isRef(emailSent) ? emailSent.value = $event : null,
                                    variant: "elevated",
                                    elevation: "8",
                                    class: "mt-6 mx-auto",
                                    closable: "",
                                    prominent: "",
                                    type: "success",
                                    title: _ctx.$t("all.alerts.emailSent")
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "title"])
                                ]),
                                _: 1
                              }, 512)
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
                    createVNode(VCard, {
                      class: "mx-auto mt-6 pa-3 rounded-lg",
                      elevation: "8",
                      "max-width": "500"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "text-h4 justify-center mb-6" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("contact.formTitle")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VForm, {
                              ref: "form",
                              "validate-on": "blur lazy",
                              onSubmit: withModifiers(submit, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(mail).name,
                                  "onUpdate:modelValue": ($event) => unref(mail).name = $event,
                                  variant: "outlined",
                                  density: "comfortable",
                                  class: "mb-3",
                                  label: _ctx.$t("fields.name"),
                                  "prepend-inner-icon": "mdi-account-outline",
                                  rules: rules.name
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                createVNode(VTextField, {
                                  modelValue: unref(mail).email,
                                  "onUpdate:modelValue": ($event) => unref(mail).email = $event,
                                  variant: "outlined",
                                  density: "comfortable",
                                  class: "mb-3",
                                  label: _ctx.$t("fields.email"),
                                  "prepend-inner-icon": "mdi-email-outline",
                                  rules: rules.email
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                createVNode(VTextField, {
                                  modelValue: unref(mail).subject,
                                  "onUpdate:modelValue": ($event) => unref(mail).subject = $event,
                                  variant: "outlined",
                                  density: "comfortable",
                                  class: "mb-3",
                                  label: _ctx.$t("fields.subject"),
                                  "prepend-inner-icon": "mdi-pencil-outline",
                                  rules: rules.subject
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                createVNode(VTextarea, {
                                  modelValue: unref(mail).message,
                                  "onUpdate:modelValue": ($event) => unref(mail).message = $event,
                                  variant: "outlined",
                                  density: "comfortable",
                                  class: "mb-3",
                                  label: _ctx.$t("fields.message"),
                                  rules: rules.message
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
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
                                    createTextVNode(toDisplayString(_ctx.$t("all.buttons.send")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "loading"]),
                                createVNode(VAlert, {
                                  modelValue: unref(emailSent),
                                  "onUpdate:modelValue": ($event) => isRef(emailSent) ? emailSent.value = $event : null,
                                  variant: "elevated",
                                  elevation: "8",
                                  class: "mt-6 mx-auto",
                                  closable: "",
                                  prominent: "",
                                  type: "success",
                                  title: _ctx.$t("all.alerts.emailSent")
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "title"])
                              ]),
                              _: 1
                            }, 512)
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
          } else {
            return [
              createVNode(VContainer, { class: "pt-8" }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "mx-auto mt-6 pa-3 rounded-lg",
                    elevation: "8",
                    "max-width": "500"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, { class: "text-h4 justify-center mb-6" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("contact.formTitle")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VForm, {
                            ref: "form",
                            "validate-on": "blur lazy",
                            onSubmit: withModifiers(submit, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(mail).name,
                                "onUpdate:modelValue": ($event) => unref(mail).name = $event,
                                variant: "outlined",
                                density: "comfortable",
                                class: "mb-3",
                                label: _ctx.$t("fields.name"),
                                "prepend-inner-icon": "mdi-account-outline",
                                rules: rules.name
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                              createVNode(VTextField, {
                                modelValue: unref(mail).email,
                                "onUpdate:modelValue": ($event) => unref(mail).email = $event,
                                variant: "outlined",
                                density: "comfortable",
                                class: "mb-3",
                                label: _ctx.$t("fields.email"),
                                "prepend-inner-icon": "mdi-email-outline",
                                rules: rules.email
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                              createVNode(VTextField, {
                                modelValue: unref(mail).subject,
                                "onUpdate:modelValue": ($event) => unref(mail).subject = $event,
                                variant: "outlined",
                                density: "comfortable",
                                class: "mb-3",
                                label: _ctx.$t("fields.subject"),
                                "prepend-inner-icon": "mdi-pencil-outline",
                                rules: rules.subject
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                              createVNode(VTextarea, {
                                modelValue: unref(mail).message,
                                "onUpdate:modelValue": ($event) => unref(mail).message = $event,
                                variant: "outlined",
                                density: "comfortable",
                                class: "mb-3",
                                label: _ctx.$t("fields.message"),
                                rules: rules.message
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
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
                                  createTextVNode(toDisplayString(_ctx.$t("all.buttons.send")), 1)
                                ]),
                                _: 1
                              }, 8, ["disabled", "loading"]),
                              createVNode(VAlert, {
                                modelValue: unref(emailSent),
                                "onUpdate:modelValue": ($event) => isRef(emailSent) ? emailSent.value = $event : null,
                                variant: "elevated",
                                elevation: "8",
                                class: "mt-6 mx-auto",
                                closable: "",
                                prominent: "",
                                type: "success",
                                title: _ctx.$t("all.alerts.emailSent")
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "title"])
                            ]),
                            _: 1
                          }, 512)
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
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-Em1HPz-_.mjs.map
