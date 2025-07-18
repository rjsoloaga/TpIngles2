const emailjs = window.emailjs || {};

const translations = {
  en: {
    fullName: "Roberto Javier Soloaga",
    homeTitle: "About Me",
    homeDesc: "I'm Javier, a backend developer with a deep passion for Python and its ecosystems. I specialize in building robust and efficient solutions, focusing on system architecture, database optimization, and API integration.",
    skillsTitle: "Skills / Tools",
    skillsList: "JavaScript, Python, HTML, CSS, etc.",
    projectsTitle: "Projects / Experience",
    projectsDesc: "Description of my projects here.",
    achievementsTitle: "Achievements / Certifications",
    achievementsDesc: "Your achievements and certifications go here.",
    resumeTitle: "Resume",
    resumeDesc: "Includes my experience, degrees and skills for the desired position.",
    downloadCV: "Download PDF",
    contactTitle: "Contact",
    softSkillsTitle: "Soft Skills",
    skill1: "Effective communication",
    skill2: "Teamwork",
    skill3: "Problem solving",
    skill4: "Time management",
    skill5: "Adaptability",
    skill6: "Proactivity",
    send: "Send",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Message",
    technologies: "Technologies:",
    project1Title: "POS System for Retail",
    project1Desc: "Point of sale system under development, aimed at small businesses, with stock management, sales, and reports.",
    project1Status: "Currently paused.",
    project2Title: "Python + Django (Cooking Blog)",
    project2Desc: "Minimalist blog created during Stage 2 of Informatorio, with CRUD for articles and login.",
    viewCode: "View code",
    project3Title: "Educational Game: Questions and Answers",
    project3Desc: "Question game with scoring, developed for the Professional Practice 1 course. Includes ranking and basic random question logic.",
    project4Title: "Data Manipulation with Python",
    project4Desc: "Simple script that downloads, converts .txt to .csv, and processes all data to calculate statistics, filter information, and generate reports.",
    project5Title: "Space Ship Game",
    project5Desc: "Space Ship game that must eliminate asteroids, developed to help my son's school work.",
    footerText: "&copy; 2025 Roberto Javier Soloaga",
    snakeInstructions: "Use arrow keys to move. Press ESC to exit.",
    gameLostMessage: "You lost! Press Ctrl+M to play again.",
    messageSentSuccess: "✅ Message sent successfully!",
    messageSentError: "❌ Error sending message. Check the console.",
    consoleLines: [
      "> loading projects...",
      "> analyzing repositories...",
      "> Python ✓",
      "> Django ✓",
      "> Pandas ✓",
      "> TKinter ✓",
      "> MySQL and SQLite ✓",
      "> JavaScript ✓",
      "> HTML ✓",
      "> CSS ✓",
      "> Projects ready to show ✨"
    ]
  },
  es: {
    fullName: "Roberto Javier Soloaga",
    homeTitle: "Sobre mí",
    homeDesc: "Soy Javier, desarrollador backend con una profunda pasión por Python y sus ecosistemas. Me especializo en construir soluciones robustas y eficientes, enfocándome en la arquitectura de sistemas, la optimización de bases de datos y la integración de APIs.",
    skillsTitle: "Habilidades / Herramientas",
    skillsList: "JavaScript, Python, HTML, CSS, etc.",
    projectsTitle: "Proyectos / Experiencia",
    projectsDesc: "Descripción de mis proyectos aquí.",
    achievementsTitle: "Logros / Certificaciones",
    achievementsDesc: "Aquí van tus logros y certificaciones.",
    resumeTitle: "Currículum",
    resumeDesc: "Incluye mi experiencia, títulos y habilidades para el cargo buscado.",
    downloadCV: "Descargar PDF",
    contactTitle: "Contacto",
    softSkillsTitle: "Habilidades Blandas",
    skill1: "Comunicación efectiva",
    skill2: "Trabajo en equipo",
    skill3: "Resolución de problemas",
    skill4: "Gestión del tiempo",
    skill5: "Adaptabilidad",
    skill6: "Proactividad",
    send: "Enviar",
    namePlaceholder: "Nombre",
    emailPlaceholder: "Email",
    messagePlaceholder: "Mensaje",
    technologies: "Tecnologías:",
    project1Title: "Sistema POS para comercio",
    project1Desc: "Sistema de punto de venta en desarrollo, orientado a pequeños comercios, con gestión de stock, ventas y reportes.",
    project1Status: "Actualmente en pausa.",
    project2Title: "Python + Django (Blog de Cocina)",
    project2Desc: "Blog minimalista creado durante la Etapa 2 del Informatorio, con CRUD de artículos y login.",
    viewCode: "Ver código",
    project3Title: "Juego educativo: preguntas y respuestas",
    project3Desc: "Juego de preguntas con puntaje, desarrollado para la materia Practica Profesionalizante 1. Incluye ranking y lógica básica de preguntas aleatorias.",
    project4Title: "Manipulación de datos con Python",
    project4Desc: "Script simple que descarga, convierte archivo .txt a .csv y procesa toda esos datos para calcular estadísticas, filtrar información y generar reportes.",
    project5Title: "Juego de Nave Espacial",
    project5Desc: "Juego de Nave Espacial que debe eliminar asteroides, desarrollado para ayudar a la tarea escolar de mi hijo.",
    footerText: "&copy; 2025 Roberto Javier Soloaga",
    snakeInstructions: "Usá las flechas para moverte. Presioná ESC para salir.",
    gameLostMessage: "¡Perdiste! Presiona Ctrl+M para volver a jugar.",
    messageSentSuccess: "✅ ¡Mensaje enviado con éxito!",
    messageSentError: "❌ Error al enviar el mensaje. Revisá la consola.",
    consoleLines: [
      "> cargando proyectos...",
      "> analizando repositorios...",
      "> Python ✓",
      "> Django ✓",
      "> Pandas ✓",
      "> TKinter ✓",
      "> MySQL y SQLite ✓",
      "> JavaScript ✓",
      "> HTML ✓",
      "> CSS ✓",
      "> Proyectos listos para mostrar ✨"
    ]
  },
  fr: {
    fullName: "Roberto Javier Soloaga",
    homeTitle: "À propos de moi",
    homeDesc: "Je suis Javier, développeur backend passionné par Python et ses écosystèmes. Je me spécialise dans la création de solutions robustes et efficaces, en me concentrant sur l'architecture des systèmes, l'optimisation des bases de données et l'intégration d'API.",
    skillsTitle: "Compétences / Outils",
    skillsList: "JavaScript, Python, HTML, CSS, etc.",
    projectsTitle: "Projets / Expérience",
    projectsDesc: "Description de mes projets ici.",
    achievementsTitle: "Réalisations / Certifications",
    achievementsDesc: "Vos réalisations et certifications ici.",
    resumeTitle: "CV",
    resumeDesc: "Comprend mon expérience, mes diplômes et mes compétences pour le poste souhaité.",
    downloadCV: "Télécharger le PDF",
    contactTitle: "Contact",
    softSkillsTitle: "Compétences non techniques",
    skill1: "Communication efficace",
    skill2: "Travail d'équipe",
    skill3: "Résolution de problèmes",
    skill4: "Gestion du temps",
    skill5: "Adaptabilité",
    skill6: "Proactivité",
    send: "Envoyer",
    namePlaceholder: "Nom",
    emailPlaceholder: "Email",
    messagePlaceholder: "Message",
    technologies: "Technologies:",
    project1Title: "Système de point de vente pour le commerce",
    project1Desc: "Système de point de vente en développement, destiné aux petites entreprises, avec gestion des stocks, des ventes et des rapports.",
    project1Status: "Actuellement en pause.",
    project2Title: "Python + Django (Blog de cuisine)",
    project2Desc: "Blog minimaliste créé lors de l'étape 2 d'Informatorio, avec CRUD pour les articles et connexion.",
    viewCode: "Voir le code",
    project3Title: "Jeu éducatif: Questions et réponses",
    project3Desc: "Jeu de questions avec score, développé pour le cours Pratique Professionnelle 1. Comprend le classement et la logique de base des questions aléatoires.",
    project4Title: "Manipulation de données avec Python",
    project4Desc: "Script simple qui télécharge, convertit .txt en .csv et traite toutes les données pour calculer des statistiques, filtrer des informations et générer des rapports.",
    project5Title: "Jeu de vaisseau spatial",
    project5Desc: "Jeu de vaisseau spatial qui doit éliminer les astéroïdes, développé pour aider le travail scolaire de mon fils.",
    footerText: "&copy; 2025 Roberto Javier Soloaga",
    snakeInstructions: "Utilisez les flèches pour vous déplacer. Appuyez sur ESC pour quitter.",
    gameLostMessage: "Vous avez perdu ! Appuyez sur Ctrl+M pour rejouer.",
    messageSentSuccess: "✅ Message envoyé avec succès !",
    messageSentError: "❌ Erreur lors de l'envoi du message. Vérifiez la console.",
    consoleLines: [
      "> cargando proyectos...",
      "> analizando repositorios...",
      "> Python ✓",
      "> Django ✓",
      "> Pandas ✓",
      "> TKinter ✓",
      "> MySQL y SQLite ✓",
      "> JavaScript ✓",
      "> HTML ✓",
      "> CSS ✓",
      "> Proyectos listos para mostrar ✨"
    ]
  },
  de: {
    fullName: "Roberto Javier Soloaga",
    homeTitle: "Über mich",
    homeDesc: "Ich bin Javier, Backend-Entwickler mit einer tiefen Leidenschaft für Python und dessen Ökosysteme. Ich spezialisiere mich auf den Aufbau robuster und effizienter Lösungen, mit Fokus auf Systemarchitektur, Datenbankoptimierung und API-Integration.",
    skillsTitle: "Fähigkeiten / Werkzeuge",
    skillsList: "JavaScript, Python, HTML, CSS, etc.",
    projectsTitle: "Projekte / Erfahrung",
    projectsDesc: "Beschreibung meiner Projekte hier.",
    achievementsTitle: "Erfolge / Zertifizierungen",
    achievementsDesc: "Ihre Erfolge und Zertifizierungen hier.",
    resumeTitle: "Lebenslauf",
    resumeDesc: "Umfasst meine Erfahrung, Abschlüsse und Fähigkeiten für die gewünschte Position.",
    downloadCV: "PDF herunterladen",
    contactTitle: "Kontakt",
    softSkillsTitle: "Soft Skills",
    skill1: "Effektive Kommunikation",
    skill2: "Teamarbeit",
    skill3: "Problemlösung",
    skill4: "Zeitmanagement",
    skill5: "Anpassungsfähigkeit",
    skill6: "Proaktivität",
    send: "Senden",
    namePlaceholder: "Name",
    emailPlaceholder: "E-Mail",
    messagePlaceholder: "Nachricht",
    technologies: "Technologien:",
    project1Title: "POS-System für den Handel",
    project1Desc: "Point-of-Sale-System in Entwicklung, für kleine Unternehmen, mit Bestandsverwaltung, Verkäufen und Berichten.",
    project1Status: "Derzeit pausiert.",
    project2Title: "Python + Django (Kochblog)",
    project2Desc: "Minimalistischer Blog, erstellt während Stufe 2 von Informatorio, mit CRUD für Artikel und Login.",
    viewCode: "Code ansehen",
    project3Title: "Lernspiel: Fragen und Antworten",
    project3Desc: "Fragespiel mit Punktesystem, entwickelt für den Kurs Berufspraktikum 1. Beinhaltet Rangliste und grundlegende Zufallsfragenlogik.",
    project4Title: "Datenmanipulation mit Python",
    project4Desc: "Einfaches Skript, das .txt in .csv herunterlädt, konvertiert und alle Daten verarbeitet, um Statistiken zu berechnen, Informationen zu filtern und Berichte zu erstellen.",
    project5Title: "Raumschiff-Spiel",
    project5Desc: "Raumschiff-Spiel, das Asteroiden eliminieren muss, entwickelt, um die Schularbeit meines Sohnes zu unterstützen.",
    footerText: "&copy; 2025 Roberto Javier Soloaga",
    snakeInstructions: "Verwenden Sie die Pfeiltasten zur Bewegung. Drücken Sie ESC zum Beenden.",
    gameLostMessage: "Sie haben verloren! Drücken Sie Strg+M, um erneut zu spielen.",
    messageSentSuccess: "✅ Nachricht erfolgreich gesendet!",
    messageSentError: "❌ Fehler beim Senden der Nachricht. Überprüfen Sie die Konsole.",
    consoleLines: [
      "> cargando proyectos...",
      "> analizando repositorios...",
      "> Python ✓",
      "> Django ✓",
      "> Pandas ✓",
      "> TKinter ✓",
      "> MySQL y SQLite ✓",
      "> JavaScript ✓",
      "> HTML ✓",
      "> CSS ✓",
      "> Proyectos listos para mostrar ✨"
    ]
  },
  it: {
    fullName: "Roberto Javier Soloaga",
    homeTitle: "Su di me",
    homeDesc: "Sono Javier, sviluppatore backend con una profonda passione per Python e i suoi ecosistemi. Mi specializzo nella creazione di soluzioni robuste ed efficienti, concentrandomi sull'architettura dei sistemi, l'ottimizzazione dei database e l'integrazione delle API.",
    skillsTitle: "Competenze / Strumenti",
    skillsList: "JavaScript, Python, HTML, CSS, ecc.",
    projectsTitle: "Progetti / Esperienza",
    projectsDesc: "Descrizione dei miei progetti qui.",
    achievementsTitle: "Risultati / Certificazioni",
    achievementsDesc: "I tuoi risultati e certificazioni qui.",
    resumeTitle: "Curriculum",
    resumeDesc: "Include la mia esperienza, i titoli di studio e le competenze per la posizione desiderata.",
    downloadCV: "Scarica PDF",
    contactTitle: "Contatto",
    softSkillsTitle: "Soft Skills",
    skill1: "Comunicazione efficace",
    skill2: "Lavoro di squadra",
    skill3: "Risoluzione dei problemi",
    skill4: "Gestione del tempo",
    skill5: "Adattabilità",
    skill6: "Proattività",
    send: "Invia",
    namePlaceholder: "Nome",
    emailPlaceholder: "Email",
    messagePlaceholder: "Messaggio",
    technologies: "Tecnologie:",
    project1Title: "Sistema POS per il commercio",
    project1Desc: "Sistema di punto vendita in fase di sviluppo, rivolto a piccole imprese, con gestione magazzino, vendite e reportistica.",
    project1Status: "Attualmente in pausa.",
    project2Title: "Python + Django (Blog di cucina)",
    project2Desc: "Blog minimalista creato durante la Fase 2 di Informatorio, con CRUD per articoli e login.",
    viewCode: "Vedi codice",
    project3Title: "Gioco educativo: Domande e risposte",
    project3Desc: "Gioco di domande con punteggio, sviluppato per il corso Pratica Professionalizzante 1. Include classifica e logica di base delle domande casuali.",
    project4Title: "Manipolazione dati con Python",
    project4Desc: "Semplice script che scarica, converte .txt in .csv ed elabora tutti i dati per calcolare statistiche, filtrare informazioni e generare report.",
    project5Title: "Gioco di navicella spaziale",
    project5Desc: "Gioco di navicella spaziale che deve eliminare gli asteroidi, sviluppato per aiutare il lavoro scolastico di mio figlio.",
    footerText: "&copy; 2025 Roberto Javier Soloaga",
    snakeInstructions: "Usa le frecce per muoverti. Premi ESC per uscire.",
    gameLostMessage: "Hai perso! Premi Ctrl+M per giocare di nuovo.",
    messageSentSuccess: "✅ Messaggio inviato con successo!",
    messageSentError: "❌ Errore durante l'invio del messaggio. Controlla la console.",
    consoleLines: [
      "> cargando proyectos...",
      "> analizando repositorios...",
      "> Python ✓",
      "> Django ✓",
      "> Pandas ✓",
      "> TKinter ✓",
      "> MySQL y SQLite ✓",
      "> JavaScript ✓",
      "> HTML ✓",
      "> CSS ✓",
      "> Proyectos listos para mostrar ✨"
    ]
  },
  pt: {
    fullName: "Roberto Javier Soloaga",
    homeTitle: "Sobre mim",
    homeDesc: "Sou Javier, desenvolvedor backend com uma profunda paixão por Python e seus ecossistemas. Especializo-me em construir soluções robustas e eficientes, focando na arquitetura de sistemas, otimização de bancos de dados e integração de APIs.",
    skillsTitle: "Habilidades / Ferramentas",
    skillsList: "JavaScript, Python, HTML, CSS, etc.",
    projectsTitle: "Projetos / Experiência",
    projectsDesc: "Descrição dos meus projetos aqui.",
    achievementsTitle: "Conquistas / Certificações",
    achievementsDesc: "Suas conquistas e certificações aqui.",
    resumeTitle: "Currículo",
    resumeDesc: "Inclui minha experiência, diplomas e habilidades para a posição desejada.",
    downloadCV: "Baixar PDF",
    contactTitle: "Contato",
    softSkillsTitle: "Habilidades Comportamentais",
    skill1: "Comunicação eficaz",
    skill2: "Trabalho em equipe",
    skill3: "Resolução de problemas",
    skill4: "Gestão do tempo",
    skill5: "Adaptabilidade",
    skill6: "Proatividade",
    send: "Enviar",
    namePlaceholder: "Nome",
    emailPlaceholder: "Email",
    messagePlaceholder: "Mensagem",
    technologies: "Tecnologias:",
    project1Title: "Sistema POS para comércio",
    project1Desc: "Sistema de ponto de venda em desenvolvimento, voltado para pequenos comércios, com gestão de estoque, vendas e relatórios.",
    project1Status: "Atualmente pausado.",
    project2Title: "Python + Django (Blog de Culinária)",
    project2Desc: "Blog minimalista criado durante a Etapa 2 do Informatorio, com CRUD de artigos e login.",
    viewCode: "Ver código",
    project3Title: "Jogo Educacional: Perguntas e Respostas",
    project3Desc: "Jogo de perguntas com pontuação, desenvolvido para a disciplina Prática Profissionalizante 1. Inclui ranking e lógica básica de perguntas aleatórias.",
    project4Title: "Manipulação de Dados com Python",
    project4Desc: "Script simples que baixa, converte .txt para .csv e processa todos os dados para calcular estatísticas, filtrar informações e gerar relatórios.",
    project5Title: "Jogo de Nave Espacial",
    project5Desc: "Jogo de Nave Espacial que deve eliminar asteroides, desenvolvido para ajudar no trabalho escolar do meu filho.",
    footerText: "&copy; 2025 Roberto Javier Soloaga",
    snakeInstructions: "Use as setas para mover. Pressione ESC para sair.",
    gameLostMessage: "Você perdeu! Pressione Ctrl+M para jogar novamente.",
    messageSentSuccess: "✅ Mensagem enviada com sucesso!",
    messageSentError: "❌ Erro ao enviar a mensagem. Verifique o console.",
    consoleLines: [
      "> cargando projetos...",
      "> analizando repositorios...",
      "> Python ✓",
      "> Django ✓",
      "> Pandas ✓",
      "> TKinter ✓",
      "> MySQL y SQLite ✓",
      "> JavaScript ✓",
      "> HTML ✓",
      "> CSS ✓",
      "> Proyectos listos para mostrar ✨"
    ]
  },
  ja: {
    fullName: "ロベルト・ハビエル・ソロアガ",
    homeTitle: "自己紹介",
    homeDesc: "私はJavierです。Pythonとそのエコシステムに深い情熱を持つバックエンド開発者です。システムアーキテクチャ、データベースの最適化、API統合に重点を置き、堅牢で効率的なソリューションの構築を専門としています。",
    skillsTitle: "スキル / ツール",
    skillsList: "JavaScript, Python, HTML, CSSなど",
    projectsTitle: "プロジェクト / 経験",
    projectsDesc: "私のプロジェクトの説明はこちら。",
    achievementsTitle: "実績 / 認定",
    achievementsDesc: "あなたの実績と認定はこちら。",
    resumeTitle: "履歴書",
    resumeDesc: "希望する職位の経験、学位、スキルが含まれています。",
    downloadCV: "PDFをダウンロード",
    contactTitle: "お問い合わせ",
    softSkillsTitle: "ソフトスキル",
    skill1: "効果的なコミュニケーション",
    skill2: "チームワーク",
    skill3: "問題解決",
    skill4: "時間管理",
    skill5: "適応性",
    skill6: "積極性",
    send: "送信",
    namePlaceholder: "名前",
    emailPlaceholder: "メール",
    messagePlaceholder: "メッセージ",
    technologies: "テクノロジー:",
    project1Title: "POSシステム（小売業向け）",
    project1Desc: "在庫管理、販売、レポート機能を備えた、中小企業向けのPOSシステム開発中。",
    project1Status: "現在一時停止中。",
    project2Title: "Python + Django（料理ブログ）",
    project2Desc: "Informatorioのステージ2で作成されたミニマリストなブログ。記事のCRUDとログイン機能付き。",
    viewCode: "コードを見る",
    project3Title: "教育ゲーム：質問と回答",
    project3Desc: "Professional Practice 1コースのために開発された、スコア付きの質問ゲーム。ランキングと基本的なランダム質問ロジックが含まれています。",
    project4Title: "Pythonでのデータ操作",
    project4Desc: "txtファイルをcsvにダウンロード、変換し、統計計算、情報フィルタリング、レポート生成のためにすべてのデータを処理するシンプルなスクリプト。",
    project5Title: "宇宙船ゲーム",
    project5Desc: "息子の学校の宿題を助けるために開発された、小惑星を排除する宇宙船ゲーム。",
    footerText: "&copy; 2025 Roberto Javier Soloaga",
    snakeInstructions: "矢印キーで移動します。ESCを押して終了します。",
    gameLostMessage: "負けました！Ctrl+Mを押してもう一度プレイしてください。",
    messageSentSuccess: "✅ メッセージが正常に送信されました！",
    messageSentError: "❌ メッセージの送信中にエラーが発生しました。コンソールを確認してください。",
    consoleLines: [
      "> cargando proyectos...",
      "> analizando repositorios...",
      "> Python ✓",
      "> Django ✓",
      "> Pandas ✓",
      "> TKinter ✓",
      "> MySQL y SQLite ✓",
      "> JavaScript ✓",
      "> HTML ✓",
      "> CSS ✓",
      "> Proyectos listos para mostrar ✨"
    ]
  },
  zh: {
    fullName: "罗伯托·哈维尔·索洛阿加",
    homeTitle: "关于我",
    homeDesc: "我是Javier，一名对Python及其生态系统充满热情的后端开发者。专注于构建强大高效的解决方案，重点在系统架构、数据库优化和API集成。",
    skillsTitle: "技能 / 工具",
    skillsList: "JavaScript、Python、HTML、CSS等。",
    projectsTitle: "项目 / 经验",
    projectsDesc: "我的项目描述在这里。",
    achievementsTitle: "成就 / 认证",
    achievementsDesc: "您的成就和认证在这里。",
    resumeTitle: "简历",
    resumeDesc: "包括我的经验、学历和所需职位的技能。",
    downloadCV: "下载PDF",
    contactTitle: "联系",
    softSkillsTitle: "软技能",
    skill1: "有效沟通",
    skill2: "团队合作",
    skill3: "解决问题",
    skill4: "时间管理",
    skill5: "适应性",
    skill6: "积极主动",
    send: "发送",
    namePlaceholder: "姓名",
    emailPlaceholder: "电子邮件",
    messagePlaceholder: "消息",
    technologies: "技术:",
    project1Title: "零售POS系统",
    project1Desc: "正在开发的销售点系统，面向小型企业，具有库存管理、销售和报告功能。",
    project1Status: "目前暂停。",
    project2Title: "Python + Django（烹饪博客）",
    project2Desc: "Informatorio第二阶段创建的极简主义博客，具有文章的CRUD和登录功能。",
    viewCode: "查看代码",
    project3Title: "教育游戏：问答",
    project3Desc: "为专业实践1课程开发的带分数的问答游戏。包括排名和基本的随机问题逻辑。",
    project4Title: "Python数据操作",
    project4Desc: "简单的脚本，下载、将.txt转换为.csv，并处理所有数据以计算统计数据、过滤信息和生成报告。",
    project5Title: "太空飞船游戏",
    project5Desc: "必须消除小行星的太空飞船游戏，旨在帮助我儿子的学校作业。",
    footerText: "&copy; 2025 罗伯托·哈维尔·索洛阿加",
    snakeInstructions: "使用箭头键移动。按ESC键退出。",
    gameLostMessage: "你输了！按Ctrl+M再玩一次。",
    messageSentSuccess: "✅ 消息发送成功！",
    messageSentError: "❌ 发送消息时出错。请检查控制台。",
    consoleLines: [
      "> cargando proyectos...",
      "> analizando repositorios...",
      "> Python ✓",
      "> Django ✓",
      "> Pandas ✓",
      "> TKinter ✓",
      "> MySQL y SQLite ✓",
      "> JavaScript ✓",
      "> HTML ✓",
      "> CSS ✓",
      "> Proyectos listos para mostrar ✨"
    ]
  },
  ru: {
    fullName: "Роберто Хавьер Солоага",
    homeTitle: "Обо мне",
    homeDesc: "Я Хавьер, backend-разработчик с глубокой страстью к Python и его экосистемам. Специализируюсь на создании надёжных и эффективных решений, уделяя особое внимание архитектуре систем, оптимизации баз данных и интеграции API.",
    skillsTitle: "Навыки / Инструменты",
    skillsList: "JavaScript, Python, HTML, CSS и т.д.",
    projectsTitle: "Проекты / Опыт",
    projectsDesc: "Описание моих проектов здесь.",
    achievementsTitle: "Достижения / Сертификаты",
    achievementsDesc: "Ваши достижения и сертификаты здесь.",
    resumeTitle: "Резюме",
    resumeDesc: "Включает мой опыт, образование и навыки для желаемой должности.",
    downloadCV: "Скачать PDF",
    contactTitle: "Контакты",
    softSkillsTitle: "Гибкие навыки",
    skill1: "Эффективное общение",
    skill2: "Командная работа",
    skill3: "Решение проблем",
    skill4: "Управление временем",
    skill5: "Адаптивность",
    skill6: "Проактивность",
    send: "Отправить",
    namePlaceholder: "Имя",
    emailPlaceholder: "Электронная почта",
    messagePlaceholder: "Сообщение",
    technologies: "Технологии:",
    project1Title: "POS-система для розничной торговли",
    project1Desc: "Разрабатываемая система торговых точек, предназначенная для малого бизнеса, с управлением запасами, продажами и отчетами.",
    project1Status: "В настоящее время приостановлено.",
    project2Title: "Python + Django (Кулинарный блог)",
    project2Desc: "Минималистичный блог, созданный на этапе 2 Informatorio, с CRUD для статей и входом в систему.",
    viewCode: "Посмотреть код",
    project3Title: "Обучающая игра: Вопросы и ответы",
    project3Desc: "Игра с вопросами и подсчетом очков, разработанная для курса «Профессиональная практика 1». Включает рейтинг и базовую логику случайных вопросов.",
    project4Title: "Манипуляция данными с помощью Python",
    project4Desc: "Простой скрипт, который загружает, преобразует .txt в .csv и обрабатывает все данные для расчета статистики, фильтрации информации и генерации отчетов.",
    project5Title: "Игра «Космический корабль»",
    project5Desc: "Игра «Космический корабль», в которой нужно уничтожать астероиды, разработанная, чтобы помочь моему сыnu с домашним заданием.",
    footerText: "&copy; 2025 Роберто Хавьер Солоага",
    snakeInstructions: "Используйте стрелки для перемещения. Нажмите ESC для выхода.",
    gameLostMessage: "Вы проиграли! Нажмите Ctrl+M, чтобы сыграть снова.",
    messageSentSuccess: "✅ Сообщение успешно отправлено!",
    messageSentError: "❌ Ошибка при отправке сообщения. Проверьте консоль.",
    consoleLines: [
      "> cargando proyectos...",
      "> analizando repositorios...",
      "> Python ✓",
      "> Django ✓",
      "> Pandas ✓",
      "> TKinter ✓",
      "> MySQL y SQLite ✓",
      "> JavaScript ✓",
      "> HTML ✓",
      "> CSS ✓",
      "> Proyectos listos para mostrar ✨"
    ]
  },
  ar: {
    fullName: "روبرتو خافيير سولوغا",
    homeTitle: "نبذة عني",
    homeDesc: "أنا خافيير، مطور خلفيات شغوف بلغة بايثون وأنظمتها. أختص في بناء حلول قوية وفعالة، مع التركيز على هندسة الأنظمة، تحسين قواعد البيانات، ودمج واجهات البرمجة.",
    skillsTitle: "المهارات / الأدوات",
    skillsList: "جافاسكريبت، بايثون، HTML، CSS، إلخ.",
    projectsTitle: "المشاريع / الخبرة",
    projectsDesc: "وصف مشاريعي هنا.",
    achievementsTitle: "الإنجازات / الشهادات",
    achievementsDesc: "إنجازاتك وشهاداتك هنا.",
    resumeTitle: "السيرة الذاتية",
    resumeDesc: "تتضمن خبرتي ودرجاتي ومهاراتي للوظيفة المطلوبة.",
    downloadCV: "تنزيل PDF",
    contactTitle: "اتصال",
    softSkillsTitle: "المهارات الشخصية",
    skill1: "التواصل الفعال",
    skill2: "العمل الجماعي",
    skill3: "حل المشكلات",
    skill4: "إدارة الوقت",
    skill5: "القدرة على التكيف",
    skill6: "المبادرة",
    send: "إرسال",
    namePlaceholder: "الاسم",
    emailPlaceholder: "البريد الإلكتروني",
    messagePlaceholder: "الرسالة",
    technologies: "التقنيات:",
    project1Title: "نظام نقاط البيع للتجزئة",
    project1Desc: "نظام نقاط بيع قيد التطوير، يستهدف الشركات الصغيرة، مع إدارة المخزون والمبيعات والتقارير.",
    project1Status: "متوقف حالياً.",
    project2Title: "بايثون + جانغو (مدونة طبخ)",
    project2Desc: "مدونة بسيطة تم إنشاؤها خلال المرحلة الثانية من Informatorio، مع CRUD للمقالات وتسجيل الدخول.",
    viewCode: "عرض الكود",
    project3Title: "لعبة تعليمية: أسئلة وأجوبة",
    project3Desc: "لعبة أسئلة مع تسجيل النقاط، تم تطويرها لدورة الممارسة المهنية 1. تتضمن الترتيب ومنطق الأسئلة العشوائية الأساسي.",
    project4Title: "معالجة البيانات باستخدام بايثون",
    project4Desc: "برنامج نصي بسيط يقوم بتنزيل وتحويل ملفات .txt إلى .csv، ومعالجة جميع البيانات لحساب الإحصائيات وتصفية المعلومات وإنشاء التقارير.",
    project5Title: "لعبة سفينة الفضاء",
    project5Desc: "لعبة سفينة الفضاء التي يجب أن تقضي على الكويكبات، تم تطويرها لمساعدة ابني في واجباته المدرسية.",
    footerText: "&copy; 2025 روبرتو خافيير سولوغا",
    snakeInstructions: "استخدم مفاتيح الأسهم للتحرك. اضغط على ESC للخروج.",
    gameLostMessage: "لقد خسرت! اضغط على Ctrl+M للعب مرة أخرى.",
    messageSentSuccess: "✅ تم إرسال الرسالة بنجاح!",
    messageSentError: "❌ حدث خطأ أثناء إرسال الرسالة. تحقق من وحدة التحكم.",
    consoleLines: [
      "> cargando proyectos...",
      "> analizando repositorios...",
      "> Python ✓",
      "> Django ✓",
      "> Pandas ✓",
      "> TKinter ✓",
      "> MySQL y SQLite ✓",
      "> JavaScript ✓",
      "> HTML ✓",
      "> CSS ✓",
      "> Proyectos listos para mostrar ✨"
    ]
  },
  ko: {
    fullName: "로베르토 하비에르 솔로아가",
    homeTitle: "소개",
    homeDesc: "저는 Javier입니다. Python과 그 생태계에 깊은 열정을 가진 백엔드 개발자입니다. 시스템 아키텍처, 데이터베이스 최적화, API 통합에 중점을 두고 견고하고 효율적인 솔루션을 구축하는 데 전문입니다.",
    skillsTitle: "기술 / 도구",
    skillsList: "JavaScript, Python, HTML, CSS 등",
    projectsTitle: "프로젝트 / 경험",
    projectsDesc: "내 프로젝트에 대한 설명입니다.",
    achievementsTitle: "성과 / 인증",
    achievementsDesc: "귀하의 성과 및 인증은 여기에 있습니다.",
    resumeTitle: "이력서",
    resumeDesc: "원하는 직책에 대한 경험, 학위 및 기술이 포함됩니다.",
    downloadCV: "PDF 다운로드",
    contactTitle: "연락처",
    softSkillsTitle: "소프트 스킬",
    skill1: "효과적인 의사소통",
    skill2: "팀워크",
    skill3: "문제 해결",
    skill4: "시간 관리",
    skill5: "적응력",
    skill6: "주도성",
    send: "보내기",
    namePlaceholder: "이름",
    emailPlaceholder: "이메일",
    messagePlaceholder: "메시지",
    technologies: "기술:",
    project1Title: "소매 POS 시스템",
    project1Desc: "재고 관리, 판매 및 보고서 기능을 갖춘 소규모 비즈니스용 POS 시스템 개발 중.",
    project1Status: "현재 일시 중지됨.",
    project2Title: "Python + Django (요리 블로그)",
    project2Desc: "Informatorio 2단계에서 만든 미니멀리스트 블로그로, 기사 CRUD 및 로그인 기능 포함.",
    viewCode: "코드 보기",
    project3Title: "교육 게임: 질문 및 답변",
    project3Desc: "전문 실습 1 과정용으로 개발된 점수 있는 질문 게임. 순위 및 기본 무작위 질문 로직 포함.",
    project4Title: "Python을 사용한 데이터 조작",
    project4Desc: ".txt를 .csv로 다운로드, 변환하고 모든 데이터를 처리하여 통계를 계산하고 정보를 필터링하며 보고서를 생성하는 간단한 스크립트.",
    project5Title: "우주선 게임",
    project5Desc: "아들의 학교 숙제를 돕기 위해 개발된 소행성을 제거해야 하는 우주선 게임.",
    footerText: "&copy; 2025 로베르토 하비에르 솔로아가",
    snakeInstructions: "화살표 키를 사용하여 이동합니다. ESC를 눌러 종료합니다.",
    gameLostMessage: "졌습니다! Ctrl+M을 눌러 다시 플레이하세요.",
    messageSentSuccess: "✅ 메시지가 성공적으로 전송되었습니다!",
    messageSentError: "❌ 메시지 전송 중 오류가 발생했습니다. 콘솔을 확인하세요.",
    consoleLines: [
      "> cargando proyectos...",
      "> analizando repositorios...",
      "> Python ✓",
      "> Django ✓",
      "> Pandas ✓",
      "> TKinter ✓",
      "> MySQL y SQLite ✓",
      "> JavaScript ✓",
      "> HTML ✓",
      "> CSS ✓",
      "> Proyectos listos para mostrar ✨"
    ]
  },
  hi: {
    fullName: "रॉबर्टो जेवियर सोलोआगा",
    homeTitle: "मेरे बारे में",
    homeDesc: "मैं Javier हूँ, Python और उसके इकोसिस्टम के प्रति गहरी जुनून रखने वाला बैकएंड डेवलपर। मैं मजबूत और कुशल समाधान बनाने में विशेषज्ञ हूँ, सिस्टम आर्किटेक्चर, डेटाबेस ऑप्टिमाइज़ेशन और API इंटीग्रेशन पर ध्यान केंद्रित करता हूँ।",
    skillsTitle: "कौशल / उपकरण",
    skillsList: "जावास्क्रिप्ट, पायथन, एचटीएमएल, सीएसएस, आदि।",
    projectsTitle: "परियोजनाएं / अनुभव",
    projectsDesc: "मेरे प्रोजेक्ट्स का विवरण यहाँ है।",
    achievementsTitle: "उपलब्धियाँ / प्रमाणपत्र",
    achievementsDesc: "आपकी उपलब्धियाँ और प्रमाणपत्र यहाँ हैं।",
    resumeTitle: "फिर से शुरू करें",
    resumeDesc: "इसमें वांछित पद के लिए मेरा अनुभव, डिग्री और कौशल शामिल हैं।",
    downloadCV: "पीडीएफ डाउनलोड करें",
    contactTitle: "संपर्क करें",
    softSkillsTitle: "सॉफ्ट स्किल्स",
    skill1: "प्रभावी संचार",
    skill2: "टीम वर्क",
    skill3: "समस्या-समाधान",
    skill4: "समय प्रबंधन",
    skill5: "अनुकूलनशीलता",
    skill6: "सक्रियता",
    send: "भेजें",
    namePlaceholder: "नाम",
    emailPlaceholder: "ईमेल",
    messagePlaceholder: "संदेश",
    technologies: "प्रौद्योगिकी:",
    project1Title: "खुदरा के लिए पीओएस सिस्टम",
    project1Desc: "स्टॉक प्रबंधन, बिक्री और रिपोर्ट के साथ छोटे व्यवसायों के लिए विकसित किया जा रहा बिक्री बिंदु प्रणाली।",
    project1Status: "वर्तमान में रुका हुआ है।",
    project2Title: "पायथन + जैंगो (कुकिंग ब्लॉग)",
    project2Desc: "इनफॉर्मेटोरियो के चरण 2 के दौरान बनाया गया न्यूनतम ब्लॉग, जिसमें लेखों के लिए CRUD और लॉगिन शामिल है।",
    viewCode: "कोड देखें",
    project3Title: "शैक्षिक खेल: प्रश्न और उत्तर",
    project3Desc: "पेशेवर अभ्यास 1 पाठ्यक्रम के लिए विकसित स्कोरिंग के साथ प्रश्न खेल। इसमें रैंकिंग और बुनियादी यादृच्छिक प्रश्न तर्क शामिल हैं।",
    project4Title: "पायथन के साथ डेटा हेरफेर",
    project4Desc: "सांख्यिकी की गणना करने, जानकारी फ़िल्टर करने और रिपोर्ट तैयार करने के लिए .txt को .csv में डाउनलोड, परिवर्तित और सभी डेटा को संसाधित करने वाला सरल स्क्रिप्ट।",
    project5Title: "अंतरिक्ष यान खेल",
    project5Desc: "अंतरिक्ष यान खेल जिसमें क्षुद्रग्रहों को खत्म करना होगा, मेरे बेटे के स्कूल के काम में मदद करने के लिए विकसित किया गया।",
    footerText: "&copy; 2025 रॉबर्टो जेवियर सोलोआगा",
    snakeInstructions: "चलने के लिए तीर कुंजियों का उपयोग करें। बाहर निकलने के लिए ESC दबाएं।",
    gameLostMessage: "आप हार गए! फिर से खेलने के लिए Ctrl+M दबाएं।",
    messageSentSuccess: "✅ संदेश सफलतापूर्वक भेजा गया!",
    messageSentError: "❌ संदेश भेजने में त्रुटि। कंसोल की जांच करें।",
    consoleLines: [
      "> cargando proyectos...",
      "> analizando repositorios...",
      "> Python ✓",
      "> Django ✓",
      "> Pandas ✓",
      "> TKinter ✓",
      "> MySQL y SQLite ✓",
      "> JavaScript ✓",
      "> HTML ✓",
      "> CSS ✓",
      "> Proyectos listos para mostrar ✨"
    ]
  }
};

let consolaTimeout;

let accesibilidadActiva = false;
let lecturaActiva = false;

/**
 * Establece el idioma de la página y actualiza los elementos con atributos data-i18n.
 * También actualiza el selector de idioma.
 * @param {string} lang - El código del idioma.
 */
function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key]; // Usar innerHTML para permitir entidades HTML como &copy;
    } else {
      console.warn(`Missing translation for key: ${key} in language: ${lang}`);
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
  const langSelector = document.getElementById("language-selector");
  if (langSelector) {
    langSelector.value = lang;
  }
  // Actualiza la consola animada si existe
  animarConsola(lang);
}

/**
 * Cambia el tema de la página entre 'vintage.css' y 'styles.css'.
 */
function toggleTheme() {
  const themeLink = document.getElementById("theme-link");
  const currentTheme = themeLink.getAttribute("href");
  if (currentTheme === "vintage.css") {
    themeLink.setAttribute("href", "styles.css");
    localStorage.setItem("theme", "styles.css");
  } else {
    themeLink.setAttribute("href", "vintage.css");
    localStorage.setItem("theme", "vintage.css");
  }
}

// Al cargar la página, aplica el tema guardado
document.addEventListener("DOMContentLoaded", () => {
  const themeLink = document.getElementById("theme-link");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    themeLink.setAttribute("href", savedTheme);
  }
});


/**
 * Lee el texto de bienvenida usando la API SpeechSynthesis, obteniendo el texto traducido.
 */
function leerTexto() {
  const currentLang = localStorage.getItem("lang") || "es";
  const texto = translations[currentLang].homeDesc; // Obtiene la descripción traducida
  const speech = new SpeechSynthesisUtterance(texto);
  speech.lang = currentLang === 'es' ? 'es-AR' : currentLang; // Ajusta el idioma de la voz
  window.speechSynthesis.speak(speech);
}

/**
 * Lee todo el contenido de la página en el idioma seleccionado.
 */
function leerTodaLaPagina() {
  // Selecciona los elementos principales
  const elementos = [
    document.querySelector('h1[data-i18n="fullName"]'),
    document.querySelector('h2[data-i18n="homeTitle"]'),
    document.querySelector('p[data-i18n="homeDesc"]'),
    document.querySelector('h2[data-i18n="skillsTitle"]'),
    ...document.querySelectorAll('.skills-grid div'),
    document.querySelector('h3[data-i18n="softSkillsTitle"]'),
    ...document.querySelectorAll('.soft-skills li'),
    document.querySelector('h2[data-i18n="projectsTitle"]'),
    document.querySelector('p[data-i18n="projectsDesc"]'),
    ...document.querySelectorAll('.project h3, .project p'),
    document.querySelector('h2[data-i18n="achievementsTitle"]'),
    document.querySelector('p[data-i18n="achievementsDesc"]'),
    document.querySelector('h2[data-i18n="resumeTitle"]'),
    document.querySelector('p[data-i18n="resumeDesc"]'),
    document.querySelector('h2[data-i18n="contactTitle"]')
  ];

  // Une el texto de todos los elementos
  const texto = elementos
    .filter(e => e)
    .map(e => e.textContent)
    .join('. ');

  // Recita el texto
  const speech = new SpeechSynthesisUtterance(texto);
  speech.lang = localStorage.getItem("lang") || "es";
  window.speechSynthesis.cancel(); // Detiene cualquier lectura anterior
  window.speechSynthesis.speak(speech);
}

// Lógica del juego Snake
let snakeGameActive = false;
let snake, food, direction, gameLoop, snakeCtx;

// Manejador de eventos para iniciar/salir del juego
window.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === 'm') {
    e.preventDefault();
    if (!snakeGameActive) startSnakeGame();
  } else if (e.key === 'Escape' && snakeGameActive) {
    document.getElementById('easter-egg').style.display = 'none';
    clearInterval(gameLoop);
    snakeGameActive = false;
  }
});

/**
 * Inicia el juego Snake.
 */
function startSnakeGame() {
  const canvas = document.getElementById('snake-canvas');
  document.getElementById('easter-egg').style.display = 'block';
  snakeCtx = canvas.getContext('2d');

  snake = [{x: 10, y: 10}];
  food = {x: Math.floor(Math.random()*20), y: Math.floor(Math.random()*20)};
  direction = {x: 1, y: 0};
  snakeGameActive = true;

 
  document.removeEventListener('keydown', handleSnakeDirection);
  document.addEventListener('keydown', handleSnakeDirection);

  gameLoop = setInterval(updateGame, 100);
}

/**
 * Maneja la dirección de la serpiente basada en las teclas de flecha.
 * @param {KeyboardEvent} e - El evento de teclado.
 */
function handleSnakeDirection(e) {
  switch (e.key) {
    case 'ArrowUp':    if (direction.y === 0) direction = {x:0, y:-1}; break;
    case 'ArrowDown':  if (direction.y === 0) direction = {x:0, y:1}; break;
    case 'ArrowLeft':  if (direction.x === 0) direction = {x:-1, y:0}; break;
    case 'ArrowRight': if (direction.x === 0) direction = {x:1, y:0}; break;
  }
}

/**
 * Actualiza el estado del juego en cada fotograma.
 */
function updateGame() {
  const head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};
  const currentLang = localStorage.getItem("lang") || "es";

  // Comprueba colisiones con paredes o con la propia serpiente
  if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20 || snake.some(s => s.x === head.x && s.y === head.y)) {
    showCustomModal(translations[currentLang].gameLostMessage);
    document.getElementById('easter-egg').style.display = 'none';
    clearInterval(gameLoop);
    snakeGameActive = false;
    return;
  }

  snake.unshift(head); // Añade la nueva cabeza
  if (head.x === food.x && head.y === food.y) {
    // Si la serpiente come la comida, genera una nueva comida
    food = {x: Math.floor(Math.random()*20), y: Math.floor(Math.random()*20)};
  } else {
    snake.pop(); // Si no come, elimina la cola para simular movimiento
  }

  drawSnake(); // Dibuja el estado actual del juego
}

/**
 * Dibuja la serpiente y la comida en el lienzo.
 */
function drawSnake() {
  snakeCtx.fillStyle = '#111'; // Fondo del lienzo
  snakeCtx.fillRect(0, 0, 600, 600);

  snakeCtx.fillStyle = 'lime'; // Color de la serpiente
  snake.forEach(s => snakeCtx.fillRect(s.x * 20, s.y * 20, 18, 18)); // Dibuja cada segmento

  snakeCtx.fillStyle = 'red'; // Color de la comida
  snakeCtx.fillRect(food.x * 20, food.y * 20, 18, 18); // Dibuja la comida
}

/**
 * Muestra un modal personalizado con un mensaje.
 * @param {string} message - El mensaje a mostrar en el modal.
 */
function showCustomModal(message) {
  const modal = document.getElementById('custom-modal');
  const modalMessage = document.getElementById('modal-message');
  const closeButton = modal.querySelector('.close-button');
  const okButton = document.getElementById('modal-ok-button');

  modalMessage.innerText = message;
  modal.style.display = 'flex'; // Cambiado a flex para centrar con CSS

  const hideModal = () => {
    modal.style.display = 'none';
    closeButton.removeEventListener('click', hideModal);
    okButton.removeEventListener('click', hideModal);
  };

  closeButton.addEventListener('click', hideModal);
  okButton.addEventListener('click', hideModal);
}


// Evento que se dispara cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Aplica el idioma y tema guardados
  const savedLang = localStorage.getItem("lang") || "es";
  const savedTheme = localStorage.getItem("theme");
  setLanguage(savedLang);
  if (savedTheme) {
    const themeLink = document.getElementById("theme-link");
    if (themeLink) themeLink.setAttribute("href", savedTheme);
  }

  // Lógica de la consola animada
  const lang = localStorage.getItem("lang") || "es";
  animarConsola(lang);

  // Inicializa EmailJS
  emailjs.init("m_f-JXA55UgnlbL7z"); // Tu User ID de EmailJS

  // Manejo del formulario de contacto
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const currentLang = localStorage.getItem("lang") || "es";
      emailjs.sendForm("service_9hxlwxl", "template_7e2ypsr", this)
        .then(() => {
          showCustomModal(translations[currentLang].messageSentSuccess);
          form.reset();
        }, (error) => {
          console.error("Error al enviar:", error);
          showCustomModal(translations[currentLang].messageSentError);
        });
    });
  }
});

// Exporta funciones al ámbito global para los botones
window.toggleTheme = toggleTheme;
window.setLanguage = setLanguage;
window.leerTexto = leerTexto;
window.leerTodaLaPagina = leerTodaLaPagina;

/**
 * Animar la consola con las líneas de traducción correspondientes al idioma seleccionado.
 * @param {string} lang - El código del idioma.
 */
function animarConsola(lang) {
  const consola = document.getElementById("console-output");
  if (consola) {
    let lineas = translations[lang].consoleLines || translations["es"].consoleLines;
    let i = 0;
    consola.textContent = "";
    if (consolaTimeout) clearTimeout(consolaTimeout);
    function escribirLinea() {
      if (i < lineas.length) {
        consola.textContent += lineas[i] + "\n";
        i++;
        consolaTimeout = setTimeout(escribirLinea, 900);
      }
    }
    escribirLinea();
  }
}

function toggleAccesibilidad() {
  accesibilidadActiva = !accesibilidadActiva;

  if (accesibilidadActiva) {
    document.body.addEventListener("click", leerElemento);
    document.body.addEventListener("touchstart", leerElemento);
  } else {
    document.body.removeEventListener("click", leerElemento);
    document.body.removeEventListener("touchstart", leerElemento);
    window.speechSynthesis.cancel();
    lecturaActiva = false;
  }
}

function leerElemento(e) {
  if (lecturaActiva) return;
  // Evita leer el botón de accesibilidad y otros botones
  if (e.target.classList.contains("icon-btn")) return;

  const texto = e.target.textContent.trim();
  if (texto.length > 0) {
    lecturaActiva = true;
    const utter = new SpeechSynthesisUtterance(texto);
    utter.lang = localStorage.getItem("lang") || "es";
    // Selecciona una voz masculina si está disponible
    const voces = window.speechSynthesis.getVoices();
    const vozMasculina = voces.find(v => v.lang.startsWith(utter.lang) && v.gender === "male") ||
                         voces.find(v => v.lang.startsWith(utter.lang) && v.name.toLowerCase().includes("male")) ||
                         voces.find(v => v.lang.startsWith(utter.lang));
    if (vozMasculina) utter.voice = vozMasculina;
    utter.onend = () => { lecturaActiva = false; };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  }
}

// Exporta la función para el botón
window.toggleAccesibilidad = toggleAccesibilidad;
