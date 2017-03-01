module.exports = ($, uuid) => {
  let headline = $('title').text();
  let commentsSnippet = `
     <!-- O-COMMENTS -->
     <div id="comments" style="max-width:800px;margin: 0 auto;"
           data-o-component="o-comments" data-o-comments-config-title="${headline}"
           data-o-comments-config-url="https://www.ft.com/content/${uuid}"
           data-o-comments-config-articleid="${uuid}">
     </div>
     <link rel="stylesheet" href="https://origami-build.ft.com/v2/bundles/css?modules=o-comments@^3.2.0">
     <script src="https://origami-build.ft.com/v2/bundles/js?modules=o-comments@^3.2.0"></script>
     <style>.comment-header{position:static !important;}</style>
     <!-- END O-COMMENTS -->
  `;
  $('body').append(commentsSnippet);
  return $;
};