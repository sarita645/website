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
