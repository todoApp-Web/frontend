const assert = require('assert');
const { Pact } = require('@pact-foundation/pact');

const { getData, postData } = require('../../src/assets/mock');
const { getTodos, postTodos } = require('../../src/services');

const apiUrl = 'http://localhost:8081';

describe('Cosnumer Tests', () => {
	const provider = new Pact({
		port: 8081,
		consumer: 'todo-app-client',
		provider: 'todo-app-api',
		pactfileWriteMode: 'update',
	});

	before(() => provider.setup());

	describe('When a request is sent to API', () => {
		describe('When a GET request is sent to API', () => {
			before(() => {
				return provider.addInteraction({
					uponReceiving: 'All todos list',
					withRequest: {
						path: '/api/todos',
						method: 'GET',
					},
					willRespondWith: {
						status: 200,
						body: getData,
					},
				});
			});
			it('Will receive the list of todo', async () => {
				getTodos(apiUrl)
					.then((r) => {
						assert.ok(r.status === 200);
					})
					.catch((error) => {
						throw new Error(error.message || error);
					});
			});
		});
		describe('When a POST reqeust is sent to API', () => {
			before(() => {
				return provider.addInteraction({
					uponReceiving: 'Post a new todo',
					withRequest: {
						path: '/api/todos',
						method: 'POST',
						body: postData,
					},
					willRespondWith: {
						status: 201,
					},
				});
			});

			it('Will receive the status code 201', async () => {
				postTodos(apiUrl, postData)
					.then((r) => {
						assert.ok(r.status === 201);
					})
					.catch((error) => {
						throw new Error(error.message || error);
					});
			});
		});
	});
	after(() => provider.finalize());
});