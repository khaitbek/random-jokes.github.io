const joke = document.querySelector(".joke");
const btn = document.querySelector(".joke-btn");


let jokes = [
        {
            joke:"A little boy was eating a chocolate. A man next to him said, 'Do you know how that damages your teeth?' The boy replied, 'You know my grandpa lived 105 years'. The man replied, 'Was it because of eating chocolate?' The boy replied, 'No, because he was minding his own business.'"
        },
        {
            joke:"Dear Math, grow up and solve your own problems."
        },
        {
            joke:"What did the zero say to the eight? That belt looks good on you."
        },
        {
            joke:"Dad, can you put my shoes on? No, I don't think they'll fit me."
        },
        {
            joke:"How do you make 7 even? Take away the s."
        },{
            joke:"I ordered a chicken and an egg from Amazon. I'll let you know..."
        },{
            joke:"I'm on a seafood diet. I see food and I eat it."
        },
        
];

joke.textContent = jokes[0].joke;
btn.addEventListener("click",()=>{
  let random = Math.floor(Math.random() * jokes.length);
  joke.textContent = jokes[random].joke; 
})