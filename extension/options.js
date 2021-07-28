function updateStatus() {
    // Update status to let user know options were saved.
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function () {
        status.textContent = '';
    }, 750);
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
    console.log('restoring...')
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        darkModeEnabled: false
    }, function(items) {
        document.getElementById('dark-mode').checked = items.darkModeEnabled;
    });
}

function storeDarkModeOption(e) {
    console.log('storing...')
    const enabled = document.getElementById('dark-mode').checked;

    chrome.storage.sync.set({
        darkModeEnabled: enabled,
    }, updateStatus);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', storeDarkModeOption);