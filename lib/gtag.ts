export const GA_ID = process.env.NEXT_PUBLIC_GA_ID

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const trackEvent = (action: string, params?: Record<string, any>) => {
  if (!window.gtag) return

  window.gtag('event', action, params)
}
