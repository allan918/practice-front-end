`use strict`;
import allTweets from './uw_ischool_tweets';
console.log(allTweets);
let tweet = allTweets.map((element) => {
    return {text: element.text, timestamp: Date.parse(element.created_at)} ; 
});

tweet.sort((a,b)=> {
    return b.timestamp - a.timestamp;
})
console.log(tweet);

export function getRecentTweets() {
    return tweet.slice(0,5);
}

export function searchTweets(string) {
    return tweet.filter((element) => {return element.text.toLowerCase().indexOf(string.toLowerCase()) != -1});
}