(function () {
  let width = 100,
    height = 200,
    noteWidthScale = 0.92,
    noteHeightScale = 0.05;

  // Select the <pre><code> element containing the data
  var codeElements = document.querySelectorAll(
    'pre code[class^="language-osumania"], div[class^="osumania"]'
  );
  for (const codeElement of codeElements) {
    // Given the class is of form language-osumania-<Keys>
    // Get the keys
    const nKeys = parseInt(codeElement.className.match(/\d+/)[0]);

    // Create a canvas element to draw
    // We will replace the <code> element with this canvas
    const canvas = document.createElement('canvas');
    if (codeElement && codeElement.parentNode) {
      codeElement.parentNode.insertBefore(canvas, codeElement.nextSibling);
    }

    // Extract then delete the <code> element
    let data = codeElement.textContent;
    codeElement.remove();

    // Extract the notes from the data
    // This format should follow the editor format
    const notesRaw = data.match(/\d+(\|[\dA-Z]+)+/g);

    // Preprocess the notes
    let notes = notesRaw.map(part => {
      // It should be in the format <time>|<column>|<meta>
      // Meta includes the color and length of the note, which should include
      // an uppercase letter and a number respectively (regardless of order)
      // Meta is optional
      let [time, col, meta] = part.split("|");
      [time, col] = [time, col].map(x => parseInt(x));

      let color, length;
      if (meta !== undefined) {
        let colorMatch = meta.match(/[A-Z]/);
        color = colorMatch?.[0] ?? "R";
        let lengthMatch = meta.match(/\d+/);
        length = parseInt(lengthMatch?.[0] ?? 0);
      }

      return [time, col, color, length];
    });

    // Extract the lower and upper bounds of the time
    const timeMin = notes.reduce(
      (acc, [time]) => Math.min(acc, time), Infinity
    );
    const timeMax = notes.reduce(
      (acc, [time]) => Math.max(acc, time), -Infinity
    );

    // ... to normalize the time: (x - timeMin) / (timeMax - timeMin)
    notes = notes.map(([time, col, color, length]) =>
      [
        (time - timeMin) / (timeMax - timeMin),
        col, color,
        length / (timeMax - timeMin)
      ]
    );

    canvas.width = width;
    canvas.height = height;

    let noteSpaceWidth = width / nKeys,
      noteWidth = noteSpaceWidth * noteWidthScale,
      noteHeight = canvas.height * noteHeightScale, lnWidth = noteWidth * 0.7,
      ctx = canvas.getContext("2d");

    ctx.fillStyle = "#333"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#FFF';
    ctx.strokeStyle = '#222';

    // Height Fenced is the adjusted height of the canvas
    // Which includes an additional height of the last note
    let heightFenced = height / ((noteHeight + height) / height);

    for (let [time, col, color, length] of notes) {
      // Color mapping dictionary, default is gray
      const colorMap = {
        "R": '#ff4444',
        "P": '#9f59ff',
        "G": '#5eff5e',
        "B": '#5fa9ff',
      };

      ctx.fillStyle = colorMap[color] || '#DDD'; // Default color if not found

      // Handle Notes
      let x = col * noteSpaceWidth + (noteSpaceWidth - noteWidth) / 2;
      // Flip the y-axis to start from bottom
      let y = (1 - time) * heightFenced;
      let w = noteWidth;
      let h = noteHeight;
      ctx.fillRect(x, y, w, h);

      // Handle LNs
      if (length > 0) {
        let xln = x + (noteWidth - lnWidth) / 2;
        let yln = y;
        let wln = lnWidth;
        // Reverse the height to be to render tail upwards
        let hln = -length * heightFenced;

        ctx.fillRect(xln, yln, wln, hln);
      }
    }
  }
})();
