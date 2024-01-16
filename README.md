# Passwordless auth with Next.js, passkey 

Simple login/register example with Passage passkey authentication.

- [Passage docs](https://docs.passage.id/hosted-login/guides/auth.js-next.js)

## Configuration

Create a .env file in the root of the project with the following variables:
```
PASSAGE_ID=<generated client id via - Passage>
PASSAGE_SECRET=<generate client secret - via Passage>
PASSAGE_ISSUER=<generated issuer location - via Passage>
NEXTAUTH_SECRET=<any string used for JWT hashing>
NEXTAUTH_URL=<domain>
```


## Getting Started

First, install dependencies:

```bash
bun install
```

Then, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
