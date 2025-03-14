import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { fileURLToPath } from 'url';
import CopyPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import EslintWebpackPlugin from 'eslint-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = !IS_DEV;

const optimize = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  };
  if (IS_PROD) {
  }
  if (IS_DEV) {
  }
  return config;
};

const getFileName = (ext) => `[name]${IS_PROD ? '' : '.[hash]'}.${ext}`;

const setCssLoaders = (extra) => {
  const loaders = [MiniCssExtractPlugin.loader, 'css-loader'];
  if (extra) {
    loaders.push(extra);
  }
  return loaders;
};

const setPlugins = () => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'favicon.png'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: getFileName('css'),
    }),
    new EslintWebpackPlugin({  
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      fix: true, // Автоматично виправляти помилки
    }),
  ];

  return plugins;
};
  
const setJsLoaders = (extra) => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  ];

  if (extra) {
    loaders[0].options.presets.push(extra);
  }

  return loaders; // Повертаємо масив
};



export default {
  mode: 'development',
  context: path.resolve(process.cwd(), 'src'),
  entry: {
    main: './index.jsx',
    stat: './statistics.ts',
  },
  target: 'web',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 4200,
    hot: false,
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: getFileName('js'),
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      '@css': path.resolve(__dirname, 'src','css'),
      '@less': path.resolve(__dirname, 'src','less'),
      '@sass': path.resolve(__dirname, 'src','sass'),
      '@models': path.resolve(__dirname, 'src','models'),
      '@assets': path.resolve(__dirname, 'src','assets'),

    },
  },
  optimization: optimize(),
  devtool: IS_DEV ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: setCssLoaders(),
      },
      {
        test: /\.less$/,
        use: setCssLoaders( 'less-loader'),
      },
      {
        test: /\.s[ac]ss$/,
        use: setCssLoaders('sass-loader'),
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: setJsLoaders(), 
      },      
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: setJsLoaders('@babel/preset-react'),
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: setJsLoaders('@babel/preset-typescript'),
      },
    ],
  },
  plugins: setPlugins(),
};
