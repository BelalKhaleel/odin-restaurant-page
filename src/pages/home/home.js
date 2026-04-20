import restaurantImage from "../../images/restaurant.jpeg";

export default function renderHomePageContent(node) {
  const h1 = document.createElement('h1');
  h1.textContent = 'Welcome to our Restaurant!';
  
  const img = document.createElement('img');
  img.src = restaurantImage;
  img.setAttribute('alt', 'empty restaurant');
  
  const p = document.createElement('p');
  p.textContent = `Join us at our restaurant and embark on a culinary journey
          that will leave you longing for more. Experience the perfect blend of
          taste, ambiance, and service that sets us apart from the rest. We look
          forward to welcoming you and making every meal a masterpiece.`
  
  node.append(h1, img, p);
}