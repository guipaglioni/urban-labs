# UrbanLabs — Site Institucional

Landing page institucional da **UrbanLabs**, empresa de tecnologia para gestão pública municipal. Apresenta a empresa, suas soluções para prefeituras e o produto **BigMap** — plataforma de cidade inteligente que integra saúde, educação, assistência social, farmácia, tributos e outros serviços municipais.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19 + TypeScript
- CSS puro (sem framework de UI), design responsivo

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

- `app/page.tsx` — landing page (hero, soluções, BigMap, como funciona, diferenciais, contato)
- `app/layout.tsx` — layout raiz e metadados SEO (pt-BR)
- `app/globals.css` — estilos globais da página
