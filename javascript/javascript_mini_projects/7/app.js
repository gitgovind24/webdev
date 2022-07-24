// const btns=document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         console.log(e.currentTarget.parentElement.parentElement.classList)
//         e.currentTarget.parentElement.parentElement.classList.toggle("show-text")
//     })
// })


const questions = document.querySelectorAll(".question")
// console.log(question)
questions.forEach(function(question) {
    const btn = question.querySelector(".question-btn")
    // console.log(btn)
    btn.addEventListener("click", function () {
        questions.forEach(function (item) {
            // console.log(item);
            if(item!=question){
                item.classList.remove("show-text")
            }

        });


        question.classList.toggle('show-text')
    })
})