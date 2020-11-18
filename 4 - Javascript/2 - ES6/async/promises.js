const news = [
    {
        title: 'Losing Details',
        body: 'A physicist who coined the term "black hole" lost highly sensitive nuclear weapons information when the U.S. had just completed tests of the first hydrogen bomb.'
    },
    {
        title: 'History Located',
        body: 'The wreck of one of the most famous German warships of World War I has been located on the seafloor near the Falkland Islands, where it sank in a battle with British warships more than 100 years ago.'
    },
    {
        title: 'Evidence of Loss',
        body: 'Canyon cut by meltwater stream, before sinking into moulin beside hikers, on icecap above Disko Bay on the west coast, Greenland.'
    },
    {
        title: 'Loneliness has Physical Effects',
        body: 'Researchers speculated that living in relative isolation and a "monotonous" environment may cause certain brain structures to shrink.'
    },
    {
        title: 'Lunar Debris',
        body: 'Scientists and amateurs alike have spent months combing through images from NASAs Lunar Reconnaissance Orbiter looking for the remains of India moon lander — and that search has paid off.'
    },
]

function getNews() {
    setTimeout(() => {

        let output = '';
        news.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function setNews(article) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            news.push(article);
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject("Error: Article was not added.")
            }
        }, 2000);
    });
}


newArticle = { title: "New Article", body: "This is a new story in the news." }

// setNews(newArticle)
//     .then(getNews)
//     .catch(err => console.log(err));

const p1 = Promise.resolve('Hello World');
const p2 = 10;
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye');
});

const p4 = fetch('https://api.github.com/users').then(res => res.json());

Promise.all([p1, p2, p3, p4]).then((values) => console.log(values));

