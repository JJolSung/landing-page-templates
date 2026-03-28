import nextConfig from 'eslint-config-next'

const eslintConfig = [
  { ignores: ['.next/**'] },
  ...nextConfig,
]

export default eslintConfig
