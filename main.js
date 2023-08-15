const markAll = document.getElementById('markAll');
const notificationNo = document.getElementById('notificationNo')
let unreadMessages = document.querySelectorAll(".unreadInbox")

notificationNo.innerText = unreadMessages.length;

unreadMessages.forEach((message) => {
    message.addEventListener("click" , () =>{
        message.classList.remove("unreadInbox");
        unreadMessages = document.querySelectorAll(".unreadInbox");
        notificationNo.innerText = unreadMessages.length;
    })
})
markAll.addEventListener("click", () =>{
    unreadMessages.forEach((message) =>{
        message.classList.remove("unreadInbox");
        unreadMessages = document.querySelectorAll(".unreadInbox")
        notificationNo.innerText = unreadMessages.length
    })
})