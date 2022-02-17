const path = require('path');
const config = require('./webpack.common.config');

module.exports = {
  resolve: config.resolve,
  entry: path.join(
    __dirname,
    '../src/pages/widgetConfig/widgetSetting/components/FunctionEditorDialog/Func/releaseEntry.js',
  ),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: ['thread-loader', 'cache-loader', 'babel-loader'],
      },
    ],
  },
  mode: 'production',
  output: {
    filename: 'mdfunction.bundle.js',
    path: path.join(__dirname, '../build/dist'),
    library: 'MdFunction',
    libraryTarget: 'var',
  },
};
