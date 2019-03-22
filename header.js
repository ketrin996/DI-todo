
const elementBody = document.body;

let headers = `<header>
        <div class="header-logo">
    <img src="./images/di2.svg" alt="Di To">
    </div>
    <div class="header-separator">
    <img src="./images/di1.svg" alt="Line">
    </div>
    <div class="header-todod">
    <img src="./images/di3.svg" alt="To">
    </div>
      </header>`;

headers = new DOMParser().parseFromString(headers, "text/html").body.firstChild;

elementBody.appendChild(headers);

