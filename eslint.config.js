import react from 'eslint-plugin-react';

export default {
  plugins: {
    react,
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-duplicate-props': 'error',
  },
};
