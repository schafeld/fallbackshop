// Odd function to open Dcomm accordion and scroll with delay to its thus revealed named anchor to make it visible to user.
// Caution: Ordinal number of accordion and number of footnote are not identical in all cases (e.g. accordion may contain more than one anchor).
export default function (accordionNumber, anchorName) {
  console.log('Close all legal text accordions and click accordionNumber:' + accordionNumber + ', anchorName:' + anchorName)
  try {
    const allAccordionWrappers = document.querySelectorAll('.toggle-wrapper.js_toggle-wrapper')
    // close all FAQ accordions before opening the selected one.
    for (let i = 0; i < allAccordionWrappers.length; i++) {
      allAccordionWrappers[i].classList.remove('is-active')
    }
    allAccordionWrappers[accordionNumber - 1].classList.add('is-active')

    setTimeout(function () {
      try {
        document.querySelector(anchorName).scrollIntoView()
      } catch (e) {
        console.warn('Does click target exist on page? Error: ' + e)
      }
    }, 1000)
  } catch (e) {
    console.warn('Do click targets exist on page? Error: ' + e)
  }
}
