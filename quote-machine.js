$(document).ready(function() {
   var randomQuote;
   var randomNum;

   function getQuote() {

      var quotes = ["I haven’t slept for ten days, because that would be too long.",

         "Regular naps prevent old age, especially if you take them while driving.",

         "My wife and I were happy for twenty years. Then we met.",

         "You know you're ugly when it comes to a group picture and they hand you the camera.",

         "Outvoted 1-1 by my wife again.",

         "I asked God for a bike, but I know God doesn't work that way. So I stole a bike and asked for forgiveness.",

         "Do it tomorrow. You have made enough mistakes for today.",

         "I can keep secrets. It's the people I tell them to that can't.",

         "I named my hard drive \"dat ass\" so once a month my computer asks if I want to 'back dat ass up'.",

         "If you think nobody cares whether you're alive, try missing a couple of payments.",

         "I'd like to see things from your point of view but I can't seem to get my head that far up my ass.",

         'If I wanted to kill myself I\'d climb your ego and jump to your IQ.',

         'A fine is a tax for doing wrong. A tax is a fine for doing well.'
      ];



      randomNum = Math.floor((Math.random() * quotes.length));
      randomQuote = quotes[randomNum];

      $(".quote").text(randomQuote);
   } //function getQuote

   $("#newQuote").on("click", function() {
      getQuote();
   });

   $("#tweet").on("click", function() {

      window.open("https://twitter.com/intent/tweet?text=" + randomQuote);
   });

});