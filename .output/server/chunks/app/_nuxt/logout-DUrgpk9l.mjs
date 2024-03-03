import { u as useHead } from './index-BabADJUJ.mjs';
import { p as pageHead, j as useLoginStore, u as useSessionStore, H as useRouter$1, V as VContainer, M as VProgressLinear } from '../server.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "logout",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: pageHead("signOut") });
    useLoginStore();
    useSessionStore();
    useRouter$1();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: "bg_white_geometric",
        fluid: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, { class: "pt-8 d-flex" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="ma-auto"${_scopeId2}><h1 class="text-h4 text-center mt-8"${_scopeId2}>Signing out...</h1>`);
                  _push3(ssrRenderComponent(VProgressLinear, {
                    indeterminate: "",
                    rounded: "",
                    height: "8",
                    class: "text-center mt-8"
                  }, null, _parent3, _scopeId2));
                  _push3(`</span>`);
                } else {
                  return [
                    createVNode("span", { class: "ma-auto" }, [
                      createVNode("h1", { class: "text-h4 text-center mt-8" }, "Signing out..."),
                      createVNode(VProgressLinear, {
                        indeterminate: "",
                        rounded: "",
                        height: "8",
                        class: "text-center mt-8"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, { class: "pt-8 d-flex" }, {
                default: withCtx(() => [
                  createVNode("span", { class: "ma-auto" }, [
                    createVNode("h1", { class: "text-h4 text-center mt-8" }, "Signing out..."),
                    createVNode(VProgressLinear, {
                      indeterminate: "",
                      rounded: "",
                      height: "8",
                      class: "text-center mt-8"
                    })
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/logout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=logout-DUrgpk9l.mjs.map
