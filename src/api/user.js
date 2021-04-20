import { post } from 'axios'

import appConsts from '@/utils/app'

function createUser (user) {
  const url = `${appConsts.API_URL}users`
  return post(url, user)
}

export {
  createUser
}
