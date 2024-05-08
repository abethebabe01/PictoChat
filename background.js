let peerConnection = null;
let localStream = null;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'hostRoom') {
    startHostingRoom();
  } else if (message.action === 'joinRoom') {
    joinRoom();
  }
});

function startHostingRoom() {
  // Implement WebSocket server connection and create a new room
  // Initialize WebRTC peer connection and share the audio stream
}

function joinRoom() {
  // Join an existing WebSocket room
  // Initialize WebRTC peer connection to receive audio stream
}

// Placeholder for WebRTC functions
