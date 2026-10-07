import { useCallback, useEffect, useState } from 'react'

export function useTheme() {
  const [light, setLight] = useState(() => document.documentElement.classList.contains('light'))
  useEffect(() => {
    document.documentElement.classList.toggle('light', light)
    try { localStorage.setItem('theme', light ? 'light' : 'dark') } catch { /* ignore */ }
  }, [light])
  const toggle = useCallback(() => setLight((v) => !v), [])
  return { light, toggle }
}
