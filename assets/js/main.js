/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('qualification__active')
    })
    target.classList.add('qualification__active')

    tabs.forEach(tab => {
      tab.classList.remove('qualification__active')
    })
    tab.classList.add('qualification__active')
  })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const verticalScrollPosition = window.verticalScrollPosition || window.scrollY;

  sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      let sectionId = current.getAttribute("id");

      if (verticalScrollPosition > sectionTop && verticalScrollPosition <= sectionTop + sectionHeight) {
          document
              .querySelector(".nav__menu a[href*=" + sectionId + "]")
              .classList.add("active-link");
      } else {
          document
              .querySelector(".nav__menu a[href*=" + sectionId + "]")
              .classList.remove("active-link");
      }
  });
}

window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.verticalScrollPosition >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.verticalScrollPosition >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
      darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
      iconTheme
  );
}

//activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  //add or remove dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  //we save the theme and the current icon so that the user choose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// Contact Form

const isValidEmail = (email) => {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

  // //using regular expressions, validate email
  // var contactFormUtils = window.contactFormUtils = {,
  //   //if no form errors, remove or hide error messages
  //   clearErrors: function () {
  //     $('#emailAlert').remove();
  //     $('#feedbackForm .help-block').hide();
  //     $('#feedbackForm .form-group').removeClass('has-error');
  //   },
  //   //upon form clear remove the checked class and replace with unchecked class. Also reset Google ReCaptcha
  //   clearForm: function () {
  //     $('#feedbackForm .glyphicon').removeClass('glyphicon-check').addClass('glyphicon-unchecked').css({color: ''});
  //     $('#feedbackForm input,textarea').val("");
  //     grecaptcha.reset();
  //   },
  //   //when error, show error messages and track that error exists
  //   addError: function ($input) {
  //     var parentFormGroup = $input.parents('.form-group');
  //     parentFormGroup.children('.help-block').show();
  //     parentFormGroup.addClass('has-error');
  //   },
  //   addAjaxMessage: function(msg, isError) {
  //     $("#feedbackSubmit").after('<div id="emailAlert" class="alert alert-' + (isError ? 'danger' : 'success') + '" style="margin-top: 5px;">' + $('<div/>').text(msg).html() + '</div>');
  //   }
  // };

const contactBtn = document.getElementById('contact-button')

/* Validate if constant exists */
if(contactBtn){
    contactBtn.addEventListener('click', () =>{
      const formName = document.getElementById('form-name')
      const formEmail = document.getElementById('form-email')
      const formTitle = document.getElementById('form-title')
      const formMessage = document.getElementById('form-message')

      document.querySelectorAll('.contact__content').forEach((el) => {
        el.classList.remove('active__error')
      })

      let errors = false;

      if (!formName.value) {
        formName.parentElement.classList.add('active__error')
        // formName.classList.add('active__error')
        errors = true;
      }

      if (!isValidEmail(formEmail.value)) {
        formEmail.parentElement.classList.add('active__error')
        // formEmail.classList.add('active__error')
        errors = true;
      }

      if (!formTitle.value) {
        formTitle.parentElement.classList.add('active__error')
        // formTitle.classList.add('active__error')
        errors = true;
      }

      if (!formMessage.value) {
        formMessage.parentElement.classList.add('active__error')
        // formMessage.classList.add('active__error')
        errors = true;
      }

      if (errors) {
        return;
      }

      // continue with the rest of the code...
      // Send email
      const data = {
        email: encodeURIComponent(formEmail.value),
        title: encodeURIComponent(formTitle.value),
        message: encodeURIComponent(formMessage.value),
        name: encodeURIComponent(formName.value)
      };

      

      fetch(`https://usebasin.com/f/002f4d2f2f7a`, {
        method: 'POST'
      })
      // .then(response => response.json())
        .then(data => {
          console.log(data);
          // Handle success response
        })
        .catch(error => {
          console.error(error);
          // Handle error
        });
    })

    frame.addEventListener("load", ev => {
      const new_style_element = document.createElement("style");
      new_style_element.textContent = ".col-form-label {font-size: var(--smaller-font-size) !important; color: var(--title-color) !important;}"
      ev.target.contentDocument.head.appendChild(new_style_element);
    });


// $(".contact__button").click(function() {
//   var $btn = $(this);
//   $btn.button('loading');
//   contactFormUtils.clearErrors();

//   //do a little client-side validation -- check that each field has a value and e-mail field is in proper format
//   //use bootstrap validator (https://github.com/1000hz/bootstrap-validator) if provided, otherwise a bit of custom validation
//   var $form = $("#feedbackForm"),
//     hasErrors = false;
//   if ($form.validator) {
//     hasErrors =  $form.validator('validate').hasErrors;
//   } else {
//     $('#feedbackForm input,#feedbackForm textarea').not('.optional').each(function() {
//       var $this = $(this);
//       if (($this.is(':checkbox') && !$this.is(':checked')) || !$this.val()) {
//         hasErrors = true;
//         contactFormUtils.addError($(this));
//       }
//     });
//     var $email = $('#email');
//     if (!contactFormUtils.isValidEmail($email.val())) {
//       hasErrors = true;
//       contactFormUtils.addError($email);
//     }
//     var $phone = $('#phone');
//     if ($phone.val() && $phone.intlTelInput && !$phone.intlTelInput("isValidNumber")) {
//       hasErrors = true;
//       contactFormUtils.addError($phone.parent());
//     }
//   }
//   //if there are any errors return without sending e-mail
//   if (hasErrors) {
//     $btn.button('reset');
//     return false;
//   }
//   //send the feedback e-mail
//   $.ajax({
//     type: "POST",
//     url: "library/sendmail.php",
//     data: $form.serialize(),
//     success: function(data) {
//       contactFormUtils.addAjaxMessage(data.message, false);
//       contactFormUtils.clearForm();
//     },
//     error: function(response) {
//       contactFormUtils.addAjaxMessage(response.responseJSON.message, true);
//     },
//     complete: function() {
//       $btn.button('reset');
//     }
//  });
//   return false;
// });

}

/*==================== PARALLAX ====================*/
document.addEventListener('scroll', function() {
    const parallaxItems = document.querySelectorAll('.qualification__item');
    const speed = 0.3;

    parallaxItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (itemTop < windowHeight && itemTop > -item.offsetHeight) {
            const img = item.querySelector('.qualification__img');
            const yPos = -(itemTop * speed);
            img.style.transform = `translateY(${yPos}px)`;
        }
    });
});