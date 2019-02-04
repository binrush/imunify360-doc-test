const urls = require("./urls-mapping.js");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  base: "/",
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "Documentation",
      description: "Imunify360 documentation"
    },
    "/ru/": {
      lang: "ru",
      title: "Документация",
      description: "Документация Imunify360"
    }
  },
  theme: "cloudlinux",
  // theme: '/Users/prefer/src/cloudlinux-doc-theme', // local path

  themeConfig: {
    repo: "cloudlinux/imunify360-doc",
    editLinks: true,
    docsBranch: "dev",
    docsDir: "docs",

    translationSource: 'docs.imunify360.com',
    defaultURL: "/introduction/",
    redirectionMapping: urls,
    sidebarDepth: 2,
    logo: "/logo.svg",
    try_free: "https://www.imunify360.com/trial",
    bottomLinks: [
      {
        text: "How to",
        url: "https://cloudlinux.zendesk.com/hc/sections/115001344329-How-do-I"
      },
      {
        text: "Getting started",
        url: "https://imunify360.com/getting-started"
      },
      {
        text: "Contact support",
        url: "https://cloudlinux.zendesk.com/hc/en-us/requests/new"
      },
      { text: "Blog", url: "https://www.imunify360.com/blog" }
    ],
    social: [
      { url: "https://www.facebook.com/imunify360/", logo: "/fb.png" },
      { url: "https://twitter.com/imunify360/", logo: "/tw.png" },
      { url: "https://linkedin.com/company/cloudlinux", logo: "/in.png" },
      {
        url: "https://www.youtube.com/channel/UCcW6dDJjcy41c7Hl_5LdLZQ",
        logo: "/ytube.png"
      }
    ],
    cloudlinuxSite: "https://cloudlinux.com",
    locales: {
      "/": {
        // text for the language dorpdown title
        title: "Language",
        // text for the language dropdown
        selectText: "En",
        // label for this locale in the language dropdown
        label: "English",
        // text for the edit-on-github link
        editLinkText: "Edit this page",
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},

        sidebar: [
          {
            title: "Contents",
            collapsable: false,
            children: [
              "/introduction/",
              "/terminology/",
              "/billing/",
              "/installation/",
              "/ids_integration/",
              "/backup_providers_integration/",
              "/localization/",
              "/captcha/",
              "/dashboard/",
              "/hosting_panels_specific_settin/",
              "/config_file_description/",
              "/command_line_interface/",
              "/uninstall/",
              "/faq_and_known_issues/",
              "/whmcs_plugin/"
            ]
          }
        ]
      },
      "/ru/": {
        title: "Язык",
        selectText: "Рус",
        label: "Русский",
        editLinkText: "Отредактировать",
        serviceWorker: {
          updatePopup: {
            message: "Новый контент доступен",
            buttonText: "Обновить"
          }
        },
        algolia: {},
        sidebar: [
          {
            title: "Содержание",
            collapsable: false,
            children: [
              "/ru/introduction/",
              "/ru/terminology/",
              "/ru/billing/",
              "/ru/installation/",
              "/ru/ids_integration/",
              "/ru/backup_providers_integration/",
              "/ru/localization/",
              "/ru/captcha/",
              "/ru/dashboard/",
              "/ru/hosting_panels_specific_settin/",
              "/ru/config_file_description/",
              "/ru/command_line_interface/",
              "/ru/uninstall/",
              "/ru/faq_and_known_issues/",
              "/ru/whmcs_plugin/"
            ]
          }
        ]
      }
    }
  }
};
