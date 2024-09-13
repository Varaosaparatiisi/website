window.addEventListener("scroll", function() {
  const header = document.querySelector("header")
  const logo = document.querySelector(".logo")
  const burger = document.querySelector(".switch")

  if (window.scrollY > 50) {
      header.classList.add("scrolled")
      logo.src = "/img/logo-black.png"
      if (burger) burger.classList.add("black")
  } else {
      header.classList.remove("scrolled")
      logo.src = "/img/logo-white.png"
      if (burger) burger.classList.remove("black")
  }
})

window.addEventListener("load", () => {
  const agent = window.navigator.userAgent;
  const mobile = /Android|iPhone|Opera/i.test(agent);
  if (mobile) {
    const ctos = document.querySelectorAll(".call-to-action")
    ctos.forEach(elem => {
      elem.setAttribute("href", "tel:+358440343307")
    });
  }
})

import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js'
/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({

  guiOptions: {
    consentModal: {
        layout: "box inline",
        position: "bottom left",
        equalWeightButtons: true,
        flipButtons: false
    },
    preferencesModal: {
        layout: "bar wide",
        position: "right",
        equalWeightButtons: true,
        flipButtons: false
    }
  },

  categories: {
      necessary: {
          enabled: true,  // this category is enabled by default
          readOnly: true  // this category cannot be disabled
      },
      analytics: {}
  },

  language: {
      default: 'fi',
      translations: {
          fi: {
              consentModal: {
                  title: 'Tämä sivusto käyttää evästeitä.',
                  description: '',
                  acceptAllBtn: 'Hyväksy kaikki',
                  acceptNecessaryBtn: 'Hylkää kaikki',
                  showPreferencesBtn: 'Muokka evästeasetuksia'
              },
              preferencesModal: {
                  title: 'Muokkaa asetuksia',
                  acceptAllBtn: 'Hyväksy kaikki',
                  acceptNecessaryBtn: 'Hylkää kaikki',
                  savePreferencesBtn: 'Hyväksy nykyiset valinnat',
                  closeIconLabel: 'Sulje ikkuna',
                  sections: [
                      {
                          title: 'Sanoiko joku ... evästeitä?',
                          description: 'Minä ainakin haluan!'
                      },
                      {
                          title: 'Vain ehdottoman välttämättömät',
                          description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',

                          //this field will generate a toggle linked to the 'necessary' category
                          linkedCategory: 'necessary'
                      },
                      {
                          title: 'Performance and Analytics',
                          description: 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                          linkedCategory: 'analytics'
                      },
                      {
                          title: 'More information',
                          description: 'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>'
                      }
                  ]
              }
          }
      }
  }
})