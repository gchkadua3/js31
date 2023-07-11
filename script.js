// შევქმენით მასივი, სადაც შევიყვანეთ 3 ობიექტი, და მივანიჭეთ მნიშვნელობები, როგორიცაა სათაური ფასი და ა.შ.
const licenses = [
    {
        title: 'Personal',
        description: 'Just started using awesome Module. Great way to boost the hard designing or prototyping process.',
        price: 'Free',
        priceDescription: 'Per month billed annually or $250 from month to month'
    },
  
    {
        title: 'Agency',
        description: 'Also a perfect tool for creative studios and freelancers',
        price: '123',
        priceDescription: 'Per month billed annually or €250 from month to month'
    },
  
    {
        title: 'Unlimited',
        description: 'Living in today’s metropolitan world of cellular phones, mobile computers',
        price: '232',
        priceDescription: 'Per month billed annually or €250 from month to month'
    }
  ];
  
  // წამოვიღეთ  კლასი, რომელსაც გაწერილი აქვს firstCard, რომ მის ელემენტებზე მოვახდინოთ წვდომა.
  const licenseCards = document.querySelectorAll('.firstCard');
  
  
  // იწყება იტერაცია მასივში ყოველი საგნისთვის, "license" პარამეტრია რომელიც წარმოადგენს მიმდინარე საგანს, ხოლო "index" პარამეტრი წარმოადგენს ინდექს მიმდინარე საგნისთვის.
  licenses.forEach((license,index) => {
  
  
  var titleElement = licenseCards[index].querySelector('h1');
  var descriptionElement = licenseCards[index].querySelector('p');
  var priceElement = licenseCards[index].querySelector('.twoTexts h1');
  var priceDescriptionElement = licenseCards[index].querySelector('.twoTexts p');
  
  titleElement.textContent = license.title;
  descriptionElement.textContent = license.description;
  priceElement.textContent = license.price;
  priceDescriptionElement.textContent = license.priceDescription;
  })