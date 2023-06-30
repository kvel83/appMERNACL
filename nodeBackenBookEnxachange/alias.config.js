const { addAliases } = require('module-alias');
const path = require('path');

addAliases({
  '@controllers': path.join(__dirname, 'app/controllers'),
  '@models': path.join(__dirname, 'app/models'),
  '@config': path.join(__dirname, 'app/config'),
  '@middlewares': path.join(__dirname, 'app/middlewares'),
  '@routes': path.join(__dirname,'app/routes'),
}
);
