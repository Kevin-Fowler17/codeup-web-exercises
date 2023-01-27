const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// Use .filter to create an array of user objects where each user object has at least 3 languages in the
// languages array.
const usersWithThreeLanguages = users.filter(function(user) {
   return user.languages.length >= 3
})
console.log(usersWithThreeLanguages)


// Use .map to create an array of strings where each element is a user's email address

const emailAddresses = users.map(function(user) {
    return user.email;
})
console.log(emailAddresses)


// Use .reduce to get the total years of experience from the list of users. Once you get the total of
// years you can use the result to calculate the average.
const totalYearsOfExperience = users.reduce(function (mySum, user) {
    return mySum + user.yearsOfExperience;
}, 0)
console.log(totalYearsOfExperience / users.length)


// Use .reduce to get the longest email from the list of users.
const longestEmail =  users.reduce(function (email, user) {
    if (user.email.length > email.length) {
        return user.email;
    } else {
        return email;
    }
}, '');


// let longestEmail = '';
// for (let i=1; i < users.length; i++) {
//     if (longestEmail.length < users[i].email.length) {
//         longestEmail = users[i].email;
//     }
// }
console.log(longestEmail)




// Use .reduce to get the list of user's names in a single string. Example: Your instructors are:
// ryan, luis, zach, fernando, justin.

const yourInstructors = users.reduce(function (yourInstructor, user,i) {

       if (user.id < 5) {
        return yourInstructor.concat("",user.name.concat(",", " "))
    } else {
        return "Your instructors are: " + yourInstructor.concat("",user.name) +"."
    }

}, '');
console.log(yourInstructors)


// Bonus
let uniqueLanguages = users.reduce(function (languages, user) {

    languages = languages.concat(user.languages).sort()

   // for (let i = 1; i < languages[i]; i++) {
   //     if (languages[i] === (languages[i - 1]) {
   //         languages.splice(i, 1)
   //     }
   // }

   return languages

}, []);


console.log(uniqueLanguages)