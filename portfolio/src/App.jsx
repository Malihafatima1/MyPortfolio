import { useEffect } from "react";   
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import './styles.css';

function App() {

  useEffect(() => {

    /* ---- Custom Cursor ---- */
    const cursor = document.getElementById('cursor');
    const cursorRing = document.getElementById('cursorRing');

    let mx = -100, my = -100, rx = -100, ry = -100;

    const mouseMoveHandler = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    document.addEventListener('mousemove', mouseMoveHandler);

    const animCursor = () => {
      if (!cursor || !cursorRing) return;

      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';

      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;

      cursorRing.style.left = rx + 'px';
      cursorRing.style.top = ry + 'px';

      requestAnimationFrame(animCursor);
    };

    animCursor();

    /* ---- Hover Effect ---- */
    const hoverEls = document.querySelectorAll('a, button');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '18px';
        cursor.style.height = '18px';
        cursorRing.style.width = '50px';
        cursorRing.style.height = '50px';
      });

      el.addEventListener('mouseleave', () => {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        cursorRing.style.width = '36px';
        cursorRing.style.height = '36px';
      });
    });

    /* ---- Hamburger ---- */
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger?.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks?.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navLinks.classList.remove('open'))
    );

    /* ---- Typing Effect ---- */
    const roles = [
      'Full Stack Developer',
      'Django & React Engineer',
      'ML Enthusiast',
      'Problem Solver'
    ];

    let ri = 0, ci = 0, deleting = false;
    const typedEl = document.getElementById('typedRole');

    function type() {
      if (!typedEl) return;

      const current = roles[ri];

      if (!deleting) {
        typedEl.textContent = current.slice(0, ++ci);
        if (ci === current.length) {
          deleting = true;
          setTimeout(type, 1600);
          return;
        }
      } else {
        typedEl.textContent = current.slice(0, --ci);
        if (ci === 0) {
          deleting = false;
          ri = (ri + 1) % roles.length;
        }
      }

      setTimeout(type, deleting ? 55 : 90);
    }

    type();

    const blinkInterval = setInterval(() => {
      if (typedEl) {
        typedEl.style.borderRight = typedEl.style.borderRight
          ? ''
          : '2px solid #9b5de5';
      }
    }, 500);

    /* ---- Scroll Reveal ---- */
    const revealEls = document.querySelectorAll('.reveal');

    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => revealObs.observe(el));

    /* ---- Navbar Shadow ---- */
    const scrollHandler = () => {
      const nav = document.getElementById('navbar');
      if (!nav) return;

      nav.style.boxShadow =
        window.scrollY > 50
          ? '0 4px 30px rgba(0,0,0,0.5)'
          : 'none';
    };

    window.addEventListener('scroll', scrollHandler);

    /* ---- CLEANUP ---- */
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('scroll', scrollHandler);
      clearInterval(blinkInterval);
    };

  }, []);

  return (
    <>
      {/* ✅ ADD THIS (cursor elements) */}
      <div id="cursor" className="cursor"></div>
      <div id="cursorRing" className="cursor-ring"></div>

      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;