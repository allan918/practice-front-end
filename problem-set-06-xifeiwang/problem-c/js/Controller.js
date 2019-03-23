`use strict`
import readline from 'readline-sync';
import * as model from './Model';
import {printTweets} from './View';
export function runSearch() {
    console.log("Here are some tweets by @UW_iSchool");
    let search = readline.question("Search tweets, or EXIT to quit: ");
    if (search === "EXIT"){
        return;
    } else {
        let tweets = model.searchTweets(search);
        printTweets(tweets);
    }
}