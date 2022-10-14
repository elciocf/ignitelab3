# Configurar o storybook


npx sb init --builder @storybook/builder-vite --use-npm

## Para rodar: yarn storybook

instalar extensão MDX

## Definir como tema dark

dentro da pasta .storybook - criar arquivo:

manager.js


import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'

addons.setConfig({
    theme: themes.dark
})


-----------------------

preview.cjs

adicionar: 

import { themes } from "@storybook/theming";   <====

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {                       <====
    theme: themes.dark,         <====
  },                            <====
}

-------
apagar todos os exemplos (pasta stories .. stories/assests)

## Criar um componente

Text.tsx

export function Text(){
    return (
        <span className="text-gray-100">Text</span>
    )
}

------

Text.stories.tsx

import { Text } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
}

export const Default = {}


## Storybook + tailwind

É necessário importar o global.css no preview.cjs

import '../src/styles/global.css';  <== add


## Adicionando autocomplete no stories

Text.tsx

import { clsx } from 'clsx';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg',
    children: string;
}


export function Text({size = 'md', children} : TextProps){
    return (
        <span
          className={clsx(
            'text-gray-100 font-sans',
            {
              'text-xs': size === 'sm',
              'text-sm': size === 'md',
              'text-md': size === 'lg',

            }
          )}
        >
          {children}
        </span>
    )
}

----

Text.stories.tsx

import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum.'
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}
export const Small: StoryObj<TextProps> = {
   args: {
     size: 'sm'
   }  
}
export const Large: StoryObj<TextProps> = {
   args: {
     size: 'lg'
   }  
}


### Deploy no github pages

storybook deployer

yarn add @storybook/storybook-deployer -D

- Repositório deve ser git

add scripts
"deploy-storybook": "storybook-to-ghpages"

"deploy-storybook": "storybook-to-aws-s3"

-----
yarn build-storybook - gera os arquivos estaticos do storybook para deploy

add a pasta no .gitignore

`
# Storybook
storybook-static
`

-----



