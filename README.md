# Socialcodex Trongate Module

Socialcodex is a Trongate framework module that empowers visitors to Trongate-based websites to easily share content on their preferred social media platforms. 
The module provides an interactive social sharing overlay, allowing users to select their desired social media platform, enter custom text, and share the content with their personalized message. 

By integrating Socialcodex, website owners can enhance user engagement and promote social sharing. 

This community version 0.1 of Socialcodex has been developed by Nicholo de Santi under Codex Realmz.

## Features

- Interactive social sharing overlay for visitors
- Integration with popular social media platforms
- Customizable sharing text for personalized messages
- Enhance user engagement and promote social sharing

## Requirements

- Trongate framework (version 1.0.4 or higher)

## Installation

1. Download or clone the Socialcodex module from the repository.
2. Copy the module's files into the `webroot/modules/socialcodex` directory of your Trongate project.
3. Include the necessary CSS and JavaScript files in your template or page.
4. Add the following code snippet to your desired views file where you want the social sharing overlay to appear:

```php
<?= Modules::run('socialcodex/index') ?>

Customize the appearance and behavior of the social sharing overlay by modifying the CSS and JavaScript files provided.
Usage

When a visitor interacts with the social sharing overlay on your website, they can follow these steps to share content on their preferred social media platforms:

1. lick on the overlay to activate the sharing options.
2. Select their desired social media platform.
3. Enter custom text for their personalized message.
4. The share will include their text along with the link to   the page they were on when they clicked the share button.