let users = [];

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert("Пожалуйста заполните все поля");    
    return;
  }

  const user = users.find(u => u.email === email && u.password === password);
  if(user){
    alert(`Добро пожаловать! ${user.name}`);
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  }
  else{
    alert("Ошибочный пароль или логин");
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  }

}


function register() {
  const regEmail = document.getElementById('regEmail').value;

  let existingUser;
  for(let i = 0; i < users.length; i++){
    if(users[i].email === regEmail){
      existingUser = true;
    }
  }

  if (existingUser) {
    alert("Электронная почта уже зарегистрирована");
  } else {
    const newUser = { 
      name: document.getElementById('regName').value,
      email: regEmail,
      password: document.getElementById('regPassword').value,
      age: document.getElementById('regAge').value,
      gender: document.querySelector('input[name="gender"]:checked').value
    };
    users.push(newUser);

    for(let i = 0; i < users.length; i++){
      console.log(users[i]);
    }
    alert('Регистрация прошла успешно!');

    
    document.getElementById('regName').value = '';
    document.getElementById('regEmail').value = '';
    document.getElementById('regPassword').value = '';
    document.getElementById('regAge').value = '';
  }
}

  
function showRegistrationForm() {
  document.getElementById('login').style.display = 'none';
  document.getElementById('sign_up').style.display = 'block';
}


function showLoginForm() {
  document.getElementById('sign_up').style.display = 'none';
  document.getElementById('login').style.display = 'flex';
}
