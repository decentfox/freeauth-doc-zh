export default defineAppConfig({
  docus: {
    title: 'FreeAuth',
    description: '一步到位，定制您的角色权限管理中台',
    image: '/cover.png',
    socials: {
      github: 'decentfox/freeauth-api',
      freeauth: {
        label: 'English',
        icon: 'icon-park-outline:english',
        href: 'https://freeauth.decentfox.com'
      }
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'freeauth-doc',
      owner: 'decentfox',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'Powered by DecentFoX',
        href: 'https://decentfox.com'
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    }
  }
});
