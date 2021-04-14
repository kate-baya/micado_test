const knex = require('knex')
const config = require('./knexfile').test
const db = knex(config)

const {
  getTotalValue,
  findValue,
  getSubSeries
} = require('./dbFunctions')

beforeAll(() => db.migrate.latest())
beforeEach(() => db.seed.run())

describe('getSubSeries', () => {
  test('returns each unique data.sub_series_name', () => {
    expect.assertions(1)
    return getSubSeries(db)
      .then(subSeries => {
        expect(subSeries).toHaveLength(5)
      })
  })
})