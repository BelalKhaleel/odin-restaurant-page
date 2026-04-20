export default function renderAboutPageContent(node) {  
  const h1 = document.createElement('h1');
  h1.textContent = 'About our Restaurant';
  
  const p = document.createElement('p');
  p.textContent = `Welcome to our restaurant, where culinary excellence meets exceptional
          hospitality. Our restaurant is a haven for food enthusiasts, offering a
          diverse menu that celebrates both local and international flavors. Each
          dish is meticulously crafted by our talented chefs, using only the
          freshest ingredients to ensure a delightful dining experience. At
          our restaurant, we believe in the magic of great food and the joy it
          brings. From our succulent steaks to our mouth-watering seafood, every
          bite is designed to tantalize your taste buds. Our signature dishes,
          such as the herb-crusted lamb and truffle-infused pasta, have earned
          rave reviews from both critics and patrons alike. But it's not just
          about the food. Our warm and inviting ambiance provides the perfect
          setting for any occasion, whether it's a romantic dinner for two, a
          family celebration, or a business lunch. Our attentive staff is
          dedicated to making your visit memorable, offering impeccable service
          with a smile.`
  
  node.append(h1, p);
}