let nav = document.getElementsByTagName("nav")[0];
let toggle = document.getElementById("toggle");
let ul = document.getElementById("nav-ul");
let arrow = document.getElementsByClassName("up-arrow")[0];
let toggler = document.getElementsByClassName("navbar-toggler")[0];
let collapse = document.getElementsByClassName("collapse")[0];
let carouselBody = document.getElementById("carouselBody");

window.onscroll = function () {
  if (scrollY > 0) {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    nav.style.padding = "8px 0";
  } else {
    nav.style.backgroundColor = "transparent";
    nav.style.padding = "18px 0";
  }

  if (scrollY > 50) {
    arrow.style.visibility = "visible";
    arrow.style.opacity = "1";
  } else {
    arrow.style.visibility = "hidden";
    arrow.style.opacity = "0";
  }
};

toggler.onclick = function () {
  collapse.classList.toggle("bg-light");
};

function getSrc(a) {
  console.log(a);
  if (a == "one") {
    carouselBody.innerHTML = `
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/work-1.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-2.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-3.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-4.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-5.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-6.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        `;
  } else if (a == "two") {
    carouselBody.innerHTML = `
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/work-2.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-3.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-4.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-5.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-6.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-1.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        `;
  } else if (a == "three") {
    carouselBody.innerHTML = `
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/work-3.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-4.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-5.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-6.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-1.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-2.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        `;
  } else if (a == "four") {
    carouselBody.innerHTML = `
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/work-4.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-5.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-6.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-1.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-2.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-3.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        `;
  } else if (a == "five") {
    carouselBody.innerHTML = `
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/work-5.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-6.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-1.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-2.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-3.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-4.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        `;
  } else if (a == "six") {
    carouselBody.innerHTML = `
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/work-6.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-1.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-2.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-3.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-4.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/work-5.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        `;
  }
}
