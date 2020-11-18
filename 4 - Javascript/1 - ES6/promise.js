function i_am_last_but_i_take_1_sec() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('i was no: 5 and i take 1 second')
            resolve('done')
        }, 1000);
    })
}

function i_am_fourth_but_i_take_4_sec() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('i was no: 4 and i take 4 seconds')
            resolve('done')
        }, 4000);
    })
}

function i_am_third_but_i_take_6_sec() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('i was no: 3 and i take 6 seconds')
            resolve('done')
        }, 6000);
    })
}

function i_am_second_but_i_take_8_sec() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('i was no: 2 and i take 8 seconds')
            resolve('done')
        }, 8000);
    })
    return 
}

function i_am_first_but_i_take_10_sec() {
    return new Promise((resolve, reject)=>{
         setTimeout(() => {
            console.log('i was no: 1 and i take 10 seconds')
            resolve('done')
        }, 10000);
    })
}

function run ()
{
    i_am_first_but_i_take_10_sec()
    .then(() => 
    {
        return i_am_second_but_i_take_8_sec()
    })
    .then(() => 
    {
        return i_am_third_but_i_take_6_sec()
    })
    .then(() => 
    {
        return i_am_fourth_but_i_take_4_sec()
    })
    .then(() => 
    {
        return i_am_last_but_i_take_1_sec()
    })
    .then(() => 
    {
        console.log("Done")
    })
}

run()