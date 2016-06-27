# Quote Machine Pure JS

This is a simple quote generator web app that displays funny jokes and allows them to be posted to Twitter.

It's techincally not "pure" JavaScript as I did bring in JQuery, Bootstrap, and Font Awesome, but at least I didn't use a SPA framework. ;)

I built this as a solution to one of the exercises for Free Code Camp, but it was also just for me to get away from all the Angular / React SPA frameworks
and go back to the nostaglic days of script tags, JQuery selectors, and $(document).ready listeners (though I didn't miss it that much hehe). 


Credits:
Big thanks to Dylan Neil for giving me the code for implementing a 'post to twitter' button with ease. If you're curious, here's how I'm doing it:

` $("#tweet-btn").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + currentQuote);
  });`
