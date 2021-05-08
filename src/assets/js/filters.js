/**
 * Date Filters to specify human readable and crawler parsable date strings.
 */
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const localizedFormat = require("dayjs/plugin/localizedFormat");

dayjs.extend(utc);
dayjs.extend(localizedFormat);

exports.readableDate = (date) => dayjs(date).utc().format("LL");
exports.htmlDateString = (date) => dayjs(date).utc().toString();

/**
 * Get estimated reading time from length of post.
 */
exports.readTime = (content) => {
    const textOnly = content.replace(/(<([^>]+)>)/gi, "");
    const readingSpeedPerMin = 450;
    return Math.max(1, Math.floor(textOnly.length / readingSpeedPerMin));
};

/**
 * Get elements from a collection.
 */
exports.head = (array, n) => (n < 0 ? array.slice(n) : array.slice(0, n));
exports.minimum = (...numbers) => Math.min.apply(null, numbers);
