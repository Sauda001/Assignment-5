const notificationClearButton=document.getElementById('notificationClear');

console.log(notificationClearButton);

notificationClearButton.addEventListener('click',function(){
    const noticeContainer=document.getElementById('notice');
    noticeContainer.remove();
});