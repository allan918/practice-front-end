 export function printTweets(a) {
    if (a.length === 0) {
        console.log("No tweets found");
    } else {
        a.forEach(element => {
             let temp = new Date(element.timestamp).toLocaleString("en-US")
            console.log('- "'  + element.text + '" (' + temp +")");
        });
       
    }
}