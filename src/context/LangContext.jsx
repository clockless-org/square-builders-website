import { createContext, useContext, useState } from 'react'
import { translations } from '../i18n'

const LangContext = createContext()
const langs = ['en', 'zh', 'es']

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = translations[lang]
  const toggleLang = () => {
    const idx = langs.indexOf(lang)
    setLang(langs[(idx + 1) % langs.length])
  }
  const langLabel = { en: 'EN', zh: '中文', es: 'ES' }

  return (
    <LangContext.Provider value={{ lang, t, toggleLang, langLabel }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
