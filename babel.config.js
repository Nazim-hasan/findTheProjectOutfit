module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.js', '.ts', 'jsx', '.tsx', '.ios.js', '.android.js'],
        alias: {
          //! Make sure to change in tsconfig.json also
          assets: './assets',
          components: './app/components',
          navigation: './app/navigation',
          constants: './app/constants',
          layout: './app/layout',
          screens: './app/screens',
          hooks: './app/hooks',
          context: './app/context',
          language: './app/language',
          services: './app/services',
          schema: './app/schema',
          lib: './app/lib',
          config: './app/config',
          api: './app/api',
          models: './app/models',
          theme: './app/theme',
          store: './app/store',
          tailwind: './app/lib/tailwind.js',
          colors: './colors.js',
          features: './app/features',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
