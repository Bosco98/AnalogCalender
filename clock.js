function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  var hourHand = document.getElementsByClassName("hourHand")[0];
  var minuteHand = document.getElementsByClassName("minuteHand")[0];
  var secondHand = document.getElementsByClassName("secondHand")[0];

  const hourDeg = (hours % 12) * 30 + minutes / 2;
  const minuteDeg = minutes * 6;
  const secondDeg = seconds * 6;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

function addFrameContainer() {
  for (var i = 1; i <= 12; i++) {
    var frameContainer = document.querySelector(".frameContainer");
    var numberContainerDiv = document.createElement("div");
    var numberDivElement = document.createElement("div");

    numberContainerDiv.className = "number";
    numberContainerDiv.innerHTML = "";
    numberContainerDiv.style.transformOrigin = "50% 50%";
    numberContainerDiv.style.transform = `rotate(${
      30 * i
    }deg) translateY(-195px) `;

    numberDivElement.innerHTML = i;
    numberDivElement.style.transformOrigin = "50% 50%";
    numberDivElement.style.transform = `rotate(-${30 * i}deg)`;

    numberContainerDiv.append(numberDivElement);
    frameContainer.append(numberContainerDiv);
  }
}

function addFrameContainerMinute() {
  for (var i = 1; i <= 60; i++) {
    var frameContainer = document.querySelector(".frameContainer");
    var numberContainerMinuteDiv = document.createElement("div");
    var numberDivElement = document.createElement("div");

    numberContainerMinuteDiv.className = "numberMinute";
    numberContainerMinuteDiv.innerHTML = "";
    numberContainerMinuteDiv.style.transformOrigin = "50% 50%";
    numberContainerMinuteDiv.style.transform = `rotate(${
      6 * i
    }deg) translateY(-237px) `;

    numberDivElement.innerHTML = i;

    numberContainerMinuteDiv.append(numberDivElement);
    if (!(i % 5 !== 0)) frameContainer.append(numberContainerMinuteDiv);
  }
}

function addDial() {
  var frameContainer = document.querySelector(".frameContainer");

  for (var i = 1; i <= 6; i++) {
    var dialDiv = document.createElement("div");
    dialDiv.className = "clockDial";
    dialDiv.style.transform = `rotate(-${30 * i}deg)`;
    frameContainer.append(dialDiv);
  }
}

function addDialMinute() {
  var frameContainer = document.querySelector(".frameContainer");

  for (var i = 1; i <= 30; i++) {
    var dialDiv = document.createElement("div");
    dialDiv.className = "clockDialMinute";
    dialDiv.style.transform = `rotate(-${6 * i}deg)`;
    if (i % 5 !== 0) frameContainer.append(dialDiv);
  }
}

addFrameContainer();
addFrameContainerMinute();
addDial();
addDialMinute();
setInterval(updateClock, 1000);
