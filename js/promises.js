(function() {
    "use strict"
    // Create a function that accepts a GitHub username, and returns a promise that resolves returning just the
    // date of the last commit that user made. Reference the github api documentation to achieve this.
    function getLastPush(user){
        return fetch(`https://api.github.com/users/${user}/events/public`, {
            headers: {
                'Authorization': 'token ' + MY_GITHUB_API_KEY
            }
        }).then(response => {
            return response.json()
        })
            .then(events => {
                const dateOfLastPush = new Date(events[0].created_at).toDateString();
                console.log(dateOfLastPush);
                return dateOfLastPush;
            });
    }

    getLastPush('Kevin-Fowler17')

    //Write a function named wait that accepts a number as a parameter, and returns a
    // promise that resolves after the passed number of milliseconds.
    function wait(time) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(time);
            }, time);
        });
    }

    wait(1000).then((msg) => console.log("You'll see this after 1 second: " + msg + " milliseconds"));
    wait(3000).then((msg) => console.log("You'll see this after 3 seconds: " + msg + " milliseconds"));


})();


