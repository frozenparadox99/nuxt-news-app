import Cookie from 'js-cookie'

export const saveUserData = ({ idToken, expiresIn }, { email, avatar }) => {
  const tokenExpiration = Date.now() + expiresIn * 1000
  localStorage.setItem('jwt', idToken)
  localStorage.setItem('expiresIn', tokenExpiration)
  localStorage.setItem('user', email)
  localStorage.setItem('avatar', avatar)
  Cookie.set('jwt', idToken)
  Cookie.set('expiresIn', tokenExpiration)
  Cookie.set('user', email)
  Cookie.set('avatar', avatar)
}
