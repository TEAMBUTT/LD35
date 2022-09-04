const path = require('path');

module.exports = {
  entry: './src/game.js',
  mode: 'production',
  resolve: {
    modules: ['node_modules', 'src']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
