# Tauri Blank Application

This is the blank application for your [tauri](https://github.com/tauri-apps/tauri) project

## Requirements

To use Tauri you must have installed node js. For windows it is available on its [official website](https://nodejs.org/en/), for linux you can download the `node` packet from your packet manager

Also you must have installed Rust programming language bundle

## Installation

```sh
git clone https://github.com/krypt0nn/tauri-blank-app ./my-app
cd my-app
npm i
```

`git clone` will download a blank bundle for your project and save it in the `./my-app` directory *(`my-app` folder in the current opened in the console directory)*

`cd my-app` will move you to this downloaded bundle

`npm i` will install requirements

## Set up

In these files:

* `package.json`
* `src-tauri/Cargo.toml`
* `src-tauri/tauri.conf.json`

Change these parameters:

* name
* version
* description
* productName
* identifier

## Development

Directory `src` stores your [TypeScript](https://typescriptlang.org) and [SASS](https://sass-lang.com) code. When you run `npm run dev` command in console - they will compile to the js and css files inside `public` directory

In the `public` stored information about your application - images it uses, html pages and something you want to use. Other directories will not be available in the compiled binaries

Default application page is `public/html/index.html`

To run your application - use `npm start` command. It will automatically run `npm run dev`

To build binaries run `npm run build`

All binaries will appear in the `src-tauri/target/release` directory

## Documentation

| Name | Description |
| - | - |
| [tauri.conf.json](https://tauri.studio/en/docs/api/config) | Tauri configuration file |
| [Tauri API](https://tauri.studio/en/docs/api/js/index) | Tauri API such as `fs`, `os`, etc. Use as `const { fs } = window.__TAURI__;` |

<br>

Author: [Nikita Podvirnyy](https://vk.com/technomindlp)