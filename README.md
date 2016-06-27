# Quote Machine Pure JS

This is a simple quote generator web app that displays funny jokes and allows them to be posted to Twitter.

It's techincally not "pure" JavaScript as I did bring in JQuery, Bootstrap, and Font Awesome, but at least I didn't use a SPA framework. ;)


Credits:
Big thanks to Dylan Neil for giving me the code for implementing a 'post to twitter' button with ease. If you're curious, here's how I'm doing it:

` $("#tweet-btn").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + currentQuote);
  });`
