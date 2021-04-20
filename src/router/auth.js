import AuthLayout from '@/layouts/AuthTemplate'

export default [{
  // Layout 2
  path: '/auth',
  component: AuthLayout,
  children: [
    { path: 'login', component: () => import('@/views/Auth/Login/Index') }]
}]
