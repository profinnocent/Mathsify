const examArea = document.querySelector(".examarea");

// console.log(data);

// console.log(questions);

let qaBank = [];
let finalAnsBank = []
let score = 0;

// Display Exam Questions
data.forEach((q, index) => {
    let thisq = q.question;
    let thisdp = q.dp;
    let thiscans = q.question.toFixed(q.dp);
    let thiswans1 = q.question.toFixed(q.dp + 1);
    let thiswans2 = q.question.toFixed(q.dp - 1);
    let thiswans3 = q.question.toFixed(q.dp);

    
    // Strip trailing zeros if they exist from number
    thiscans = parseFloat(thiscans);
    thiswans1 = parseFloat(thiswans1);
    thiswans2 = parseFloat(thiswans2);
    thiswans3 = parseFloat(thiswans3);

    // Check and diasllow more than one correct answer
    if(thiscans == thiswans2){
        let temp = String(thiswans2);
        let temp2 = temp.split('.');
        thiswans2 = temp2[0] + '.' + (temp2[1]+1);
    }

    if(thiscans == thiswans3){
        let temp = String(thiswans3);
        let temp2 = temp.split('.');
        thiswans3 = temp2[0] + '.' + (temp2[1]-1);
    }

    // Setup array to serve options
    let ansSet = [thiscans, thiswans1, thiswans2, thiswans3];

    
    // Shuffle the answer set
    ansSet.sort(() => Math.random() - 0.5);

    // Push correct answer to dedicated answer array
    qaBank.push(thiscans);

   examArea.innerHTML += `
    <div class="qbox qbox${index + 1}">
        <h3>
           (${index + 1}) Round off ${thisq} to ${thisdp} decimal points.
        </h3>
        <p><label for="qr${index + 1}1">(a)
            <input type="radio" name="qrb${index + 1}" id="qr${index + 1}1" value="${ansSet[0]}"> 
            <span>${ansSet[0]}</span>
            <img src="" alt="" width="15px" >
        </label>
         </p>
         <p><label for="qr${index + 1}2">(b)
            <input type="radio" name="qrb${index + 1}" id="qr${index + 1}2" value="${ansSet[1]}"> 
            <span>${ansSet[1]}</span>
            <img src="" alt="" width="15px" >
        </label>
         </p>
         <p><label for="qr${index + 1}3">(c)
            <input type="radio" name="qrb${index + 1}" id="qr${index + 1}3" value="${ansSet[2]}"> 
            <span>${ansSet[2]}</span>
            <img src="" alt="" width="15px" >
        </label>
         </p>
         <p><label for="qr${index + 1}4">(d)
            <input type="radio" name="qrb${index + 1}" id="qr${index + 1}4" value="${ansSet[3]}"> 
            <span>${ansSet[3]}</span>
            <img src="" alt="" width="15px" >
        </label>
         </p>        
    </div>
        `;
});

// console.log(qaBank);

// Create Submit button and add to DOM
const submitBtn = `<button class="scorebtn" onclick="markScript()">Submit</button>`;

examArea.innerHTML += submitBtn;


// Scrpit to handle marking of script ===================================================
function markScript(){

    score = 0;
    
    let quesDivs = Array.from(examArea.querySelectorAll('.qbox'));
    let markImgs = Array.from(examArea.querySelectorAll('.qbox img'));
    let allInps = Array.from(examArea.querySelectorAll('input'));

    console.log(quesDivs);

    quesDivs.map((ques) => {

        let inpans = Array.from(ques.querySelectorAll('input'));

        let isAnswered = false;

        inpans.forEach((inpan) => {

            if(inpan.checked){
                finalAnsBank.push(inpan.value);
                isAnswered = true;
            }
           
        })

        if(isAnswered == false){
            finalAnsBank.push(null);
        }

    })

    // console.log(finalAnsBank);

    if(finalAnsBank.includes(null)){

        if(confirm("You have not answered all the questions. Do you still want to submit.")){
           
             // Calculate, save and display score
            //  console.log("here is your score");
             countScore(quesDivs);

             finalAnsBank = [];

            // Call marks for all input
            inputMarks(allInps, qaBank, markImgs);

        }
        else{
           
            console.log("You may go back and check for those you did nopt attempt");

        }
    }
    else{

            // Calculate, save and display score
            countScore(quesDivs);

            finalAnsBank = [];

            // Call marks for all input
            inputMarks(allInps, qaBank, markImgs);
            
    }
    
}


// Generate Score ==================================================================
function countScore(quesArr){
    qaBank.forEach((ans, index) => {
        if(ans == finalAnsBank[index]){
            score++;
            quesArr[index].style.backgroundColor = 'lightgreen';
        }
        else{
            quesArr[index].style.backgroundColor = "red";
        }
        
    });

    // console.log(score);
    let len = qaBank.length;
    let pc = (score/len)*100;
    alert(`Your Score is : ${score} / ${len} (${pc}%)`);

}


// Mark all inputs right or wrong ================================================================
function inputMarks(iArr, ansArr, imgArr){

    ansArr.forEach((ans, index) => {

        if(index != 0){
            index *= 4;
        }

        for(let i=index; i<index+4; i++){

            console.log(iArr[1].value, ans);

            if(iArr[i].value == ans){
                imgArr[i].src = './images/marksgreencircle.png';
            }
            else{
                imgArr[i].src = './images/marksredcircle.png';
            }

        }

    });

}