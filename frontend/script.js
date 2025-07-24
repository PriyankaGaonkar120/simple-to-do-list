function addTask() {
  const taskInput = document.getElementById("task");
  const dateInput = document.getElementById("date");
  const timeInput = document.getElementById("time");

  const taskText = taskInput.value.trim();
  const date = dateInput.value;
  const time = timeInput.value;

  if (!taskText || !date || !time) {
    alert("Please fill out all fields.");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.className = "task";

  const btn = document.createElement("button");
  btn.innerText = "✔ Done";
  btn.className = "done-btn";
  btn.onclick = () => li.remove();

  const taskContent = document.createElement("div");
  taskContent.className = "task-text";
  taskContent.innerText = taskText;

  const details = document.createElement("div");
  details.className = "task-details";
  details.innerText = `${date} | ${time}`;

  li.appendChild(btn);
  li.appendChild(taskContent);
  li.appendChild(details);
  taskList.appendChild(li);

  taskInput.value = "";
  dateInput.value = "";
  timeInput.value = "";
}
