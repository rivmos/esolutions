const { test, after, before, beforeEach, describe } = require('node:test');
const { caseStudiesInDb, emptyCaseStudies, initialCaseStudies, nonExistingId } = require('./test_helper');
const CaseStudy = require('../models/casestudy');
const assert = require('node:assert');
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

let token;

before(async () => {
  console.log('Running before hook');
  const response = await api
    .post('/api/sign-in')
    .send({ username: 'admin', password: '123456' })
    .expect(200);

  token = response.body.token;
  console.log('Token acquired:', token);
});

describe('when there are some case studies', () => {
  before(async () => {
    console.log('Running beforeEach hook');
    await emptyCaseStudies();

    const mongooseCaseStudyObjects = initialCaseStudies.map(caseStudy => new CaseStudy(caseStudy));
    const promiseArray = mongooseCaseStudyObjects.map(async (addedCaseStudy) => await addedCaseStudy.save());

    await Promise.all(promiseArray);
    console.log('Initial case studies saved');
  });

  test('case studies are returned as json', async () => {
    await api.get('/api/casestudies/all')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('all the case studies are returned', async () => {
    const response = await api.get('/api/casestudies/all')
      .set('Authorization', `Bearer ${token}`)
    assert.strictEqual(response.body.length, initialCaseStudies.length, `Expected ${initialCaseStudies.length}, but got ${response.body.length}`)
  })

  test('a specific case study is within the returned casestudies', async () => {
    const response = await api.get('/api/casestudies/all')
      .set('Authorization', `Bearer ${token}`)

    const contents = response.body.map(r => r.title)
    assert(contents.includes('Case Study Two'))
  })
});

describe('paginated case studies data', () => {
  const paginationQuery = {
    pageIndex: 1,
    pageSize: 10,
    query: ""
  };

  test('returns paginated data as json', async () => {
    const response = await api
      .post('/api/casestudies/')
      .set('Authorization', `Bearer ${token}`)
      .send(paginationQuery)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    assert.strictEqual(response.body.success, true, 'Expected success to be true');
    assert.strictEqual(response.body.data.length, paginationQuery.pageSize, 
      `Expected data length to be ${paginationQuery.pageSize}, but got ${response.body.data.length}`);
  });

  test('returns filtered data based on query', async () => {
    const query = "Case Study Two";
    const response = await api
      .post('/api/casestudies/')
      .set('Authorization', `Bearer ${token}`)
      .send({ ...paginationQuery, query })
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const titles = response.body.data.map(caseStudy => caseStudy.title);
    assert(titles.includes(query), `Expected titles to include "${query}", but got ${titles}`);
  });

  test('returns 400 status for invalid pagination schema', async () => {
    const invalidQuery = {
      pageIndex: -1,
      pageSize: 'invalid',
      query: ""
    };

    const response = await api
      .post('/api/casestudies/')
      .set('Authorization', `Bearer ${token}`)
      .send(invalidQuery)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    assert(response.body.errors, 'Expected errors in response body');
  });
});

describe('addition of a case study', () => {

  test('succeeds with valid data', async () => {
    const newCaseStudy = { title: 'New Case Study', description: 'this is new one', content: '<p>this is paragraph</p>' };

    await api.post('/api/casestudies/save')
      .set('Authorization', `Bearer ${token}`)
      .send(newCaseStudy)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const response = await api.get('/api/casestudies/all')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    assert.strictEqual(response.body.length, initialCaseStudies.length + 1, `Expected ${initialCaseStudies.length + 1}, but got ${response.body.length}`);
  });

  test('fails with status code 400 if data invalid', async () => {
    const newCaseStudy = {
      description: 'this case study does not have a required title'
    }

    await api
      .post('/api/casestudies/save')
      .set('Authorization', `Bearer ${token}`)
      .send(newCaseStudy)
      .expect(400)

    const caseStudiesAtEnd = await caseStudiesInDb()

    assert.strictEqual(caseStudiesAtEnd.length, initialCaseStudies.length + 1)
  })
});

describe('viewing a specific case study', () => {
  test('succeeds with a valid id', async () => {
    const caseStudiesAtStart = await caseStudiesInDb();
    const firstCaseStudy = caseStudiesAtStart[0];

    const response = await api.get(`/api/casestudies/${firstCaseStudy.id}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    assert.deepStrictEqual(firstCaseStudy, response.body, `Case Study Doesn't Match`);
  });

  test('fails with statuscode 404 if note does not exist', async () => {
    const validNonExistingId = await nonExistingId()

    await api.get(`/api/casestudies/${validNonExistingId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(404);
  });

  test('fails with statuscode 400 id is invalid', async () => {
    const invalidId = '5a3d5da59070081a82a3445'

    await api
      .get(`/api/casestudies/${invalidId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(400)
  })

});

describe('deletion of a case study', () => {
  test('succeeds with status code 204 if id is valid', async () => {

    const caseStudiesAtStart = await caseStudiesInDb();
    const firstCaseStudy = caseStudiesAtStart[0];

    await api.delete(`/api/casestudies/delete`)
      .set('Authorization', `Bearer ${token}`)
      .send({ id: firstCaseStudy.id })
      .expect(204);

    const response = await api.get('/api/casestudies/all')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    assert.strictEqual(response.body.length, caseStudiesAtStart.length - 1, `Expected ${caseStudiesAtStart.length - 1}, but got ${response.body.length}`);
  });
});

after(async () => {
  console.log('Running after hook');
  await mongoose.connection.close();
  console.log('MongoDB connection closed');
});
