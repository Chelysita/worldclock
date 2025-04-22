function updateTime() {
  let mexicoCityElement = document.querySelector("#mexico-city");
  let mexicoCityDateElement = mexicoCityElement.querySelector(".date");
  let mexicoCityTimeElement = mexicoCityElement.querySelector(".time");
  let mexicoCityTime = moment().tz("America/Mexico_City");
  mexicoCityDateElement.innerHTML = mexicoCityTime.format("MMMM Do YYYY");
  mexicoCityTimeElement.innerHTML = mexicoCityTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let bostonElement = document.querySelector("#boston");
  let bostonDateElement = bostonElement.querySelector(".date");
  let bostonTimeElement = bostonElement.querySelector(".time");
  let bostonTime = moment().tz("America/New_York");
  bostonDateElement.innerHTML = bostonTime.format("MMMM Do YYYY");
  bostonTimeElement.innerHTML = bostonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
