import { useState } from "react";

const REGIOES = [
  {
    id: "brazlandia",
    nome: "Brazlândia",
    cor: "#5E8A2E",
    corClara: "#EAF3DE",
    link: "https://www.google.com/maps/d/edit?mid=COLE_AQUI_O_ID_DE_BRAZLANDIA",
    path:
      "M 70 190 C 45 130, 70 65, 145 55 C 195 20, 265 45, 305 75 C 345 30, 405 12, 445 42 C 485 72, 475 135, 435 165 C 478 195, 488 245, 448 275 C 408 305, 345 285, 305 265 C 265 305, 205 315, 155 295 C 105 275, 62 262, 52 222 C 44 205, 55 195, 70 190 Z",
    labelX: 260,
    labelY: 175,
    lines: ["Brazlândia"],
  },
  {
    id: "ceilandia",
    nome: "Ceilândia",
    cor: "#C13B3B",
    corClara: "#FBE7E7",
    link: "https://www.google.com/maps/d/edit?mid=COLE_AQUI_O_ID_DE_CEILANDIA",
    path:
      "M 155 295 C 205 265, 265 265, 305 265 C 345 245, 405 255, 445 275 C 505 265, 565 295, 585 345 C 605 385, 575 425, 545 445 C 565 485, 535 525, 485 525 C 445 545, 405 515, 375 495 C 335 515, 285 505, 255 475 C 225 495, 185 475, 175 445 C 145 425, 135 385, 155 345 C 145 325, 150 305, 155 295 Z",
    labelX: 390,
    labelY: 390,
    lines: ["Ceilândia"],
  },
  {
    id: "sol-nascente",
    nome: "Sol Nascente / Pôr do Sol",
    cor: "#D9A526",
    corClara: "#FBF1DC",
    link: "https://www.google.com/maps/d/edit?mid=COLE_AQUI_O_ID_DE_SOL_NASCENTE",
    path:
      "M 175 445 C 185 475, 225 495, 255 475 C 285 505, 305 545, 285 575 C 305 605, 285 635, 255 645 C 225 665, 195 645, 175 615 C 145 605, 125 575, 115 545 C 95 525, 105 495, 135 475 C 150 465, 165 455, 175 445 Z",
    labelX: 220,
    labelY: 555,
    lines: ["Sol Nascente /", "Pôr do Sol"],
  },
];

function MapaTerritorio({ regiaoAtiva, setRegiaoAtiva }) {
  return (
    <svg
      viewBox="0 0 640 680"
      style={{ width: "100%", maxWidth: 540, height: "auto" }}
      role="group"
      aria-label="Mapa com três regiões: Brazlândia, Ceilândia e Sol Nascente/Pôr do Sol"
    >
      {REGIOES.map((regiao) => {
        const ativa = regiaoAtiva === regiao.id;
        return (
          <g key={regiao.id}>
            <path
              d={regiao.path}
              fill={regiao.cor}
              stroke="#faf7f0"
              strokeWidth={4}
              style={{
                cursor: "pointer",
                transition: "opacity 0.2s ease",
                opacity: regiaoAtiva === null ? 1 : ativa ? 1 : 0.45,
              }}
              tabIndex={0}
              role="button"
              aria-label={`Abrir mapa de ${regiao.nome}`}
              onMouseEnter={() => setRegiaoAtiva(regiao.id)}
              onMouseLeave={() => setRegiaoAtiva(null)}
              onFocus={() => setRegiaoAtiva(regiao.id)}
              onBlur={() => setRegiaoAtiva(null)}
              onClick={() => window.open(regiao.link, "_blank", "noopener")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  window.open(regiao.link, "_blank", "noopener");
                }
              }}
            />
            <text
              x={regiao.labelX}
              y={regiao.labelY}
              textAnchor="middle"
              style={{
                pointerEvents: "none",
                fontFamily: "Georgia, serif",
                fontWeight: 600,
                fontSize: "1.75rem",
                fill: "#201d17",
              }}
            >
              {regiao.lines.map((linha, i) => (
                <tspan key={linha} x={regiao.labelX} dy={i === 0 ? 0 : 34}>
                  {linha}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function App() {
  const [regiaoAtiva, setRegiaoAtiva] = useState(null);
  const regiaoDestacada = REGIOES.find((r) => r.id === regiaoAtiva);

  const cores = {
    papel: "#faf7f0",
    tinta: "#2a2620",
    tintaSuave: "#5b564c",
    acento: "#2f6f62",
    linha: "#e3ddcd",
  };

  return (
    <div style={{ background: cores.papel, color: cores.tinta, fontFamily: "system-ui, sans-serif" }}>
      {/* ABERTURA */}
      <header style={{ padding: "5rem 1.5rem 3.5rem", borderBottom: `1px solid ${cores.linha}`, textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 500, fontSize: "2.4rem", margin: "0 0 0.6em" }}>
            Conheça a rede de cuidado do seu território
          </h1>
          <p style={{ color: cores.tintaSuave, fontSize: "1.1rem", maxWidth: "52ch", margin: "0 auto 2.2rem", lineHeight: 1.6 }}>
            Um espaço para visualizar os principais serviços disponíveis em
            Brazlândia, Ceilândia e Sol Nascente/Pôr do Sol, entendendo onde
            estão localizados e qual é a função de cada um.
          </p>
          <a
            href="#mapa"
            style={{
              display: "inline-block",
              textDecoration: "none",
              fontWeight: 600,
              color: "#fff",
              background: cores.acento,
              padding: "0.85rem 1.8rem",
              borderRadius: 3,
            }}
          >
            Explorar o mapa ↓
          </a>
        </div>
      </header>

      {/* MAPA */}
      <section id="mapa" style={{ padding: "4rem 1.5rem", borderBottom: `1px solid ${cores.linha}` }}>
        <div style={{ maxWidth: 640, margin: "0 auto 2rem", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 500, fontSize: "1.8rem", margin: "0 0 0.6em" }}>
            Seu mapa
          </h2>
          <p style={{ color: cores.tintaSuave, lineHeight: 1.6 }}>
            Toque em uma região para abrir o mapa digital com os serviços
            daquele território.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.6rem" }}>
          <MapaTerritorio regiaoAtiva={regiaoAtiva} setRegiaoAtiva={setRegiaoAtiva} />

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem" }}>
            {REGIOES.map((regiao) => (
              <button
                key={regiao.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: cores.tinta,
                  background: regiaoAtiva === regiao.id ? regiao.corClara : "transparent",
                  border: `1.5px solid ${regiao.cor}`,
                  borderRadius: 999,
                  padding: "0.5rem 1.1rem",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setRegiaoAtiva(regiao.id)}
                onMouseLeave={() => setRegiaoAtiva(null)}
                onFocus={() => setRegiaoAtiva(regiao.id)}
                onBlur={() => setRegiaoAtiva(null)}
                onClick={() => window.open(regiao.link, "_blank", "noopener")}
              >
                <span style={{ width: "0.7rem", height: "0.7rem", borderRadius: "50%", background: regiao.cor, display: "inline-block" }} />
                {regiao.nome}
              </button>
            ))}
          </div>
        </div>

        <p style={{ textAlign: "center", marginTop: "1.6rem", fontSize: "0.95rem", minHeight: "1.4em" }}>
          {regiaoDestacada
            ? `Abrir mapa de ${regiaoDestacada.nome}`
            : "Passe o mouse ou toque em uma das três regiões acima"}
        </p>
      </section>

      {/* SOBRE */}
      <section style={{ padding: "4rem 1.5rem", borderBottom: `1px solid ${cores.linha}` }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 500, fontSize: "1.8rem", margin: "0 0 0.6em" }}>
            Sobre o projeto
          </h2>
          <p style={{ color: cores.tintaSuave, fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "62ch" }}>
            Este projeto foi desenvolvido por estudantes de Terapia
            Ocupacional com o objetivo de apresentar, de forma visual e
            acessível, os serviços presentes no território e sua importância
            para a rede de cuidado.
          </p>

          <dl
            style={{
              margin: "2rem 0 0",
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0,1fr))",
              gap: "1.2rem 2rem",
              paddingTop: "1.4rem",
              borderTop: `1px solid ${cores.linha}`,
            }}
          >
            {[
              ["Curso", "Terapia Ocupacional"],
              ["Instituição", "IESB"],
              ["Disciplina", "Terapia Ocupacional na Saúde Mental"],
              ["Ano", "2026"],
            ].map(([dt, dd]) => (
              <div key={dt}>
                <dt style={{ fontSize: "0.85rem", color: cores.tintaSuave }}>{dt}</dt>
                <dd style={{ margin: 0, fontFamily: "Georgia, serif", fontSize: "1.05rem" }}>{dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer style={{ padding: "3rem 1.5rem", textAlign: "center" }}>
        <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "1.1rem", maxWidth: "44ch", margin: "0 auto" }}>
          Conhecer o território é também conhecer os caminhos possíveis para
          o cuidado.
        </p>
      </footer>
    </div>
  );
}