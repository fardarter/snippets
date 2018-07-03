interface Article {
  id: number;
  author: string;
  comment: string;
  ref: string;
  tags: string[];
  language: string;
  source: string;
  snippet: string | null;
}

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

const data: Array<Article> = [
  {
    id: 0,
    author: `Mariko Kosaka`,
    comment: `Change detection on upload is a filename check, so uploading files of the same name don't register a change.`,
    ref: `https://kosamari.com/notes/know-your-file-input`,
    tags: ["browsers", "browser bugs", "web-dev", "JavaScript"],
    language: "JavaScript",
    source: "Blog",
    snippet: `const $fileInput = <HTMLInputElement>document.getElementById("file");
$fileInput.addEventListener(
  "change",
  function(event) {
    // -- busy doing application work --

    // clean up after file input
    $fileInput.value = "";
  },
  false
);`
  },
  {
    id: 1,
    author: `Cory House`,
    comment: `Project invorporating four different ways of building a React app, including one with the context API, one with sagas, and one with thunk.`,
    ref: `https://github.com/coryhouse/pluralsight-redux-app-used-to-build-script`,
    tags: [
      "react",
      "context",
      "comparison",
      "JavaScript",
      "github",
      "comparison",
      "sagas",
      "thunk",
      "redux"
    ],
    language: "JavaScript",
    source: "Github",
    snippet: null
  }
];

// For date type: https://spin.atomicobject.com/2017/06/19/strongly-typed-date-string-typescript/
