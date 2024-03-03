import { useSSRContext, ref, mergeProps, withCtx, createVNode, toDisplayString, unref, createTextVNode, renderSlot } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { j as useLoginStore, o as VForm, e as VCard, g as VCardTitle, l as VBtn, n as VDivider, k as VCardText, V as VContainer, a as VRow, b as VCol, q as VTextField, s as VSelect, v as VCardActions, w as VSpacer, x as validateField, y as userSchema, z as validate, t as translate } from '../server.mjs';
import { a as apiFetch } from './paginateSchema-iCtz-bQy.mjs';

const _sfc_main$1 = {
  __name: "PageTitle",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "pt-2 pb-0" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-space-between mb-4"${_scopeId}><div class="flex-grow-1"${_scopeId}><h1 class="text-h6 mb-0"${_scopeId}>${ssrInterpolate(__props.title.toUpperCase())}</h1></div>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "d-flex justify-space-between mb-4" }, [
                createVNode("div", { class: "flex-grow-1" }, [
                  createVNode("h1", { class: "text-h6 mb-0" }, toDisplayString(__props.title.toUpperCase()), 1)
                ]),
                renderSlot(_ctx.$slots, "default")
              ]),
              createVNode(VDivider)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageTitle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "Update",
  __ssrInlineRender: true,
  props: {
    userData: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  emits: ["done"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    useLoginStore();
    const u = props.userData;
    const user = ref({
      id: u.id,
      name: u.name,
      email: u.email,
      role: u.role,
      status: u.status
    });
    const form = ref(null);
    const refreshing = ref(false);
    ref(false);
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
      const noChangesMade = Object.keys(user.value).every(
        (key) => user.value[key] === u[key]
      );
      if (noChangesMade)
        return refreshing.value = false;
      const { status, code, field } = await apiFetch("/api/users/update", {
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
                        _push4(`<div class="d-flex justify-space-between"${_scopeId3}><span class="text-h5 align-self-center"${_scopeId3}>${ssrInterpolate(_ctx.$t("users.editUser"))}</span>`);
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
                            createVNode("span", { class: "text-h5 align-self-center" }, toDisplayString(_ctx.$t("users.editUser")), 1),
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
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
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
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
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
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
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
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
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
                          createVNode("span", { class: "text-h5 align-self-center" }, toDisplayString(_ctx.$t("users.editUser")), 1),
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
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
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
                        createVNode("span", { class: "text-h5 align-self-center" }, toDisplayString(_ctx.$t("users.editUser")), 1),
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
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/users/Update.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, __nuxt_component_0 as a };
//# sourceMappingURL=Update-BFo6vTep.mjs.map
