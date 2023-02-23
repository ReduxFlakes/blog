const markdownIt = require("markdown-it");
const markdownItAnc = require("markdown-it-anchor");
const { DateTime } = require("luxon");


module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/public/");
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("src/*/*.md/");
  eleventyConfig.addShortcode("excerpt", (article) => extractExcerpt(article));
  eleventyConfig.addFilter("PostDate", function (date) {
    return DateTime.fromJSDate(date).toFormat("dd LLL, yyyy");
  });
  eleventyConfig.addCollection("orderedPages", (collection) => {
    const page = collection.getFilteredByGlob("src/pages/*.md").sort((a, b) => {
      return Number(a.data.order) - Number(b.data.order);
    });
    return page;
  });
  const md = markdownIt({
    html: true,
  });
  md.use(markdownItAnc, {
    tabIndex: false,
  });
  eleventyConfig.setLibrary("md", md);
  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "dist",
    },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
