(function() {
  let width = 200, height = 300;
  let noteWidthScale = 0.92;
  let noteHeightScale = 0.02;
  let canvases = document.getElementsByClassName("pattern");

  for (let canvas of canvases) {
    canvas.classList.add("p-3",);

    let data = canvas.innerHTML;
    const notesRaw = data.match(/\d+(\|[\dA-Z]+)+/g);
    var notes = notesRaw.map(part => {
      var [time, col, meta] = part.split("|");
      var color = "X", length = 0;
      if (meta !== undefined) {
        var colorMatch = meta.match(/[A-Z]/);
        color = colorMatch === null ? "R" : colorMatch[0];
        var lengthMatch = meta.match(/\d+/);
        length = lengthMatch === null ? 0 : parseInt(lengthMatch[0]);
      }
      return [parseInt(time), parseInt(col), color, length];
    });
    const timeMin = notes.reduce((acc, [time]) => Math.min(acc, time), Infinity);
    const timeMax = notes.reduce((acc, [time]) => Math.max(acc, time), -Infinity);
    notes = notes.map(([time, col, color, length]) =>
      [
        (time - timeMin) / (timeMax - timeMin),
        col, color,
        length / (timeMax - timeMin)
      ]
    );
    canvas.width = width;
    canvas.height = height;
    let nKeys = canvas.getAttribute("data-keys");
    let noteSpaceWidth = width / nKeys;
    let noteWidth = noteSpaceWidth * noteWidthScale;
    let noteHeight = canvas.height * noteHeightScale;
    let lnWidth = noteWidth * 0.7;

    let ctx = canvas.getContext("2d");
    ctx.fillStyle = '#FFF';
    ctx.strokeStyle = '#222';

    let heightFenced = height / ((noteHeight + height) / height);
    for (let [time, col, color, length] of notes) {
      if (color === "R") {
        ctx.fillStyle = '#ff4444'
      } else if (color === "G") {
        ctx.fillStyle = '#5eff5e'
      } else if (color === "B") {
        ctx.fillStyle = '#5fa9ff'
      } else if (color === "X") {
        ctx.fillStyle = 'rgba(200,200,200,255)';
      }

      let x = col * noteSpaceWidth + (noteSpaceWidth - noteWidth) / 2;
      let y = time * heightFenced;
      let w = noteWidth;
      let h = noteHeight;
      ctx.fillRect(x, y, w, h);

      let xln = x + (noteWidth - lnWidth) / 2;
      let yln = y;
      let wln = lnWidth;
      let hln = length * heightFenced;

      ctx.fillRect(xln, yln, wln, hln);
    }
  }
})();
