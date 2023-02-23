const markdownIt = require("markdown-it");
const markdownItAnc = require("markdown-it-anchor");
const { DateTime } = require("luxon");
const striptags = require("striptags");


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

function extractExcerpt(article) {
  if (!article.hasOwnProperty("templateContent")) {
    console.warn(
      'Failed to extract excerpt: Document has no property "templateContent".'
    );
    return null;
  }

  let excerpt = null;
  const content = article.templateContent;

  excerpt = striptags(content)
    .substring(0, 200) // Cap at 200 characters
    .replace(/^\s+|\s+$|\s+(?=\s)/g, "")
    .trim()
    .concat("...");
  return excerpt;
}

