import { Link } from 'react-router-dom';
import maintenanceImg from '../assets/support/maintenance.jpg';
import chargerImg from '../assets/support/charger-installation.avif';
import faqImg from '../assets/support/FAQ.jpg';
import enquiryImg from '../assets/support/enquiries.jpg';


const supportCards = [
  {
    title: 'Maintenance',
    image: maintenanceImg,
    action: 'Learn More',
    link: '/support/maintenance',
    purpose:'request maintenance'
  },
  {
    title: 'Charger Installation',
    image: chargerImg,
    action: 'Get Started',
    link: '/support/installation',
    purpose: 'install a charger'
  },
  {
    title: 'Frequently Asked Questions',
    image: faqImg,
    action: 'View FAQs',
    link:'/support/faq',
  },
  {
    title: 'Enquiry',
    image: enquiryImg,
    action: 'Chat with us',
    link: 'https://wa.me/2348162557331',
    isWhatsapp: true,
  },
];

export default () => {
  return (
    <section id="support">
      <h2>How Can We Help You?</h2>
      <div className="support-grid">
        {supportCards.map((card, index) => (
          <div className="support-card" key={index}>
            <img src={card.image} alt={card.title} />
            <div className="card-content">
              <h3>{card.title}</h3>
              {card.isWhatsapp?
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <ion-icon name="logo-whatsapp"></ion-icon> {card.action}
              </a>:
              <Link to={card.link} state={{purpose:card.purpose?card.purpose:''}}>{card.action}</Link>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

















// const supportCards = [
//   {
//     title: 'Maintenance',
//     image: maintenanceImg,
//     action: 'Learn More',
//     link: '/maintenance',
//   },
//   {
//     title: 'Charger Installation',
//     image: chargerImg,
//     action: 'Get Started',
//     link: '/installation',
//   },
//   {
//     title: 'Frequently Asked Questions',
//     image: faqImg,
//     action: 'View FAQs',
//     link: '/faq',
//   },
//   {
//     title: 'Enquiry',
//     image: enquiryImg,
//     action: 'Chat with Us',
//     link: 'https://wa.me/2348162557331',
//     isWhatsapp: true,
//   },
// ];

// const Support = () => {
//   return (
//     <section id="support">
//       {supportCards.map(({ title, image, action, link, isWhatsapp }, index) => (
//         <div
//           className="card"
//           key={index}
//           style={{ backgroundImage: `url(${image})` }}
//         >
//           <h3>{title}</h3>
//           {isWhatsapp ? (
//             <a
//               href={link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="action-button whatsapp"
//             >
//               <ion-icon name="logo-whatsapp"></ion-icon>
//               {action}
//             </a>
//           ) : (
//             <Link to={link} className="action-button">
//               {action}
//             </Link>
//           )}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Support;
