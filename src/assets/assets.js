import logo from "./logo/blue_logo.png";
import moc_logo from "./logo/moc_black_logo.png";
import footer_logo from "./footer_logo.png";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import empty_cart from './carts.png';
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import book_list_icon from "./book_list_icon.svg";
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import dashboard_icon from "./dashboard.png";
import profile_icon from "./profile_icon.png";
import mainten_icon from "./under-maintenance.png";
import menu_icon from "./menu_icon.svg";
import pdf_icon from "./b1.png";
import service_icon from "./b2.png";
import coin_icon from "./b3.png";
// import box_icon from "./box_icon.svg";
import trust_icon from "./b4.png";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import main_banner_bg from "./banner/ladakh3.jpg";
import main_banner_bg_sm from "./banner/ladakh.jpeg";
import page_banner_bg from "./banner/banner_pub.jpeg";
import page_banner_bg_sm from "./banner/banner_pub.jpeg";
import bottom_banner_image from "./banner/b69.jpg";
import bottom_banner_image_sm from "./banner/b69.jpg";
import add_address_iamge from "./add_address_image.svg";
import catg1 from "./cat/cat1.jpeg";
import catg2 from "./cat/cat2.jpeg";
import catg3 from "./cat/cat3.jpeg";
import catg4 from "./cat/cat4.jpeg";
import catg5 from "./cat/cat5.jpeg";


export const assets = {
  logo,
  moc_logo,
  footer_logo,
  search_icon,
  remove_icon,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  cart_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  book_list_icon,
  dashboard_icon,
  order_icon,
  empty_cart,
  upload_area,
  profile_icon,
  menu_icon,
  pdf_icon,
  service_icon,
  coin_icon,
  trust_icon,
  black_arrow_icon,
  white_arrow_icon,
  main_banner_bg,
  main_banner_bg_sm,
  page_banner_bg,
  page_banner_bg_sm,
  bottom_banner_image,
  bottom_banner_image_sm,
  add_address_iamge,
  mainten_icon
};

export const categories = [
  {
    text: "Excavation Report (MASI)",
    path: "Masi",
    image: catg1,
    bgColor: "#fff",
  },
  {
    text: "Archaeological Report",
    path: "Report",
    image: catg2,
    bgColor: "#fff",
  },
  {
    text: "Theses & Dissertations",
    path: "Theses",
    image: catg3,
    bgColor: "#fff",
  },
  {
    text: "Monograph",
    path: "Monograph",
    image: catg4,
    bgColor: "#fff",
  },
  {
    text: "Periodical",
    path: "Periodical",
    image: catg5,
    bgColor: "#fff",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      { text: "Home", url: "/" },
      { text: "About", url: "/about" },
      { text: "Books", url: "/books" },
      { text: "Contact", url: "/contact" },
    
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Privacy Policy", url: "/privacy-policy" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Term and Conditions", url: "/terms-&-conditions" }
    ],
  },
  {
    title: "Contact Us",
    links: [
      { text: "Email: asilibrary2021@gmail.com", url: "#" },
      { text: "Phone: 011-23004578/79", url: "#" },
      { text: "Address: Central Archaeological Library Dharohar Bhawan, 24 Tilak Marg", url: "New Delhi 110001" }
    ],
  },
];

export const features = [
  {
    icon: pdf_icon,
    title: "Instant PDF Access",
    description: "Download your favorite books instantly in PDF format and start reading anytime, anywhere.",
  },
  {
    icon: service_icon,
    title: "Friendly Customer Support",
    description: "Need help finding a book or order? Our support team is always ready to assist you.",
  },
  {
    icon: coin_icon,
    title: "Best Value for Money",
    description: "Discover great deals on books, journals, and study materials at affordable prices.",
  },
  {
    icon: trust_icon,
    title: "Safe & Secure Checkout",
    description: "Enjoy a secure checkout experience with trusted payment methods and complete data protection.",
  },
];

