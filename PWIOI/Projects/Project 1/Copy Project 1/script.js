// const btn = document.querySelector("button")
document.querySelector("button").btn.addEventListener("click",function(){
    const random_color = "#" + Math.floor(Math.random() * 1677215).toString(16);
    console.log(random_color);
    document.body.style.backgroundColor = random_color;
})
