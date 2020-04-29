$(document).ready(function () {
  /* ---------------------------------------------- /*
   * Twitter
  /* ---------------------------------------------- */

  /**
   * ### HOW TO CREATE A VALID ID TO USE: ###
   * Go to www.twitter.com and sign in as normal, go to your settings page.
   * Go to "Widgets" on the left hand side.
   * Create a new widget for what you need eg "user time line" or "search" etc.
   * Feel free to check "exclude replies" if you don't want replies in results.
   * Now go back to settings page, and then go back to widgets page and
   * you should see the widget you just created. Click edit.
   * Look at the URL in your web browser, you will see a long number like this:
   * 345735908357048478
   * Use this as your ID below instead!
   */

  // ! TWITTER ISN'T WORKING, NEED TO MOVE TO USING OAUTH1, CREDS ARE IN MY NOTES ON MY LOCAL COMP
  // so... removing any mention of twitter for now
  $('.twitter-logo').remove()

  // new verion!!! widget id is deprecated
  // var config = {
  //   profile: { screenName: 'josh_mu_' },
  //   domId: 'twitterNews',
  //   maxTweets: 5,
  //   enableLinks: true,
  //   showUser: false,
  //   showTime: true,
  //   showImages: false,
  //   showInteraction: false,
  //   customCallback: handleTweets,
  //   lang: 'en',
  // }

  // USING MY CUSTOM API
  fetch('https://mu-twitter-timeline-api.herokuapp.com/')
    .then((response) => response.json())
    .then((data) => handleTweets(data))

  function handleTweets(tweets) {
    console.log('tweet tweet')
    console.log(tweets)
    var x = tweets.length
    var n = 0
    var html = ''
    while (n < x) {
      html += '<div>' + tweets[n] + '</div>'
      n++
    }
    var $twitterNews = $('#twitterNews')

    // apply tweet data
    $twitterNews.html(html)
    // remove emojis
    $twitterNews.find('img').remove()
    // remove 'Posted on' text
    $twitterNews.find('.timePosted').each(function (index, element) {
      var $elem = $(element)
      var text = $elem.children('a').text()
      var text = text.replace('Posted on ', '')
      $elem.children('a').text(text)
    })

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

  twitterFetcher.fetch(config)
})
