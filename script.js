/* =====================================================
   PHARMACY PORTFOLIO
   Pastel Pink + Blue + Purple
===================================================== */

:root {
  --pink: #ff8fb3;
  --pink-dark: #e85d8c;
  --pink-light: #ffe1eb;

  --blue: #82cfff;
  --blue-dark: #4ba9dc;
  --blue-light: #dff3ff;

  --purple: #b99cff;
  --purple-dark: #8064d6;
  --purple-light: #eee7ff;

  --text-dark: #34304a;
  --text-muted: #716b82;

  --white: rgba(255, 255, 255, 0.9);

  --shadow:
    0 10px 30px rgba(130, 100, 180, 0.12);
}


/* =====================================================
   RESET
===================================================== */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-family:
    "Segoe UI",
    Thonburi,
    Tahoma,
    sans-serif;

  color: var(--text-dark);
}

body {
  overflow-x: hidden;

  background:
    radial-gradient(
      circle at 10% 10%,
      rgba(255, 180, 205, 0.5),
      transparent 30%
    ),
    radial-gradient(
      circle at 90% 20%,
      rgba(160, 210, 255, 0.45),
      transparent 30%
    ),
    radial-gradient(
      circle at 50% 90%,
      rgba(200, 175, 255, 0.45),
      transparent 35%
    ),
    linear-gradient(
      135deg,
      #fff0f5 0%,
      #eaf7ff 48%,
      #f2edff 100%
    );

  background-attachment: fixed;
  position: relative;
}


/* =====================================================
   SPARKLES
===================================================== */

.sparkles-container {
  position: fixed;
  inset: 0;

  width: 100%;
  height: 100%;

  pointer-events: none;

  z-index: 0;

  overflow: hidden;
}

.sparkle {
  position: absolute;

  font-size: 1.2rem;

  filter:
    drop-shadow(0 0 6px rgba(255, 255, 255, 0.9));

  animation:
    floatSparkle 4s infinite ease-in-out alternate;
}

.s1 {
  top: 10%;
  left: 15%;
}

.s2 {
  top: 25%;
  left: 80%;
  animation-delay: 1s;
}

.s3 {
  top: 50%;
  left: 10%;
  animation-delay: 0.5s;
}

.s4 {
  top: 70%;
  left: 85%;
  animation-delay: 1.5s;
  font-size: 1.7rem;
}

.s5 {
  top: 85%;
  left: 25%;
  animation-delay: 2s;
}

.s6 {
  top: 35%;
  left: 50%;
  animation-delay: 0.8s;
}

.s7 {
  top: 60%;
  left: 65%;
  animation-delay: 1.2s;
}

.s8 {
  top: 15%;
  left: 40%;
  animation-delay: 1.7s;
}

@keyframes floatSparkle {

  0% {
    transform:
      translateY(0)
      scale(0.8)
      rotate(0deg);

    opacity: 0.4;
  }

  100% {
    transform:
      translateY(-20px)
      scale(1.2)
      rotate(20deg);

    opacity: 1;
  }
}


/* =====================================================
   NAVBAR
===================================================== */

.navbar {
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;

  background:
    rgba(255, 255, 255, 0.82);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border-bottom:
    2px solid rgba(255, 143, 179, 0.4);

  box-shadow:
    0 5px 20px rgba(120, 100, 170, 0.1);

  z-index: 1000;
}

.nav-container {
  display: flex;

  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  gap: 10px 20px;

  padding: 14px 10px;
}

.nav-container a {
  text-decoration: none;

  color: var(--text-dark);

  font-weight: 700;

  font-size: 0.88rem;

  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.nav-container a:hover {
  color: var(--pink-dark);

  transform: translateY(-2px);
}


/* =====================================================
   IMAGE
===================================================== */

.img-box {
  width: 100%;
  height: 360px;

  border-radius: 18px;

  overflow: hidden;

  border:
    4px solid rgba(255, 255, 255, 0.95);

  background:
    linear-gradient(
      135deg,
      #ffe7ef,
      #e2f5ff,
      #eee7ff
    );

  box-shadow:
    0 8px 22px rgba(90, 70, 140, 0.12);

  position: relative;
}

.portfolio-img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  display: block;

  transition:
    transform 0.5s ease;
}

.gallery-card:hover .portfolio-img,
.uni-card:hover .portfolio-img {
  transform: scale(1.04);
}


/* =====================================================
   COVER
===================================================== */

header {
  padding:
    130px 20px 50px;

  position: relative;

  z-index: 1;
}

.cover-container {
  max-width: 1000px;

  margin: 0 auto;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 40px;

  background:
    rgba(255, 255, 255, 0.76);

  padding: 40px;

  border-radius: 28px;

  border:
    2px solid rgba(255, 255, 255, 0.95);

  box-shadow:
    0 15px 40px rgba(120, 90, 170, 0.14);
}

.cover-text-side {
  flex: 1;

  text-align: left;
}

.pharmacy-icon {
  font-size: 2.2rem;

  margin-bottom: 4px;

  filter:
    drop-shadow(
      0 3px 6px rgba(120, 80, 160, 0.15)
    );
}

header h1 {
  font-size: 3.3rem;

  font-weight: 900;

  letter-spacing: 3px;

  background:
    linear-gradient(
      90deg,
      #ed6e9c,
      #68bce8,
      #9c7fe5
    );

  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;
}

header .subtitle {
  font-size: 1.2rem;

  color: var(--purple-dark);

  font-weight: bold;

  margin:
    4px 0 20px;
}

.cover-details {
  line-height: 1.8;

  color: var(--text-dark);
}

.cover-details .student-name {
  font-size: 1.35rem;

  font-weight: bold;

  color: var(--pink-dark);
}

.cover-details .student-nickname {
  font-size: 1rem;

  font-weight: 600;

  color: var(--purple-dark);
}

.cover-details .student-level,
.cover-details .student-plan,
.cover-details .school-name {
  font-size: 1.05rem;

  font-weight: 700;
}

.pharmacy-label {
  display: inline-block;

  margin-top: 18px;

  padding: 8px 20px;

  border-radius: 30px;

  background:
    linear-gradient(
      90deg,
      var(--pink-light),
      var(--blue-light),
      var(--purple-light)
    );

  color: var(--purple-dark);

  font-weight: 800;

  letter-spacing: 1px;

  border:
    1px solid rgba(150, 120, 210, 0.25);
}

.cover-media-side {
  width: 320px;

  flex-shrink: 0;
}

.cover-img-box {
  height: 400px;
}


/* =====================================================
   GENERAL
===================================================== */

.container {
  max-width: 1000px;

  margin: 0 auto;

  padding: 20px;

  position: relative;

  z-index: 1;
}

section {
  scroll-margin-top: 90px;

  padding: 40px 0;
}

section h2 {
  font-size: 2rem;

  border-left:
    7px solid var(--pink);

  padding-left: 15px;

  margin-bottom: 25px;

  color: var(--purple-dark);

  text-shadow:
    1px 1px 0 white;
}

.section-card {
  background:
    var(--white);

  border-radius: 20px;

  padding: 30px;

  border:
    2px solid rgba(255, 255, 255, 0.95);

  box-shadow:
    var(--shadow);

  backdrop-filter: blur(8px);
}

.flex-card {
  display: flex;

  gap: 30px;

  align-items: center;
}

.card-text {
  flex: 1;

  line-height: 1.85;

  font-size: 1rem;
}

.card-text p {
  margin-bottom: 14px;
}

.card-text strong {
  color: var(--purple-dark);
}

.card-media {
  width: 320px;

  flex-shrink: 0;
}

.signature-box {
  margin-top: 20px;

  padding: 12px 18px;

  text-align: right;

  color: var(--pink-dark);

  font-size: 1.05rem;

  background:
    var(--pink-light);

  border-radius: 12px;
}


/* =====================================================
   PROFILE
===================================================== */

.info-list {
  list-style: none;
}

.info-list li {
  margin-bottom: 12px;

  font-size: 1rem;

  border-bottom:
    1px dashed rgba(130, 100, 180, 0.2);

  padding-bottom: 7px;
}

.info-list strong {
  color: var(--pink-dark);
}


/* =====================================================
   EDUCATION
===================================================== */

.edu-info-list {
  list-style: none;
}

.edu-info-list li {
  margin-bottom: 15px;

  font-size: 1rem;

  line-height: 1.7;

  padding: 10px 14px;

  border-radius: 10px;

  background:
    linear-gradient(
      90deg,
      rgba(223, 243, 255, 0.65),
      rgba(238, 231, 255, 0.55)
    );
}

.edu-info-list strong {
  color: var(--blue-dark);
}


/* =====================================================
   ACTIVITIES
===================================================== */

.gallery-grid-2x2 {
  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 24px;
}

.gallery-card {
  background:
    rgba(255, 255, 255, 0.9);

  border-radius: 20px;

  overflow: hidden;

  border:
    2px solid rgba(255, 255, 255, 0.95);

  box-shadow:
    var(--shadow);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.gallery-card:hover {
  transform: translateY(-7px);

  box-shadow:
    0 15px 30px
    rgba(190, 120, 190, 0.18);
}

.gallery-info {
  padding: 18px;
}

.activity-number {
  width: 36px;
  height: 36px;

  display: flex;

  justify-content: center;
  align-items: center;

  margin-bottom: 10px;

  border-radius: 50%;

  background:
    linear-gradient(
      135deg,
      var(--pink),
      var(--purple)
    );

  color: white;

  font-weight: 900;

  font-size: 0.85rem;
}

.activity-desc {
  color: var(--text-dark);

  font-size: 0.95rem;

  line-height: 1.7;

  font-weight: 600;
}


/* =====================================================
   FUTURE STUDY
===================================================== */

.future-wrapper {
  padding: 30px;
}

.future-intro {
  margin-bottom: 30px;

  line-height: 1.9;

  font-size: 1.02rem;
}

.future-intro p {
  margin-bottom: 15px;
}

.study-title {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  padding: 9px 18px;

  margin-bottom: 20px;

  border-radius: 30px;

  background:
    linear-gradient(
      90deg,
      var(--pink-light),
      var(--purple-light)
    );

  color: var(--purple-dark);

  font-weight: 800;

  font-size: 1.05rem;
}

.uni-grid {
  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 25px;
}

.uni-card {
  background:
    rgba(255, 255, 255, 0.95);

  border-radius: 18px;

  overflow: hidden;

  border:
    2px solid var(--blue-light);

  box-shadow:
    0 8px 20px rgba(100, 90, 160, 0.08);

  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
}

.uni-card:hover {
  transform: translateY(-6px);

  border-color:
    var(--purple);
}

.uni-info {
  padding: 18px;

  text-align: center;
}

.badge {
  display: inline-block;

  padding: 5px 14px;

  border-radius: 20px;

  background:
    var(--blue-light);

  color:
    var(--blue-dark);

  font-size: 0.85rem;

  font-weight: bold;

  margin-bottom: 10px;

  border:
    1px solid rgba(80, 170, 220, 0.2);
}

.badge.highlight {
  background:
    var(--purple-light);

  color:
    var(--purple-dark);

  border-color:
    rgba(150, 120, 220, 0.2);
}

.faculty-name {
  color:
    var(--pink-dark);

  font-weight: bold;

  font-size: 1.05rem;

  line-height: 1.5;
}


/* =====================================================
   SKILLS
===================================================== */

.skills-tags-list {
  display: flex;

  flex-wrap: wrap;

  gap: 15px;

  list-style: none;

  justify-content: center;

  padding: 10px 0;
}

.skills-tags-list li {
  padding:
    12px 28px;

  border-radius: 30px;

  font-weight: 700;

  font-size: 1rem;

  box-shadow:
    0 5px 12px
    rgba(100, 80, 150, 0.07);

  transition:
    transform 0.2s ease;
}

.skills-tags-list li:hover {
  transform:
    translateY(-4px)
    scale(1.03);
}

.tag-pink {
  background:
    var(--pink-light);

  color:
    #c94676;

  border:
    2px solid #ffc0d3;
}

.tag-blue {
  background:
    var(--blue-light);

  color:
    #378fbd;

  border:
    2px solid #a9dcf7;
}

.tag-purple {
  background:
    var(--purple-light);

  color:
    #7358c4;

  border:
    2px solid #d1c1ff;
}


/* =====================================================
   FOOTER
===================================================== */

footer {
  background:
    rgba(255, 255, 255, 0.9);

  text-align: center;

  padding: 40px 20px;

  margin-top: 60px;

  border-top:
    2px solid var(--pink);

  position: relative;

  z-index: 1;
}

.footer-icon {
  font-size: 2rem;

  margin-bottom: 5px;
}

footer h3 {
  color:
    var(--purple-dark);

  margin-bottom: 15px;

  font-size: 1.3rem;
}

.contact-grid {
  line-height: 2;

  font-size: 1rem;
}

footer a {
  color:
    var(--blue-dark);

  text-decoration: none;

  font-weight: bold;
}

footer a:hover {
  color:
    var(--pink-dark);

  text-decoration: underline;
}

.copyright {
  color:
    var(--text-muted);

  font-size: 0.85rem;

  margin-top: 20px;
}


/* =====================================================
   FADE IN
===================================================== */

.fade-in {
  opacity: 0;

  transform:
    translateY(30px);

  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.fade-in.show {
  opacity: 1;

  transform:
    translateY(0);
}


/* =====================================================
   RESPONSIVE
===================================================== */

@media (max-width: 850px) {

  .cover-container {
    flex-direction: column-reverse;

    text-align: center;
  }

  .cover-text-side {
    text-align: center;
  }

  .cover-media-side,
  .card-media {
    width: 100%;
  }

  .cover-img-box {
    height: 400px;
  }

  .flex-card {
    flex-direction: column;
  }

  .gallery-grid-2x2,
  .uni-grid {
    grid-template-columns: 1fr;
  }

  header h1 {
    font-size: 2.5rem;
  }

  section h2 {
    font-size: 1.7rem;
  }
}


@media (max-width: 500px) {

  .navbar {
    position: sticky;
  }

  .nav-container {
    gap: 8px 12px;

    padding: 10px;
  }

  .nav-container a {
    font-size: 0.75rem;
  }

  header {
    padding-top: 40px;
  }

  .cover-container {
    padding: 25px 18px;
  }

  .section-card {
    padding: 20px;
  }

  .img-box {
    height: 300px;
  }

  .cover-img-box {
    height: 330px;
  }

  .skills-tags-list li {
    width: 100%;

    text-align: center;
  }
}
