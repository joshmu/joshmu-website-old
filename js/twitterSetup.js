$(document).ready(function () {
  /* ---------------------------------------------- /*
   * Twitter
  /* ---------------------------------------------- */

  // USING MY CUSTOM API
  fetch('https://mu-twitter-timeline-api.herokuapp.com/')
    .then((response) => response.json())
    .then((data) => handleTweets(data))

  function tweetHtml(tweet) {
    return `<div>
            <a href="https://twitter.com/josh_mu_/status/${tweet.id_str}" target="_blank">
              <p class="twitter-text">${tweet.full_text}</p>
              </a>
            </div>`
  }

  function handleTweets(tweets) {
    console.log('tweet tweet')
    console.log(tweets)
    // let's just use 10 tweets
    var tweets = tweets.slice(0, 10)
    var x = tweets.length
    var n = 0
    var html = ''
    while (n < x) {
      html += tweetHtml(tweets[n])
      n++
    }
    var $twitterNews = $('#twitterNews')

    // apply tweet data
    $twitterNews.html(html)

    // // remove emojis
    // $twitterNews.find('img').remove()
    // // remove 'Posted on' text
    // $twitterNews.find('.timePosted').each(function (index, element) {
    //   var $elem = $(element)
    //   var text = $elem.children('a').text()
    //   var text = text.replace('Posted on ', '')
    //   $elem.children('a').text(text)
    // })

    // init carousel
    $twitterNews.owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      autoplay: true,
      animateOut: 'fadeOutLeft',
      animateIn: 'fadeInRight',
      stagePadding: 0,
      smartSpeed: 450,
      autoplayTimeout: 4500,
      autoplayHoverPause: false,
      dots: false,
    })
  }

  // twitterFetcher.fetch(config)
})
