var dropdownContent = document.getElementById("dropdownContent");
var shareButton = document.querySelector(".dropdown-btn");
var isDropdownOpen = false;
var dropdownTimeout;

shareButton.addEventListener("mouseenter", function() {
  clearTimeout(dropdownTimeout);
  dropdownContent.style.display = "block";
  isDropdownOpen = true;
});

shareButton.addEventListener("mouseleave", function() {
  closeDropdown();
});

dropdownContent.addEventListener("mouseenter", function() {
  clearTimeout(dropdownTimeout);
});

dropdownContent.addEventListener("mouseleave", function() {
  dropdownTimeout = setTimeout(function() {
    closeDropdown();
  }, 200); // Adjust the delay duration as needed
});

function closeDropdown() {
  isDropdownOpen = false;
  dropdownTimeout = setTimeout(function() {
    dropdownContent.style.display = "none";
  }, 200); // Adjust the delay duration as needed
}

function shareFacebook() {
  var url = encodeURIComponent(window.location.href);
  var text = prompt("Enter your custom Facebook post text:", "");

  if (text !== null) {
    var shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + url + "&quote=" + encodeURIComponent(text);
    createShareWindow(shareUrl);
  }
}

function shareTwitter() {
  var title = encodeURIComponent(document.title);
  var url = encodeURIComponent(window.location.href);
  var text = prompt("Enter your custom tweet text:", "");

  if (text !== null) {
    var shareUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text) + "&url=" + url;
    createShareWindow(shareUrl);
  }
}

function shareLinkedIn() {
  var title = encodeURIComponent(document.title);
  var url = encodeURIComponent(window.location.href);
  var text = prompt("Enter your custom LinkedIn post text:", "");

  if (text !== null) {
    var shareUrl = "https://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + title + "&summary=" + encodeURIComponent(text);
    createShareWindow(shareUrl);
  }
}

function shareReddit() {
  var title = encodeURIComponent(document.title);
  var url = encodeURIComponent(window.location.href);
  var text = prompt("Enter your custom Reddit post title:", "");

  if (text !== null) {
    var shareUrl = "https://www.reddit.com/submit?url=" + url + "&title=" + encodeURIComponent(text);
    createShareWindow(shareUrl);
  }
}

function shareTumblr() {
  var title = encodeURIComponent(document.title);
  var url = encodeURIComponent(window.location.href);
  var text = prompt("Enter your custom Tumblr post text:", "");

  if (text !== null) {
    var shareUrl = "https://www.tumblr.com/share/link?url=" + url + "&name=" + title + "&description=" + encodeURIComponent(text);
    createShareWindow(shareUrl);
  }
}

function sharePinterest() {
  var title = encodeURIComponent(document.title);
  var url = encodeURIComponent(window.location.href);
  var text = prompt("Enter your custom Pinterest pin description:", "");

  if (text !== null) {
    var shareUrl = "https://pinterest.com/pin/create/button/?url=" + url + "&media=&description=" + encodeURIComponent(text);
    createShareWindow(shareUrl);
  }
}

function createShareWindow(shareUrl) {
  var shareWindow = window.open(shareUrl, "_blank");
  if (shareWindow) {
    shareWindow.opener = null;
    shareWindow.focus();
  } else {
    // Handle if the window couldn't be opened
    // For example, display an error message or open the URL in the current window/tab
    window.location.href = shareUrl;
  }
}
