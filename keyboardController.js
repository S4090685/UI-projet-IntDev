/* this is where you'd change out what the keyboard is controlling */
/* as its imported AFTER script.js where sampler is defined I can assign it here */
let keyboardSynth = sampler;

/* find keys by their class and add to array */
let allKeys = Array.from(document.getElementsByClassName("whiteKey")).concat(
  Array.from(document.getElementsByClassName("blackKey"))
);

/* set default octace : we will update based on keys later on */
let octave = 3;

/* add an event listener to each key */
allKeys.forEach((key) => {
  key.addEventListener("mousedown", (e) => {
    let note = e.target.dataset.note;
    sampler.triggerAttackRelease(note + octave, "8n");
  });
});
