
# Testing

The Be Present site has been tested in the following ways - 

- [Code Validation](#code-validation)
    - [W3C HTML Validator](#w3c-html-validator) 
    - [W3C CSS Validator](#w3c-css-validator)
    - [Jshint JS Validator](#jshint-js-validator)
- [Lighthouse](#lighthouse)
- [Browser Compatibility](browser-compatibility)
- [Manual Testing](#manual-testing)
- [Bugs](#bugs)

## Code Validation 

### W3C HTML Validator

All pages passed the HTML and CSS validator without error. 

Main Page

![image](https://user-images.githubusercontent.com/112726044/204644040-df9f09fd-035b-4e26-97fe-568406a4d5a1.png)

PAGE 404

![image](https://user-images.githubusercontent.com/112726044/204643835-0ea46c95-6cc9-4a01-9e71-c29ce9dd17bf.png)

### W3C CSS Validator 

CSS

![image](https://user-images.githubusercontent.com/112726044/204644288-fafa63b9-7cf0-4a77-889c-373df8c400cd.png)

### Jshint JS Validator

Java Script

![image](https://user-images.githubusercontent.com/112726044/205960877-4abed424-4134-49a3-bb6c-234c6cd86196.png)

### Lighthouse 

I Used Lighthouse in Chrome Developer Tools to test each of the pages for:

![image](https://user-images.githubusercontent.com/112726044/204644635-f0fd4a8a-e534-4bbf-8ab7-f066c14e065b.png)

- Performance - How the page performs while loading.
- Accessibility - How accessible is the site for all users and how can it be improved.
- Best Practices - How does the site conform to industry best practices.
- SEO - Search engine optimisation. Is the site optimised for search engine result rankings.

- As an example, the results for the Be present website for desktop.

### Browser Compatibility

The site was tested and I ensured my site is working well as fallow in the table below:

| Device             | BROSWER        | OS             | VIEWPOINT     |
|--------------------|----------------|----------------|---------------|
| Iphone 14 Pro      | Safari         | iOS, v16       | 390 x 664px   |
| Iphone 12          | Safari         | iOS, v14       | 390 x 664px   |
| Samsung Galaxy S21 | Firefox        | Android, v11   | 412 x 782px   |
| Samsung Galaxy     | Chrome         | Android, v12   | 384 x 693px   |
| Moto G9            | Firefox        | Android, v10   | 412 x 804px   |
| Xiaomi Redmi       | Chrome         | Android, v11   | 393 x 736px   |
| Windows            | Opera 92       | Windows 11     | 1440 x 821px  |
| Ipad Pro 12.9      | Safari         | iOS, V15.3     | 1024 x 1292px |
| Windows 10         | Microsoft Edge | Windows 10     | 1440 x 821px  |
| MAC BOOK           | Safari 15.6    | macOS Monterey | 1440 x 821px  |

## Manual Testing

**Manual Testing For Resolution's List**
- The Add button is working.
- The Delete button is working.
- The check circle button is working.
- Pre-loading is working, If the user close the page the data still saved
- No console errors.
- Looks good on mobile.
- Looks good on tablet.
- Looks good on desktop.
- Inability to enter a blank or empty string.
- No javascript tag working.
- No console errors.
- If user goes outside of deployed site domain to say, https://naragurgel.github.io/resolutions-list/hello they see the custom 404 that takes them ask to the index.html page.

**Responsiveness**
- Bg image takes 100% with across all devices.
- Browswer xompatibolity tested and all worked fine.
- Buttons are working normally.
- Easy to undertand and to use.

## Bugs
- Clicked/ unclicked check circle was reordering itens, it was very confunsing bu I fixed the code.

### Defects of note
- I had a issue with the back ground image not going full height if user added too many items to the list. The back ground image is now fixed, so it doesn't go blank even with a lot items on the page. 

## README

[README.md](README.md) 
