module.exports = {
  // you can search for content with the quick search bar
  quick_search_works: function (browser) {
    browser
      .url('https://www.pdq.com')
      .windowMaximize()
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'PowerShell')
      .keys('')
      .assert.urlContains('https://www.pdq.com/search/?q=PowerShell&p=1', 'Quick search bar works')
      .end()
  }, 

  // dropdown menus are navigable
  dropdown_menus_work: function (browser) {
    browser
      .url('https://www.pdq.com')
      .windowMaximize()
      .click('button[data-test-id=products]')
      .waitForElementVisible('body', 1000)
      .moveToElement('button[data-test-id=products]', 100, 100, function () {
        browser.assert.visible('#gatsby-focus-wrapper > div > div.css-vurnku > div > div > div > menu > div.css-1s1t3ed > div > ul > li.css-q4n66o.ebuoa6k4 > div > div > div > div.css-1f978ju > a > div > div.css-zkfaav > div', 'Products -> PDQ.com software is navigable')
        browser.assert.visible('#gatsby-focus-wrapper > div > div.css-vurnku > div > div > div > menu > div.css-1s1t3ed > div > ul > li.css-q4n66o.ebuoa6k4 > div > div > div > div.css-1odrcqd > div > a:nth-child(1) > div', 'Products -> PDQ Deploy is navigable')
        browser.assert.visible('#gatsby-focus-wrapper > div > div.css-vurnku > div > div > div > menu > div.css-1s1t3ed > div > ul > li.css-q4n66o.ebuoa6k4 > div > div > div > div.css-1odrcqd > div > a:nth-child(2) > div', 'Products -> PDQ Inventory is navigable')
        browser.assert.visible('#gatsby-focus-wrapper > div > div.css-vurnku > div > div > div > menu > div.css-1s1t3ed > div > ul > li.css-q4n66o.ebuoa6k4 > div > div > div > div.css-1odrcqd > div > a:nth-child(3)', 'Products -> Enterprise SL is navigable')
        browser.assert.visible('#gatsby-focus-wrapper > div > div.css-vurnku > div > div > div > menu > div.css-1s1t3ed > div > ul > li.css-q4n66o.ebuoa6k4 > div > div > div > div.css-jmlio4 > div > a:nth-child(1) > div', 'Products -> Buy is navigable')
        browser.assert.visible('#gatsby-focus-wrapper > div > div.css-vurnku > div > div > div > menu > div.css-1s1t3ed > div > ul > li.css-q4n66o.ebuoa6k4 > div > div > div > div.css-jmlio4 > div > a:nth-child(2) > div', 'Products -> Downloads is navigable')
        browser.assert.visible('#gatsby-focus-wrapper > div > div.css-vurnku > div > div > div > menu > div.css-1s1t3ed > div > ul > li.css-q4n66o.ebuoa6k4 > div > div > div > div.css-jmlio4 > div > a:nth-child(3) > div', 'Products -> Documentation is navigable')
        browser.assert.visible('#gatsby-focus-wrapper > div > div.css-vurnku > div > div > div > menu > div.css-1s1t3ed > div > ul > li.css-q4n66o.ebuoa6k4 > div > div > div > div.css-jmlio4 > div > a:nth-child(4) > div', 'Products -> Licensing is navigable')
        browser.assert.visible('#gatsby-focus-wrapper > div > div.css-vurnku > div > div > div > menu > div.css-1s1t3ed > div > ul > li.css-q4n66o.ebuoa6k4 > div > div > div > div.css-jmlio4 > div > a:nth-child(5) > div', 'Products -> Package Library is navigable')
      })

      .click('button[data-test-id=resources]')
      .waitForElementVisible('body', 1000)
      .moveToElement('button[data-test-id=resources]', 100, 100, function () {
        browser.assert.visible('#gatsby-focus-wrapper > div > div.css-vurnku > div > div > div > menu > div.css-1s1t3ed > div > ul > li.css-q4n66o.ebuoa6k4 > div > div > div > div.css-1odrcqd > div > div.css-rsyo24 > a > div > div.css-qzsbdl', 'Resources -> Support is navigable')
        browser.assert.visible('#gatsby-focus-wrapper > div > div.css-vurnku > div > div > div > menu > div.css-1s1t3ed > div > ul > li.css-q4n66o.ebuoa6k4 > div > div > div > div.css-1odrcqd > div > div.css-1nbj0nn > a > div', 'Resources -> Videos is navigable')
        browser.assert.visible('#gatsby-focus-wrapper > div > div.css-vurnku > div > div > div > menu > div.css-1s1t3ed > div > ul > li.css-q4n66o.ebuoa6k4 > div > div > div > div.css-jmlio4 > div > a:nth-child(1) > div', 'Resources -> Blog is navigable')
        browser.assert.visible('#gatsby-focus-wrapper > div > div.css-vurnku > div > div > div > menu > div.css-1s1t3ed > div > ul > li.css-q4n66o.ebuoa6k4 > div > div > div > div.css-jmlio4 > div > a:nth-child(2) > div', 'Resources -> PowerShell is navigable')
        browser.assert.visible('#gatsby-focus-wrapper > div > div.css-vurnku > div > div > div > menu > div.css-1s1t3ed > div > ul > li.css-q4n66o.ebuoa6k4 > div > div > div > div.css-jmlio4 > div > a:nth-child(3) > div', 'Resources -> WebCast is navigable')
        browser.assert.visible('#gatsby-focus-wrapper > div > div.css-vurnku > div > div > div > menu > div.css-1s1t3ed > div > ul > li.css-q4n66o.ebuoa6k4 > div > div > div > div.css-jmlio4 > div > a:nth-child(4) > div', 'Resources -> Getting started is navigable')
        browser.assert.visible('#gatsby-focus-wrapper > div > div.css-vurnku > div > div > div > menu > div.css-1s1t3ed > div > ul > li.css-q4n66o.ebuoa6k4 > div > div > div > div.css-jmlio4 > div > a:nth-child(5) > div', 'Resources -> System Requirements is navigable')
        browser.assert.visible('#gatsby-focus-wrapper > div > div.css-vurnku > div > div > div > menu > div.css-1s1t3ed > div > ul > li.css-q4n66o.ebuoa6k4 > div > div > div > div.css-jmlio4 > div > a:nth-child(6) > div', 'Resources -> ROI Calculator is navigable')
        browser.assert.visible('#gatsby-focus-wrapper > div > div.css-vurnku > div > div > div > menu > div.css-1s1t3ed > div > ul > li.css-q4n66o.ebuoa6k4 > div > div > div > div.css-jmlio4 > div > a:nth-child(7) > div', 'Resources -> Search is navigable')
        browser.assert.visible('#gatsby-focus-wrapper > div > div.css-vurnku > div > div > div > menu > div.css-1s1t3ed > div > ul > li.css-q4n66o.ebuoa6k4 > div > div > div > div.css-jmlio4 > div > a:nth-child(8) > div', 'Resources -> Careers is navigable')
        browser.assert.visible('#gatsby-focus-wrapper > div > div.css-vurnku > div > div > div > menu > div.css-1s1t3ed > div > ul > li.css-q4n66o.ebuoa6k4 > div > div > div > div.css-jmlio4 > div > a:nth-child(9) > div', 'Resources -> Contact is navigable')
            })
      .end()
  }, 

  // all footer links work
   footer_links_work: function (browser) {
    browser
      .url('https://www.pdq.com')
      .windowMaximize()
      .waitForElementVisible('body', 1000)
      .moveToElement('#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-vohm81 > ul > li:nth-child(9)', 100, 100)
    const footerlinks = [
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-j5m4p > ul > li:nth-child(1) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-j5m4p > ul > li:nth-child(2) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-j5m4p > ul > li:nth-child(3) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-j5m4p > ul > li:nth-child(4) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-j5m4p > ul > li:nth-child(5) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-j5m4p > ul > li:nth-child(6) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-j5m4p > ul > li:nth-child(7) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-vohm81 > ul > li:nth-child(1) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-vohm81 > ul > li:nth-child(2) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-vohm81 > ul > li:nth-child(3) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-vohm81 > ul > li:nth-child(4) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-vohm81 > ul > li:nth-child(5) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-vohm81 > ul > li:nth-child(6) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-vohm81 > ul > li:nth-child(7) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-vohm81 > ul > li:nth-child(8) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-vohm81 > ul > li:nth-child(9) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-1tk1yop > ul > li:nth-child(1) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-1tk1yop > ul > li:nth-child(2) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-1tk1yop > ul > li:nth-child(3) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-1tk1yop > ul > li:nth-child(4) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-1tk1yop > ul > li:nth-child(5) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-1tk1yop > ul > li:nth-child(6) > a',
      '#gatsby-focus-wrapper > div > footer > div > div > div.css-bybmpb > div.css-1tk1yop > ul > li:nth-child(7) > a'
    ]
    footerlinks.forEach(potentialFooterLink => {
      browser.assert.visible(potentialFooterLink, 'FooterLink works')
    })
    browser.end()
  },
 
  // free trial link takes you to a registration page
  free_trial_links_work: function (browser) {
    browser
      .url('https://www.pdq.com')
      .windowMaximize()
      .waitForElementVisible('body', 1000)
      .moveToElement('#main-content > div:nth-child(7) > div > div > div.css-daj429 > div', 100, 100)
      .click('#main-content > div:nth-child(7) > div > div > div.css-daj429 > div')
      .assert.urlContains('https://sales.pdq.com/Register?trial=true', 'Free trail link takes us to registration link')
      .end()
  },

  // we have a link somewhere on the page to schedule a demo
  demo_link_exists: function (browser) {
    browser
      .url('https://www.pdq.com')
      .windowMaximize()
      .waitForElementVisible('body', 1000)
      .moveToElement('#main-content > div:nth-child(7) > div > div > div.css-daj429 > a', 100, 100)
      .assert.attributeContains('#main-content > div:nth-child(7) > div > div > div.css-daj429 > a', 'href', 'https://app.hubspot.com/meetings/kelly-hammer/45-minute-product-demo', 'Demo link is present')
      .end()
  }
}
