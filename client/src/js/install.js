const butInstall = document.getElementById("buttonInstall");
console.log(butInstall)
window.addEventListener('beforeinstallprompt', (event) => {
console.log('before install')
    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
  });

butInstall.addEventListener('click', async () => {
  console.log('clicked')
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  // Show prompt
  promptEvent.prompt();
  
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  console.log('app already installed')
  // Clear prompt
  window.deferredPrompt = null;
}); 
