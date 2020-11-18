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

function setNews(article, callback) {
    setTimeout(() => {
        news.push(article);
        callback();
    }, 2000);
}

getNews();

setNews({ title: "New Article", body: "This is a new story in the news." }, getNews)