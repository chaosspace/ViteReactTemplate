# ViteReactTemplate
A react template repo created by Vite

## Get started
clone the repo to your device
```
  git clone git@github.com:chaosspace/ViteReactTemplate.git
```

rename the dir and install the dependencies
```
  pnpm install
```

start up the project
```
  pnpm dev
```

### use Tailwindcss
```
  pnpm add -D tailwindcss postcss autoprefixer
  pnpm exec tailwindcss init -p
```

config your tailwindcss prettier plugin
```
  // terminal
  pnpm add -D prettier-plugin-tailwindcss

  // .prettierrc
  {
    "plugins": ["prettier-plugin-tailwindcss"]
  }
```

up to you
```
  pnpm add clsx
  // or
  pnpm add clsx tailwind-merge
```
  pnpm add clsx

## Expanding the ESLint and Prettier configuration

automatically check and prettier committed code.

## Well set router

only need to config routes file.
