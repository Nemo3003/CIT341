const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'cse341',
    description: 'Description',
  },
  host: '',
  schemes: ['https', 'http'],
};

const outputFile = './routes/swagger-output.json';
const endpointsFiles = ['./index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
