CICD - Integração continua e entrega continua

github actions

criar pasta .github/workflows/deploy-docs.yml

name: Deploy Storybook

on: 
  push:
    branches:
      - master

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest        

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Install dependencies
        run: npm ci

      - name: Build Storybook
        run: npm run build-storybook      

      - name: Deploy Storybook
        run: npm run deploy-storybook -- --ci --existing-output-dir=storybook-static
        env:
          GH_TOKEN: ${{ github.actor }}:${{ secrets.GITHUB_TOKEN }}


-----

add no final do arquivo .storybook/main.cjs

  viteFinal: (config, {configType}) => {
     if (configType === 'PRODUCTION'){
        config.base = '/ignitelab3/'
     }

     return config
  }

----





