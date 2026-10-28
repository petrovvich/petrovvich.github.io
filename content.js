// All resume content. Edit text here; app.js only renders it.
// Empty contact values are hidden on the page.

// Month the content was last revised; shown in the footer.
const UPDATED = "2026-10";

const SITE_URL = "https://petrovvich.github.io/";

const CONTACTS = {
  email: "alexromantrue@gmail.com",
  telegram: "petrovwich",
  linkedin: "", // full profile URL, e.g. https://www.linkedin.com/in/...
  github: "petrovvich", // GitHub login
  habr: "petrovvich",   // Habr login
  channel: "javaminds", // Telegram channel
};

// Shared facts: dates, which jobs sit on the credit risk platform, stack lists.
const JOBS = [
  {
    id: "4finance", from: "2025-06", to: null, thread: true,
    site: "https://www.4finance.com/", // company website URL
    stack: "Java 25, Kotlin, Spring Boot 4, Hibernate/JPA, PostgreSQL, MySQL, RabbitMQ, Hazelcast, Infinispan, BPMN, React, TypeScript, Kubernetes (RKE2, Rancher), Helm, GitLab CI, Jib, Keycloak, Prometheus, Grafana, Vector, Parseable, Trivy, Backstage, MCP, AI agents, RAG",
  },
  {
    id: "raif", from: "2024-03", to: "2025-05", thread: false,
    site: "https://www.raiffeisen.ru/", // company website URL
    stack: "Java, Kotlin, Spring Boot, Hibernate, PostgreSQL, Jasper Reports, Docker, Kubernetes",
  },
  {
    id: "cats", from: "2021-08", to: "2024-02", thread: false,
    site: "https://softwarecats.dev/en", // company website URL
    stack: "Java 8–17, Spring Boot, Spring Cloud Gateway, Eureka, MapStruct, PostgreSQL, Oracle, RabbitMQ, ActiveMQ, Hazelcast, Keycloak, OAuth2/JWT, REST, SOAP, Camunda, Hippo CMS, Docker, Kubernetes (Rancher), GitLab CI, Nexus, React, jQuery",
  },
  {
    id: "lantan", from: "2019-09", to: "2021-08", thread: false,
    site: "https://lantan.info/", // company website URL
    stack: "Java 8/11, Kotlin, Spring Boot, Spring Cloud, Camunda, Flowable, RabbitMQ, Kafka, PostgreSQL, Docker, Kubernetes, GitLab CI, Ktor, Kodein, Retrofit, Dagger 2, Flutter, React",
  },
  {
    id: "sms", from: "2016-01", to: "2019-08", thread: false,
    site: "https://www.smsfinance.ru/", // company website URL
    stack: "Java 6–8, Spring 4, Spring Boot, Hibernate, MySQL, PostgreSQL, Angular, GWT",
  },
];

const SKILLS_STACK = {
  lang: "Java 6–25, Kotlin, SQL, TypeScript",
  backend: "Spring Boot, Spring Cloud, Hibernate/JPA, MapStruct, Micronaut, Ktor, REST, SOAP, OpenAPI",
  process: "Camunda, Flowable, BPMN, custom decision engines",
  data: "PostgreSQL, MySQL, Oracle, RabbitMQ, Kafka, ActiveMQ, Hazelcast, Infinispan, Redis, MinIO, RustFS",
  infra: "Kubernetes, RKE2/Rancher, Helm, Docker, Jib, GitLab CI, Nexus, Keycloak, Linux",
  observe: "Prometheus, Grafana, ELK, Vector, Promtail, Parseable, Trivy",
  front: "React, Vaadin, Flutter, Android (Kotlin)",
};

const CONTENT = {
  en: {
    meta: {
      title: "Aleksandr Romaniuk, Full Cycle Engineer",
      description: "Full cycle engineer, 10+ years in fintech: Java backend, DevOps, credit risk and scoring platforms.",
    },
    ui: {
      pdf: "Download PDF",
      theme: "Switch light or dark theme",
      skip: "Skip to content",
      newTab: "opens in a new tab",
      ctaTitle: "Open to new opportunities",
      ctaText: "Remote work from Buenos Aires. E‑mail and Telegram get the fastest reply.",
      ctaButton: "Write an e‑mail",
      updated: "Updated",
      years: { one: "yr", other: "yrs" },
      months: { one: "mo", other: "mos" },
      summary: "Summary",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      languages: "Languages",
      present: "present",
      stack: "Stack",
      site: "Website",
      team: "Team",
      email: "Email",
      telegram: "Telegram",
      linkedin: "LinkedIn",
      github: "GitHub",
      habr: "Articles on Habr",
      channel: "Telegram channel",
    },
    name: "Aleksandr Romaniuk",
    role: "Full Cycle Engineer",
    focus: "Backend (Java), Frontend (React), DevOps, team leadership, FinTech, risk management",
    where: "Buenos Aires, Argentina (GMT−3). Open to remote work",
    summary: [
      "Full cycle engineer with 10+ years in fintech: from requirements and architecture to Java code, infrastructure, production support and team leadership. My flagship work is a risk management system that serves the business in 5 countries.",
      "I build microservices on Java, Kotlin and Spring, design decision flows, and take them all the way to production: Kubernetes, CI/CD, monitoring, incidents. I have led small and mid-sized teams, hired a lot of in-house engineers, and give talks online and in person in Buenos Aires. I write on Habr and in my own Telegram channel. Fluent with AI: I use it every day and roll it out across the company.",
    ],
    jobs: {
      "4finance": {
        company: "Digital Finance International",
        about: "International online lending group",
        title: "Senior / Lead Java Developer",
        intro: "Risk management platform: up to 10,000 requests a day, depending on the country.",
        bullets: [
          "Moved away from Camunda to an in-house solution. Business processes now run on it.",
          "Moved the platform to Java 25 and Spring Boot 4.",
          "Replaced Redis with a fault-tolerant Infinispan cluster.",
          "Moved all scoring services to Kubernetes clusters and switched deployment to GitOps with Helm.",
          "Improved observability: alerts in Prometheus Alertmanager, Grafana dashboards synced through git, logs in a single store.",
          "Launched a Backstage developer portal that publishes OpenAPI specifications and release reports, plus a service that collects Trivy vulnerability scan reports.",
          "Built and rolled out a company-wide MCP server, and introduced RAG over Confluence and GitLab.",
        ],
      },
      raif: {
        company: "Raiffeisenbank Russia",
        about: "Bank",
        title: "Java Developer",
        projects: [
          {
            name: "Internal platform that generates certificates and receipts for customers",
            team: "15 backend and 5 frontend developers, 5 analysts, 3 QA, tech lead, DevOps",
            bullets: [
              "Turned business needs into requirements together with analysts.",
              "Designed the architecture with the team and the tech lead.",
              "Built microservices and document templates on Jasper Reports.",
              "Integrated with external systems: data buses and file storage.",
              "Reviewed code, deployed services, handled incidents and support.",
            ],
          },
        ],
      },
      cats: {
        company: "Software Cats",
        about: "Custom software development",
        title: "Lead Java Developer",
        intro: "Besides development: requirements gathering, hiring and onboarding Java developers, performance reviews, internal tech talks.",
        projects: [
          {
            name: "Platform connecting utility providers and property management companies",
            team: "20+ people: architects, analysts, QA, developers",
            bullets: [
              "Led a team of 3 developers: analysed customer requirements, split tasks, reviewed code.",
              "Extended utility billing processing: SOAP intake from external systems, conversion to the internal format, enrichment from the database and other services over RabbitMQ, hand-off to storage over SOAP and RabbitMQ.",
              "Chose and justified technical solutions and supported them in production.",
              "<span class=\"result\">Built a shared logging library: logging defects dropped to zero.</span>",
              "<span class=\"result\">Automated customer notifications that staff used to fill in by hand, saving thousands of person-hours.</span>",
            ],
          },
          {
            name: "B2B portal for HoReCa orders and logistics",
            team: "2 backend and 2 frontend developers, architect, 2 analysts, QA, PM, DevOps",
            bullets: [
              "Built the portal's backend microservices.",
              "Integrated with Keycloak, an enterprise service bus over ActiveMQ and S3 storage.",
              "Set up CI/CD, logging and observability.",
            ],
          },
          {
            name: "Digital textbook platform for secondary schools",
            team: "2 Java developers, QA, DevOps",
            bullets: [
              "Did the initial analysis, agreed the MVP with the customer and estimated the project.",
              "Split tasks across the team and tracked delivery; built the base module structure.",
              "Set up GitLab, Nexus and Keycloak, CI/CD and integrations (mail, FTP).",
            ],
          },
          {
            name: "Shorter projects",
            bullets: [
              "Jira plugin (Java 8 backend, jQuery frontend) prepared for the Atlassian Marketplace.",
              "Adapters that unify work with Camunda and Artemis for an insurer's digital platform.",
              "Plugin that reads fiscal data from cash registers and sends it to the backend.",
              "Backend of a major mobile operator's customer app: new features, refactoring, cross-team integrations.",
            ],
          },
        ],
      },
      lantan: {
        company: "Lantan",
        about: "Custom software development",
        title: "Java Developer",
        projects: [
          {
            name: "Credit risk and scoring platform, 30+ microservices",
            team: "2 Java developers, DevOps, QA",
            bullets: [
              "Built microservices and BPMN processes on Camunda and Flowable, including 4 services from scratch for 3 countries.",
              "Migrated the codebase from Java to Kotlin and between Java 6 and 11.",
              "Took decision flows from analysis to production: Docker images, Kubernetes deployments, monitoring and alerting, CI pipelines.",
              "Set up Kubernetes clusters from scratch: nodes, ingresses, upgrades.",
              "<span class=\"result\">Brought the full business process to a 30-second SLA from an 80-second average, while cutting service memory use by 40% and container size by 40%.</span>",
              "<span class=\"result\">Moved releases to Kubernetes: up to 5 releases a day.</span>",
            ],
          },
          {
            name: "Android app for taxi drivers that collects orders from several aggregators",
            team: "Solo developer",
            bullets: [
              "Maintained the app and added features; extended the integration with its server.",
              "Created mobile app prototypes.",
              "<span class=\"result\">Wrote a backend emulator on Kotlin and Ktor with Firebase push notifications: features shipped twice as fast.</span>",
            ],
          },
        ],
      },
      sms: {
        company: "smsfinance",
        about: "Online microfinance lender",
        title: "Java Developer / Lead Support Engineer",
        intro: "In-house platform of the lender: accounting, scoring, client websites and apps, CRM. 30 services on 40 virtual machines, running 24/7.",
        bullets: [
          "Developed the platform, including the credit history module and the first version of the risk platform.",
          "Restored services during incidents and worked with business teams and vendors to find root causes.",
          "Onboarded and trained new developers and support engineers.",
          "<span class=\"result\">Built the support process: response time down 50%.</span>",
          "<span class=\"result\">Built the release and rollback process: 3 times fewer incidents, 20% less downtime.</span>",
          "<span class=\"result\">Automated routine support work, saving up to 50% of engineers' time on some tasks.</span>",
          "<span class=\"result\">Created the knowledge base: onboarding went from 4–5 days to 2.</span>",
        ],
      },
    },
    skills: {
      lang: "Languages",
      backend: "Backend",
      process: "Processes and decisions",
      data: "Data and messaging",
      infra: "Infrastructure",
      observe: "Observability",
      front: "Frontend and mobile",
    },
    education: "Moscow Witte University, Applied Informatics, specialist degree",
    languages: [["Russian", "native"], ["English", "B2"], ["Spanish", "B1"]],
  },

  ru: {
    meta: {
      title: "Александр Романюк, Full Cycle Engineer",
      description: "Full Cycle Engineer, более 10 лет в финтехе: Java-бэкенд, DevOps, платформы кредитного риска и скоринга.",
    },
    ui: {
      pdf: "Скачать PDF",
      theme: "Переключить светлую или темную тему",
      skip: "Перейти к содержанию",
      newTab: "откроется в новой вкладке",
      ctaTitle: "Открыт к предложениям",
      ctaText: "Удаленная работа из Буэнос-Айреса. Быстрее всего отвечаю на e‑mail и в Telegram.",
      ctaButton: "Написать на e‑mail",
      updated: "Обновлено",
      years: { one: "год", few: "года", many: "лет", other: "года" },
      months: { one: "мес.", few: "мес.", many: "мес.", other: "мес." },
      summary: "О себе",
      experience: "Опыт работы",
      skills: "Навыки",
      education: "Образование",
      languages: "Языки",
      present: "наст. время",
      stack: "Стек",
      site: "Сайт компании",
      team: "Команда",
      email: "Email",
      telegram: "Telegram",
      linkedin: "LinkedIn",
      github: "GitHub",
      habr: "Статьи на Хабре",
      channel: "Telegram-канал",
    },
    name: "Александр Романюк",
    role: "Full Cycle Engineer",
    focus: "Бэкенд (Java), Фронтенд (React), DevOps, руководство командой, FinTech, risk management",
    where: "Буэнос-Айрес, Аргентина (GMT−3). Рассматриваю удаленную работу",
    summary: [
      "Full cycle engineer, более 10 лет в финтехе: от требований и архитектуры до Java-кода, инфраструктуры, поддержки продакшена и руководства командой. Мое детище — риск-менеджмент система, обслуживающая бизнес в 5 странах.",
      "Пишу микросервисы на Java, Kotlin и Spring, проектирую процессы принятия решений и довожу их до продакшена: Kubernetes, CI/CD, мониторинг, разбор инцидентов. Руководил небольшими и средними командами, много нанимал в штат, читал и читаю доклады онлайн и офлайн в Буэнос-Айресе. Пишу на Хабр и в свой канал в Telegram. С AI на ты: активно использую его в жизни и внедряю в компании.",
    ],
    jobs: {
      "4finance": {
        company: "Digital Finance International",
        about: "Международный холдинг онлайн-кредитования",
        title: "Senior / Lead Java Developer",
        intro: "Платформа риск-менеджмента: до 10&nbsp;000 запросов в сутки в зависимости от страны.",
        bullets: [
          "Реализовал отказ от Camunda в пользу собственного решения. Бизнес-процессы переведены на него.",
          "Перевел платформу на Java 25 и Spring Boot 4.",
          "Заменил Redis отказоустойчивым кластером Infinispan.",
          "Перенес все сервисы скоринга в кластеры Kubernetes, перевел деплой на GitOps через Helm.",
          "Повысил наблюдаемость: алерты в Prometheus Alertmanager, дашборды в Grafana с синхронизацией через git, логи в едином хранилище.",
          "Запустил портал разработчиков на Backstage с публикацией OpenAPI-спецификаций и отчетов о релизах и сервис сбора отчетов сканера уязвимостей Trivy.",
          "Написал и внедрил собственный MCP-сервер для работы во всей компании, внедрил RAG на базе Confluence и GitLab.",
        ],
      },
      raif: {
        company: "Райффайзенбанк",
        about: "Банк",
        title: "Java Developer",
        projects: [
          {
            name: "Внутренняя платформа генерации справок и квитанций для клиентов",
            team: "15 бэкенд- и 5 фронтенд-разработчиков, 5 аналитиков, 3 QA, техлид, DevOps",
            bullets: [
              "Формализовал требования вместе с аналитиками.",
              "Проектировал архитектуру с командой и техлидом.",
              "Разрабатывал микросервисы и шаблоны документов на Jasper Reports.",
              "Реализовывал интеграции с внешними системами: шины данных, файловые хранилища.",
              "Проводил код-ревью, деплоил сервисы, разбирал инциденты и занимался поддержкой.",
            ],
          },
        ],
      },
      cats: {
        company: "Software Cats",
        about: "Заказная разработка",
        title: "Lead Java Developer",
        intro: "Помимо разработки: сбор требований, найм и онбординг Java-разработчиков, обратная связь и ревью сотрудников, внутренние технические лекции.",
        projects: [
          {
            name: "Платформа, связывающая поставщиков ЖКУ и управляющие компании",
            team: "20+ человек: архитекторы, аналитики, QA, разработчики",
            bullets: [
              "Руководил командой из 3 разработчиков: анализ требований заказчика, распределение задач, ревью.",
              "Расширял обработку услуг ЖКХ: прием данных из внешних систем по SOAP, преобразование во внутренний формат, обогащение из БД и других сервисов через RabbitMQ, передача на хранение по SOAP и RabbitMQ.",
              "Выбирал и обосновывал технические решения, сопровождал их в продакшене.",
              "<span class=\"result\">Сделал общую библиотеку логирования: ошибок, связанных с логированием, не осталось.</span>",
              "<span class=\"result\">Автоматизировал рассылку уведомлений клиентам, которую раньше заполняли вручную: сэкономлены тысячи человеко-часов.</span>",
            ],
          },
          {
            name: "B2B-портал заказов и логистики в сфере HoReCa",
            team: "2 бэкенд- и 2 фронтенд-разработчика, архитектор, 2 аналитика, QA, менеджер, DevOps",
            bullets: [
              "Разрабатывал микросервисы бэкенда портала.",
              "Интегрировал Keycloak, корпоративную шину на ActiveMQ и хранилище S3.",
              "Настроил CI/CD, логирование и мониторинг.",
            ],
          },
          {
            name: "Электронный учебник для общеобразовательных школ",
            team: "2 Java-разработчика, QA, DevOps",
            bullets: [
              "Провел первичную аналитику, согласовал MVP с заказчиком, оценил сроки.",
              "Распределял задачи и контролировал выполнение; разработал базовую структуру модулей.",
              "Настроил GitLab, Nexus, Keycloak, CI/CD и интеграции (почта, FTP).",
            ],
          },
          {
            name: "Короткие проекты",
            bullets: [
              "Плагин для Jira (бэкенд на Java 8, фронтенд на jQuery), подготовка к публикации в Atlassian Marketplace.",
              "Адаптеры для единообразной работы с Camunda и Artemis в цифровой платформе страховой компании.",
              "Плагин, который снимает фискальные данные с кассового оборудования и передает их на бэкенд.",
              "Бэкенд приложения крупного оператора связи: новые функции, рефакторинг, сквозные интеграции с другими командами.",
            ],
          },
        ],
      },
      lantan: {
        company: "Лантан",
        about: "Заказная разработка",
        title: "Java Developer",
        projects: [
          {
            name: "Платформа кредитного риска и скоринга, 30+ микросервисов",
            team: "2 Java-разработчика, DevOps, QA",
            bullets: [
              "Разрабатывал микросервисы и BPMN-процессы на Camunda и Flowable, в том числе 4 сервиса с нуля для 3 стран.",
              "Мигрировал кодовую базу с Java на Kotlin и между версиями Java 6–11.",
              "Доводил контуры принятия решений от аналитики до продакшена: Docker-образы, деплой в Kubernetes, мониторинг и алертинг, CI-пайплайны.",
              "Разворачивал кластеры Kubernetes с нуля: ноды, ingress, обновления.",
              "<span class=\"result\">Достиг SLA 30 секунд на весь бизнес-процесс при исходных 80 секундах в среднем, одновременно сократив потребление памяти сервисами на 40% и размер контейнеров на 40%.</span>",
              "<span class=\"result\">Перевел релизы на Kubernetes: до 5 релизов в день.</span>",
            ],
          },
          {
            name: "Android-приложение для водителей такси, собирающее заказы с разных агрегаторов",
            team: "Единственный разработчик",
            bullets: [
              "Поддерживал приложение и добавлял функциональность, расширял интеграцию с сервером.",
              "Создавал прототипы мобильных приложений.",
              "<span class=\"result\">Написал эмулятор бэкенда на Kotlin и Ktor с push-уведомлениями через Firebase: функциональность стала выходить в 2 раза быстрее.</span>",
            ],
          },
        ],
      },
      sms: {
        company: "smsfinance",
        about: "Онлайн-микрофинансовая компания",
        title: "Java Developer / ведущий инженер техподдержки",
        intro: "Собственная платформа компании: учет финансовых операций, скоринг, клиентские сайты и приложения, CRM. 30 сервисов на 40 виртуальных машинах, работа 24/7.",
        bullets: [
          "Развивал платформу, в том числе модуль кредитной истории и первую версию риск-платформы.",
          "Восстанавливал сервисы во время аварий, вместе с бизнесом и подрядчиками искал причины сбоев.",
          "Вводил в работу и обучал новых разработчиков и инженеров поддержки.",
          "<span class=\"result\">Выстроил процесс поддержки: время реакции сократилось на 50%.</span>",
          "<span class=\"result\">Выстроил процесс релизов и откатов: аварий стало в 3 раза меньше, простой сократился на 20%.</span>",
          "<span class=\"result\">Автоматизировал рутину поддержки: до 50% экономии времени инженеров на отдельных задачах.</span>",
          "<span class=\"result\">Создал базу знаний: онбординг сократился с 4–5 дней до 2.</span>",
        ],
      },
    },
    skills: {
      lang: "Языки",
      backend: "Бэкенд",
      process: "Процессы и решения",
      data: "Данные и очереди",
      infra: "Инфраструктура",
      observe: "Наблюдаемость",
      front: "Фронтенд и мобильная разработка",
    },
    education: "Московский университет им. С. Ю. Витте, прикладная информатика, специалитет",
    languages: [["Русский", "родной"], ["Английский", "B2"], ["Испанский", "B1"]],
  },

  es: {
    meta: {
      title: "Aleksandr Romaniuk, Full Cycle Engineer",
      description: "Full cycle engineer, más de 10 años en fintech: backend Java, DevOps, plataformas de riesgo crediticio y scoring.",
    },
    ui: {
      pdf: "Descargar PDF",
      theme: "Cambiar entre tema claro y oscuro",
      skip: "Ir al contenido",
      newTab: "se abre en una pestaña nueva",
      ctaTitle: "Abierto a nuevas oportunidades",
      ctaText: "Trabajo remoto desde Buenos Aires. Respondo más rápido por e‑mail y Telegram.",
      ctaButton: "Escribir un e‑mail",
      updated: "Actualizado",
      years: { one: "año", other: "años" },
      months: { one: "mes", other: "meses" },
      summary: "Resumen",
      experience: "Experiencia",
      skills: "Habilidades",
      education: "Formación",
      languages: "Idiomas",
      present: "actualidad",
      stack: "Stack",
      site: "Sitio web",
      team: "Equipo",
      email: "Email",
      telegram: "Telegram",
      linkedin: "LinkedIn",
      github: "GitHub",
      habr: "Artículos en Habr",
      channel: "Canal de Telegram",
    },
    name: "Aleksandr Romaniuk",
    role: "Full Cycle Engineer",
    focus: "Backend (Java), Frontend (React), DevOps, liderazgo de equipos, FinTech, risk management",
    where: "Buenos Aires, Argentina (GMT−3). Disponible para trabajo remoto",
    summary: [
      "Full cycle engineer con más de 10 años en fintech: desde requisitos y arquitectura hasta código Java, infraestructura, soporte en producción y liderazgo de equipos. Mi proyecto insignia es un sistema de gestión de riesgos que da servicio al negocio en 5 países.",
      "Desarrollo microservicios con Java, Kotlin y Spring, diseño flujos de decisión y los llevo hasta producción: Kubernetes, CI/CD, monitoreo, incidentes. He liderado equipos pequeños y medianos, contratado a muchos ingenieros en plantilla y doy charlas online y presenciales en Buenos Aires. Escribo en Habr y en mi canal de Telegram. Me manejo con soltura con la IA: la uso a diario y la implemento en la empresa.",
    ],
    jobs: {
      "4finance": {
        company: "Digital Finance International",
        about: "Grupo internacional de préstamos online",
        title: "Senior / Lead Java Developer",
        intro: "Plataforma de gestión de riesgos: hasta 10.000 solicitudes diarias, según el país.",
        bullets: [
          "Implementé el abandono de Camunda en favor de una solución propia. Los procesos de negocio ya corren sobre ella.",
          "Migré la plataforma a Java 25 y Spring Boot 4.",
          "Reemplacé Redis por un clúster Infinispan tolerante a fallos.",
          "Migré todos los servicios de scoring a clústeres Kubernetes y pasé el despliegue a GitOps con Helm.",
          "Mejoré la observabilidad: alertas en Prometheus Alertmanager, dashboards de Grafana sincronizados a través de git, logs en un almacenamiento único.",
          "Lancé un portal para desarrolladores en Backstage que publica especificaciones OpenAPI y reportes de releases, y un servicio que recopila los reportes del escáner de vulnerabilidades Trivy.",
          "Desarrollé e implementé un servidor MCP propio para toda la empresa e introduje RAG sobre Confluence y GitLab.",
        ],
      },
      raif: {
        company: "Raiffeisenbank Rusia",
        about: "Banco",
        title: "Java Developer",
        projects: [
          {
            name: "Plataforma interna que genera certificados y comprobantes para clientes",
            team: "15 desarrolladores backend y 5 frontend, 5 analistas, 3 QA, tech lead, DevOps",
            bullets: [
              "Formalicé requisitos junto con los analistas.",
              "Diseñé la arquitectura con el equipo y el tech lead.",
              "Desarrollé microservicios y plantillas de documentos con Jasper Reports.",
              "Integré sistemas externos: buses de datos y almacenamiento de archivos.",
              "Hice code review, despliegues, gestión de incidentes y soporte.",
            ],
          },
        ],
      },
      cats: {
        company: "Software Cats",
        about: "Desarrollo de software a medida",
        title: "Lead Java Developer",
        intro: "Además del desarrollo: relevamiento de requisitos, selección e incorporación de desarrolladores Java, evaluaciones de desempeño, charlas técnicas internas.",
        projects: [
          {
            name: "Plataforma que conecta proveedores de servicios públicos con administradoras de edificios",
            team: "Más de 20 personas: arquitectos, analistas, QA, desarrolladores",
            bullets: [
              "Lideré un equipo de 3 desarrolladores: análisis de requisitos, reparto de tareas, revisiones.",
              "Amplié el procesamiento de facturación de servicios: recepción por SOAP desde sistemas externos, conversión al formato interno, enriquecimiento desde la base de datos y otros servicios vía RabbitMQ, envío a almacenamiento por SOAP y RabbitMQ.",
              "Elegí y justifiqué soluciones técnicas y les di soporte en producción.",
              "<span class=\"result\">Creé una librería común de logging: los defectos de logging bajaron a cero.</span>",
              "<span class=\"result\">Automaticé las notificaciones a clientes que se cargaban a mano, ahorrando miles de horas-persona.</span>",
            ],
          },
          {
            name: "Portal B2B de pedidos y logística para HoReCa",
            team: "2 desarrolladores backend y 2 frontend, arquitecto, 2 analistas, QA, PM, DevOps",
            bullets: [
              "Desarrollé los microservicios backend del portal.",
              "Integré Keycloak, un bus de servicios empresarial sobre ActiveMQ y almacenamiento S3.",
              "Configuré CI/CD, logging y observabilidad.",
            ],
          },
          {
            name: "Plataforma de libros de texto digitales para escuelas secundarias",
            team: "2 desarrolladores Java, QA, DevOps",
            bullets: [
              "Hice el análisis inicial, acordé el MVP con el cliente y estimé el proyecto.",
              "Repartí tareas y seguí la entrega; construí la estructura base de los módulos.",
              "Configuré GitLab, Nexus, Keycloak, CI/CD e integraciones (correo, FTP).",
            ],
          },
          {
            name: "Proyectos cortos",
            bullets: [
              "Plugin de Jira (backend Java 8, frontend jQuery) preparado para el Atlassian Marketplace.",
              "Adaptadores que unifican el trabajo con Camunda y Artemis en la plataforma digital de una aseguradora.",
              "Plugin que lee datos fiscales de cajas registradoras y los envía al backend.",
              "Backend de la app de clientes de una gran operadora móvil: nuevas funciones, refactorización, integraciones entre equipos.",
            ],
          },
        ],
      },
      lantan: {
        company: "Lantan",
        about: "Desarrollo de software a medida",
        title: "Java Developer",
        projects: [
          {
            name: "Plataforma de riesgo crediticio y scoring, más de 30 microservicios",
            team: "2 desarrolladores Java, DevOps, QA",
            bullets: [
              "Desarrollé microservicios y procesos BPMN en Camunda y Flowable, incluidos 4 servicios desde cero para 3 países.",
              "Migré el código de Java a Kotlin y entre versiones de Java 6 a 11.",
              "Llevé flujos de decisión del análisis a producción: imágenes Docker, despliegues en Kubernetes, monitoreo y alertas, pipelines de CI.",
              "Monté clústeres Kubernetes desde cero: nodos, ingress, actualizaciones.",
              "<span class=\"result\">Llevé el proceso de negocio completo a un SLA de 30 segundos desde un promedio de 80, reduciendo a la vez un 40% el consumo de memoria y un 40% el tamaño de los contenedores.</span>",
              "<span class=\"result\">Pasé los releases a Kubernetes: hasta 5 releases por día.</span>",
            ],
          },
          {
            name: "App Android para taxistas que reúne pedidos de varios agregadores",
            team: "Único desarrollador",
            bullets: [
              "Mantuve la app y sumé funciones; amplié la integración con su servidor.",
              "Creé prototipos de apps móviles.",
              "<span class=\"result\">Escribí un emulador del backend en Kotlin y Ktor con notificaciones push de Firebase: las funciones salían el doble de rápido.</span>",
            ],
          },
        ],
      },
      sms: {
        company: "smsfinance",
        about: "Financiera de microcréditos online",
        title: "Java Developer / Lead Support Engineer",
        intro: "Plataforma propia de la financiera: contabilidad, scoring, sitios y apps para clientes, CRM. 30 servicios en 40 máquinas virtuales, funcionando 24/7.",
        bullets: [
          "Desarrollé la plataforma, incluido el módulo de historial crediticio y la primera versión de la plataforma de riesgo.",
          "Restablecí servicios durante incidentes y busqué las causas junto con las áreas de negocio y los proveedores.",
          "Incorporé y capacité a nuevos desarrolladores e ingenieros de soporte.",
          "<span class=\"result\">Armé el proceso de soporte: el tiempo de respuesta bajó un 50%.</span>",
          "<span class=\"result\">Armé el proceso de releases y rollbacks: 3 veces menos incidentes y 20% menos de caída.</span>",
          "<span class=\"result\">Automaticé tareas rutinarias de soporte, ahorrando hasta un 50% del tiempo de los ingenieros en algunas tareas.</span>",
          "<span class=\"result\">Creé la base de conocimiento: la incorporación pasó de 4–5 días a 2.</span>",
        ],
      },
    },
    skills: {
      lang: "Lenguajes",
      backend: "Backend",
      process: "Procesos y decisiones",
      data: "Datos y mensajería",
      infra: "Infraestructura",
      observe: "Observabilidad",
      front: "Frontend y móvil",
    },
    education: "Universidad Witte de Moscú, Informática Aplicada, título de especialista",
    languages: [["Ruso", "nativo"], ["Inglés", "B2"], ["Español", "B1"]],
  },
};
