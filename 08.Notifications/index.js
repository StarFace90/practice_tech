// 인터넷에서 흔히? 보는 알람창을 만들기 위한 함수
function showNotification() {
  let notification = new Notification(
    "localhost로부터 새로운 메시지가 왔습니다!",
    {
      body: "뭐하고 있어? 우리 같이 사이드 프로젝트 하나 안할래???", // 본문 텍스트
      icon: "./assets/hi.png", // icon
    }
  );

  notification.onclick = (e) => {
    window.location.href = "https://google.com";
  };
}

console.log(Notification.permission); // default;

if (Notification.permission === "granted") {
  showNotification(); //alert("접근 허가");
} else if (Notification.permission !== "denied")
  // 권한요청 알람
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      // console.log(permission);
      showNotification();
    }
  }); // granted or denied
