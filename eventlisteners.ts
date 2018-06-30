interface Article {
  id: number;
  author: string;
  comment: string;
  ref: string;
  tags: string[];
  language: string;
}

const data: Array<Article> = [
  {
    id: 0,
    author: `Mariko Kosaka`,
    comment: `Change detection on upload is a filename check, so uploading files of the same name don't register a change.`,
    ref: `https://kosamari.com/notes/know-your-file-input`,
    tags: ["browsers", "browser bugs", "web-dev", "JavaScript"],
    language: "JavaScript"
  }
];

// For date type: https://spin.atomicobject.com/2017/06/19/strongly-typed-date-string-typescript/

`const $fileInput = <HTMLInputElement>document.getElementById("file");
$fileInput.addEventListener(
  "change",
  function(event) {
    // -- busy doing application work --

    // clean up after file input
    $fileInput.value = "";
  },
  false
);`;
