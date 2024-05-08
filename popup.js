document.getElementById('host-room').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'hostRoom' });
  });
  
  document.getElementById('join-room').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'joinRoom' });
  });
  