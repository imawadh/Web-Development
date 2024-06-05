document.body.addEventListener("click",function()
{
    const random_color = "#" + Math.floor(Math.random() * 1677215).toString();
    console.log(random_color);
    document.body.style.backgroundColor = random_color;
})