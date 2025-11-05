'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'pt' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  // Load language from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved && (saved === 'pt' || saved === 'en')) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    const translations: Record<string, Record<Language, string>> = {
      // Header
      'nav.home': { pt: 'Início', en: 'Home' },
      'nav.problems': { pt: 'Problemas', en: 'Problems' },
      'nav.dilemma': { pt: 'O Dilema', en: 'The Dilemma' },
      'nav.differential': { pt: 'Diferencial', en: 'Differential' },
      'nav.about': { pt: 'Quem sou eu?', en: 'About' },
      'nav.projects': { pt: 'Projetos', en: 'Projects' },
      'nav.contact': { pt: 'Contato', en: 'Contact' },

      // Hero
      'hero.message': { pt: '// UMA MENSAGEM DE @ROCHALABS', en: '// A MESSAGE FROM @ROCHALABS' },
      'hero.headline': { pt: 'Automação que transforma seu dia a dia em vantagem competitiva.', en: 'Automation that transforms your daily operations into a competitive advantage.' },
      'hero.cta': { pt: 'Leia o diagnóstico', en: 'Read the diagnosis' },

      // Hero with accent
      'hero.headline.part1': { pt: 'Automação que transforma', en: 'Automation that transforms' },
      'hero.headline.part2': { pt: 'seu dia a dia em vantagem', en: 'your daily operations into' },
      'hero.headline.part3': { pt: 'competitiva', en: 'competitive' },

      // Problems
      'problems.title': { pt: 'Seu negócio está preso em processos lentos?', en: 'Is your business stuck in slow processes?' },
      'problems.title.part1': { pt: 'Seu negócio está preso em', en: 'Is your business stuck in' },
      'problems.title.part2': { pt: 'processos lentos?', en: 'slow processes?' },
      'problems.subtitle': { pt: 'Problemas comuns que consomem seu lucro', en: 'Common problems that consume your profit' },
      'problems.1.title': { pt: 'Equipe apagando incêndios?', en: 'Team fighting fires?' },
      'problems.1.desc': { pt: 'Tarefas repetitivas estão consumindo as horas que sua equipe deveria usar para crescer o negócio.', en: 'Repetitive tasks are consuming the hours your team should use to grow the business.' },
      'problems.2.title': { pt: 'Leads esperando horas por resposta?', en: 'Leads waiting hours for a response?' },
      'problems.2.desc': { pt: 'Enquanto você tenta acompanhar tudo sozinho, oportunidades fogem para concorrentes mais ágeis.', en: 'While you try to handle everything alone, opportunities escape to more agile competitors.' },
      'problems.3.title': { pt: 'Relatórios que atrasam decisões?', en: 'Reports that delay decisions?' },
      'problems.3.desc': { pt: 'Análises demoradas e imprecisas fazem você tomar decisões com dados desatualizados.', en: 'Slow and inaccurate analyses make you make decisions with outdated data.' },
      'problems.4.title': { pt: 'Sistemas que não conversam?', en: 'Systems that don\'t talk?' },
      'problems.4.desc': { pt: 'CRM, WhatsApp, Instagram e Google Sheets isolados. Informações espalhadas dificultam a gestão.', en: 'CRM, WhatsApp, Instagram, and Google Sheets isolated. Scattered information makes management difficult.' },
      'problems.5.title': { pt: 'Conteúdo replicado à mão?', en: 'Content replicated manually?' },
      'problems.5.desc': { pt: 'Publicar o mesmo conteúdo em várias plataformas uma por uma desperdiça tempo e energia.', en: 'Publishing the same content across multiple platforms one by one wastes time and energy.' },

      // Dilemma
      'dilemma.title': { pt: 'Dois Caminhos, Uma Escolha', en: 'Two Paths, One Choice' },
      'dilemma.title.part1': { pt: 'Dois Caminhos,', en: 'Two Paths,' },
      'dilemma.title.part2': { pt: 'Uma Escolha', en: 'One Choice' },
      'dilemma.subtitle': { pt: 'O futuro do seu negócio depende da decisão que você toma agora.', en: 'The future of your business depends on the decision you make now.' },
      'dilemma.easy.title': { pt: 'O Caminho Fácil', en: 'The Easy Path' },
      'dilemma.easy.subtitle': { pt: 'Templates e "Gambiarras"', en: 'Templates and Quick Fixes' },
      'dilemma.easy.1': { pt: 'Genérico: Não se adapta 100% ao seu fluxo.', en: 'Generic: Doesn\'t adapt 100% to your workflow.' },
      'dilemma.easy.2': { pt: 'Quebra fácil: Soluções temporárias.', en: 'Breaks easily: Temporary solutions.' },
      'dilemma.easy.3': { pt: 'Refém da plataforma: Sem controle total.', en: 'Platform hostage: No total control.' },
      'dilemma.strategic.title': { pt: 'A Arquitetura Estratégica', en: 'The Strategic Architecture' },
      'dilemma.strategic.subtitle': { pt: 'Feita por um Dev', en: 'Made by a Developer' },
      'dilemma.strategic.1': { pt: 'Sob Medida: Desenhado para o seu processo.', en: 'Custom Made: Designed for your process.' },
      'dilemma.strategic.2': { pt: 'Escalável: Feito para durar e crescer.', en: 'Scalable: Built to last and grow.' },
      'dilemma.strategic.3': { pt: 'Flexibilidade Total: Você tem controle completo.', en: 'Total Flexibility: You have complete control.' },

      // Differential
      'differential.title': { pt: 'Cada solução é construída do zero, para você.', en: 'Every solution is built from scratch, for you.' },
      'differential.title.part1': { pt: 'Cada solução é construída', en: 'Every solution is built' },
      'differential.title.part2': { pt: 'do zero, para você', en: 'from scratch, for you' },
      'differential.subtitle': { pt: 'Eu construo a arquitetura customizada que sua escala exige, linha por linha.', en: 'I build the customized architecture your scale demands, line by line.' },
      'differential.subtitle.part1': { pt: 'Eu construo a arquitetura customizada que sua escala exige,', en: 'I build the customized architecture your scale demands,' },
      'differential.subtitle.part2': { pt: 'linha por linha', en: 'line by line' },
      'differential.text': { pt: 'Todo o trabalho é customizado, feito sob medida por um desenvolvedor que domina bots, IA e integração de sistemas. Isso garante soluções limpas, escaláveis e adaptáveis às suas necessidades.', en: 'All work is customized, tailored by a developer who masters bots, AI, and system integration. This ensures clean, scalable solutions adapted to your needs.' },
      'differential.1': { pt: 'Soluções limpas e escaláveis', en: 'Clean and scalable solutions' },
      'differential.2': { pt: '100% adaptável às suas necessidades', en: '100% adaptable to your needs' },
      'differential.3': { pt: 'Feito por desenvolvedor, não templates', en: 'Made by a developer, not templates' },

      // Transformation
      'transformation.title': { pt: 'Resultados que você vai sentir desde o primeiro dia', en: 'Results you\'ll feel from day one' },
      'transformation.text': { pt: 'Com automação inteligente e integração de sistemas, suas tarefas rotineiras se tornam processos instantâneos.', en: 'With intelligent automation and system integration, your routine tasks become instant processes.' },
      'transformation.result': { pt: 'Resultado: menos retrabalho, mais velocidade e entregas consistentes.', en: 'Result: less rework, more speed, and consistent deliveries.' },
      'transformation.benefit.1.title': { pt: 'Menos retrabalho', en: 'Less rework' },
      'transformation.benefit.1.desc': { pt: 'Elimine tarefas repetitivas e foque no que realmente importa.', en: 'Eliminate repetitive tasks and focus on what really matters.' },
      'transformation.benefit.2.title': { pt: 'Mais velocidade', en: 'More speed' },
      'transformation.benefit.2.desc': { pt: 'Processos que levavam horas agora acontecem em minutos.', en: 'Processes that took hours now happen in minutes.' },
      'transformation.benefit.3.title': { pt: 'Entregas consistentes', en: 'Consistent deliveries' },
      'transformation.benefit.3.desc': { pt: 'Resultados previsíveis e qualidade sempre alta.', en: 'Predictable results and consistently high quality.' },

      // WhoIAm
      'about.title': { pt: 'Prazer, Fabiano. Engenheiro de Software.', en: 'Pleased to meet you, Fabiano. Software Engineer.' },
      'about.text.1': { pt: 'Atualmente, desenvolvo soluções de automação em uma das maiores empresas de serviços financeiros do país, lidando diariamente com sistemas críticos e processos de larga escala.', en: 'Currently, I develop automation solutions at one of the largest financial services companies in the country, dealing daily with critical systems and large-scale processes.' },
      'about.text.2': { pt: 'Minha especialidade é aplicar essa mesma engenharia de nível corporativo no seu negócio. Eu não uso templates; eu mergulho no seu contexto, arquiteto a lógica e construo soluções de automação customizadas (com Python, N8N e IA) que são seguras, precisas e prontas para escalar.', en: 'My specialty is applying this same enterprise-level engineering to your business. I don\'t use templates; I dive into your context, architect the logic, and build customized automation solutions (with Python, N8N, and AI) that are secure, precise, and ready to scale.' },
      'about.photo.1': { pt: 'Profissional', en: 'Professional' },
      'about.photo.2': { pt: 'Foco', en: 'Focus' },
      'about.photo.3': { pt: 'Estratégia', en: 'Strategy' },
      'about.photo.4': { pt: 'Visão', en: 'Vision' },

      // SocialProof
      'socialproof.title': { pt: 'Você não é o primeiro a transformar o negócio com automação', en: 'You\'re not the first to transform your business with automation' },
      'socialproof.testimonial.1': { pt: 'Automatizamos nosso atendimento e aumentamos a conversão de leads em 40% em 30 dias.', en: 'We automated our customer service and increased lead conversion by 40% in 30 days.' },
      'socialproof.testimonial.2': { pt: 'Conseguimos escalar de 10 para 50 clientes sem aumentar a equipe. A automação mudou tudo.', en: 'We managed to scale from 10 to 50 clients without increasing the team. Automation changed everything.' },

      // Projects
      'projects.title': { pt: 'Resultados Reais de Clientes', en: 'Real Client Results' },
      'projects.subtitle': { pt: 'Explore cases de sucesso e veja o código', en: 'Explore success cases and see the code' },
      'projects.project.1': { pt: 'Bot de Atendimento WhatsApp', en: 'WhatsApp Customer Service Bot' },
      'projects.project.2': { pt: 'Dashboard de Relatórios Automáticos', en: 'Automated Reports Dashboard' },
      'projects.project.3': { pt: 'Integração CRM + Marketing', en: 'CRM + Marketing Integration' },

      // Contact
      'contact.title': { pt: 'Sua vez de responder.', en: 'Your turn to respond.' },
      'contact.subtitle': { pt: 'Vamos iniciar uma conversa sobre automação?', en: 'Shall we start a conversation about automation?' },
      'contact.form.name': { pt: 'Nome completo', en: 'Full name' },
      'contact.form.name.placeholder': { pt: 'Seu nome completo', en: 'Your full name' },
      'contact.form.email': { pt: 'E-mail', en: 'Email' },
      'contact.form.email.placeholder': { pt: 'seu@email.com', en: 'your@email.com' },
      'contact.form.message': { pt: 'Mensagem', en: 'Message' },
      'contact.form.message.placeholder': { pt: 'Meu maior gargalo hoje é...', en: 'My biggest bottleneck today is...' },
      'contact.form.submit': { pt: 'Enviar E-mail', en: 'Send Email' },
      'contact.success.title': { pt: 'Mensagem enviada!', en: 'Message sent!' },
      'contact.success.desc': { pt: 'Recebi sua mensagem. Vou analisar seu cenário e entrar em contato em breve.', en: 'I received your message. I\'ll analyze your scenario and get in touch soon.' },

      // Footer
      'footer.copyright': { pt: '© 2025 @rochalabs. Engenharia de Automação.', en: '© 2025 @rochalabs. Automation Engineering.' },

      // Hero secondary
      'hero.cta.diagnosis': { pt: 'Leia o diagnóstico', en: 'Read the diagnosis' },
    }

    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
