const commentBtn = document.querySelector("#commentSubmit");
commentBtn.addEventListener("click", () => {
  const nameInput = document.querySelector("#userName");
  const name = nameInput.value;
  nameInput.value = "";
  console.log(name);
  const emailInput = document.querySelector("#userEmail");
  const email = emailInput.value;
  emailInput.value = "";
  const commentInput = document.querySelector("#userComment");
  const comment = commentInput.value;
  commentInput.value = "";

  fetch("http://localhost:5000/insertComment", {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      name: name,
      email:email,
      comment:comment
    }),
  })
    .then((response) => response.json())
    .then((data) => insertNewRow(data["data"]));
});

// const services = document.querySelector('.services');
// const beforeLogin = document.querySelector('#beforeLogin');
// const login = document.querySelector('#login');
// function changeServices(){
//   login.innerHTML = `          <LogOut id="logout-btn" class="btn-primary">LogOut</button>
//     `;
//     services.style.display = 'block';
//     beforeLogin.style.display = 'none';
// }

// export {changeServices};