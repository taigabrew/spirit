import { createStore } from 'pinia'

export const useSessionsStore = createStore(
  'hearings',
  () => ({
    list: [
      {
        id: 1,
        pid: 1,
        description:
          'рассмотрение дела по существу судья Елена Булгакова, зал 440',
        timestamp: 1576569600000,
        count: 45,
        court: 'Тверской районный суд Москвы',
        courtLink: 'https://yandex.ru/maps/-/CGhHaQ7e'
      },
      {
        id: 2,
        pid: 2,
        description:
          'рассмотрение дела по существу судья Татьяна Бараковская, зал 333',
        timestamp: 1577084400000,
        count: 52,
        court: 'Мещанский районный суд Москвы',
        courtLink: 'https://yandex.ru/maps/-/CGhHFQkE'
      }
    ]
  }),
  {
    getSession: state => sid => state.list.find(session => session.id === sid)
  }
)
