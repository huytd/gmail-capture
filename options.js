// Saves options to chrome.storage.sync.
function save_options() {
    var defaultRecipient = document.getElementById('txtRecipient').value;
    var debugP = document.getElementById('debug').checked;
    var overlayP = document.getElementById('overlay').checked;

    chrome.storage.sync.set({
        defaultRecipient: defaultRecipient,
        debug: debugP,
        overlay: overlayP
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        debug: false,
        overlay: true,
        defaultRecipient: ''
    }, function(options) {
        document.getElementById('txtRecipient').value = options.defaultRecipient;
        document.getElementById('debug').checked = options.debug;
        document.getElementById('overlay').checked = options.overlay;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
                                                 save_options);
