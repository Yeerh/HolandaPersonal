# Holanda Personal

Landing page institucional para o projeto **Holanda Personal Nutri**, com foco em captacao de alunos via WhatsApp e apresentacao de metodo, resultados, planos e beneficios.

## Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Secoes da pagina

- Hero principal com imagem do profissional
- Sobre o Holanda
- Resultados e transformacoes
- Planos e valores
- Beneficios do acompanhamento
- CTA final com acesso ao WhatsApp

## Como rodar localmente

```bash
npm install
npm run dev
```

Aplicacao local:

```text
http://localhost:5173
```

## Build de producao

```bash
npm run build
```

Preview local do build:

```bash
npm run preview
```

## Deploy na Vercel

O projeto ja esta preparado para deploy como app Vite estatico.

### Pela interface da Vercel

1. Importe este repositorio no painel da Vercel.
2. A Vercel deve detectar o framework como `Vite`.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Publique o projeto.

### Pela CLI da Vercel

```bash
npm install -g vercel
vercel
```

Para producao:

```bash
vercel --prod
```

## Estrutura principal

```text
src/
  assets/
  components/
  pages/
  sections/
```

## Observacoes

- A imagem principal do hero esta em `src/assets/hero-holanda.png`.
- A imagem da secao Sobre esta em `src/assets/holanda-about.jpg`.
- O link de contato do WhatsApp esta centralizado em `src/contact.ts`.
