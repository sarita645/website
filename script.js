// 開啟彈窗
function openModal() {
  document.getElementById("myModal").style.display = "flex";
}

// 關閉彈窗
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// 複製文字到剪貼板
function copyToClipboard() {
  const copyText = document.getElementById("copyText").innerText;
  navigator.clipboard.writeText(copyText).then(() => {
    alert("Text copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy text: ", err);
  });
}

// 點擊彈窗外部區域關閉彈窗
window.onclick = function(event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    closeModal();
  }
}

// 加載導航列
document.addEventListener("DOMContentLoaded", function () {
  let basePath = window.location.pathname.includes('/uiux/') ? '../includes/navbar.html' : 'includes/navbar.html';
  fetch(basePath)
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-container').innerHTML = data;
      highlightCurrentPage(); // 如果有高亮目前頁面功能，也要確保它執行
    })
    .catch(error => console.error('Navbar 加載錯誤:', error));
});
