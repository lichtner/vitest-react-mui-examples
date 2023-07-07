import { rest } from 'msw'

export const user = {
  id: 1,
  name: 'mockuser1',
}

export const user2 = {
  id: 2,
  name: 'mockuser2',
}

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(user))
  }),
  rest.get('https://jsonplaceholder.typicode.com/users/2', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(user2))
  }),
]