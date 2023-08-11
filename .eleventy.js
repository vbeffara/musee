module.exports = config => {
  config.addPassthroughCopy("src/**/*.jpg");
  config.addPassthroughCopy("src/**/*.png");
  config.addPassthroughCopy("src/**/*.gif");
  config.addPassthroughCopy("src/ecole.css");

  return {
    dir: {
      input: 'src',
    }
  };
};
