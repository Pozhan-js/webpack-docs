export const data = {
  "key": "v-50d92e02",
  "path": "/base/minifyHtml.html",
  "title": "html 压缩",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "contributors": [
      {
        "name": "hashMi",
        "email": "854059946@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "base/minifyHtml.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
