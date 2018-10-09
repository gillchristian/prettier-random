const rand = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const oneOf = options => options[rand(0, options.length)];

const bool = () => oneOf([true, false]);

const prettierConf = () => ({
  printWidth: rand(80, 121),
  tabWidth: oneOf([2, 4, 6, 8]),
  useTabs: bool(),
  semi: bool(),
  singleQuote: bool(),
  trailingComma: oneOf(['none', 'es5', 'all']),
  bracketSpacing: bool(),
  jsxBracketSameLine: bool(),
  arrowParens: oneOf(['avoid', 'always']),
  proseWrap: oneOf(['always', 'never', 'preserve']),
});

module.exports = prettierConf;
