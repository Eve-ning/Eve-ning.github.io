(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class 'icon-badge'
    const iconBadges = document.querySelectorAll('div.icon-badge');

    iconBadges.forEach(function (div) {
      const parent = div.parentNode;
      // Split the 'data-name' attribute value by commas to handle multiple technologies
      const iconNames = div.getAttribute('data-name').split(',');
      iconNames.forEach(function (iconName) {
        iconName = iconName.trim();
        // Create a new div element for each technology
        const newDiv = document.createElement('div');
        // Add the 'icon-badge' class to the new div for styling
        newDiv.classList.add('icon-badge');

        // Create an img element for the technology icon
        const img = document.createElement('img');
        // Set the source of the img to the corresponding icon file
        img.setAttribute('src', "{{ site.baseurl }}/assets/icons/" + iconName + ".svg");
        // Add the 'icon-badge-img' class to the img for styling
        img.classList.add('icon-badge-img');

        // Create a span element for the technology name
        const textSpan = document.createElement('span');
        // Set the text content of the span to the technology name
        textSpan.textContent = iconName;
        // Add the 'icon-badge-text' class to the span for styling
        textSpan.classList.add('icon-badge-text');

        // Append the img and span to the new div
        newDiv.appendChild(img);
        newDiv.appendChild(textSpan);

        // Insert the new div before the original 'icon-badge' div in the DOM
        parent.insertBefore(newDiv, div);
      });
      // Remove the original 'icon-badge' div from the DOM
      parent.removeChild(div);
    });
  });
})();
