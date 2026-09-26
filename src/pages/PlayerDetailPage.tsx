import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, User, Award, Calendar, Target, TrendingUp, Gamepad2, Instagram, Check, X, Facebook, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";

type SeasonInfo = {
  season: string;
  principal: boolean;
  secondary: boolean;
  training: boolean;
};

const players = [
  {
    id: 1,
    name: "Vasiliu Mateo Ioan",
    position: "Extremă",
    number: 1,
    height: "1.85m",
    weight: "75kg",
    age: 17,
    grade: "11A",
    currentSeason: "2025-2026",
    seasonsInfo: [
      { season: "2023-2024", principal: false, secondary: true, training: true },
      { season: "2024-2025", principal: true, secondary: false, training: true },
      { season: "2025-2026", principal: true, secondary: false, training: true },
    ] satisfies SeasonInfo[],
    ppg: 18.5,
    apg: 7.2,
    rpg: 3.1,
    instagram: "https://www.instagram.com/vasiliu.mateo/",
    images: [
      "https://cdn.nba.com/headshots/nba/latest/1610616/1628369.png",
      "https://cdn.nba.com/headshots/nba/2024/latest/1610616/1628369.png",
    ],
    description: "Jucător talentat cu abilități excepționale de tir. Este unul dintre cei mai promițători jucători ai echipei.",
    achievements: [
      "Cel mai bun marcator - Campionatul Judetean 2025",
      "Selectat în Echipa All-Star Judeteană",
      "Participant la Turneul Național de Juniori",
    ],
    stats: {
      gamesPlayed: 24,
      totalPoints: 444,
      totalAssists: 173,
      totalRebounds: 74,
      fieldGoalPercentage: "52.3%",
      threePointPercentage: "38.7%",
      freeThrowPercentage: "85.2%",
    },
  },
  {
    id: 2,
    name: "Iacob Dumitru Emanuel",
    position: "Extremă",
    number: 3,
    height: "1.90m",
    weight: "80kg",
    age: 18,
    grade: "12B",
    currentSeason: "2025-2026",
    seasonsInfo: [
      { season: "2022-2023", principal: true, secondary: false, training: true },
      { season: "2023-2024", principal: true, secondary: false, training: true },
      { season: "2024-2025", principal: true, secondary: false, training: true },
      { season: "2025-2026", principal: true, secondary: false, training: true },
    ] satisfies SeasonInfo[],
    ppg: 15.8,
    apg: 3.4,
    rpg: 4.0,
    instagram: "https://www.instagram.com/iacob.emanuel/",
    images: [
      "https://cdn.nba.com/headshots/nba/latest/1610616/2544.png",
      "https://cdn.nba.com/headshots/nba/2024/latest/1610616/2544.png",
    ],
    description: "Jucător cu experiență, capabil să joace multiple poziții. Lider natural pe teren.",
    achievements: [
      "Locul 2 - Campionatul Judetean 2024",
      "Căpitanul echipei CNSM",
    ],
    stats: {
      gamesPlayed: 28,
      totalPoints: 442,
      totalAssists: 95,
      totalRebounds: 112,
      fieldGoalPercentage: "48.9%",
      threePointPercentage: "35.2%",
      freeThrowPercentage: "78.5%",
    },
  },
  {
    id: 3,
    name: "Istrate David",
    position: "Aripă",
    number: 7,
    height: "1.96m",
    weight: "85kg",
    age: 17,
    grade: "11A",
    currentSeason: "2025-2026",
    seasonsInfo: [
      { season: "2023-2024", principal: true, secondary: false, training: true },
      { season: "2024-2025", principal: true, secondary: false, training: true },
      { season: "2025-2026", principal: true, secondary: false, training: true },
    ] satisfies SeasonInfo[],
    ppg: 22.1,
    apg: 2.8,
    rpg: 6.5,
    instagram: "https://www.instagram.com/istrate.david/",
    images: [
      "https://cdn.nba.com/headshots/nba/latest/1610616/201939.png",
      "https://cdn.nba.com/headshots/nba/2024/latest/1610616/201939.png",
    ],
    description: "Cel mai bun marcator al echipei. Performanță excepțională în atac și apărare.",
    achievements: [
      "Cel mai valoros jucător (MVP) - Campionatul Judetean 2025",
      "Locul 1 - Campionatul Judetean 2025",
      "Record personal - 42 de puncte într-un meci",
    ],
    stats: {
      gamesPlayed: 22,
      totalPoints: 486,
      totalAssists: 62,
      totalRebounds: 143,
      fieldGoalPercentage: "56.1%",
      threePointPercentage: "41.3%",
      freeThrowPercentage: "82.8%",
    },
  },
  {
    id: 4,
    name: "Ioniță Aurel Mihai",
    position: "Pivot",
    number: 21,
    height: "2.01m",
    weight: "95kg",
    age: 18,
    grade: "12B",
    currentSeason: "2025-2026",
    seasonsInfo: [
      { season: "2022-2023", principal: true, secondary: false, training: true },
      { season: "2023-2024", principal: true, secondary: false, training: true },
      { season: "2024-2025", principal: true, secondary: false, training: true },
      { season: "2025-2026", principal: true, secondary: false, training: true },
    ] satisfies SeasonInfo[],
    ppg: 14.2,
    apg: 1.9,
    rpg: 8.3,
    instagram: "https://www.instagram.com/ionitaaurelmihai/",
    facebook: "https://www.facebook.com/ionitaaurelmihai",
    website: "https://www.itsiamdev.com/",
    images: [
      "https://cdn.nba.com/headshots/nba/latest/1610616/203999.png",
      "https://cdn.nba.com/headshots/nba/2024/latest/1610616/203999.png",
    ],
    description: "Pivot dominant sub coș. Forță și prezență în aria de sub panou.",
    achievements: [
      "Cel mai bun recuperator - Campionatul Judetean 2025",
      "Blocaj record în sezon",
    ],
    stats: {
      gamesPlayed: 26,
      totalPoints: 369,
      totalAssists: 49,
      totalRebounds: 216,
      fieldGoalPercentage: "61.2%",
      threePointPercentage: "22.1%",
      freeThrowPercentage: "65.4%",
    },
  },
  {
    id: 5,
    name: "Cepoi Dragoș Constantin",
    position: "Centru",
    number: 34,
    height: "2.06m",
    weight: "100kg",
    age: 17,
    grade: "11B",
    currentSeason: "2025-2026",
    seasonsInfo: [
      { season: "2023-2024", principal: true, secondary: false, training: true },
      { season: "2024-2025", principal: true, secondary: false, training: true },
      { season: "2025-2026", principal: true, secondary: false, training: true },
    ] satisfies SeasonInfo[],
    ppg: 12.6,
    apg: 1.2,
    rpg: 10.1,
    instagram: "https://www.instagram.com/cepoi.dragos/",
    images: [
      "https://cdn.nba.com/headshots/nba/latest/1610616/203954.png",
      "https://cdn.nba.com/headshots/nba/2024/latest/1610616/203954.png",
    ],
    description: "Centru de elită cu abilități excelente de recuperare și protecție a coșului.",
    achievements: [
      "Cel mai bun centru - Campionatul Judetean 2024",
      "Selectat în lotul național de juniori",
    ],
    stats: {
      gamesPlayed: 20,
      totalPoints: 252,
      totalAssists: 24,
      totalRebounds: 202,
      fieldGoalPercentage: "58.7%",
      threePointPercentage: "18.5%",
      freeThrowPercentage: "70.2%",
    },
  },
  {
    id: 6,
    name: "Stănica Luca Sebastian",
    position: "Fond de Terrain",
    number: 11,
    height: "1.80m",
    weight: "70kg",
    age: 16,
    grade: "10A",
    currentSeason: "2025-2026",
    seasonsInfo: [
      { season: "2024-2025", principal: true, secondary: false, training: true },
      { season: "2025-2026", principal: true, secondary: false, training: true },
    ] satisfies SeasonInfo[],
    ppg: 9.8,
    apg: 5.5,
    rpg: 2.4,
    instagram: "https://www.instagram.com/stanica.luca/",
    images: [
      "https://cdn.nba.com/headshots/nba/latest/1610616/1629630.png",
      "https://cdn.nba.com/headshots/nba/2024/latest/1610616/1629630.png",
    ],
    description: "Playmaker talentat cu viziune excelentă de joc. Creator de ocazii pentru colegi.",
    achievements: [
      "Cel mai bun pasator - Campionatul Judetean 2025",
      "Cea mai mică rată de pierderi de balon",
    ],
    stats: {
      gamesPlayed: 25,
      totalPoints: 245,
      totalAssists: 138,
      totalRebounds: 60,
      fieldGoalPercentage: "44.2%",
      threePointPercentage: "32.8%",
      freeThrowPercentage: "76.9%",
    },
  },
  {
    id: 7,
    name: "Hanganu Ștefan",
    position: "Extremă",
    number: 15,
    height: "1.88m",
    weight: "78kg",
    age: 17,
    grade: "11A",
    currentSeason: "2025-2026",
    seasonsInfo: [
      { season: "2023-2024", principal: true, secondary: false, training: true },
      { season: "2024-2025", principal: true, secondary: false, training: true },
      { season: "2025-2026", principal: true, secondary: false, training: true },
    ] satisfies SeasonInfo[],
    ppg: 11.3,
    apg: 2.1,
    rpg: 3.7,
    instagram: "https://www.instagram.com/hanganu.stefan/",
    images: [
      "https://cdn.nba.com/headshots/nba/latest/1610616/1629029.png",
      "https://cdn.nba.com/headshots/nba/2024/latest/1610616/1629029.png",
    ],
    description: "Jucător versatil cu potențial mare de creștere. Apărător agresiv.",
    achievements: [
      "Echipa All-Defensive - Campionatul Judetean 2025",
    ],
    stats: {
      gamesPlayed: 23,
      totalPoints: 260,
      totalAssists: 48,
      totalRebounds: 85,
      fieldGoalPercentage: "46.8%",
      threePointPercentage: "34.5%",
      freeThrowPercentage: "79.3%",
    },
  },
  {
    id: 8,
    name: "Chioșa Constantin Adrian",
    position: "Aripă",
    number: 22,
    height: "1.93m",
    weight: "82kg",
    age: 18,
    grade: "12B",
    currentSeason: "2025-2026",
    seasonsInfo: [
      { season: "2022-2023", principal: true, secondary: false, training: true },
      { season: "2023-2024", principal: true, secondary: false, training: true },
      { season: "2024-2025", principal: true, secondary: false, training: true },
      { season: "2025-2026", principal: true, secondary: false, training: true },
    ] satisfies SeasonInfo[],
    ppg: 10.5,
    apg: 2.6,
    rpg: 5.2,
    instagram: "https://www.instagram.com/chiosa.constantin/",
    images: [
      "https://cdn.nba.com/headshots/nba/latest/1610616/1628378.png",
      "https://cdn.nba.com/headshots/nba/2024/latest/1610616/1628378.png",
    ],
    description: "Aripă completă cu abilități de scor și pasă. Energie constantă.",
    achievements: [
      "Progresul sezonului 2025",
    ],
    stats: {
      gamesPlayed: 21,
      totalPoints: 221,
      totalAssists: 55,
      totalRebounds: 109,
      fieldGoalPercentage: "47.3%",
      threePointPercentage: "36.2%",
      freeThrowPercentage: "81.5%",
    },
  },
  {
    id: 9,
    name: "Birsan Cristian",
    position: "Aripă",
    number: 22,
    height: "1.93m",
    weight: "83kg",
    age: 17,
    grade: "11A",
    currentSeason: "2025-2026",
    seasonsInfo: [
      { season: "2023-2024", principal: true, secondary: false, training: true },
      { season: "2024-2025", principal: true, secondary: false, training: true },
      { season: "2025-2026", principal: true, secondary: false, training: true },
    ] satisfies SeasonInfo[],
    ppg: 10.5,
    apg: 2.6,
    rpg: 5.2,
    instagram: "https://www.instagram.com/birsan.cristian/",
    images: [
      "https://cdn.nba.com/headshots/nba/latest/1610616/1629640.png",
      "https://cdn.nba.com/headshots/nba/2024/latest/1610616/1629640.png",
    ],
    description: "Jucător cu mentality de învingător. Performanță consistentă în meciuri importante.",
    achievements: [
      "Jucătorul meciului de cele mai multe ori",
    ],
    stats: {
      gamesPlayed: 24,
      totalPoints: 252,
      totalAssists: 62,
      totalRebounds: 125,
      fieldGoalPercentage: "48.1%",
      threePointPercentage: "37.8%",
      freeThrowPercentage: "83.2%",
    },
  },
];

const PlayerDetailPage = () => {
  const { id } = useParams();
  const player = players.find((p) => p.id === Number(id));
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!player) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold">Jucător negăsit</h1>
          <NavLink to="/#players" className="text-accent hover:underline mt-4 inline-block">
            Înapoi la echipă
          </NavLink>
        </div>
        <TeamFooter />
      </div>
    );
   }

  const sortedSeasons = [...player.seasonsInfo].sort((firstSeason, secondSeason) =>
    secondSeason.season.localeCompare(firstSeason.season),
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-24"
      >
        <NavLink
          to="/#players"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Înapoi la echipă
        </NavLink>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Player Number & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
              <div className="h-[500px] bg-gradient-to-b from-primary/20 to-muted flex items-center justify-center rounded-2xl">
                <div className="text-[200px] font-display font-bold text-foreground/10 leading-none">
                  {player.number}
                </div>
                <User className="w-32 h-32 text-muted-foreground/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute bottom-6 left-6 bg-accent text-accent-foreground font-display font-bold text-4xl w-20 h-20 rounded-full flex items-center justify-center">
                #{player.number}
              </div>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold uppercase mb-2">
              {player.name}
            </h1>
            <p className="text-accent text-xl font-semibold uppercase tracking-wider mb-6">
              {player.position}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-muted/30 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-foreground">{player.height}</div>
                <div className="text-xs text-muted-foreground">Înălțime</div>
              </div>
              <div className="bg-muted/30 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-foreground">{player.weight}</div>
                <div className="text-xs text-muted-foreground">Greutate</div>
              </div>
              <div className="bg-muted/30 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-foreground">{player.age}</div>
                <div className="text-xs text-muted-foreground">Vârstă</div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {player.description}
            </p>

            {/* Player Info */}
            <div className="bg-muted/30 p-6 rounded-lg mb-8">
              <h3 className="font-display text-lg font-bold uppercase mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-accent" />
                Informații Jucător
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-background/50 p-4 rounded-lg border border-border">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Clasa</div>
                  <div className="text-xl font-bold text-foreground">{player.grade}</div>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-border">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Poziția</div>
                  <div className="text-xl font-bold text-foreground">{player.position}</div>
                </div>
              </div>

              <div className="mb-2">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Sezonul actual</div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-accent text-accent-foreground">
                  {player.currentSeason}
                </span>
              </div>

              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Participare pe sezoane</div>
                <div className="overflow-x-auto rounded-lg border border-border">
                  <table className="w-full min-w-[460px] text-sm">
                    <thead className="bg-background/50 text-xs uppercase tracking-wider text-muted-foreground">
                      <tr>
                        <th className="px-3 py-3 text-center font-semibold">Nr.</th>
                        <th className="px-3 py-3 text-left font-semibold">Sezon</th>
                        <th className="px-3 py-3 text-center font-semibold">Echipa principală</th>
                        <th className="px-3 py-3 text-center font-semibold">Echipa secundară</th>
                        <th className="px-3 py-3 text-center font-semibold">Antrenament</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {sortedSeasons.map((seasonInfo) => (
                        <tr key={seasonInfo.season} className="bg-background/20">
                          <td className="px-3 py-3 text-center font-bold text-accent">#{player.number}</td>
                          <td className="px-3 py-3 font-semibold text-foreground">{seasonInfo.season}</td>
                          <td className="px-3 py-3 text-center">
                            {seasonInfo.principal ? (
                              <Check aria-label="Da" className="mx-auto h-4 w-4 text-accent" />
                            ) : (
                              <X aria-label="Nu" className="mx-auto h-4 w-4 text-muted-foreground/60" />
                            )}
                          </td>
                          <td className="px-3 py-3 text-center">
                            {seasonInfo.secondary ? (
                              <Check aria-label="Da" className="mx-auto h-4 w-4 text-accent" />
                            ) : (
                              <X aria-label="Nu" className="mx-auto h-4 w-4 text-muted-foreground/60" />
                            )}
                          </td>
                          <td className="px-3 py-3 text-center">
                            {seasonInfo.training ? (
                              <Check aria-label="Da" className="mx-auto h-4 w-4 text-accent" />
                            ) : (
                              <X aria-label="Nu" className="mx-auto h-4 w-4 text-muted-foreground/60" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="font-display text-lg font-bold uppercase mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                Realizări
              </h3>
              <ul className="space-y-2">
                {player.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact / Social */}
            {(player.instagram || player.facebook || player.website) && (
              <div className="mt-6">
                <h3 className="font-display text-lg font-bold uppercase mb-3 flex items-center gap-2">
                  Contact
                </h3>
                <div className="flex flex-col gap-3">
                  {player.instagram && (
                    <a
                      href={player.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="text-sm font-medium">Instagram</span>
                    </a>
                  )}
                  {player.facebook && (
                    <a
                      href={player.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                      <span className="text-sm font-medium">Facebook</span>
                    </a>
                  )}
                  {player.website && (
                    <a
                      href={player.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Globe className="w-5 h-5" />
                      <span className="text-sm font-medium">Website</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Player Gallery */}
        {player.images && player.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="font-display text-lg font-bold uppercase mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-accent" />
              Galerie Foto
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {player.images.map((img, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
                  className="relative overflow-hidden rounded-lg aspect-[4/3] group"
                >
                  <img src={img} alt={`${player.name} - imagine ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-foreground font-display uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Vezi</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && player.images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-accent transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
            >
              <X className="w-8 h-8" />
            </button>

            {player.images.length > 1 && (
              <>
                <button
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-foreground hover:text-accent transition-colors bg-background/50 hover:bg-background/80 rounded-full p-2 z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev - 1 + player.images.length) % player.images.length);
                  }}
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-foreground hover:text-accent transition-colors bg-background/50 hover:bg-background/80 rounded-full p-2 z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev + 1) % player.images.length);
                  }}
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            <motion.img
              key={lightboxIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={player.images[lightboxIndex]}
              alt={`${player.name} - imagine ${lightboxIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <TeamFooter />
    </div>
  );
};

export default PlayerDetailPage;
