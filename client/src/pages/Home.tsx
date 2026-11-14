import { Download, ExternalLink, Github, Languages, Linkedin, Moon, Printer, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

type Language = "pt" | "en";
type Experience = { period: string; role: string; organization: string; entries: string[]; courses?: string[] };

const resumes: Record<Language, {
  pageTitle: string; skipLink: string; runningHead: string; documentIndex: string; sealLabel: string;
  toolbarLabel: string;
  role: string; profilesLabel: string; location: string; profileLabel: string; profileSummary: string;
  sections: { teaching: string; academic: string; technology: string; education: string; skills: string; languages: string; transiarte: string; sources: string };
  courseLabel: string; teachingExperiences: Experience[]; academicExperiences: Experience[];
  technologyExperiences: Experience[]; education: { degree: string; school: string; date: string }[];
  competencyAreas: { title: string; description: string }[]; language: { name: string; proficiency: string; credential: string };
  transiarte: { label: string; title: string; body: string; context: string };
  sources: { label: string; url: string }[]; footer: { description: string; updated: string };
  controls: { dark: string; light: string; print: string; language: string; hint: string };
}> = {
  pt: {
    pageTitle: "Matheus Rosa — Currículo Docente", skipLink: "Pular para o currículo",
    toolbarLabel: "Controles do currículo",
    runningHead: "MATHEUS ROSA — CURRÍCULO DOCENTE", documentIndex: "COMPUTAÇÃO · ENSINO · TECNOLOGIA",
    sealLabel: "Monograma Matheus Rosa", role: "DOCÊNCIA EM COMPUTAÇÃO E TECNOLOGIA DA INFORMAÇÃO",
    profilesLabel: "Perfis profissionais", location: "Brasília, DF", profileLabel: "PERFIL",
    profileSummary: "Professor de Tecnologia da Informação na Escola Técnica de Brasília desde 2019. Atua com Banco de Dados, Engenharia de Software, Programação Orientada a Objetos com Java e Gestão de TI, integrando fundamentos e atividades práticas. Sua trajetória reúne formação em Computação, experiência profissional em tecnologia e atuação anterior em tutoria universitária e inclusão digital.",
    sections: { teaching: "Experiência docente", academic: "Tutoria, extensão e projetos acadêmicos", technology: "Experiência profissional em tecnologia", education: "Formação acadêmica", skills: "Competências", languages: "Idiomas", transiarte: "Transiarte: ensino e inclusão digital", sources: "Fontes sobre o projeto" },
    courseLabel: "Disciplinas ministradas",
    teachingExperiences: [{ period: "2019 — atual", role: "Professor de TI", organization: "Escola Técnica de Brasília", entries: ["Integra fundamentos teóricos e atividades práticas no ensino de tecnologia da informação."], courses: ["Banco de Dados", "Engenharia de Software", "Programação Orientada a Objetos com Java", "Gestão de TI"] }],
    academicExperiences: [
      { period: "03/2012 — 08/2012", role: "Projeto Campus Online — jornal universitário", organization: "Universidade de Brasília", entries: ["Colaborou na implementação de funcionalidades e na gestão de conteúdo do site Campus Online.", "Administrou o sistema de gerenciamento de conteúdo Joomla."] },
      { period: "03/2012 — 08/2012", role: "Projeto de Inclusão Digital — voluntariado", organization: "Departamento de Educação", entries: ["Ensinou competências práticas de informática a pessoas leigas, incluindo edição de textos, navegação na internet, e-mail e mensagens instantâneas."] },
      { period: "03/2011 — 07/2011", role: "Tutor de Introdução à Ciência da Computação", organization: "Universidade de Brasília", entries: ["Preparou e corrigiu tarefas da disciplina de linguagem C.", "Criou o ambiente da disciplina e organizou conteúdos no Moodle."] },
      { period: "03/2010 — 08/2010", role: "Projeto de Inclusão Digital — Transiarte · serviço comunitário", organization: "Escola Regional", entries: ["Ensinou competências práticas de informática, incluindo uso de e-mail e edição de vídeo, abordando temas sociais."] },
    ],
    technologyExperiences: [
      { period: "2026 — atual", role: "Técnico Bancário — TI", organization: "CAIXA", entries: ["Presta suporte técnico a desenvolvedores, orientando sobre ferramentas, tecnologias e padrões de desenvolvimento adotados pela organização.", "Contribui para a padronização de práticas e soluções de software."] },
      { period: "2016 — 2026", role: "Analista de TI", organization: "Universidade de Brasília", entries: ["Atuou em desenvolvimento Java, monitoramento e manutenção de sistemas.", "Foi responsável por sites institucionais, incluindo o Portal da UnB, utilizando Joomla e WordPress.", "Participou de processos de contratação pública de TI e atuou no Departamento de Comunicação, administrando o servidor de armazenamento de mídias, banco de dados e sistemas internos."] },
      { period: "2013 — 2014", role: "Programador", organization: "Lakes Environmental · Waterloo, Canadá", entries: ["Realizou manutenção e migração de sistemas legados da área ambiental com ASP.NET, JavaScript, jQuery e Bootstrap."] },
    ],
    education: [
      { degree: "Mestrado em Ciência de Dados", school: "Universidade de Brasília", date: "Em andamento" },
      { degree: "Especialização em Gestão e Desenvolvimento de Sistemas de Informação", school: "Faculdade JK", date: "2016 — 2017" },
      { degree: "Graduação sanduíche", school: "University of Waterloo · Canadá", date: "2012 — 2013" },
      { degree: "Graduação em Computação", school: "Universidade de Brasília", date: "2009 — 2015" },
    ],
    competencyAreas: [
      { title: "Desenvolvimento de software", description: "Java, Spring Boot, APIs REST, Hibernate/JPA, JDBC, Maven, JavaScript, Angular, HTML/CSS e UML." },
      { title: "Dados e infraestrutura", description: "SQL, PostgreSQL, MySQL, Linux, Docker, Git e virtualização." },
      { title: "Práticas e gestão de TI", description: "Engenharia de Software, metodologias ágeis, ITIL e gestão de tecnologia." },
    ],
    language: { name: "Inglês", proficiency: "Avançado / fluente", credential: "TOEFL" },
    transiarte: {
      label: "Experiência de 2010 e contexto pedagógico", title: "Inclusão digital por meio da criação",
      body: "A experiência de inclusão digital em serviço comunitário numa Escola Regional (03/2010–08/2010) foi o Transiarte, conforme esclarecido pelo titular. A atividade registrada envolveu ensino de informática, e-mail e edição de vídeo, abordando temas sociais.",
      context: "Na literatura, o PROEJA-Transiarte é descrito como uma proposta de articulação entre Educação de Jovens e Adultos e Educação Profissional, com produção artística digital colaborativa e pesquisa-ação. As fontes abaixo contextualizam o projeto; os detalhes da atuação individual acima vêm do currículo histórico fornecido pelo titular.",
    },
    sources: [
      { label: "Artigo na revista HOLOS (2014)", url: "https://www2.ifrn.edu.br/ojs/index.php/HOLOS/article/view/1972" },
      { label: "Dissertação no Repositório Institucional da UnB (2009)", url: "https://repositorio.unb.br/handle/10482/8657" },
      { label: "Fórum EJA do Distrito Federal — TransiArte/PROEJA", url: "https://forumeja.org.br/df/transiarte-proeja/" },
    ],
    footer: { description: "Matheus Rosa · Currículo digital", updated: "Atualizado em novembro de 2026" },
    controls: { dark: "Modo escuro", light: "Modo claro", print: "Imprimir / Salvar PDF", language: "Alternar para inglês", hint: "Use “Imprimir / Salvar PDF” para gerar uma cópia do currículo." },
  },
  en: {
    pageTitle: "Matheus Rosa — Teaching Resume", skipLink: "Skip to resume",
    toolbarLabel: "Resume controls",
    runningHead: "MATHEUS ROSA — TEACHING RESUME", documentIndex: "COMPUTING · TEACHING · TECHNOLOGY",
    sealLabel: "Matheus Rosa monogram", role: "COMPUTING AND INFORMATION TECHNOLOGY EDUCATION",
    profilesLabel: "Professional profiles", location: "Brasília, Brazil", profileLabel: "PROFILE",
    profileSummary: "Information Technology instructor at Escola Técnica de Brasília since 2019. Teaches Database Systems, Software Engineering, Object-Oriented Programming with Java, and IT Management, integrating foundations with practical activities. His background combines a degree in Computing, professional technology experience, university tutoring, and digital inclusion work.",
    sections: { teaching: "Teaching experience", academic: "Tutoring, outreach and academic projects", technology: "Technology experience", education: "Education", skills: "Competencies", languages: "Languages", transiarte: "Transiarte: teaching and digital inclusion", sources: "Project sources" },
    courseLabel: "Courses taught",
    teachingExperiences: [{ period: "2019 — present", role: "IT Instructor", organization: "Escola Técnica de Brasília", entries: ["Integrates theoretical foundations with hands-on activities in information technology education."], courses: ["Database Systems", "Software Engineering", "Object-Oriented Programming with Java", "IT Management"] }],
    academicExperiences: [
      { period: "Mar 2012 — Aug 2012", role: "Campus Online Project — university newspaper", organization: "University of Brasília", entries: ["Collaborated on feature implementation and content management for the Campus Online website.", "Managed the Joomla content management system."] },
      { period: "Mar 2012 — Aug 2012", role: "Digital Inclusion Project — Volunteer", organization: "Department of Education", entries: ["Taught practical computer skills to laypeople, including text editing, internet browsing, email, and instant messaging."] },
      { period: "Mar 2011 — Jul 2011", role: "Tutor, Introduction to Computer Science", organization: "University of Brasília", entries: ["Prepared and corrected assignments for the C programming course.", "Created the course environment and organized materials in Moodle."] },
      { period: "Mar 2010 — Aug 2010", role: "Digital Inclusion Project — Transiarte · Community Service", organization: "Escola Regional", entries: ["Taught practical computer skills, including email and video editing, while addressing social topics."] },
    ],
    technologyExperiences: [
      { period: "2026 — present", role: "Técnico Bancário — TI (banking IT role)", organization: "CAIXA", entries: ["Provides technical support to developers and guidance on the organization’s development tools, technologies, and standards.", "Contributes to consistent software practices and solutions."] },
      { period: "2016 — 2026", role: "IT Analyst", organization: "University of Brasília", entries: ["Worked in Java development, system monitoring, and maintenance.", "Was responsible for institutional websites, including the University of Brasília portal, using Joomla and WordPress.", "Participated in public IT procurement processes and worked in the Communications Department, administering the media storage server, database, and internal systems."] },
      { period: "2013 — 2014", role: "Programmer", organization: "Lakes Environmental · Waterloo, Canada", entries: ["Maintained and migrated legacy environmental systems using ASP.NET, JavaScript, jQuery, and Bootstrap."] },
    ],
    education: [
      { degree: "Master’s Degree in Data Science", school: "University of Brasília", date: "In progress" },
      { degree: "Specialization in Information Systems Management and Development", school: "Faculdade JK", date: "2016 — 2017" },
      { degree: "Undergraduate exchange", school: "University of Waterloo · Canada", date: "2012 — 2013" },
      { degree: "Bachelor’s Degree in Computing", school: "University of Brasília", date: "2009 — 2015" },
    ],
    competencyAreas: [
      { title: "Software development", description: "Java, Spring Boot, REST APIs, Hibernate/JPA, JDBC, Maven, JavaScript, Angular, HTML/CSS, and UML." },
      { title: "Data and infrastructure", description: "SQL, PostgreSQL, MySQL, Linux, Docker, Git, and virtualization." },
      { title: "IT practice and management", description: "Software Engineering, agile methods, ITIL, and technology management." },
    ],
    language: { name: "English", proficiency: "Advanced / fluent", credential: "TOEFL" },
    transiarte: {
      label: "2010 experience and pedagogical context", title: "Digital inclusion through creative practice",
      body: "The community-service digital inclusion experience at Escola Regional (a regional school, Mar–Aug 2010) was Transiarte, as clarified by the profile owner. The recorded activity involved teaching computer skills, email, and video editing while addressing social topics.",
      context: "In the literature, PROEJA-Transiarte is described as an approach connecting Youth and Adult Education with vocational education through collaborative digital art and action research. The sources below provide project context; the individual role described above comes from the historical resume supplied by the profile owner.",
    },
    sources: [
      { label: "HOLOS journal article (2014)", url: "https://www2.ifrn.edu.br/ojs/index.php/HOLOS/article/view/1972" },
      { label: "University of Brasília institutional repository dissertation (2009)", url: "https://repositorio.unb.br/handle/10482/8657" },
      { label: "Federal District EJA Forum — TransiArte/PROEJA", url: "https://forumeja.org.br/df/transiarte-proeja/" },
    ],
    footer: { description: "Matheus Rosa · Digital resume", updated: "Updated November 2026" },
    controls: { dark: "Dark mode", light: "Light mode", print: "Print / Save PDF", language: "Switch to Portuguese", hint: "Use “Print / Save PDF” to create a copy of this resume." },
  },
};

function ThemeButton({ language }: { language: Language }) {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";
  const copy = resumes[language].controls;
  return <button type="button" className="document-tool" onClick={() => toggleTheme?.()} aria-label={dark ? copy.light : copy.dark}>{dark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}<span>{dark ? copy.light : copy.dark}</span></button>;
}

function LanguageButton({ language, onToggle }: { language: Language; onToggle: () => void }) {
  const copy = resumes[language].controls;
  return <button type="button" className="document-tool language-tool" onClick={onToggle} aria-label={copy.language} title={copy.language}>
    <Languages className="size-4" aria-hidden="true" /><span className={language === "pt" ? "language-active" : ""}>PT</span>
    <span className="language-separator" aria-hidden="true">/</span><span className={language === "en" ? "language-active" : ""}>EN</span>
  </button>;
}

function getInitialLanguage(): Language {
  const languageFromUrl = new URLSearchParams(window.location.search).get("lang");
  if (languageFromUrl === "en" || languageFromUrl === "pt") return languageFromUrl;
  try { return localStorage.getItem("resume-language") === "en" ? "en" : "pt"; } catch { return "pt"; }
}

function ExperienceList({ items, academic = false, courseLabel }: { items: Experience[]; academic?: boolean; courseLabel: string }) {
  return <div className={academic ? "academic-doc-list" : "experience-doc-list"}>
    {items.map((item) => <article key={`${item.role}-${item.period}`}>
      <div className={academic ? "academic-date" : "experience-date"}>{item.period}</div>
      <div>
        <h3>{item.role}</h3><p className="organization">{item.organization}</p>
        {item.courses && <ul className="course-list" aria-label={courseLabel}>{item.courses.map((course) => <li key={course}>{course}</li>)}</ul>}
        <ul className="experience-bullets">{item.entries.map((entry) => <li key={entry}>{entry}</li>)}</ul>
      </div>
    </article>)}
  </div>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const copy = resumes[language];
  useEffect(() => {
    try { localStorage.setItem("resume-language", language); } catch { /* Storage can be disabled; the toggle still works. */ }
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    document.title = copy.pageTitle;
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute("content", copy.profileSummary);
  }, [copy.pageTitle, copy.profileSummary, language]);

  return <div className="document-page">
    <a href="#curriculo" className="skip-link">{copy.skipLink}</a>
      <header className="document-toolbar" aria-label={copy.toolbarLabel}>
      <div className="toolbar-actions">
        <LanguageButton language={language} onToggle={() => setLanguage((current) => current === "pt" ? "en" : "pt")} />
        <ThemeButton language={language} />
        <button type="button" className="document-tool document-print" onClick={() => window.print()}><Printer className="size-4" aria-hidden="true" /><span>{copy.controls.print}</span></button>
      </div>
    </header>

    <main id="curriculo" className="resume-sheet">
      <div className="sheet-running-head"><span>{copy.runningHead}</span><div className="sheet-document-index"><span className="sheet-document-index-label">{copy.documentIndex}</span><span className="sheet-seal" aria-label={copy.sealLabel}>MR</span></div></div>
      <header className="resume-head">
        <div><p className="doc-kicker">{copy.role}</p><h1>Matheus<br /><strong>Rosa</strong></h1></div>
        <div className="head-meta"><span className="profile-meta-label">{copy.profilesLabel}</span>
          <a href="https://github.com/profmatheusrosa" target="_blank" rel="noreferrer"><Github className="meta-link-icon" aria-hidden="true" /> github.com/profmatheusrosa</a>
          <a href="https://linkedin.com/in/matheusrosabsb" target="_blank" rel="noreferrer"><Linkedin className="meta-link-icon" aria-hidden="true" /> linkedin.com/in/matheusrosabsb</a><p>{copy.location}</p>
        </div>
      </header>
      <section className="profile-summary" aria-labelledby="profile-heading"><span id="profile-heading">{copy.profileLabel}</span><p>{copy.profileSummary}</p></section>

      <section className="doc-section experience-section" id="docencia"><h2>{copy.sections.teaching}</h2><ExperienceList items={copy.teachingExperiences} courseLabel={copy.courseLabel} /></section>
      <section className="doc-section experience-section" id="tutoria-extensao"><h2>{copy.sections.academic}</h2><ExperienceList items={copy.academicExperiences} academic courseLabel={copy.courseLabel} /></section>
      <section className="doc-section experience-section" id="experiencia-tecnologia"><h2>{copy.sections.technology}</h2><ExperienceList items={copy.technologyExperiences} courseLabel={copy.courseLabel} /></section>

      <div className="resume-layout">
        <section className="doc-section" id="formacao"><h2>{copy.sections.education}</h2><div className="education-doc-list">
          {copy.education.map((item) => <article key={item.degree}><div><h3>{item.degree}</h3><p>{item.school}</p></div><time>{item.date}</time></article>)}
        </div></section>
        <section className="doc-section" id="competencias"><h2>{copy.sections.skills}</h2><div className="skill-doc-list">
          {copy.competencyAreas.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}
        </div></section>
      </div>

      <section className="doc-section transiarte-section" id="transiarte"><h2>{copy.sections.transiarte}</h2>
        <aside className="transiarte-card"><span className="transiarte-label">{copy.transiarte.label}</span><h3>{copy.transiarte.title}</h3>
          <p>{copy.transiarte.body}</p><p>{copy.transiarte.context}</p><h4>{copy.sections.sources}</h4>
          <ul className="source-links">{copy.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}<ExternalLink aria-hidden="true" /></a></li>)}</ul>
        </aside>
      </section>
      <section className="doc-section languages-section" id="idiomas"><h2>{copy.sections.languages}</h2><div className="language-document-card"><strong>{copy.language.name}</strong><span>{copy.language.proficiency}</span><small>{copy.language.credential}</small></div></section>
      <footer className="sheet-footer"><span>{copy.footer.description}</span><span>{copy.footer.updated}</span></footer>
    </main>
    <p className="screen-hint"><Download className="size-3.5" aria-hidden="true" /> {copy.controls.hint}</p>
  </div>;
}
