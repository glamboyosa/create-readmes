# Tutorial Title

## Requirements

The requirements for this project are:

- [Node.js](https://nodejs.org)
- A [tru.ID Account](https://tru.id)
- A [**provider** Account](https://linktoprovider.com)

## Getting Started

This project uses **provider's** [repo](https://providerrepourl.com) as the base in the `starter-files` branch.

Clone the `starter-files` branch via:

```
git clone -b starter-files --single-branch https://github.com/tru-ID/{repo-name}.git
```

If you're only interested in the finished code in `main` then run:

```
git clone -b main https://github.com/tru-ID/{repo=name}.git
```

Next you need to configure **provider's credentials** using your account credentials.

Copy the values of `.env.example` (alternatively, example.env) into a `.env` file via:

```
cd {cwd} && cp example.env .env
```

Open the `.env` file and configure the following values:

- `THEIR-API-KEY`: WHERE IT CAN BE [FOUND](https://whereever.com)

Next, Create a [tru.ID Account](https://tru.id)

Install the **tru.ID** CLI via:

```bash
npm i -g @tru_id/cli

```

Input your **tru.ID** credentials which can be found within the tru.ID [console](https://developer.tru.id/console)

Create a new **tru.ID** project via:

```
tru projects:create {project-name}
```

configure the following values in your `.env`:

- `TRU_ID_CLIENT`: The client ID found in the `tru.json` file in the newly created **tru.ID** project.
- `TRU_ID_SECRET`: The client secret found in the `tru.json` file in the newly created **tru.ID** project.

## Restoring Dependencies

In order to restore dependencies run:

```bash
npm install
```

## Starting Project

In order to start the project run:

```bash
npm start
```

## References

- [**tru.ID** docs](https://developer.tru.id/docs)
- [**provider's repo**](https://provider-repo.com)

## Meta

Distributed under the MIT License. See [LICENSE](https://github.com/tru-ID/{repo-name}/blob/main/LICENSE.md)

[**tru.ID**](https://tru.id)
