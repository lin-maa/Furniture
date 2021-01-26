const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
      ],
    devtool: 'inline-source-map',

    devServer: {
        port: 9000,
        historyApiFallback: true
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
       rules: [
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
                "babel-loader"
        ],
    },
    {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          {loader: 'css-loader',
          // Compiles Sass to CSS
          options: {
            importLoaders: 1,
            // 0 => no loaders (default);
            // 1 => postcss-loader;
            // 2 => postcss-loader, sass-loader
          },
        },
          'sass-loader',
        ],
      },
     {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader',
        ],
     },
     {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader',
        ],
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader',
        ],
      },
   ],
 },
};





// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//  module: {
//    rules: [
//      {
//        test: /\.css$/,
//        use: [
//          'style-loader',
//          'css-loader',
//        ],
//      },
//      {
//         test: /\.(png|svg|jpg|gif)$/,
//         use: [
//             'file-loader',
//         ],
//      },
//      {
//         test: /\.(woff|woff2|eot|ttf|otf)$/,
//         use: [
//           'file-loader',
//         ],
//       },
//       {
//         test: /\.(csv|tsv)$/,
//         use: [
//           'csv-loader',
//         ],
//       },
//       {
//         test: /\.xml$/,
//         use: [
//           'xml-loader',
//         ],
//       },
//    ],
//  },
// };