import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { User, ChevronRight, History } from "lucide-react";
import playerImage from "@/assets/players/player.png";
import jordanImage from "@/assets/players/jordan.png";
import imageImage from "@/assets/players/image.png";
import curryImage from "@/assets/players/curry.png";

type Player = {
  id: number;
  name: string;
  position: string;
  number: number;
  height: string;
  image: string;
  ppg: number;
  apg: number;
  rpg: number;
};

const players: Player[] = [
  { id: 1, name: "Vasiliu Mateo Ioan", position: "Extremă", number: 1, height: "1.85m", image: playerImage, ppg: 18.5, apg: 7.2, rpg: 3.1 },
  { id: 2, name: "Iacob Dumitru Emanuel ", position: "Extremă", number: 3, height: "1.90m", image: jordanImage, ppg: 15.8, apg: 3.4, rpg: 4.0 },
  { id: 3, name: "Istrate David", position: "Aripă", number: 7, height: "1.96m", image: imageImage, ppg: 22.1, apg: 2.8, rpg: 6.5 },
  { id: 4, name: "Ioniță Aurel Mihai", position: "Pivot", number: 21, height: "2.01m", image: curryImage, ppg: 14.2, apg: 1.9, rpg: 8.3 },
  { id: 5, name: "Cepoi Dragoș Constantin", position: "Centru", number: 34, height: "2.06m", image: playerImage, ppg: 12.6, apg: 1.2, rpg: 10.1 },
  { id: 6, name: "Stănica Luca Sebastian", position: "Fond de Terrain", number: 11, height: "1.80m", image: jordanImage, ppg: 9.8, apg: 5.5, rpg: 2.4 },
  { id: 7, name: "Hanganu Ștefan ", position: "Extremă", number: 15, height: "1.88m", image: imageImage, ppg: 11.3, apg: 2.1, rpg: 3.7 },
  { id: 8, name: "Chioșa Constantin Adrian", position: "Aripă", number: 22, height: "1.93m", image: curryImage, ppg: 10.5, apg: 2.6, rpg: 5.2 },
  { id: 9, name: "Birsan Cristian", position: "Aripă", number: 22, height: "1.93m", image: playerImage, ppg: 10.5, apg: 2.6, rpg: 5.2 },
];

const formerPlayers = [
  { name: "Popescu Andrei", position: "Extremă", period: "2022–2024", note: "Căpitan al primei generații CNSM Baschet" },
  { name: "Munteanu Radu", position: "Pivot", period: "2022–2023", note: "Participant la prima fază județeană a echipei" },
  { name: "Dumitru Alex", position: "Fond de Terrain", period: "2023–2025", note: "Contribuție la locul 3 — Campionatul Județean 2024" },
  { name: "Stan Marius", position: "Aripă", period: "2022–2024", note: "Jucător constant în sezoanele de formare ale proiectului" },
];

const PlayerCard = ({ player, i, inView }: { player: Player; i: number; inView: boolean }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: i * 0.08 }}
    >
      <div
        className="card-glass group hover:border-accent/40 hover:shadow-[var(--shadow-glow)]"
      >
        <div className="relative h-48 bg-gradient-to-b from-primary/20 to-muted flex items-center justify-center overflow-hidden">
          <span className="absolute text-[120px] font-display font-bold text-foreground/5 leading-none">
            {player.number}
          </span>
          <img
            src={player.image}
            alt={`Portret ${player.name}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(event) => { event.currentTarget.style.display = "none"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
          <div className="absolute top-3 right-3 bg-accent text-accent-foreground font-display font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">
            #{player.number}
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-display text-lg font-bold uppercase group-hover:text-accent transition-colors">{player.name}</h3>
          <p className="text-accent text-sm font-semibold uppercase tracking-wider">{player.position}</p>
          <p className="text-muted-foreground text-sm mt-1">Înălțime: {player.height}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(`/player/${player.id}`);
            }}
            className="mt-3 inline-flex items-center gap-1 text-sm text-accent hover:underline"
          >
            Vezi detalii <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const FormerPlayerCard = ({
  player,
  i,
  inView,
}: {
  player: (typeof formerPlayers)[0];
  i: number;
  inView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.4, delay: i * 0.08 }}
  >
    <div className="card-glass group hover:border-accent/30 transition-all opacity-90 hover:opacity-100">
      <div className="relative h-40 bg-gradient-to-b from-muted/40 to-muted flex items-center justify-center overflow-hidden">
        <User className="w-16 h-16 text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors relative z-10" />
        <div className="absolute top-3 right-3 bg-muted text-muted-foreground font-display font-bold text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <History className="w-3.5 h-3.5" />
          {player.period}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold uppercase group-hover:text-accent transition-colors">
          {player.name}
        </h3>
        <p className="text-accent/80 text-sm font-semibold uppercase tracking-wider">{player.position}</p>
        <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{player.note}</p>
      </div>
    </div>
  </motion.div>
);

const PlayersSection = ({ maxPlayers, showFormerPlayers = true }: { maxPlayers?: number; showFormerPlayers?: boolean }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const displayedPlayers = maxPlayers ? players.slice(0, maxPlayers) : players;
  const hasMore = maxPlayers !== undefined && players.length > maxPlayers;

  return (
    <section id="players" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="yellow-bar mx-auto mb-6" />
          <h2 className="section-title mb-4">Cunoaște <span className="text-accent">echipa</span> și <span className="text-accent">Jucători</span></h2>
          <p className="section-subtitle mx-auto">Jucători echipei CNSM — vezi detaliile complete ale jucătorilor.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedPlayers.map((player, i) => (
            <PlayerCard key={player.name} player={player} i={i} inView={inView} />
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-10">
            <NavLink to="/players" className="btn-primary">
              Vezi toți jucătorii
            </NavLink>
          </div>
        )}

        {showFormerPlayers && !maxPlayers && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-24 pt-16 border-t border-border"
          >
            <div className="text-center mb-12">
              <div className="yellow-bar mx-auto mb-6" />
              <h2 className="section-title mb-4">
                Foști <span className="text-accent">Jucători</span>
              </h2>
              <p className="section-subtitle mx-auto">
                Jucătorii care au scris istoria CNSM Baschet și au pus bazele proiectului.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {formerPlayers.map((player, i) => (
                <FormerPlayerCard key={player.name} player={player} i={i} inView={inView} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PlayersSection;
