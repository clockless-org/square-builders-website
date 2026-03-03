import { createContext, useContext, useState } from 'react'
import { translations } from '../i18n'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = translations[lang]
  const toggleLang = () => setLang(lang === 'en' ? 'zh' : 'en')

  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
