(function () {
  let width = 200,
    height = 300,
    noteWidthScale = 0.92,
    noteHeightScale = 0.05;

  // Select the <pre><code> element containing the data
  const codeElement = document.querySelector('pre code');
  const canvas = document.createElement('canvas');

  if (codeElement && codeElement.parentNode) {
    codeElement.parentNode.insertBefore(canvas, codeElement.nextSibling);
  }

  // Extract and process the data from the <code> element
  let data = codeElement.textContent;
  codeElement.remove();
  const notesRaw = data.match(/\d+(\|[\dA-Z]+)+/g);
  let notes = notesRaw.map(part => {
    let [time, col, meta] = part.split("|");
    let color = "X", length = 0;
    if (meta !== undefined) {
      let colorMatch = meta.match(/[A-Z]/);
      color = colorMatch?.[0] ?? "R";
      let lengthMatch = meta.match(/\d+/);
      length = parseInt(lengthMatch?.[0] ?? 0);
    }
    return [parseInt(time), parseInt(col), color, length];
  });
  const timeMin = notes.reduce(
    (acc, [time]) => Math.min(acc, time), Infinity
  );
  const timeMax = notes.reduce(
    (acc, [time]) => Math.max(acc, time), -Infinity
  );

  notes = notes.map(([time, col, color, length]) =>
    [
      (time - timeMin) / (timeMax - timeMin),
      col, color,
      length / (timeMax - timeMin)
    ]
  );

  canvas.width = width;
  canvas.height = height;

  let nKeys = notes.reduce((acc, [_, col]) => Math.max(acc, col), 0) + 1
    noteSpaceWidth = width / nKeys,
    noteWidth = noteSpaceWidth * noteWidthScale,
    noteHeight = canvas.height * noteHeightScale, lnWidth = noteWidth * 0.7,
    ctx = canvas.getContext("2d");

  ctx.fillStyle = "#333"
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#FFF';
  ctx.strokeStyle = '#222';

  let heightFenced = height / ((noteHeight + height) / height);
  for (let [time, col, color, length] of notes) {
    const colorMap = {
      "R": '#ff4444',
      "G": '#5eff5e',
      "B": '#5fa9ff',
    };

    ctx.fillStyle = colorMap[color] || '#DDD'; // Default color if not found

    let x = col * noteSpaceWidth + (noteSpaceWidth - noteWidth) / 2;
    let y = time * heightFenced;
    let w = noteWidth;
    let h = noteHeight;
    ctx.fillRect(x, y, w, h);

    if (length > 0) {
      let xln = x + (noteWidth - lnWidth) / 2;
      let yln = y;
      let wln = lnWidth;
      let hln = length * heightFenced;

      ctx.fillRect(xln, yln, wln, hln);
    }
  }
})();
