/**
 * Adds Image Service URLs to content using yucky regex replacement
 * @param {string} body     Body as a string
 * @returns {string|void}   modified HTML body string or void
 *
 * @TODO URLencode the matching URLs
 * @TODO maybe use Cheerio for this instead?
 */
module.exports = body => {
  if (!body || typeof body !== 'string') return;

  const relativeRegex = /\.(\/.*?\.(?:jpe?g|png|svg|gif))/g; // For relative paths
  const absoluteAwsRegex = /(.*?amazonaws\.com\/.*?\.(?:jpe?g|png|svg|gif))/g; // For absolute paths on AWS
  const endpointURI = `http://${process.env.DEST_BUCKET}.s3-website-` +
    `${process.env.DEST_BUCKET_REGION}.amazonaws.com/`;

  const replaceRelative = `https://www.ft.com/__origami/service/image/v2/images/raw${endpointURI}$1?source=commercial-content-lambda`;
  const replaceAbsolute = `https://www.ft.com/__origami/service/image/v2/images/raw$1?source=commercial-content-lambda`;

  // Assuming data contains the HTML body...
  return body
    .replace(relativeRegex, replaceRelative) // Pass 1: change relative URLs to image service
    .replace(absoluteAwsRegex, replaceAbsolute) // Pass 2: change absolute AWS paths to image service
    ;
};
