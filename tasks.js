function handleLevel1Task1(event) {
  event.preventDefault();
  let name = document.getElementById("nameInput").value;
  let number = parseInt(document.getElementById("numberInput").value);
  let computedSum = number + 10;
  let isValid = true;

  console.log("Name:", name);
  console.log("Number + 10:", computedSum);
  console.log("Boolean:", isValid);

  document.getElementById("output1").innerHTML =
    `Name: ${name}<br>Number + 10: ${computedSum}<br>Boolean: ${isValid}`;
}

function handleLevel1Task2(event) {
  event.preventDefault();
  let num = parseInt(document.getElementById("evenOddInput").value);
  let evenOdd = (num % 2 === 0) ? "Even" : "Odd";

  let output = `<p>${num} is ${evenOdd}</p><p>For Loop:<br>`;
  for (let i = 1; i <= 10; i++) output += i + " ";
  output += "</p><p>While Loop:<br>";
  let count = 5;
  while (count >= 1) output += count-- + " ";
  output += "</p>";

  document.getElementById("output2").innerHTML = output;
}

function handleLevel2Task1(event) {
  event.preventDefault();
  let num = parseInt(document.getElementById("tableInput").value);
  let output = "";
  for (let i = 1; i <= 10; i++) {
    output += `<li>${num} × ${i} = ${num * i}</li>`;
  }
  document.getElementById("tableOutput").innerHTML = output;
}

function handleLevel2Task2(event) {
  event.preventDefault();
  let num1 = parseFloat(document.getElementById("calcNum1").value);
  let num2 = parseFloat(document.getElementById("calcNum2").value);
  let operator = document.getElementById("calcOperator").value;
  let result;

  switch (operator) {
    case "+": result = num1 + num2; break;
    case "-": result = num1 - num2; break;
    case "*": result = num1 * num2; break;
    case "/": result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0"; break;
  }

  document.getElementById("calcResult").innerText = "Result: " + result;
}

function handleLevel3Task1(event) {
  event.preventDefault();
  const num = parseFloat(document.getElementById("squareInput").value);
  document.getElementById("squareOutput").innerText = `Square of ${num} is ${num * num}`;
}

function handleLevel3Task2(event) {
  event.preventDefault();
  const color1 = document.getElementById("color1").value;
  const color2 = document.getElementById("color2").value;
  const output = document.getElementById("colorOutput");
  output.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

function updateClock() {
  const now = new Date();
  document.querySelector("#localClock .time").innerHTML = 
    now.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
}
setInterval(updateClock, 1000);

let isOn = false;
function toggleBulb() {
  isOn = !isOn;
  document.getElementById("bulb").style.backgroundColor = 
    isOn ? "yellow" : "#333";
}

let counter = 0;
function incrementCounter() {
  document.getElementById('counterValue').textContent = ++counter;
}
function decrementCounter() {
  document.getElementById('counterValue').textContent = --counter;
}

function togglePassword() {
  const field = document.getElementById('passwordField');
  field.type = field.type === 'password' ? 'text' : 'password';
}

function addElement() {
  const list = document.getElementById('elementList');
  const newElement = document.createElement('div');
  newElement.textContent = `Item ${list.children.length + 1}`;
  newElement.onclick = () => newElement.remove();
  list.appendChild(newElement);
}

function validateForm(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  let message = '';
  if (username.length < 3) message += 'Username too short. ';
  if (!email.includes('@')) message += 'Invalid email. ';
  if (password.length < 6) message += 'Password too short. ';
  
  document.getElementById('validationMessage').textContent = 
    message || 'Form valid!';
}

function liveValidate(field) {
  const value = document.getElementById(field).value;
  let message = '';
  
  switch(field) {
    case 'userName':
      message = value.length < 3 ? 'Too short' : '✓';
      break;
    case 'userEmail':
      message = value.includes('@') ? '✓' : 'Invalid email';
      break;
  }
  
  document.getElementById(`${field}Msg`).textContent = message;
}

function handleRegistration(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  alert('Registration successful for ' + formData.get('fullName'));
}

const quotes = [
  {text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde"},
  {text: "Two things are infinite: the universe and human stupidity.", author: "Albert Einstein"}
];

function generateQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').textContent = quote.text;
  document.getElementById('author').textContent = `- ${quote.author}`;
}

function addTask() {
  const input = document.getElementById('taskInput');
  if(input.value) {
    const li = document.createElement('li');
    li.innerHTML = `${input.value} <button onclick="this.parentElement.remove()">×</button>`;
    document.getElementById('taskList').appendChild(li);
    input.value = '';
  }
}

function submitFeedback() {
  const type = document.getElementById('feedbackType').value;
  const text = document.getElementById('feedbackText').value;
  if(text) {
    alert(`Feedback submitted: ${type}\n${text}`);
    document.getElementById('feedbackText').value = '';
  }
}

let notes = JSON.parse(localStorage.getItem('notes') || '[]');

function saveNote() {
  const text = document.getElementById('noteInput').value;
  if(text) {
    notes.push({text, date: new Date().toISOString()});
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
    document.getElementById('noteInput').value = '';
  }
}

function displayNotes() {
  const html = notes.map(note => `
    <div class="note">${note.text}<br><small>${new Date(note.date).toLocaleDateString()}</small></div>
  `).join('');
  document.getElementById('notesList').innerHTML = html;
}

function saveJournalEntry() {
  const date = document.getElementById('journalDate').value;
  const entry = document.getElementById('journalEntry').value;
  if(date && entry) {
    localStorage.setItem(`journal_${date}`, entry);
    displayJournalEntries();
  }
}

function displayJournalEntries() {
  const entries = Object.keys(localStorage)
    .filter(key => key.startsWith('journal_'))
    .map(key => {
      const date = key.replace('journal_', '');
      return `<div class="entry">
        <strong>${date}</strong><br>${localStorage.getItem(key)}
      </div>`;
    })
    .join('');
  document.getElementById('journalEntries').innerHTML = entries;
}

function saveVisitor() {
  const name = document.getElementById('visitorName').value;
  if(name) {
    sessionStorage.setItem('visitorName', name);
    showWelcome();
  }
}

function showWelcome() {
  const name = sessionStorage.getItem('visitorName');
  if(name) {
    document.getElementById('welcomeMessage').textContent = `Welcome back, ${name}!`;
  }
}

function updatePreferences() {
  const theme = document.getElementById('themeSelect').value;
  const fontSize = document.getElementById('fontSize').value;
  
  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
    handleDarkTheme();
  } else {
    document.body.classList.remove('dark-theme');
    handleLightTheme();
  }
  
  document.body.style.fontSize = `${fontSize}px`;
  localStorage.setItem('userPreferences', JSON.stringify({theme, fontSize}));
}

function handleDarkTheme() {
  document.body.style.backgroundColor = '#333';
  document.body.style.color = '#fff';
  
  document.querySelectorAll('.level').forEach((level, index) => {
    const levelColor = getComputedStyle(document.documentElement)
      .getPropertyValue(`--level${index + 1}-color`);
    level.style.backgroundColor = `color-mix(in srgb, ${levelColor} 15%, #222)`;
    
    level.querySelectorAll('.task').forEach(task => {
      task.style.backgroundColor = `color-mix(in srgb, ${levelColor} 25%, #333)`;
      task.style.color = '#fff';
      
      task.querySelectorAll('h3, p, label, span').forEach(el => {
        el.style.color = '#fff';
      });
    });
  });

  document.querySelectorAll('input, select, textarea').forEach(element => {
    element.style.backgroundColor = '#555';
    element.style.color = '#fff';
    element.style.borderColor = '#666';
  });

  document.querySelectorAll('input, textarea').forEach(element => {
    element.classList.add('dark-input');
  });
}

function handleLightTheme() {
  document.body.style.backgroundColor = '#f9f9f9';
  document.body.style.color = '#000';
  
  document.querySelectorAll('.level').forEach(level => {
    level.style.backgroundColor = '';
    level.querySelectorAll('.task').forEach(task => {
      task.style.backgroundColor = '';
      task.style.color = '';
      
      task.querySelectorAll('h3, p, label, span').forEach(el => {
        el.style.color = '';
      });
    });
  });

  document.querySelectorAll('input, select, textarea').forEach(element => {
    element.style.backgroundColor = '#fff';
    element.style.color = '#000';
    element.style.borderColor = '#ddd';
  });

  document.querySelectorAll('input, textarea').forEach(element => {
    element.classList.remove('dark-input');
  });
}

window.onload = function() {
  generateQuote();
  displayNotes();
  displayJournalEntries();
  showWelcome();
  
  const prefs = JSON.parse(localStorage.getItem('userPreferences') || '{}');
  if(prefs.theme) {
    document.getElementById('themeSelect').value = prefs.theme;
    document.getElementById('fontSize').value = prefs.fontSize;
    updatePreferences();
  }
};
