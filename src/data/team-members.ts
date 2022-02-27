import { socialMediaLinks } from "types";

import aida from "assets/images/team/aida-kamranfar.jpg";
import ali from "assets/images/team/ali-golkar.jpg";
import amir from "assets/images/team/amirhossein-karimi.jpg";
import hamzeh from "assets/images/team/hamzeh-ghoreyshi.jpg";
import hesam from "assets/images/team/hesam-mousavi.jpg";
import hirad from "assets/images/team/hirad-sajdeh.jpg";
import mehdi from "assets/images/team/mehdi-mahmoudi.jpg";
import sadegh from "assets/images/team/sadegh-alavani.jpg";
import saleh from "assets/images/team/saleh-shojaei.jpg";
import tahmineh from "assets/images/team/tahmineh-reyvandi.jpg";
import aliShirali from "assets/images/team/ali-shirali.jpg";

export const teamMembers: TeamMember[] = [
  {
    name: "سید صالح شجاعی",
    role: "مدیر اجرایی",
    photo: saleh,
    links: {
      linkedin: "https://www.linkedin.com/in/ordinarysaleh/",
      website: "https://roxaleh.ir/",
      telegram: "https://t.me/ordinarySaleh",
    },
  },
  {
    name: "امیرحسین کریمی",
    role: "مدیر فنی",
    photo: amir,
    links: {
      linkedin: "https://www.linkedin.com/in/amirhosseinkarimi/",
      github: "https://github.com/AmirHosseinKarimi",
    },
  },
  {
    name: "حسام موسوی",
    role: "طراح رابط کاربری و گرافیک",
    photo: hesam,
    links: {
      instagram: "https://www.instagram.com/HesMousavi/",
      dribbble: "https://dribbble.com/HesMousavi",
    },
  },
  {
    name: "علی گلکار",
    role: "طراح رابط کاربری",
    photo: ali,
    links: {
      linkedin: "https://www.linkedin.com/in/aligolkarali",
      website: "https://aligolkar.ir/",
      instagram: "https://www.instagram.com/aligolkar.ir/",
    },
  },
  {
    name: "تهمینه ریوندی",
    role: "تیم محتوا",
    photo: tahmineh,
    links: {
      linkedin: "https://www.linkedin.com/in/tahmineh-reyvandi/",
    },
  },
  {
    name: "آیدا کامران فر",
    role: "تیم محتوا",
    photo: aida,
    links: {
      instagram: "https://www.instagram.com/aida__kamranfar/",
    },
  },
  {
    name: "محمد صادق علوانی",
    role: "هماهنگی و تدارکات",
    photo: sadegh,
    links: {
      instagram: "https://www.instagram.com/sadeegh.pv/",
    },
  },
  {
    name: "محمدمهدی محمودی",
    role: "هماهنگی و تدارکات",
    photo: mehdi,
    links: {
      instagram: "https://www.instagram.com/mehdimh95/",
    },
  },
  {
    name: "هیراد سجده",
    role: "تبلیغات و بازاریابی",
    photo: hirad,
    links: {
      telegram: "https://t.me/hiradsajde",
      instagram: "https://www.instagram.com/hirad.rs/",
      github: "https://github.com/hiradsajde",
    },
  },
  {
    name: "حمزه قریشی",
    role: "مشاور طراحی تجربه کاربری",
    photo: hamzeh,
    links: {
      linkedin: "https://www.linkedin.com/in/hamzeh-ux",
      instagram: "https://www.instagram.com/hamzeh.ux/",
      dribbble: "https://dribbble.com/Hamzeh_ux",
    },
  },
  {
    name: "علی شیرالی",
    role: "تیم فنی",
    photo: aliShirali,
    links: {
      linkedin: "https://www.linkedin.com/in/alyshirali/",
      twitter: "https://twitter.com/alyshirali/",
    },
  },
];

export interface TeamMember {
  name: string;
  role: string;
  photo: StaticImageData;
  links: socialMediaLinks;
}
