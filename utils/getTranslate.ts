import en from '../locales/en'
import ru from '../locales/ru'

const getCookie = (name: string) => {
  let matches
  if (process.browser) {
    matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
  }

  return undefined
}

export const getTranslate = () => getCookie('NEXT_LOCALE') === 'ru' ? ru : en