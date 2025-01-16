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



    document.addEventListener('DOMContentLoaded', () => {
      const copyButton = document.getElementById('copyButton'); // 確保按鈕正確選取
      const textArea = document.getElementById('textArea'); // 確保文字框也正確選取

      copyButton.addEventListener('click', () => {
        const text = textArea.value; // 確保有內容可供複製
        navigator.clipboard.writeText(text).then(() => {
          console.log('文字已複製：', text);
        }).catch(err => {
          console.error('複製失敗：', err);
        });
      });
    });


