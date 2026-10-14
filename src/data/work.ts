import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Gameplay Programmer",
    company: "FromTheFrench",
    region: "Paris, France",
    description: "Developpement d'un jeu de cartes à collectioner sur mobile portant sur le thème du football. Conception de l'architecture des systèmes du jeu, de son IA, de la logique de jeu et réseau ainsi que l'intégration d'assets UI et SFX",
    technologies: [
      "Unity 6",
      "C#",
      "GitHub & GitHub Desktop",
      "FireBase",
      "Amazon GameLift",
      "Notion",
      "Asana",
      "Figma",
    ],
  },
  {
    title: "Gameplay Programmer",
    company: "UNDEAD Battery",
    region: "France",
    description: "Developpement d'un leaderboard et d'un replay pour le mode course du jeu de simulation de drone TRYP FPV.",
    technologies: [
      "Unreal Engine 5",
      "C++ & Blueprint",
      "API Steam",
      "Perforce"
    ],
  },
];

export type WorkItem = (typeof work)[number];

