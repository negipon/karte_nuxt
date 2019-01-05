export default function({ store, route, redirect }) {
  if (
    !store.getters['auth/isAuthenticated'] &&
    route.fullPath !== '/common/sign-in' &&
    route.fullPath !== '/common/sign-up'
  ) {
    redirect('/common/sign-in')
  }
}
