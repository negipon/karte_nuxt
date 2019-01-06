export default function({ store, route, redirect }) {
  if (
    !store.getters['user/isLogin'] &&
    route.fullPath !== '/auth' &&
    route.fullPath !== '/logout'
  ) {
    redirect('/auth')
  }
}
