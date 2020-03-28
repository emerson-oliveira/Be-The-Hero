const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
                name:"Nome da Ong",
                email:"contato@ong.com.br",
                whatsapp:"31994991234",
                city:"Belo Horizonte",
                uf:"MG"
        });
        console.log(response.body);
    });
});