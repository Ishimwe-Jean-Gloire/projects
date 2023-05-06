let myDiv = document.getElementById("my-div");
//Detect touch device
function isTouchDevice() {
  //We try to ccreate TouchEvent (it would fail for desktops and throw error)
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

const move = (e) => {
  //try to aboidany errors for touch screens
  try {
    var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
  } catch (e) {}
  //Set left and top of div based on mouse position
  myDiv.style.left = x - 160 + "px";
  myDiv.style.top = y - 160 + "px";
};

//For mouse
document.addEventListener("mousemove", (e) => {
  move(e);
});
//For touch
document.addEventListener("touchmove", (e) => {
  move(e);
});
