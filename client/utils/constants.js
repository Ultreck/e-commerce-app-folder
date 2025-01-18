import { MdBorderOuter } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";
import { GrShieldSecurity } from "react-icons/gr";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
// import { TbCurrencyNaira } from "react-icons/tb";

import banner0 from "../assets/images/banner0.jpg";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banmer3.jpg";
import banner4 from "../assets/images/banner4.jpg";
import banner5 from "../assets/images/banner5.jpg";
import banner6 from "../assets/images/banner6.jpg";

export const heroCarousel = [
  banner0,
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
];
export const categories = [
  "Featured",
  "Home & Kitchen",
  "Women's Clothing",
  "Women's Shoes",
  "Men's Clothing",
  "Men's Shoes",
  "Men's Underwear & Sleepwear",
  "Sports & Outdoors",
  "Jewwlry & Accessories",
  "Beauty & Health",
  "Toys & Games",
  "Automotive",
  "Kids' Fashion",
  "Electronics",
  "Business, Industry & Science",
  "Cell Phones, & Accessories",
  "Smart Home",
  "Musical Instruments",
  "Food & Grocery",
  "Books",
];

export const supportList = [
  { text: "Support center", link: "/customer-care/support" },
  { text: "Shopilicity Puchase Protection", link: "/customer-care/puchase" },
  { text: "Chat with Shopilicity", link: "/customer-care/chat" },
  { text: "Privacy Policy", link: "/customer-care/policy" },
  { text: "Terms of use", link: "/customer-care/term" },
];

export const profileItems = [
  { name: "Your orders", link: "/customer/orders", icon: <MdBorderOuter /> },
  { name: "Your reviews", link: "/customer/review", icon: <VscPreview /> },
  { name: "Your profile", link: "/customer/profile", icon: <CiUser /> },
  { name: "Wishlist", link: "/customer/wishlist", icon: <CiHeart /> },
  {
    name: "Credit balance  ",
    link: "/customer/balance",
    icon: <CiMoneyCheck1 />,
  },
  { name: "Addresses", link: "/customer/address", icon: <FaRegAddressCard /> },
  {
    name: "Account security",
    link: "/customer/security",
    icon: <AiOutlineSafetyCertificate />,
  },
  {
    name: "Permission",
    link: "/customer/permission",
    icon: <GrShieldSecurity />,
  },
  {
    name: "Notification",
    link: "/customer/notification",
    icon: <IoIosNotificationsOutline />,
  },
  { name: "Log out", link: "/", icon: <RiLogoutCircleLine />, isLogOut: true },
];
export const supportItems = [
  { name: "Buying on Shoplicity", link: "/support" },
  { name: "Checkout", link: "/support" },
  { name: "Find my order", link: "/support" },
  { name: "Order changes", link: "/support" },
  { name: "Reviews", link: "/support" },
  { name: "Shipping", link: "/support/address" },
  { name: "Delivery", link: "/support" },
  { name: "Returns", link: "/support" },
  { name: "Refunds", link: "/support" },
  { name: "Account preferences", link: "/support" },
  { name: "Signing in", link: "/support" },
];

export const countriesWithFlagURLs = [
  {
    name: "Afghanistan",
    flag: "https://flagcdn.com/w320/af.png",
    currencyCode: "AFN",
  },
  {
    name: "Albania",
    flag: "https://flagcdn.com/w320/al.png",
    currencyCode: "ALL",
  },
  {
    name: "Algeria",
    flag: "https://flagcdn.com/w320/dz.png",
    currencyCode: "DZD",
  },
  {
    name: "Andorra",
    flag: "https://flagcdn.com/w320/ad.png",
    currencyCode: "EUR",
  },
  {
    name: "Angola",
    flag: "https://flagcdn.com/w320/ao.png",
    currencyCode: "AOA",
  },
  {
    name: "Antigua and Barbuda",
    flag: "https://flagcdn.com/w320/ag.png",
    currencyCode: "XCD",
  },
  {
    name: "Argentina",
    flag: "https://flagcdn.com/w320/ar.png",
    currencyCode: "ARS",
  },
  {
    name: "Armenia",
    flag: "https://flagcdn.com/w320/am.png",
    currencyCode: "AMD",
  },
  {
    name: "Australia",
    flag: "https://flagcdn.com/w320/au.png",
    currencyCode: "AUD",
  },
  {
    name: "Austria",
    flag: "https://flagcdn.com/w320/at.png",
    currencyCode: "EUR",
  },
  {
    name: "Azerbaijan",
    flag: "https://flagcdn.com/w320/az.png",
    currencyCode: "AZN",
  },
  {
    name: "Bahamas",
    flag: "https://flagcdn.com/w320/bs.png",
    currencyCode: "BSD",
  },
  {
    name: "Bahrain",
    flag: "https://flagcdn.com/w320/bh.png",
    currencyCode: "BHD",
  },
  {
    name: "Bangladesh",
    flag: "https://flagcdn.com/w320/bd.png",
    currencyCode: "BDT",
  },
  {
    name: "Barbados",
    flag: "https://flagcdn.com/w320/bb.png",
    currencyCode: "BBD",
  },
  {
    name: "Belarus",
    flag: "https://flagcdn.com/w320/by.png",
    currencyCode: "BYN",
  },
  {
    name: "Belgium",
    flag: "https://flagcdn.com/w320/be.png",
    currencyCode: "EUR",
  },
  {
    name: "Belize",
    flag: "https://flagcdn.com/w320/bz.png",
    currencyCode: "BZD",
  },
  {
    name: "Benin",
    flag: "https://flagcdn.com/w320/bj.png",
    currencyCode: "XOF",
  },
  {
    name: "Bhutan",
    flag: "https://flagcdn.com/w320/bt.png",
    currencyCode: "BTN",
  },
  {
    name: "Bolivia",
    flag: "https://flagcdn.com/w320/bo.png",
    currencyCode: "BOB",
  },
  {
    name: "Bosnia and Herzegovina",
    flag: "https://flagcdn.com/w320/ba.png",
    currencyCode: "BAM",
  },
  {
    name: "Botswana",
    flag: "https://flagcdn.com/w320/bw.png",
    currencyCode: "BWP",
  },
  {
    name: "Brazil",
    flag: "https://flagcdn.com/w320/br.png",
    currencyCode: "BRL",
  },
  {
    name: "Brunei",
    flag: "https://flagcdn.com/w320/bn.png",
    currencyCode: "BND",
  },
  {
    name: "Bulgaria",
    flag: "https://flagcdn.com/w320/bg.png",
    currencyCode: "BGN",
  },
  {
    name: "Burkina Faso",
    flag: "https://flagcdn.com/w320/bf.png",
    currencyCode: "XOF",
  },
  {
    name: "Burundi",
    flag: "https://flagcdn.com/w320/bi.png",
    currencyCode: "BIF",
  },
  {
    name: "Cabo Verde",
    flag: "https://flagcdn.com/w320/cv.png",
    currencyCode: "CVE",
  },
  {
    name: "Cambodia",
    flag: "https://flagcdn.com/w320/kh.png",
    currencyCode: "KHR",
  },
  {
    name: "Cameroon",
    flag: "https://flagcdn.com/w320/cm.png",
    currencyCode: "XAF",
  },
  {
    name: "Canada",
    flag: "https://flagcdn.com/w320/ca.png",
    currencyCode: "CAD",
  },
  {
    name: "Central African Republic",
    flag: "https://flagcdn.com/w320/cf.png",
    currencyCode: "XAF",
  },
  {
    name: "Chad",
    flag: "https://flagcdn.com/w320/td.png",
    currencyCode: "CDF",
  },
  {
    name: "Chile",
    flag: "https://flagcdn.com/w320/cl.png",
    currencyCode: "CLP",
  },
  {
    name: "China",
    flag: "https://flagcdn.com/w320/cn.png",
    currencyCode: "CNY",
  },
  {
    name: "Colombia",
    flag: "https://flagcdn.com/w320/co.png",
    currencyCode: "COP",
  },
  {
    name: "Comoros",
    flag: "https://flagcdn.com/w320/km.png",
    currencyCode: "KMF",
  },
  {
    name: "Congo (Congo-Brazzaville)",
    flag: "https://flagcdn.com/w320/cg.png",
    currencyCode: "CDF",
  },
  {
    name: "Congo (Democratic Republic)",
    flag: "https://flagcdn.com/w320/cd.png",
    currencyCode: "CDF",
  },
  {
    name: "Costa Rica",
    flag: "https://flagcdn.com/w320/cr.png",
    currencyCode: "CRC",
  },
  {
    name: "Croatia",
    flag: "https://flagcdn.com/w320/hr.png",
    currencyCode: "HRK",
  },
  {
    name: "Cuba",
    flag: "https://flagcdn.com/w320/cu.png",
    currencyCode: "CUP",
  },
  {
    name: "Cyprus",
    flag: "https://flagcdn.com/w320/cy.png",
    currencyCode: "EUR",
  },
  {
    name: "Czech Republic",
    flag: "https://flagcdn.com/w320/cz.png",
    currencyCode: "CZK",
  },
  {
    name: "Denmark",
    flag: "https://flagcdn.com/w320/dk.png",
    currencyCode: "DKK",
  },
  {
    name: "Djibouti",
    flag: "https://flagcdn.com/w320/dj.png",
    currencyCode: "DJF",
  },
  {
    name: "Dominica",
    flag: "https://flagcdn.com/w320/dm.png",
    currencyCode: "XCD",
  },
  {
    name: "Dominican Republic",
    flag: "https://flagcdn.com/w320/do.png",
    currencyCode: "DOP",
  },
  {
    name: "Ecuador",
    flag: "https://flagcdn.com/w320/ec.png",
    currencyCode: "USD",
  },
  {
    name: "Egypt",
    flag: "https://flagcdn.com/w320/eg.png",
    currencyCode: "EGP",
  },
  {
    name: "El Salvador",
    flag: "https://flagcdn.com/w320/sv.png",
    currencyCode: "SVC",
  },
  {
    name: "Equatorial Guinea",
    flag: "https://flagcdn.com/w320/gq.png",
    currencyCode: "GNF",
  },
  {
    name: "Eritrea",
    flag: "https://flagcdn.com/w320/er.png",
    currencyCode: "ERN",
  },
  {
    name: "Estonia",
    flag: "https://flagcdn.com/w320/ee.png",
    currencyCode: "EUR",
  },
  {
    name: "Eswatini",
    flag: "https://flagcdn.com/w320/sz.png",
    currencyCode: "SZL",
  },
  {
    name: "Ethiopia",
    flag: "https://flagcdn.com/w320/et.png",
    currencyCode: "ETB",
  },
  {
    name: "Fiji",
    flag: "https://flagcdn.com/w320/fj.png",
    currencyCode: "FJD",
  },
  {
    name: "Finland",
    flag: "https://flagcdn.com/w320/fi.png",
    currencyCode: "EUR",
  },
  {
    name: "France",
    flag: "https://flagcdn.com/w320/fr.png",
    currencyCode: "EUR",
  },
  {
    name: "Gabon",
    flag: "https://flagcdn.com/w320/ga.png",
    currencyCode: "GAB",
  },
  {
    name: "Gambia",
    flag: "https://flagcdn.com/w320/gm.png",
    currencyCode: "GMD",
  },
  {
    name: "Georgia",
    flag: "https://flagcdn.com/w320/ge.png",
    currencyCode: "GEL",
  },
  {
    name: "Germany",
    flag: "https://flagcdn.com/w320/de.png",
    currencyCode: "EUR",
  },
  {
    name: "Ghana",
    flag: "https://flagcdn.com/w320/gh.png",
    currencyCode: "GHS",
  },
  {
    name: "Greece",
    flag: "https://flagcdn.com/w320/gr.png",
    currencyCode: "EUR",
  },
  {
    name: "Grenada",
    flag: "https://flagcdn.com/w320/gd.png",
    currencyCode: "XCD",
  },
  {
    name: "Guatemala",
    flag: "https://flagcdn.com/w320/gt.png",
    currencyCode: "GTQ",
  },
  {
    name: "Guinea",
    flag: "https://flagcdn.com/w320/gn.png",
    currencyCode: "GNF",
  },
  {
    name: "Guinea-Bissau",
    flag: "https://flagcdn.com/w320/gw.png",
    currencyCode: "GNF",
  },
  {
    name: "Guyana",
    flag: "https://flagcdn.com/w320/gy.png",
    currencyCode: "GYD",
  },
  {
    name: "Haiti",
    flag: "https://flagcdn.com/w320/ht.png",
    currencyCode: "HTG",
  },
  {
    name: "Honduras",
    flag: "https://flagcdn.com/w320/hn.png",
    currencyCode: "HNL",
  },
  {
    name: "Hungary",
    flag: "https://flagcdn.com/w320/hu.png",
    currencyCode: "HUF",
  },
  {
    name: "Iceland",
    flag: "https://flagcdn.com/w320/is.png",
    currencyCode: "ISK",
  },
  {
    name: "India",
    flag: "https://flagcdn.com/w320/in.png",
    currencyCode: "INR",
  },
  {
    name: "Indonesia",
    flag: "https://flagcdn.com/w320/id.png",
    currencyCode: "IDR",
  },
  {
    name: "Iran",
    flag: "https://flagcdn.com/w320/ir.png",
    currencyCode: "IRR",
  },
  {
    name: "Iraq",
    flag: "https://flagcdn.com/w320/iq.png",
    currencyCode: "IQD",
  },
  {
    name: "Ireland",
    flag: "https://flagcdn.com/w320/ie.png",
    currencyCode: "EUR",
  },
  {
    name: "Israel",
    flag: "https://flagcdn.com/w320/il.png",
    currencyCode: "ILS",
  },
  {
    name: "Italy",
    flag: "https://flagcdn.com/w320/it.png",
    currencyCode: "EUR",
  },
  {
    name: "Jamaica",
    flag: "https://flagcdn.com/w320/jm.png",
    currencyCode: "JMD",
  },
  {
    name: "Japan",
    flag: "https://flagcdn.com/w320/jp.png",
    currencyCode: "JPY",
  },
  {
    name: "Jordan",
    flag: "https://flagcdn.com/w320/jo.png",
    currencyCode: "JOD",
  },
  {
    name: "Kazakhstan",
    flag: "https://flagcdn.com/w320/kz.png",
    currencyCode: "KZT",
  },
  {
    name: "Kenya",
    flag: "https://flagcdn.com/w320/ke.png",
    currencyCode: "KES",
  },
  {
    name: "Kiribati",
    flag: "https://flagcdn.com/w320/ki.png",
    currencyCode: "AUD",
  },
  {
    name: "Korea (North)",
    flag: "https://flagcdn.com/w320/kp.png",
    currencyCode: "KPW",
  },
  {
    name: "Korea (South)",
    flag: "https://flagcdn.com/w320/kr.png",
    currencyCode: "KRW",
  },
  {
    name: "Kuwait",
    flag: "https://flagcdn.com/w320/kw.png",
    currencyCode: "KWD",
  },
  {
    name: "Kyrgyzstan",
    flag: "https://flagcdn.com/w320/kg.png",
    currencyCode: "KGS",
  },
  {
    name: "Laos",
    flag: "https://flagcdn.com/w320/la.png",
    currencyCode: "LAK",
  },
  {
    name: "Latvia",
    flag: "https://flagcdn.com/w320/lv.png",
    currencyCode: "EUR",
  },
  {
    name: "Lebanon",
    flag: "https://flagcdn.com/w320/lb.png",
    currencyCode: "LBP",
  },
  {
    name: "Lesotho",
    flag: "https://flagcdn.com/w320/ls.png",
    currencyCode: "LSL",
  },
  {
    name: "Liberia",
    flag: "https://flagcdn.com/w320/lr.png",
    currencyCode: "LBR",
  },
  {
    name: "Libya",
    flag: "https://flagcdn.com/w320/ly.png",
    currencyCode: "LYD",
  },
  {
    name: "Liechtenstein",
    flag: "https://flagcdn.com/w320/li.png",
    currencyCode: "CHF",
  },
  {
    name: "Lithuania",
    flag: "https://flagcdn.com/w320/lt.png",
    currencyCode: "LTL",
  },
  {
    name: "Luxembourg",
    flag: "https://flagcdn.com/w320/lu.png",
    currencyCode: "EUR",
  },
  {
    name: "Madagascar",
    flag: "https://flagcdn.com/w320/mg.png",
    currencyCode: "MGA",
  },
  {
    name: "Malawi",
    flag: "https://flagcdn.com/w320/mw.png",
    currencyCode: "MWK",
  },
  {
    name: "Malaysia",
    flag: "https://flagcdn.com/w320/my.png",
    currencyCode: "MYR",
  },
  {
    name: "Maldives",
    flag: "https://flagcdn.com/w320/mv.png",
    currencyCode: "MVR",
  },
  {
    name: "Mali",
    flag: "https://flagcdn.com/w320/ml.png",
    currencyCode: "BAM",
  },
  {
    name: "Malta",
    flag: "https://flagcdn.com/w320/mt.png",
    currencyCode: "EUR",
  },
  {
    name: "Marshall Islands",
    flag: "https://flagcdn.com/w320/mh.png",
    currencyCode: "USD",
  },
  {
    name: "Mauritania",
    flag: "https://flagcdn.com/w320/mr.png",
    currencyCode: "MRO",
  },
  {
    name: "Mauritius",
    flag: "https://flagcdn.com/w320/mu.png",
    currencyCode: "MUR",
  },
  {
    name: "Mexico",
    flag: "https://flagcdn.com/w320/mx.png",
    currencyCode: "MXN",
  },
  {
    name: "Micronesia",
    flag: "https://flagcdn.com/w320/fm.png",
    currencyCode: "USD",
  },
  {
    name: "Moldova",
    flag: "https://flagcdn.com/w320/md.png",
    currencyCode: "MDL",
  },
  {
    name: "Monaco",
    flag: "https://flagcdn.com/w320/MC.png",
    currencyCode: "EUR",
  },
  {
    name: "Mongolia",
    flag: "https://flagcdn.com/w320/mn.png",
    currencyCode: "MNT",
  },
  {
    name: "Montenegro",
    flag: "https://flagcdn.com/w320/me.png",
    currencyCode: "EUR",
  },
  {
    name: "Morocco",
    flag: "https://flagcdn.com/w320/ma.png",
    currencyCode: "MAD",
  },
  {
    name: "Mozambique",
    flag: "https://flagcdn.com/w320/mz.png",
    currencyCode: "MZN",
  },
  {
    name: "Myanmar (Burma)",
    flag: "https://flagcdn.com/w320/mm.png",
    currencyCode: "MMK",
  },
  {
    name: "Namibia",
    flag: "https://flagcdn.com/w320/na.png",
    currencyCode: "NAD",
  },
  {
    name: "Nauru",
    flag: "https://flagcdn.com/w320/nr.png",
    currencyCode: "AUD",
  },
  {
    name: "Nepal",
    flag: "https://flagcdn.com/w320/np.png",
    currencyCode: "NPR",
  },
  {
    name: "Netherlands",
    flag: "https://flagcdn.com/w320/nl.png",
    currencyCode: "EUR",
  },
  {
    name: "New Zealand",
    flag: "https://flagcdn.com/w320/nz.png",
    currencyCode: "NZD",
  },
  {
    name: "Nicaragua",
    flag: "https://flagcdn.com/w320/ni.png",
    currencyCode: "NIO",
  },
  {
    name: "Niger",
    flag: "https://flagcdn.com/w320/ne.png",
    currencyCode: "XOF",
  },
  {
    name: "Nigeria",
    flag: "https://flagcdn.com/w320/ng.png",
    currencyCode: "NGN",
  },
  {
    name: "North Macedonia",
    flag: "https://flagcdn.com/w320/mk.png",
    currencyCode: "MKD",
  },
  {
    name: "Norway",
    flag: "https://flagcdn.com/w320/no.png",
    currencyCode: "NOK",
  },
  {
    name: "Oman",
    flag: "https://flagcdn.com/w320/om.png",
    currencyCode: "OMR",
  },
  {
    name: "Pakistan",
    flag: "https://flagcdn.com/w320/pk.png",
    currencyCode: "PKR",
  },
  {
    name: "Palau",
    flag: "https://flagcdn.com/w320/pw.png",
    currencyCode: "USD",
  },
  {
    name: "Panama",
    flag: "https://flagcdn.com/w320/pa.png",
    currencyCode: "PAB",
  },
  {
    name: "Papua New Guinea",
    flag: "https://flagcdn.com/w320/pg.png",
    currencyCode: "PGK",
  },
  {
    name: "Paraguay",
    flag: "https://flagcdn.com/w320/py.png",
    currencyCode: "PYG",
  },
  {
    name: "Peru",
    flag: "https://flagcdn.com/w320/pe.png",
    currencyCode: "PEN",
  },
  {
    name: "Philippines",
    flag: "https://flagcdn.com/w320/ph.png",
    currencyCode: "PHP",
  },
  {
    name: "Poland",
    flag: "https://flagcdn.com/w320/pl.png",
    currencyCode: "PLN",
  },
  {
    name: "Portugal",
    flag: "https://flagcdn.com/w320/pt.png",
    currencyCode: "EUR",
  },
  {
    name: "Qatar",
    flag: "https://flagcdn.com/w320/qa.png",
    currencyCode: "QAR",
  },
  {
    name: "Romania",
    flag: "https://flagcdn.com/w320/ro.png",
    currencyCode: "RON",
  },
  {
    name: "Russia",
    flag: "https://flagcdn.com/w320/ru.png",
    currencyCode: "RUB",
  },
  {
    name: "Rwanda",
    flag: "https://flagcdn.com/w320/rw.png",
    currencyCode: "RWF",
  },
  {
    name: "Saint Kitts and Nevis",
    flag: "https://flagcdn.com/w320/kn.png",
    currencyCode: "XCD",
  },
  {
    name: "Saint Lucia",
    flag: "https://flagcdn.com/w320/lc.png",
    currencyCode: "XCD",
  },
  {
    name: "Saint Vincent and the Grenadines",
    flag: "https://flagcdn.com/w320/vc.png",
    currencyCode: "XCD",
  },
  {
    name: "Samoa",
    flag: "https://flagcdn.com/w320/ws.png",
    currencyCode: "WST",
  },
  {
    name: "San Marino",
    flag: "https://flagcdn.com/w320/sm.png",
    currencyCode: "EUR",
  },
  {
    name: "Sao Tome and Principe",
    flag: "https://flagcdn.com/w320/st.png",
    currencyCode: "STN",
  },
  {
    name: "Saudi Arabia",
    flag: "https://flagcdn.com/w320/sa.png",
    currencyCode: "SAR",
  },
  {
    name: "Senegal",
    flag: "https://flagcdn.com/w320/sn.png",
    currencyCode: "XOF",
  },
  {
    name: "Serbia",
    flag: "https://flagcdn.com/w320/rs.png",
    currencyCode: "RSD",
  },
  {
    name: "Seychelles",
    flag: "https://flagcdn.com/w320/sc.png",
    currencyCode: "SCR",
  },
  {
    name: "Sierra Leone",
    flag: "https://flagcdn.com/w320/sl.png",
    currencyCode: "SLL",
  },
  {
    name: "Singapore",
    flag: "https://flagcdn.com/w320/sg.png",
    currencyCode: "SGD",
  },
  {
    name: "Slovakia",
    flag: "https://flagcdn.com/w320/sk.png",
    currencyCode: "EUR",
  },
  {
    name: "Slovenia",
    flag: "https://flagcdn.com/w320/si.png",
    currencyCode: "SIT",
  },
  {
    name: "Solomon Islands",
    flag: "https://flagcdn.com/w320/sb.png",
    currencyCode: "SBD",
  },
  {
    name: "Somalia",
    flag: "https://flagcdn.com/w320/so.png",
    currencyCode: "SOS",
  },
  {
    name: "South Africa",
    flag: "https://flagcdn.com/w320/za.png",
    currencyCode: "ZAR",
  },
  {
    name: "South Sudan",
    flag: "https://flagcdn.com/w320/ss.png",
    currencyCode: "SSP",
  },
  {
    name: "Spain",
    flag: "https://flagcdn.com/w320/es.png",
    currencyCode: "EUR",
  },
  {
    name: "Sri Lanka",
    flag: "https://flagcdn.com/w320/lk.png",
    currencyCode: "LKR",
  },
  {
    name: "Sudan",
    flag: "https://flagcdn.com/w320/sd.png",
    currencyCode: "SDG",
  },
  {
    name: "Suriname",
    flag: "https://flagcdn.com/w320/sr.png",
    currencyCode: "SRD",
  },
  {
    name: "Sweden",
    flag: "https://flagcdn.com/w320/se.png",
    currencyCode: "SEK",
  },
  {
    name: "Switzerland",
    flag: "https://flagcdn.com/w320/ch.png",
    currencyCode: "CHF",
  },
  {
    name: "Syria",
    flag: "https://flagcdn.com/w320/sy.png",
    currencyCode: "SYP",
  },
  {
    name: "Taiwan",
    flag: "https://flagcdn.com/w320/tw.png",
    currencyCode: "TWD",
  },
  {
    name: "Tajikistan",
    flag: "https://flagcdn.com/w320/tj.png",
    currencyCode: "TJS",
  },
  {
    name: "Tanzania",
    flag: "https://flagcdn.com/w320/tz.png",
    currencyCode: "TZS",
  },
  {
    name: "Thailand",
    flag: "https://flagcdn.com/w320/th.png",
    currencyCode: "THB",
  },
  {
    name: "Timor-Leste",
    flag: "https://flagcdn.com/w320/tl.png",
    currencyCode: "USD",
  },
  {
    name: "Togo",
    flag: "https://flagcdn.com/w320/tg.png",
    currencyCode: "XOF",
  },
  {
    name: "Tonga",
    flag: "https://flagcdn.com/w320/to.png",
    currencyCode: "TOP",
  },
  {
    name: "Trinidad and Tobago",
    flag: "https://flagcdn.com/w320/tt.png",
    currencyCode: "TTD",
  },
  {
    name: "Tunisia",
    flag: "https://flagcdn.com/w320/tn.png",
    currencyCode: "TND",
  },
  {
    name: "Turkey",
    flag: "https://flagcdn.com/w320/tr.png",
    currencyCode: "TRY",
  },
  {
    name: "Turkmenistan",
    flag: "https://flagcdn.com/w320/tm.png",
    currencyCode: "TMT",
  },
  {
    name: "Tuvalu",
    flag: "https://flagcdn.com/w320/tv.png",
    currencyCode: "AUD",
  },
  {
    name: "Uganda",
    flag: "https://flagcdn.com/w320/ug.png",
    currencyCode: "UGX",
  },
  {
    name: "Ukraine",
    flag: "https://flagcdn.com/w320/ua.png",
    currencyCode: "UAH",
  },
  {
    name: "United Arab Emirates",
    flag: "https://flagcdn.com/w320/ae.png",
    currencyCode: "AED",
  },
  {
    name: "United Kingdom",
    flag: "https://flagcdn.com/w320/gb.png",
    currencyCode: "GBP",
  },
  {
    name: "United States",
    flag: "https://flagcdn.com/w320/us.png",
    currencyCode: "USD",
  },
  {
    name: "Uruguay",
    flag: "https://flagcdn.com/w320/uy.png",
    currencyCode: "UYU",
  },
  {
    name: "Uzbekistan",
    flag: "https://flagcdn.com/w320/uz.png",
    currencyCode: "UZS",
  },
  {
    name: "Vanuatu",
    flag: "https://flagcdn.com/w320/vu.png",
    currencyCode: "VUV",
  },
  {
    name: "Vatican City",
    flag: "https://flagcdn.com/w320/va.png",
    currencyCode: "EUR",
  },
  {
    name: "Venezuela",
    flag: "https://flagcdn.com/w320/ve.png",
    currencyCode: "VES",
  },
  {
    name: "Vietnam",
    flag: "https://flagcdn.com/w320/vn.png",
    currencyCode: "VND",
  },
  {
    name: "Yemen",
    flag: "https://flagcdn.com/w320/ye.png",
    currencyCode: "YER",
  },
  {
    name: "Zambia",
    flag: "https://flagcdn.com/w320/zm.png",
    currencyCode: "ZMW",
  },
  {
    name: "Zimbabwe",
    flag: "https://flagcdn.com/w320/zw.png",
    currencyCode: "ZWL",
  },
];

export function getRandomNumber(min = 0.1, max = 0.9) {
  return +(Math.random() * (max - min) + min).toFixed(1);
}

export const ratingLabels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export const sizeTabs = [
  {
    id: "uk",
    label: "Uk Size",
  },
  {
    id: "standard",
    label: "Standard Size",
  },
];

export const textTruncateFucntion = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

export const userProfile = [
  {
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "7064778921",
    streetAddress: "11 Deji Olamiju Peace Estate ",
    country: "Nigeria",
    apartment: "Sholuyi Gbagada Lagos",
    state: "Lagos",
    city: "Gbagada",
    postalAddress: "00229",
  },
  {
    firstName: "Grace",
    lastName: "Williams",
    phoneNumber: "506444321",
    streetAddress: "223 Deji Olamiju Peace Estate ",
    country: "Nigeria",
    apartment: "Sholuyi Gbagada Lagos",
    state: "Lagos",
    city: "Gbagada",
    postalAddress: "00229",
    default: true,
  },
  {
    firstName: "Grace",
    lastName: "Williams",
    phoneNumber: "506444321",
    streetAddress: "223 Deji Olamiju Peace Estate ",
    country: "Nigeria",
    apartment: "Sholuyi Gbagada Lagos",
    state: "Lagos",
    city: "Gbagada",
    postalAddress: "00229",
  },
  {
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "7064778921",
    streetAddress: "11 Deji Olamiju Peace Estate ",
    country: "Nigeria",
    apartment: "Sholuyi Gbagada Lagos",
    state: "Lagos",
    city: "Gbagada",
    postalAddress: "00229",
  },
];
