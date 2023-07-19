let text =  document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let dass = document.getElementById('dass');

window.addEventListener('scroll',() =>{
    let value = window.scrollY;
    //text.style.transformStyle = value * 2.6 +'px';
    //leaf.style.top = value* -1.5 +'px';
    //leaf.style.left = value* 1.5 +'px';
    hill5.style.left = value* 1.5 +'px';
    hill4.style.left = value* -1.5 +'px';
    //hill1.style.top = value* -0.1 + 'px';
})

particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3.998400639744104,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });

  const texty = document.querySelector(".sec-text");
  const textLoad = () => {
      setTimeout(() => {
          texty.textContent = "Freelancer";
      }, 0);
      setTimeout(() => {
          texty.textContent = "Blogger";
      }, 4000);
      setTimeout(() => {
          texty.textContent = "YouTuber";
      }, 8000); //1s = 1000 milliseconds
  }
  textLoad();
  setInterval(textLoad, 12000);