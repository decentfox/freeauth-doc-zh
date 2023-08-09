export default defineAppConfig({
  docus: {
    title: 'FreeAuth',
    description: '一步到位，定制您的角色权限管理中台',
    image: '/cover.png', // TODO: replace cover image
    socials: {
      github: 'decentfox/freeauth-api'
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
    }
  }
});
