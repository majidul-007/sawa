document.querySelector('#donet-btn').addEventListener('click', function (event) {
    const parent=event.target.parentElement.parentElement
    console.log(parent)

    const h1=parent.children[0].innerText;
    console.log(h1)


    let apent=document.createElement('div')
        apent.innerHTML =`<div class="border-[1px] border-zinc-600 p-5 rounded-2xl">
            <h1 class="text-xl font-bold grotesk ">  Taka is ${h1}</h1> 
            <p class="text-zinc-400">Date : ${date.toDateString()}</p>
            </div>`;
        output.appendChild(apent)
        
    
})