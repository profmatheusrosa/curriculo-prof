# Matheus Rosa — Currículo Docente

Currículo digital bilíngue de Matheus Rosa, direcionado a candidaturas para docência em Computação e Tecnologia da Informação. O site mantém leitura editorial inspirada em uma folha A4 e funciona como aplicação estática, sem backend.

## Recursos

- Alternância Português / English; a preferência fica no navegador e `?lang=en` abre diretamente em inglês.
- Tema claro/escuro.
- Botão **Imprimir / Salvar PDF**. Na caixa de impressão do navegador, escolha “Salvar como PDF”; o idioma selecionado é o que será impresso.
- Estilos próprios para impressão A4, links para os perfis públicos e referências acadêmicas sobre Transiarte.
- O conteúdo identifica a experiência de inclusão digital de 2010 como Transiarte conforme esclarecimento do titular, descrevendo apenas as tarefas documentadas.

## Desenvolvimento

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Publicação no GitHub Pages

O workflow `.github/workflows/pages.yml` compila e publica automaticamente `dist/public` no GitHub Pages a cada atualização de `main`. O site é construído com base `/curriculo-prof/`, própria de um repositório de projeto. O endereço esperado é `https://profmatheusrosa.github.io/curriculo-prof/` depois que o Pages estiver habilitado para este repositório.

A configuração pode ser consultada em **Settings → Pages**. A origem deve ser **GitHub Actions**. O workflow usa o fluxo oficial de artefato do GitHub Pages.

## Fontes e atribuição

A experiência profissional, a formação e as competências vêm do currículo original [matheus-rosa-curriculo](https://github.com/profmatheusrosa/matheus-rosa-curriculo) e de perfis ligados a ele. As experiências de Campus Online, tutoria e inclusão digital de 2010–2012 foram transcritas do currículo histórico fornecido pelo titular.

A contextualização do PROEJA-Transiarte está referenciada na própria página e se apoia no [artigo da revista HOLOS (2014)](https://www2.ifrn.edu.br/ojs/index.php/HOLOS/article/view/1972), na [dissertação disponível no Repositório Institucional da UnB](https://repositorio.unb.br/handle/10482/8657) e na [página do Fórum EJA-DF](https://forumeja.org.br/df/transiarte-proeja/). O texto separa essas fontes da descrição da experiência individual informada pelo titular.
