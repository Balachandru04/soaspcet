/* ================= LOAD GOOGLE FONT ================= */
const font = document.createElement("link");
font.rel = "stylesheet";
font.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap";
document.head.appendChild(font);

/* ================= HEADER CSS ================= */
const style = document.createElement("style");
style.innerHTML = `
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Poppins',sans-serif;
}

/* Top Yellow Bar */
.top-bar{
  background-color:#FFD700;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  padding:12px 15px;
  font-size:14px;
}

.top-right .btn{
  background:#f43678;
  color:white;
  padding:8px 15px;
  border-radius:5px;
  font-size:14px;
  font-weight:500;
}

/* Nav Bar */
.nav-bar{
  background:white;
  display:flex;
  flex-direction:column;
  padding:15px;
  border-bottom:1px solid #e0e0e0;
}

.logo-section{
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;
}

.college-logo{
  height:70px;
  margin-right:15px;
}

.college-name h1{
  font-size:18px;
  font-weight:1000;
  color:#003366;
}

.menu{
  display:flex;
  flex-wrap:wrap;
  gap:18px;
  margin-top:10px;
}

.menu a{
  text-decoration:none;
  color:black;
  font-weight:500;
  font-size:15px;
  padding-bottom:10px;
}

/* Hamburger */
.menu-icon{
  display:none;
  font-size:22px;
  background:none;
  border:none;
  cursor:pointer;
}

/* Desktop */
@media(min-width:1025px){
  .top-bar{
    flex-direction:row;
    justify-content:space-between;
    padding:12px 30px;
  }
  .nav-bar{
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:15px 30px;
  }
  .menu{
    flex-wrap:nowrap;
    margin-top:0;
  }
}

/* Mobile */
@media(max-width:1024px){
  .nav-bar{
    position:relative;
    z-index:2000;
  }
  .menu-icon{
    display:block;
  }
  .menu{
    display:none;
    flex-direction:column;
    width:100%;
    position:absolute;
    top:100%;
    left:0;
    right:0;
    background:white;
    border:1px solid #ddd;
    z-index:3000;
  }
  .menu.show{
    display:flex;
  }
  .menu a{
    padding:12px 15px;
    border-top:1px solid #e0e0e0;
  }
}
`;
document.head.appendChild(style);

/* ================= HEADER HTML ================= */
const header = document.createElement("header");
header.innerHTML = `
<!-- TOP BAR -->
<div class="bg-warning py-2">
  <div class="container">
    <div class="row align-items-center text-center text-md-start gy-3 gy-md-0">

      <div class="col-12 col-md-3 d-flex justify-content-center justify-content-md-start gap-2">
        <img src="assets/au.png" style="max-height:60px">
        <img src="assets/coa.jpg" style="max-height:60px">
      </div>

      <div class="col-12 col-md-6">
        <strong>For Admission</strong><br>
        +91 97910 43355 &nbsp; +91 73581 10157<br>
        044-26558092 &nbsp; +91 73581 10159
      </div>

      <div class="col-12 col-md-3 d-flex justify-content-center justify-content-md-end gap-2">
        <a href="assets/Mandatory_Disclosure.pdf" class="btn btn-danger btn-sm" target="_blank">
          Mandatory Disclosure
        </a>
        <a href="helpdesk.html" class="btn btn-danger btn-sm">Help Desk</a>
      </div>

    </div>
  </div>
</div>

<!-- NAV BAR -->
<div class="nav-bar">
  <div class="logo-section">
    <div style="display:flex;align-items:center">
      <img src="assets/coa_1.jpeg" class="college-logo">
      <div class="college-name">
        <h1>School of Architecture,</h1>
        <h1>St. Peter’s College of Engineering and Technology, Chennai</h1>
      </div>
    </div>
    <button class="menu-icon" id="menuBtn">☰</button>
  </div>

  <nav class="menu" id="menu">
    <a href="home.html">Home</a>
    <a href="Administration.html">Administration</a>
    <a href="Academics.html">Academics</a>
    <a href="infrastructure.html">Infrastructure</a>
    <a href="Admission.html">Admission</a>
    <a href="placement.html">Placements</a>
    <a href="Committee.html">Committee</a>
    <a href="AISHE.html">AISHE</a>
    <a href="assets/Calendar.pdf" target="_blank">Academic Calendar</a>
    <a href="coa.html">COA</a>
    <a href="career.html">Careers</a>
  </nav>
</div>
`;
document.getElementById("header").appendChild(header);


/* ================= MENU TOGGLE ================= */
document.getElementById("menuBtn").onclick = () => {
  document.getElementById("menu").classList.toggle("show");
};
