interface IArticle {
  id: number;
  author: string | string[] | null;
  comment: string;
  ref: string;
  tags: string[];
  language: string;
  source: string;
  snippet: string | null;
  snippetType: string | null;
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

//null-byte.wonderhowto.com/how-to/spy-your-buddys-network-traffic-intro-wireshark-and-osi-model-0133807/

http: https: const data: Array<IArticle> = [
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
);`,
    snippetType: "TypeScript"
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
    snippet: null,
    snippetType: null
  },
  {
    id: 2,
    author: null,
    comment: `Logging into PostgreSQL`,
    ref: `https://www.a2hosting.co.za/kb/developer-corner/postgresql/managing-postgresql-databases-and-users-from-the-command-line`,
    tags: ["postgres", "commandline", "database", "login", "documentation"],
    language: "SQL",
    source: "Article",
    snippet: `sudo su - postgres`,
    snippetType: "comandline"
  },
  {
    id: 3,
    author: null,
    comment: `Accessing the user tables`,
    ref: `http://www.postgresqltutorial.com/postgresql-list-users/`,
    tags: ["psql", "postgres", "commandline", "database", "basic commands"],
    language: "SQL",
    source: "Article",
    snippet: `sudo su - postgres`,
    snippetType: "comandline"
  },
  {
    id: 4,
    author: null,
    comment: `Logging into PostgreSQL commandline psql`,
    ref: `http://suite.opengeo.org/docs/latest/dataadmin/pgGettingStarted/firstconnect.html`,
    tags: [
      "postgres",
      "commandline",
      "database",
      "basic commands",
      "connecting",
      "psql"
    ],
    language: "SQL",
    source: "Article",
    snippet: `sudo -u postgres psql postgres`,
    snippetType: "comandline"
  },
  {
    id: 5,
    author: null,
    comment: `All the basics of postgresql`,
    ref: `https://www.ntu.edu.sg/home/ehchua/programming/sql/PostgreSQL_GetStarted.html`,
    tags: [
      "postgres",
      "commandline",
      "database",
      "basic commands",
      "psql",
      "documentation"
    ],
    language: "SQL",
    source: "Article",
    snippet: `sudo -u postgres psql postgres`,
    snippetType: "comandline"
  },
  {
    id: 6,
    author: null,
    comment: `.NET Postgres`,
    ref: `www.npgsql.org`,
    tags: ["npgsql", ".NET", "database", "Postgres", "documentation"],
    language: "SQL",
    source: "Offical",
    snippet: ``,
    snippetType: null
  },
  {
    id: 7,
    author: ["Rick Anderson", "Nino Uzelak"],
    comment: `.NET Entity Framework Core`,
    ref: `  https://docs.microsoft.com/en-us/ef/core/get-started/aspnetcore/new-db`,
    tags: [
      "EF Core",
      ".NET",
      "Core",
      "Entity Framework",
      "Microsoft",
      "database",
      "documentation"
    ],
    language: "SQL",
    source: "Offical",
    snippet: `<ul><li>Tools > NuGet Package Manager > Package Manager Console</li>
                  <li>Run Install-Package Microsoft.EntityFrameworkCore.SqlServer</li>
                  <li>We will be using some Entity Framework Core Tools to create a database from your EF Core model. So we will install the tools package as well:</li>
                  <li>Run Install-Package Microsoft.EntityFrameworkCore.Tools</li>
                  <li>We will be using some ASP.NET Core Scaffolding tools to create controllers and views later on. So we will install this design package as well:</li>
                  <li>Run Install-Package Microsoft.VisualStudio.Web.CodeGeneration.Design</ul>`,
    snippetType: "HTML"
  }
];

// For date type: https://spin.atomicobject.com/2017/06/19/strongly-typed-date-string-typescript/
