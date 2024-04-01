var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");

function openTab(tabName) {
    for(tabLink of tabLinks) {
        tabLink.classList.remove("active-link")
    }
    for(tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyWAT3dvDPV7ybzMrjxzpUxc8-ZePwYxsP2Xe4c9seLe8ofyaMScVr6aQbpAT5gbyWJ/exec'
  const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Msessage sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })