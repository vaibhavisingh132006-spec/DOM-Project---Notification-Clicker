const enableBtn = document.getElementById("enable-btn");
const sendBtn   = document.getElementById("send-btn");
const statusEl  = document.getElementById("status");

enableBtn.onclick = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      statusEl.textContent = "Notifications enabled!";
      statusEl.style.color = "green";     
      sendBtn.disabled = false;
      enableBtn.disabled = true;
    } else {
      statusEl.textContent = "Notifications not allowed.";
      statusEl.style.color = "red";        
    }
  });
};

sendBtn.onclick = () => {
  new Notification("Hey there, Notification here!", {
  });
};
