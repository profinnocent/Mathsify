const div = document.querySelector('div');

console.log(data);

console.log(questions);

let data2 = [];

data.forEach((q) => {
    data2.push([
        `Round off ${q.question} to ${q.dp}`,
        
    ])
})