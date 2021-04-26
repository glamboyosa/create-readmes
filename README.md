# CREATE-READMES

`CREATE-READMES` is a Node.js CLI that adds template READMEs to new projects.

## Motivation

Dev Exp. example repos @ [**tru.ID**](https://tru.id) tend to have a somewhat consistent `README` file so I felt it necessary to automate the boilerplate away

## Tools

- Node.js
- TypeScript

## Installation

To install run:

```bash
npx @glamboyosa/create-readmes
#or
npm i -g @glamboyosa/create-readmes
#or
npm init @glamboyosa/create-readmes
```

## Getting Started

If you want to use the CLI locally, clone this repo via:

```bash
git clone https://github.com/glamboyosa/create-readmes.git
```

Restore dependencies via:

```bash
yarn
# or
npm install
```

Start the project via:

```
cd dist && npm link
```

Finally, run the command:

```bash
create-readmes
```

## Adapting for your organization

It is possible, if you're a DXer or DevRel'er you could very well be in the same position and as such need to create your own CLI tool off of this.

Detailed steps to reproduce for your organization are as follows:

- Fork the repository, clone and restore dependencies.
- Update the root package.json file, specifically `name`, `version` (set to `1.0.0`), `author` & `description`
- Follow the `Getting Started` guide in order to get it up and running.
- Head over to `src/cli.ts`, line 5, the `questions` array and update the `choices` and `default` keys to values that suit your needs.
- Head over to `templates` and update the folder names to reflect the changes in the `choices` field.
- Publish to npm via `npm publish`
