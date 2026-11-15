# Matheus Rosa — Currículo Docente

Currículo digital bilíngue de Matheus Rosa, direcionado a candidaturas para docência em Computação e Tecnologia da Informação. O site segue uma leitura editorial inspirada em folha A4 e funciona como aplicação estática, sem backend.

**Acessar o currículo:** [profmatheusrosa.github.io/curriculo-prof](https://profmatheusrosa.github.io/curriculo-prof/)

## Recursos

- Alternância Português / English; a preferência fica no navegador e `?lang=en` abre diretamente em inglês.
- Tema claro/escuro e layout responsivo.
- Botão **Imprimir / Salvar PDF**. Na caixa de impressão do navegador, escolha “Salvar como PDF”; o idioma selecionado é o que será impresso.
- Estilos próprios para impressão A4 e links para os perfis profissionais.
- Períodos das experiências exibidos apenas por ano, sem meses.
- A experiência de inclusão digital da Escola Regional em 2010 permanece identificada como Transiarte, conforme esclarecimento do titular; a seção explicativa final foi removida.

## Desenvolvimento

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Publicação no GitHub Pages

O workflow `.github/workflows/pages.yml` compila `dist/public` e publica no GitHub Pages após atualizações de `main`. O site usa o caminho base `/curriculo-prof/`, próprio de um repositório de projeto.

No repositório, a origem do GitHub Pages deve estar configurada como **GitHub Actions** em **Settings → Pages**. O link do currículo está no início deste README.

## Fontes e atribuição

A experiência profissional, a formação e as competências vêm do currículo original [curriculo](https://github.com/profmatheusrosa/curriculo) e de perfis ligados ao titular. As experiências de Campus Online, tutoria e inclusão digital de 2010–2012 foram transcritas do currículo histórico fornecido por ele. A descrição da experiência de 2010 limita-se às atividades documentadas, sem atribuir autoria, coordenação ou outros vínculos não comprovados.
