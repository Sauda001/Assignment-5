function themeColor(){
    const red=Math.floor(Math.random() *256);
    
    const green=Math.floor(Math.random() *256);
    
    const blue=Math.floor(Math.random() *256);
    const rgb='rgb('+ red +','+ green +','+ blue +')';
    return rgb;
}



const theme=document.getElementById('background-color');

theme.addEventListener('click',function(){
    document.documentElement.style.backgroundColor=themeColor();
});
