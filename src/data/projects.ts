import UnrealEngineIcon from '../assets/logos/UnrealEngine_logo.svg?raw';
import UnityIcon from '../assets/logos/Unity_logo.svg?raw';
import OneTouchIcon from '../assets/icons/OneTouch_logo.svg?raw'


export const projects = [
	{
		title: "Simulation des mouvements de foules",
		techStack: "Unreal Engine 5 • Cpp • Mass AI • Dynamique des fluides",
		description: "Recherche entammé à ISART Digital sur la simulation réaliste des mouvement d'une foule en utilisant un système multi-agent (Mass AI) et la dynamique des fluides (SPH).",
		ctaText: null,
		ctaLink: null,
		icon: UnrealEngineIcon
	},
	{
		title: "OneTouch",
		techStack: "Unity • C# • FireBase • Amazon GameLift",
		description: "Projet TCG (Trading Card Game) sur mobile sur le thème du football du studio FromTheFrench.",
		ctaText: "Commencer un match !",
		ctaLink: "https://www.onetouch.football/fr",
		icon: OneTouchIcon
	},
	{
		title: "Coastal Drift",
		techStack: "Unreal Engine 5 • Cpp / Blueprint",
		description: 
		"Conception et réalisation d'un jeu vidéo au cours d'une année à ISART Digital dans une équipe pluridisciplinaire. \
		Il sagit d'un Action-Shooter dans lequel le joueur contrôle un véhicule. \
		Mon rôle portait en majorité sur le développement des IA.",
		ctaText: "Jouer au jeu ->",
		ctaLink: "https://isart-digital.itch.io/coastaldrift",
		icon: UnrealEngineIcon
	},
];