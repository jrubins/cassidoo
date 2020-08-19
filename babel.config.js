module.exports = {
  env: {
    test: {
      presets: [
        [
          '@babel/env',
          {
            targets: {
              node: true,
            },
          },
        ],
        '@babel/typescript',
      ],
    },
  },
}
