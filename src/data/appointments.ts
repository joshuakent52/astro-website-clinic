/**
 * Content for the appointments page (/appointments).
 * Kept separate from the section/page markup so copy and the Microsoft
 * Forms embed URL can be updated without touching any markup.
 */

export const banner = {
  heading: "Request an Appointment",
  subheading: "Request a visit using the form below, or call 801.854.5168 during business hours.",
};

export const form = {
  // Microsoft Forms embed URL — the "src" from the <iframe> Forms gives you
  // when you choose Share > Embed. Swap this out any time the form changes.
  src: "https://forms.office.com/Pages/ResponsePage.aspx?id=bG_YgFx8hEWuoNnc6TmuLXhacniD7QpGko0_g7-32rFUNzZWSlM3QUdDS1lZN1VMVlZaRDM2TUpDUi4u&embed=true",
  title: "Appointment Request Form",
  // Height/width from the Forms embed code was 6000/1500 = 400%. Adjust this
  // if the real form ends up taller or shorter than expected once it's live.
  aspectRatio: 280,
};