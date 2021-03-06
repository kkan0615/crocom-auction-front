import faker from 'faker'
import dayjs from 'dayjs'
import { Tag } from '@/interfaces/model/product/tag'

export const dummyTags: Array<Tag> = []

export const generateDummyTags = () => {
  for (let i = 0; i < 100; i++) {
    dummyTags.push({
      id: i + 1,
      name: faker.lorem.word(),
      createdAt: dayjs(),
    } as Tag)
  }

  dummyTags.push({
    id: 101,
    name: 'test1',
    createdAt: dayjs()
  })
  dummyTags.push({
    id: 102,
    name: 'test2',
    createdAt: dayjs()
  })
  dummyTags.push({
    id: 103,
    name: 'test3',
    createdAt: dayjs()
  })
}
