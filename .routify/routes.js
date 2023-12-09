
/**
 * @roxi/routify 2.18.12
 * File generated Tue Dec 05 2023 00:00:46 GMT+1100 (Australian Eastern Daylight Time)
 */

export const __version = "2.18.12"
export const __timestamp = "2023-12-04T13:00:46.519Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {
    "preload": "proximity"
  },
  "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": true,
      "file": "_reset.svelte",
      "filepath": "/example/_reset.svelte",
      "name": "_reset",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/_reset.svelte",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "_fallback.svelte",
          "filepath": "/example/_fallback.svelte",
          "name": "_fallback",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/_fallback.svelte",
          "importPath": "../src/pages/example/_fallback.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": true,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/example/_fallback",
          "id": "_example__fallback",
          "component": () => import('../src/pages/example/_fallback.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": true,
          "file": "_layout.svelte",
          "filepath": "/example/aliasing/_layout.svelte",
          "name": "_layout",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/aliasing/_layout.svelte",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "index.svelte",
              "filepath": "/example/aliasing/index.svelte",
              "name": "index",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/aliasing/index.svelte",
              "importPath": "../src/pages/example/aliasing/index.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/example/aliasing/index",
              "id": "_example_aliasing_index",
              "component": () => import('../src/pages/example/aliasing/index.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": true,
              "file": "_layout.svelte",
              "filepath": "/example/aliasing/v1.1/_layout.svelte",
              "name": "_layout",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/aliasing/v1.1/_layout.svelte",
              "children": [
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "_fallback.svelte",
                  "filepath": "/example/aliasing/v1.1/_fallback.svelte",
                  "name": "_fallback",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/aliasing/v1.1/_fallback.svelte",
                  "importPath": "../src/pages/example/aliasing/v1.1/_fallback.svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": false,
                  "isFallback": true,
                  "isPage": false,
                  "ownMeta": {},
                  "meta": {
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/example/aliasing/v1.1/_fallback",
                  "id": "_example_aliasing_v1_1__fallback",
                  "component": () => import('../src/pages/example/aliasing/v1.1/_fallback.svelte').then(m => m.default)
                },
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "feature2.svelte",
                  "filepath": "/example/aliasing/v1.1/feature2.svelte",
                  "name": "feature2",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/aliasing/v1.1/feature2.svelte",
                  "importPath": "../src/pages/example/aliasing/v1.1/feature2.svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": false,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {},
                  "meta": {
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/example/aliasing/v1.1/feature2",
                  "id": "_example_aliasing_v1_1_feature2",
                  "component": () => import('../src/pages/example/aliasing/v1.1/feature2.svelte').then(m => m.default)
                },
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "index.svelte",
                  "filepath": "/example/aliasing/v1.1/index.svelte",
                  "name": "index",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/aliasing/v1.1/index.svelte",
                  "importPath": "../src/pages/example/aliasing/v1.1/index.svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": true,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {},
                  "meta": {
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/example/aliasing/v1.1/index",
                  "id": "_example_aliasing_v1_1_index",
                  "component": () => import('../src/pages/example/aliasing/v1.1/index.svelte').then(m => m.default)
                }
              ],
              "isLayout": true,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": false,
              "importPath": "../src/pages/example/aliasing/v1.1/_layout.svelte",
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/example/aliasing/v1.1",
              "id": "_example_aliasing_v1_1__layout",
              "component": () => import('../src/pages/example/aliasing/v1.1/_layout.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": true,
              "file": "_layout.svelte",
              "filepath": "/example/aliasing/v1/_layout.svelte",
              "name": "_layout",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/aliasing/v1/_layout.svelte",
              "children": [
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "feature1.svelte",
                  "filepath": "/example/aliasing/v1/feature1.svelte",
                  "name": "feature1",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/aliasing/v1/feature1.svelte",
                  "importPath": "../src/pages/example/aliasing/v1/feature1.svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": false,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {},
                  "meta": {
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/example/aliasing/v1/feature1",
                  "id": "_example_aliasing_v1_feature1",
                  "component": () => import('../src/pages/example/aliasing/v1/feature1.svelte').then(m => m.default)
                },
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "feature2.svelte",
                  "filepath": "/example/aliasing/v1/feature2.svelte",
                  "name": "feature2",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/aliasing/v1/feature2.svelte",
                  "importPath": "../src/pages/example/aliasing/v1/feature2.svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": false,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {},
                  "meta": {
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/example/aliasing/v1/feature2",
                  "id": "_example_aliasing_v1_feature2",
                  "component": () => import('../src/pages/example/aliasing/v1/feature2.svelte').then(m => m.default)
                },
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "feature3.svelte",
                  "filepath": "/example/aliasing/v1/feature3.svelte",
                  "name": "feature3",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/aliasing/v1/feature3.svelte",
                  "importPath": "../src/pages/example/aliasing/v1/feature3.svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": false,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {},
                  "meta": {
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/example/aliasing/v1/feature3",
                  "id": "_example_aliasing_v1_feature3",
                  "component": () => import('../src/pages/example/aliasing/v1/feature3.svelte').then(m => m.default)
                },
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "index.svelte",
                  "filepath": "/example/aliasing/v1/index.svelte",
                  "name": "index",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/aliasing/v1/index.svelte",
                  "importPath": "../src/pages/example/aliasing/v1/index.svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": true,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {},
                  "meta": {
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/example/aliasing/v1/index",
                  "id": "_example_aliasing_v1_index",
                  "component": () => import('../src/pages/example/aliasing/v1/index.svelte').then(m => m.default)
                }
              ],
              "isLayout": true,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": false,
              "importPath": "../src/pages/example/aliasing/v1/_layout.svelte",
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/example/aliasing/v1",
              "id": "_example_aliasing_v1__layout",
              "component": () => import('../src/pages/example/aliasing/v1/_layout.svelte').then(m => m.default)
            }
          ],
          "isLayout": true,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "importPath": "../src/pages/example/aliasing/_layout.svelte",
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/example/aliasing",
          "id": "_example_aliasing__layout",
          "component": () => import('../src/pages/example/aliasing/_layout.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": true,
          "file": "_layout.svelte",
          "filepath": "/example/api/_layout.svelte",
          "name": "_layout",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/api/_layout.svelte",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "[showId].svelte",
              "filepath": "/example/api/[showId].svelte",
              "name": "[showId]",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/api/[showId].svelte",
              "importPath": "../src/pages/example/api/[showId].svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/example/api/:showId",
              "id": "_example_api__showId",
              "component": () => import('../src/pages/example/api/[showId].svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "index.svelte",
              "filepath": "/example/api/index.svelte",
              "name": "index",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/api/index.svelte",
              "importPath": "../src/pages/example/api/index.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/example/api/index",
              "id": "_example_api_index",
              "component": () => import('../src/pages/example/api/index.svelte').then(m => m.default)
            }
          ],
          "isLayout": true,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "importPath": "../src/pages/example/api/_layout.svelte",
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/example/api",
          "id": "_example_api__layout",
          "component": () => import('../src/pages/example/api/_layout.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": true,
          "file": "_reset.svelte",
          "filepath": "/example/app/_reset.svelte",
          "name": "_reset",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/app/_reset.svelte",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "_fallback.svelte",
              "filepath": "/example/app/_fallback.svelte",
              "name": "_fallback",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/app/_fallback.svelte",
              "importPath": "../src/pages/example/app/_fallback.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": true,
              "isPage": false,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/example/app/_fallback",
              "id": "_example_app__fallback",
              "component": () => import('../src/pages/example/app/_fallback.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "index.svelte",
              "filepath": "/example/app/index.svelte",
              "name": "index",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/app/index.svelte",
              "importPath": "../src/pages/example/app/index.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/example/app/index",
              "id": "_example_app_index",
              "component": () => import('../src/pages/example/app/index.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": true,
              "file": "_reset.svelte",
              "filepath": "/example/app/login/_reset.svelte",
              "name": "_reset",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/app/login/_reset.svelte",
              "children": [
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "index.svelte",
                  "filepath": "/example/app/login/index.svelte",
                  "name": "index",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/app/login/index.svelte",
                  "importPath": "../src/pages/example/app/login/index.svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": true,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {},
                  "meta": {
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/example/app/login/index",
                  "id": "_example_app_login_index",
                  "component": () => import('../src/pages/example/app/login/index.svelte').then(m => m.default)
                }
              ],
              "isLayout": true,
              "isReset": true,
              "isIndex": false,
              "isFallback": false,
              "isPage": false,
              "importPath": "../src/pages/example/app/login/_reset.svelte",
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/example/app/login",
              "id": "_example_app_login__reset",
              "component": () => import('../src/pages/example/app/login/_reset.svelte').then(m => m.default)
            }
          ],
          "isLayout": true,
          "isReset": true,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "importPath": "../src/pages/example/app/_reset.svelte",
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/example/app",
          "id": "_example_app__reset",
          "component": () => import('../src/pages/example/app/_reset.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/example/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/index.svelte",
          "importPath": "../src/pages/example/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/example/index",
          "id": "_example_index",
          "component": () => import('../src/pages/example/index.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": true,
          "file": "_layout.svelte",
          "filepath": "/example/layouts/_layout.svelte",
          "name": "_layout",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/layouts/_layout.svelte",
          "children": [
            {
              "isFile": true,
              "isDir": true,
              "file": "_layout.svelte",
              "filepath": "/example/layouts/child/_layout.svelte",
              "name": "_layout",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/layouts/child/_layout.svelte",
              "children": [
                {
                  "isFile": true,
                  "isDir": true,
                  "file": "_layout.svelte",
                  "filepath": "/example/layouts/child/grandchild/_layout.svelte",
                  "name": "_layout",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/layouts/child/grandchild/_layout.svelte",
                  "children": [
                    {
                      "isFile": true,
                      "isDir": false,
                      "file": "index.svelte",
                      "filepath": "/example/layouts/child/grandchild/index.svelte",
                      "name": "index",
                      "ext": "svelte",
                      "badExt": false,
                      "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/layouts/child/grandchild/index.svelte",
                      "importPath": "../src/pages/example/layouts/child/grandchild/index.svelte",
                      "isLayout": false,
                      "isReset": false,
                      "isIndex": true,
                      "isFallback": false,
                      "isPage": true,
                      "ownMeta": {},
                      "meta": {
                        "recursive": true,
                        "preload": "proximity",
                        "prerender": true
                      },
                      "path": "/example/layouts/child/grandchild/index",
                      "id": "_example_layouts_child_grandchild_index",
                      "component": () => import('../src/pages/example/layouts/child/grandchild/index.svelte').then(m => m.default)
                    }
                  ],
                  "isLayout": true,
                  "isReset": false,
                  "isIndex": false,
                  "isFallback": false,
                  "isPage": false,
                  "importPath": "../src/pages/example/layouts/child/grandchild/_layout.svelte",
                  "ownMeta": {},
                  "meta": {
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/example/layouts/child/grandchild",
                  "id": "_example_layouts_child_grandchild__layout",
                  "component": () => import('../src/pages/example/layouts/child/grandchild/_layout.svelte').then(m => m.default)
                },
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "index.svelte",
                  "filepath": "/example/layouts/child/index.svelte",
                  "name": "index",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/layouts/child/index.svelte",
                  "importPath": "../src/pages/example/layouts/child/index.svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": true,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {},
                  "meta": {
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/example/layouts/child/index",
                  "id": "_example_layouts_child_index",
                  "component": () => import('../src/pages/example/layouts/child/index.svelte').then(m => m.default)
                }
              ],
              "isLayout": true,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": false,
              "importPath": "../src/pages/example/layouts/child/_layout.svelte",
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/example/layouts/child",
              "id": "_example_layouts_child__layout",
              "component": () => import('../src/pages/example/layouts/child/_layout.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "index.svelte",
              "filepath": "/example/layouts/index.svelte",
              "name": "index",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/layouts/index.svelte",
              "importPath": "../src/pages/example/layouts/index.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/example/layouts/index",
              "id": "_example_layouts_index",
              "component": () => import('../src/pages/example/layouts/index.svelte').then(m => m.default)
            }
          ],
          "isLayout": true,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "importPath": "../src/pages/example/layouts/_layout.svelte",
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/example/layouts",
          "id": "_example_layouts__layout",
          "component": () => import('../src/pages/example/layouts/_layout.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": true,
          "file": "_layout.svelte",
          "filepath": "/example/modal/_layout.svelte",
          "name": "_layout",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/modal/_layout.svelte",
          "children": [
            {
              "isFile": true,
              "isDir": true,
              "file": "_layout.svelte",
              "filepath": "/example/modal/animated/_layout.svelte",
              "name": "_layout",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/modal/animated/_layout.svelte",
              "children": [
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "[key].svelte",
                  "filepath": "/example/modal/animated/[key].svelte",
                  "name": "[key]",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/modal/animated/[key].svelte",
                  "importPath": "../src/pages/example/modal/animated/[key].svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": false,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {},
                  "meta": {
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/example/modal/animated/:key",
                  "id": "_example_modal_animated__key",
                  "component": () => import('../src/pages/example/modal/animated/[key].svelte').then(m => m.default)
                },
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "index.svelte",
                  "filepath": "/example/modal/animated/index.svelte",
                  "name": "index",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/modal/animated/index.svelte",
                  "importPath": "../src/pages/example/modal/animated/index.svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": true,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {},
                  "meta": {
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/example/modal/animated/index",
                  "id": "_example_modal_animated_index",
                  "component": () => import('../src/pages/example/modal/animated/index.svelte').then(m => m.default)
                }
              ],
              "isLayout": true,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": false,
              "importPath": "../src/pages/example/modal/animated/_layout.svelte",
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/example/modal/animated",
              "id": "_example_modal_animated__layout",
              "component": () => import('../src/pages/example/modal/animated/_layout.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": true,
              "file": "_layout.svelte",
              "filepath": "/example/modal/basic/_layout.svelte",
              "name": "_layout",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/modal/basic/_layout.svelte",
              "children": [
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "[key].svelte",
                  "filepath": "/example/modal/basic/[key].svelte",
                  "name": "[key]",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/modal/basic/[key].svelte",
                  "importPath": "../src/pages/example/modal/basic/[key].svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": false,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {},
                  "meta": {
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/example/modal/basic/:key",
                  "id": "_example_modal_basic__key",
                  "component": () => import('../src/pages/example/modal/basic/[key].svelte').then(m => m.default)
                },
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "index.svelte",
                  "filepath": "/example/modal/basic/index.svelte",
                  "name": "index",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/modal/basic/index.svelte",
                  "importPath": "../src/pages/example/modal/basic/index.svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": true,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {},
                  "meta": {
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/example/modal/basic/index",
                  "id": "_example_modal_basic_index",
                  "component": () => import('../src/pages/example/modal/basic/index.svelte').then(m => m.default)
                }
              ],
              "isLayout": true,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": false,
              "importPath": "../src/pages/example/modal/basic/_layout.svelte",
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/example/modal/basic",
              "id": "_example_modal_basic__layout",
              "component": () => import('../src/pages/example/modal/basic/_layout.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "index.svelte",
              "filepath": "/example/modal/index.svelte",
              "name": "index",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/modal/index.svelte",
              "importPath": "../src/pages/example/modal/index.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/example/modal/index",
              "id": "_example_modal_index",
              "component": () => import('../src/pages/example/modal/index.svelte').then(m => m.default)
            }
          ],
          "isLayout": true,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "importPath": "../src/pages/example/modal/_layout.svelte",
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/example/modal",
          "id": "_example_modal__layout",
          "component": () => import('../src/pages/example/modal/_layout.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": true,
          "file": "_reset.svelte",
          "filepath": "/example/reset/_reset.svelte",
          "name": "_reset",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/reset/_reset.svelte",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "_fallback.svelte",
              "filepath": "/example/reset/_fallback.svelte",
              "name": "_fallback",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/reset/_fallback.svelte",
              "importPath": "../src/pages/example/reset/_fallback.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": true,
              "isPage": false,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/example/reset/_fallback",
              "id": "_example_reset__fallback",
              "component": () => import('../src/pages/example/reset/_fallback.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "index.svelte",
              "filepath": "/example/reset/index.svelte",
              "name": "index",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/reset/index.svelte",
              "importPath": "../src/pages/example/reset/index.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/example/reset/index",
              "id": "_example_reset_index",
              "component": () => import('../src/pages/example/reset/index.svelte').then(m => m.default)
            }
          ],
          "isLayout": true,
          "isReset": true,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "importPath": "../src/pages/example/reset/_reset.svelte",
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/example/reset",
          "id": "_example_reset__reset",
          "component": () => import('../src/pages/example/reset/_reset.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "Splash.svelte",
          "filepath": "/example/Splash.svelte",
          "name": "Splash",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/Splash.svelte",
          "importPath": "../src/pages/example/Splash.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/example/Splash",
          "id": "_example_Splash",
          "component": () => import('../src/pages/example/Splash.svelte').then(m => m.default)
        },
        {
          "isFile": false,
          "isDir": true,
          "file": "transitions",
          "filepath": "/example/transitions",
          "name": "transitions",
          "ext": "",
          "badExt": false,
          "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/transitions",
          "children": [
            {
              "isFile": true,
              "isDir": true,
              "file": "_reset.svelte",
              "filepath": "/example/transitions/tabs/_reset.svelte",
              "name": "_reset",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/transitions/tabs/_reset.svelte",
              "children": [
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "home.svelte",
                  "filepath": "/example/transitions/tabs/home.svelte",
                  "name": "home",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/transitions/tabs/home.svelte",
                  "importPath": "../src/pages/example/transitions/tabs/home.svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": false,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {
                    "index": 0
                  },
                  "meta": {
                    "index": 0,
                    "$$bundleId": "_example_transitions_tabs__reset_svelte.js",
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/example/transitions/tabs/home",
                  "id": "_example_transitions_tabs_home",
                  "component": () => import('./_example_transitions_tabs__reset_svelte.js').then(m => m._example_transitions_tabs_home)
                },
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "index.svelte",
                  "filepath": "/example/transitions/tabs/index.svelte",
                  "name": "index",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/transitions/tabs/index.svelte",
                  "importPath": "../src/pages/example/transitions/tabs/index.svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": true,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {},
                  "meta": {
                    "$$bundleId": "_example_transitions_tabs__reset_svelte.js",
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/example/transitions/tabs/index",
                  "id": "_example_transitions_tabs_index",
                  "component": () => import('./_example_transitions_tabs__reset_svelte.js').then(m => m._example_transitions_tabs_index)
                },
                {
                  "isFile": true,
                  "isDir": true,
                  "file": "_layout.svelte",
                  "filepath": "/example/transitions/tabs/feed/_layout.svelte",
                  "name": "_layout",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/transitions/tabs/feed/_layout.svelte",
                  "children": [
                    {
                      "isFile": false,
                      "isDir": true,
                      "file": "[id]",
                      "filepath": "/example/transitions/tabs/feed/[id]",
                      "name": "[id]",
                      "ext": "",
                      "badExt": false,
                      "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/transitions/tabs/feed/[id]",
                      "children": [
                        {
                          "isFile": true,
                          "isDir": false,
                          "file": "index.svelte",
                          "filepath": "/example/transitions/tabs/feed/[id]/index.svelte",
                          "name": "index",
                          "ext": "svelte",
                          "badExt": false,
                          "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/transitions/tabs/feed/[id]/index.svelte",
                          "importPath": "../src/pages/example/transitions/tabs/feed/[id]/index.svelte",
                          "isLayout": false,
                          "isReset": false,
                          "isIndex": true,
                          "isFallback": false,
                          "isPage": true,
                          "ownMeta": {},
                          "meta": {
                            "$$bundleId": "_example_transitions_tabs__reset_svelte.js",
                            "recursive": true,
                            "preload": "proximity",
                            "prerender": true
                          },
                          "path": "/example/transitions/tabs/feed/:id/index",
                          "id": "_example_transitions_tabs_feed__id_index",
                          "component": () => import('./_example_transitions_tabs__reset_svelte.js').then(m => m._example_transitions_tabs_feed__id_index)
                        }
                      ],
                      "isLayout": false,
                      "isReset": false,
                      "isIndex": false,
                      "isFallback": false,
                      "isPage": false,
                      "ownMeta": {},
                      "meta": {
                        "$$bundleId": "_example_transitions_tabs__reset_svelte.js",
                        "recursive": true,
                        "preload": "proximity",
                        "prerender": true
                      },
                      "path": "/example/transitions/tabs/feed/:id"
                    },
                    {
                      "isFile": true,
                      "isDir": false,
                      "file": "index.svelte",
                      "filepath": "/example/transitions/tabs/feed/index.svelte",
                      "name": "index",
                      "ext": "svelte",
                      "badExt": false,
                      "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/transitions/tabs/feed/index.svelte",
                      "importPath": "../src/pages/example/transitions/tabs/feed/index.svelte",
                      "isLayout": false,
                      "isReset": false,
                      "isIndex": true,
                      "isFallback": false,
                      "isPage": true,
                      "ownMeta": {},
                      "meta": {
                        "$$bundleId": "_example_transitions_tabs__reset_svelte.js",
                        "recursive": true,
                        "preload": "proximity",
                        "prerender": true
                      },
                      "path": "/example/transitions/tabs/feed/index",
                      "id": "_example_transitions_tabs_feed_index",
                      "component": () => import('./_example_transitions_tabs__reset_svelte.js').then(m => m._example_transitions_tabs_feed_index)
                    }
                  ],
                  "isLayout": true,
                  "isReset": false,
                  "isIndex": false,
                  "isFallback": false,
                  "isPage": false,
                  "importPath": "../src/pages/example/transitions/tabs/feed/_layout.svelte",
                  "ownMeta": {
                    "index": 1
                  },
                  "meta": {
                    "index": 1,
                    "$$bundleId": "_example_transitions_tabs__reset_svelte.js",
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/example/transitions/tabs/feed",
                  "id": "_example_transitions_tabs_feed__layout",
                  "component": () => import('./_example_transitions_tabs__reset_svelte.js').then(m => m._example_transitions_tabs_feed__layout)
                },
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "updates.svelte",
                  "filepath": "/example/transitions/tabs/updates.svelte",
                  "name": "updates",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/transitions/tabs/updates.svelte",
                  "importPath": "../src/pages/example/transitions/tabs/updates.svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": false,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {
                    "index": 2
                  },
                  "meta": {
                    "index": 2,
                    "$$bundleId": "_example_transitions_tabs__reset_svelte.js",
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/example/transitions/tabs/updates",
                  "id": "_example_transitions_tabs_updates",
                  "component": () => import('./_example_transitions_tabs__reset_svelte.js').then(m => m._example_transitions_tabs_updates)
                },
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "settings.svelte",
                  "filepath": "/example/transitions/tabs/settings.svelte",
                  "name": "settings",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/transitions/tabs/settings.svelte",
                  "importPath": "../src/pages/example/transitions/tabs/settings.svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": false,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {
                    "index": 3
                  },
                  "meta": {
                    "index": 3,
                    "$$bundleId": "_example_transitions_tabs__reset_svelte.js",
                    "recursive": true,
                    "preload": "proximity",
                    "prerender": true
                  },
                  "path": "/example/transitions/tabs/settings",
                  "id": "_example_transitions_tabs_settings",
                  "component": () => import('./_example_transitions_tabs__reset_svelte.js').then(m => m._example_transitions_tabs_settings)
                }
              ],
              "isLayout": true,
              "isReset": true,
              "isIndex": false,
              "isFallback": false,
              "isPage": false,
              "importPath": "../src/pages/example/transitions/tabs/_reset.svelte",
              "ownMeta": {
                "bundle": true
              },
              "meta": {
                "bundle": true,
                "$$bundleId": "_example_transitions_tabs__reset_svelte.js",
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/example/transitions/tabs",
              "id": "_example_transitions_tabs__reset",
              "component": () => import('./_example_transitions_tabs__reset_svelte.js').then(m => m._example_transitions_tabs__reset)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/example/transitions"
        },
        {
          "isFile": false,
          "isDir": true,
          "file": "widget",
          "filepath": "/example/widget",
          "name": "widget",
          "ext": "",
          "badExt": false,
          "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/widget",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "_fallback.svelte",
              "filepath": "/example/widget/_fallback.svelte",
              "name": "_fallback",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/example/widget/_fallback.svelte",
              "importPath": "../src/pages/example/widget/_fallback.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": true,
              "isPage": false,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/example/widget/_fallback",
              "id": "_example_widget__fallback",
              "component": () => import('../src/pages/example/widget/_fallback.svelte').then(m => m.default)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/example/widget"
        }
      ],
      "isLayout": true,
      "isReset": true,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../src/pages/example/_reset.svelte",
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/example",
      "id": "_example__reset",
      "component": () => import('../src/pages/example/_reset.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "workexp.svelte",
      "filepath": "/workexp.svelte",
      "name": "workexp",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/KyleTodd/Documents/Portfolio/src/pages/workexp.svelte",
      "importPath": "../src/pages/workexp.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/workexp",
      "id": "_workexp",
      "component": () => import('../src/pages/workexp.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "preload": "proximity",
    "recursive": true,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

