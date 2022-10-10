Vue.createApp({
    data() {
      return {     
        navbar: {
            home: "Home",
            judul: "Personal Website",
            l: [
                {
                    'j':"About" 
                },
                {
                    'j':"project" 
                },
                {
                    'j':"Blog" 
                }
            ]
        },
        desc1: "HI !, I'm ",
        desc2: "Back-End Web Development",
        socmed: [
            {
                'judul': "Instagram",
                'url': "https://www.instagram.com/nurulhikmahrd/",
                'gmb': "fab fa-instagram fa-2x"
            },
            {
                'judul': "Github",
                'url': "https://github.com/NurulHikmah16",
                'gmb': "fab fa-github fa-2x"
            },
            {
                'judul': "Linked In",
                'url': "https://www.linkedin.com/in/nurulhikmahrd/",
                'gmb': "fab fa-linkedin fa-2x"
            },
            {
                'judul': "CV",
                'url': "https://drive.google.com/file/d/1fVcXe2s5PHF04TQCmHo_CojBRObNNbQa/view?usp=sharing",
                'gmb': "fa fa-file fa-2x"
          }
        ],

        //Bagian Tentang
        tentang: {
          judul1: "Tentang ",
          judul2: "Saya",
          desc: "Hallo, perkenalkan nama saya Nurul Hikmah Rafika Dewi, saya biasa dipanggil Nurul atau Uwi. Saat ini saya sedang menempuh pendidikan di STMIK Bandung, Program studi sistem informasi. Saya merupakan mahasiswi semester 7, saat ini saya mengikuti program Kampus Merdeka yang diadakan oleh Kemendikbud dan saya mengikuti kegiatan ini pada mitra Skilvul yang saat ini sedang mempelajari bagaimana cara membuat website pribadi sebagai portofolio dari tugas di Skilvul pada Bab Web Development Advance. ",
        },

        // bagian skill
        skill: "My Skill", 
        skill01: "M.word - Advanced",
        skill02: "Html - Intermediate",
        skill03: "Css - Intermediate",
        skill05: "Python - Intermediate",
        skill07: "SQLYog - Advanced",

        // Bagian Project
        project : {
          judul1: "My",
          judul2: "Project"
        },

        //Bagian Artikel
        artikel: {
          judul: "Blog",
          list_artikel: [],
        },
          nama_artikel: null,
            
          };
        },
    
    methods: { //tempat menambahkan fungsi-fungsi
        ambilListBlog()
        {
        },
        ambilDataMarkdown()
    {               
      var converter = new showdown.Converter();
        axios
          .get(
          )
          .then((res) => {           
            var html = converter.makeHtml(res.data);           
            this.nama_artikel = html;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    beforeMount() { //fungsi yang dipanggil oleh vue sebelum mount terjadi
      this.ambilListBlog(),
      this.ambilDataMarkdown()
    },
  }).mount("#app");

  //Script untuk menghilangkan navigasi collapse jika dikilk akan hilang -->
    $('.js-scroll-trigger').click(function () {
      $('.navbar-collapse').collapse('hide');
    });

 //js nama pada home
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");

  const textArray = ["Nurul Hikmah R.D."];
  const typingDelay = 100;
  const erasingDelay = 100;
  const newTextDelay = 2500; 
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    }
    else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    }
    else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  });
  
  // navbar scroll -->
    document.addEventListener("scroll", function () {
      const navbar = document.querySelector("nav");

      if (this.body.scrollTop > 1 || this.documentElement.scrollTop > 1) {
        navbar.classList.add("nav-scrolled", "fixed-top");
      } else {
        navbar.classList.remove("nav-scrolled", "fixed-top");
      }
    });

    
  

    
