const div = document.querySelector(".examarea");

console.log(data);

// console.log(questions);

// let data2 = [];

data.forEach((q, index) => {
  div.innerHTML += `
        <div class="qbox qbox${index + 1}">
        <h3>
           (${index + 1}) Round off ${q.question} to ${q.dp} decimal points.
        </h3>
        <p><label for="qr${index + 1}1">(a)
            <input type="radio" name="qrb${index + 1}" id="qr${index + 1}1"> 
            ${q.question.toFixed(q.dp)}
        </label>
         </p>
         <p><label for="qr${index + 1}2">(b)
            <input type="radio" name="qrb${index + 1}" id="qr${index + 1}2"> 
            ${q.question.toFixed(q.dp + 1)}
        </label>
         </p>
         <p><label for="qr${index + 1}3">(c)
            <input type="radio" name="qrb${index + 1}" id="qr${index + 1}3"> 
            Answer 1
        </label>
         </p>
         <p><label for="qr${index + 1}4">(d)
            <input type="radio" name="qrb${index + 1}" id="qr${index + 1}4"> 
            Answer 1
        </label>
         </p>        
    </div>
        `;
});
