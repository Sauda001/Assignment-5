const cardContainer=document.querySelectorAll('.card');

for(const card of cardContainer)
{
    card.addEventListener('click',function(event){
        
        const header= this.closest(".card").querySelector("h1").innerText;
        

        const today = new Date();
        const time = today.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true});

        const makeNotification='You have completed the task '+header+' issue at '+ time;

        const  noticeContainer= document.createElement("p");
        noticeContainer.textContent=makeNotification;

        noticeContainer.classList.add("bg","rounded-xl", "p-3", "mt-2");

        const noticeBoard=document.getElementById('notice');
        noticeBoard.appendChild(noticeContainer);

        const remainingTask=document.getElementById('remainingTask');
        const completeTask=document.getElementById('completeTask');

        remainingTask.innerText=parseInt(remainingTask.innerText)-1;
        completeTask.innerText=parseInt(completeTask.innerText)+1;

        const button=this.querySelector('Button');
        button.setAttribute('disabled', 'true');
        button.classList.remove('bg-blue-700');
        button.classList.add('bg-blue-300');
        
        alert('Board update succesfully');
        

        if(remainingTask.innerText==='0')
        {
            alert('Congratulations!! Your task is completed succesfully');
        }
        
    });
}