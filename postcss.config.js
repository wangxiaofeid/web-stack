module.exports= () => ({
  plugins: [
    require('postcss-nested')(),
    require('pixrem')(),
    require('autoprefixer')({
      browsers: [
        'Chrome >= 35',
        'Firefox >= 31',
        'Explorer >= 9',
        'Opera >= 12',
        'Safari >= 7.1'
      ]
    }),
    require('postcss-flexibility')(),
    require('postcss-discard-duplicates')()
  ]
});
