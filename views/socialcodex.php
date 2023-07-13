<html>
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1" >

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
<nav class="shareit">
    <div class="dropdown">
    <div class="dropdown-btn share-btn" onclick="toggleDropdown()" title="Share Now">
  <i class="fas fa-share"></i>
</div>
      <div class="dropdown-content" id="dropdownContent">
        <a class="facebook" href="<?php current_url()?>" onclick="shareFacebook()" title="Facebook">
          <i class="fab fa-facebook" aria-hidden="true"></i>
        </a>
        <a class="twitter" href="#" onclick="shareTwitter()" title="Twitter">
          <i class="fab fa-twitter" aria-hidden="true"></i>
        </a>
        <a class="linkedin" href="#" onclick="shareLinkedIn()" title="LinkedIn">
          <i class="fab fa-linkedin" aria-hidden="true"></i>
        </a>
        <a class="reddit" href="#" onclick="shareReddit()" title="Reddit">
          <i class="fab fa-reddit" aria-hidden="true"></i>
        </a>
        <a class="tumblr" href="#" onclick="shareTumblr()" title="Tumblr">
          <i class="fab fa-tumblr" aria-hidden="true"></i>
        </a>
        <a class="pinterest" href="#" onclick="sharePinterest()" title="Pinterest">
          <i class="fab fa-pinterest-p" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </nav>
  <style>
    @import url('<?= BASE_URL ?>socialcodex_module/css/socialcodex.css');
</style>
  <script src="<?= BASE_URL ?>socialcodex_module/js/socialcodex.js"></script>
</body>
</html>
