import { useState, useRef, useEffect } from "react";

const REGIOES = [
  {
    id: "brazlandia",
    nome: "Brazlândia",
    cor: "#93D126",
    corClara: "#EEF7DD",
    link: "https://www.google.com/maps/d/u/0/edit?mid=1q8lxidEbENiBrfhr-AGEpUDGeEueCas&usp=sharing",
    path: "M 886 197 L 868 192 L 860 180 L 833 177 L 828 170 L 827 158 L 822 154 L 775 152 L 770 146 L 762 116 L 755 108 L 756 89 L 749 80 L 749 67 L 740 60 L 732 43 L 727 43 L 709 66 L 700 68 L 700 84 L 689 94 L 690 113 L 680 122 L 679 131 L 672 139 L 664 140 L 655 147 L 620 142 L 589 147 L 566 135 L 546 144 L 530 144 L 485 128 L 477 128 L 466 136 L 447 141 L 430 141 L 419 151 L 389 146 L 360 150 L 341 142 L 327 153 L 316 156 L 293 170 L 273 169 L 262 155 L 247 151 L 231 164 L 191 160 L 186 175 L 172 185 L 171 210 L 165 222 L 163 237 L 165 243 L 175 248 L 179 260 L 192 266 L 192 279 L 189 287 L 182 293 L 180 311 L 177 314 L 163 314 L 160 327 L 149 335 L 146 347 L 135 354 L 131 362 L 133 384 L 147 392 L 147 405 L 157 415 L 157 434 L 163 442 L 165 462 L 154 469 L 153 483 L 136 504 L 125 507 L 125 519 L 117 527 L 114 538 L 106 544 L 107 551 L 113 556 L 113 568 L 94 603 L 94 607 L 102 614 L 102 626 L 109 632 L 107 659 L 112 662 L 115 671 L 127 672 L 133 676 L 144 691 L 145 705 L 156 718 L 156 732 L 151 747 L 139 754 L 135 766 L 125 773 L 129 789 L 142 791 L 152 781 L 171 781 L 177 785 L 181 797 L 191 797 L 196 792 L 205 790 L 217 775 L 242 773 L 256 758 L 263 756 L 269 740 L 278 733 L 287 731 L 294 721 L 288 710 L 288 697 L 278 679 L 278 666 L 286 659 L 289 646 L 302 635 L 301 614 L 306 609 L 317 606 L 322 596 L 335 589 L 358 567 L 371 567 L 389 577 L 395 577 L 406 572 L 425 554 L 437 552 L 454 509 L 475 510 L 496 516 L 504 516 L 515 510 L 528 510 L 544 519 L 551 519 L 568 502 L 578 500 L 592 487 L 605 486 L 623 468 L 644 468 L 655 459 L 669 459 L 683 466 L 712 464 L 732 468 L 746 479 L 751 488 L 772 487 L 778 493 L 784 493 L 793 481 L 799 479 L 801 470 L 809 461 L 826 454 L 831 438 L 846 419 L 849 407 L 863 401 L 871 392 L 871 385 L 862 372 L 861 353 L 820 354 L 814 350 L 814 338 L 828 315 L 830 294 L 850 281 L 865 280 L 866 274 L 873 271 L 872 241 L 881 233 L 881 216 L 886 208 Z",
    cx: 455,
    cy: 373,
    lines: ["Brazlândia"],
    populacao: "55.879 habitantes",
    area: "474,83 km²",
    naoIdentificados: [
      "Consultório de rua",
      "Hospital especializado em saúde mental ou psiquiatria",
      "Leito de saúde mental em hospital geral",
      "Unidades de Serviços Residenciais Terapêuticos (SRTs)",
    ],
  },
  {
    id: "ceilandia",
    nome: "Ceilândia",
    cor: "#EE222D",
    corClara: "#FCE1E2",
    link: "https://www.google.com/maps/d/edit?mid=1-887__RZJzYrwdyKk5Fck_7Up0S4KTs&usp=sharing",
    path: "M 1162 729 L 1153 725 L 1148 712 L 1136 704 L 1137 680 L 1120 676 L 1108 655 L 1085 656 L 1068 643 L 1066 629 L 1050 620 L 1041 607 L 1043 585 L 1031 573 L 1031 552 L 1020 546 L 1008 532 L 1009 511 L 1004 503 L 993 496 L 987 477 L 968 468 L 934 460 L 931 457 L 930 440 L 913 433 L 891 406 L 876 403 L 858 414 L 854 430 L 840 445 L 833 463 L 816 469 L 809 483 L 789 504 L 776 504 L 767 497 L 746 498 L 731 479 L 708 474 L 681 476 L 660 469 L 650 478 L 628 478 L 611 496 L 596 498 L 587 509 L 573 512 L 555 530 L 541 530 L 523 520 L 508 526 L 491 526 L 460 519 L 447 557 L 439 563 L 429 564 L 413 580 L 399 588 L 387 588 L 368 577 L 361 577 L 341 598 L 330 603 L 323 615 L 311 619 L 312 640 L 298 652 L 297 662 L 288 671 L 298 693 L 299 707 L 306 713 L 306 726 L 294 739 L 278 746 L 275 758 L 281 760 L 299 781 L 320 782 L 334 772 L 348 772 L 359 780 L 382 778 L 399 790 L 414 790 L 460 761 L 469 747 L 482 746 L 491 741 L 536 741 L 540 744 L 548 765 L 564 767 L 592 791 L 616 791 L 639 815 L 683 815 L 696 834 L 705 835 L 724 850 L 742 852 L 765 892 L 772 892 L 781 886 L 793 886 L 812 894 L 816 898 L 816 911 L 827 920 L 832 935 L 840 941 L 848 941 L 861 933 L 875 931 L 895 908 L 901 895 L 909 890 L 921 890 L 926 878 L 934 871 L 955 868 L 966 878 L 991 878 L 999 864 L 999 853 L 1007 829 L 1018 822 L 1023 809 L 1053 801 L 1061 786 L 1068 780 L 1083 776 L 1115 780 L 1123 763 L 1139 747 L 1159 742 Z",
    cx: 744,
    cy: 670,
    lines: ["Ceilândia"],
    populacao: "287.023 habitantes",
    area: "230,3 km²",
    naoIdentificados: [
      "Hospital especializado em saúde mental",
      "Leitos de saúde mental em hospital geral (HRC)",
    ],
  },
  {
    id: "sol-nascente",
    nome: "Sol Nascente / Pôr do Sol",
    cor: "#FEDF0A",
    corClara: "#FFF8DC",
    link: "https://www.google.com/maps/d/edit?mid=1g0eqc50W_EnjUEPBj8EKms4VpQX16K4&usp=sharing",
    path: "M 806 902 L 794 901 L 790 896 L 784 896 L 774 903 L 760 902 L 735 861 L 717 860 L 702 846 L 688 842 L 678 825 L 634 825 L 613 801 L 587 801 L 563 779 L 553 774 L 542 774 L 533 755 L 515 749 L 473 757 L 466 770 L 455 773 L 444 786 L 433 788 L 421 798 L 392 798 L 378 787 L 354 790 L 345 782 L 338 782 L 324 792 L 292 790 L 280 778 L 277 769 L 260 768 L 247 783 L 224 784 L 215 796 L 202 802 L 203 810 L 216 819 L 217 838 L 224 847 L 243 847 L 258 866 L 259 886 L 268 892 L 273 902 L 272 923 L 277 931 L 277 943 L 265 950 L 263 967 L 253 976 L 253 992 L 242 1003 L 242 1010 L 248 1020 L 250 1048 L 282 1042 L 289 1036 L 316 1038 L 316 1057 L 323 1065 L 323 1080 L 329 1087 L 328 1106 L 339 1114 L 338 1149 L 331 1155 L 333 1178 L 324 1203 L 334 1202 L 340 1190 L 356 1183 L 360 1166 L 373 1158 L 380 1142 L 392 1134 L 402 1119 L 413 1119 L 427 1111 L 440 1111 L 454 1127 L 463 1127 L 468 1132 L 473 1132 L 500 1118 L 512 1108 L 542 1109 L 566 1089 L 597 1091 L 616 1096 L 634 1079 L 653 1080 L 664 1062 L 671 1058 L 698 1058 L 711 1045 L 724 1044 L 734 1026 L 742 1023 L 749 1014 L 767 1013 L 772 998 L 778 992 L 788 988 L 797 979 L 814 977 L 814 960 L 826 949 L 819 927 L 807 919 Z",
    cx: 581,
    cy: 940,
    lines: ["Sol Nascente /", "Pôr do Sol"],
    populacao: "70.908 habitantes",
    area: "40,49 km²",
    naoIdentificados: [
      "CAPS",
      "Hospital Psiquiátrico",
      "Leitos de internação em Saúde Mental",
      "Residências Terapêuticas (SRTs)",
      "Equipe própria de Consultório na Rua",
      "Centro de Convivência e Cultura para saúde mental",
    ],
  },
];

const SERVICOS = [
  {
    id: "caps",
    emoji: "🧠",
    sigla: "CAPS",
    descricao: "Centro de Atenção Psicossocial",
    explicacao: "Serviço especializado no cuidado em saúde mental.",
    encontra: ["Acolhimento", "acompanhamento", "atividades terapêuticas", "cuidado em saúde mental"],
  },
  {
    id: "ubs",
    emoji: "🏠",
    sigla: "UBS",
    descricao: "Unidade Básica de Saúde",
    explicacao: "É um dos principais pontos de acesso aos cuidados de saúde no território.",
    encontra: ["Consultas", "acompanhamento", "prevenção", "cuidados básicos"],
  },
  {
    id: "upa",
    emoji: "🚑",
    sigla: "UPA",
    descricao: "Unidade de Pronto Atendimento",
    explicacao: "Atendimento para situações de urgência e emergência.",
    encontra: ["Atendimento de urgência", "avaliação", "estabilização"],
  },
  {
    id: "hospital",
    emoji: "🏥",
    sigla: "Hospital",
    descricao: "Atendimento especializado e hospitalar",
    explicacao: "Serviço destinado a atendimentos que precisam de maior complexidade e estrutura hospitalar.",
    encontra: ["Internação", "atendimento especializado", "cuidados hospitalares"],
  },
];

const cores = {
  papel: "#f3e9d8",
  tinta: "#2a2620",
  tintaSuave: "#5b564c",
  acento: "#2f6f62",
  linha: "#e0d3b8",
};

function useRevela() {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, visivel];
}

function Tilt({ children, max = 8, style = {}, ...props }) {
  const [rot, setRot] = useState({ x: 0, y: 0 });
  function aoMover(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setRot({ x: py * -max, y: px * max });
  }
  function aoSair() {
    setRot({ x: 0, y: 0 });
  }
  return (
    <div
      style={{
        transform: `perspective(1000px) rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
        transition: "transform 0.2s ease-out",
        willChange: "transform",
        ...style,
      }}
      onMouseMove={aoMover}
      onMouseLeave={aoSair}
      {...props}
    >
      {children}
    </div>
  );
}

function Revela({ children, style = {} }) {
  const [ref, visivel] = useRevela();
  return (
    <div
      ref={ref}
      style={{
        opacity: visivel ? 1 : 0,
        transform: visivel ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function MapaTerritorio({ regiaoAtiva, setRegiaoAtiva }) {
  return (
    <svg
      viewBox="0 0 1254 1254"
      style={{ width: "100%", height: "auto", display: "block" }}
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
              stroke="#201d17"
              strokeWidth={5}
              strokeLinejoin="round"
              style={{
                cursor: "pointer",
                transformBox: "fill-box",
                transformOrigin: "center",
                transition: "opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease",
                opacity: regiaoAtiva === null ? 1 : ativa ? 1 : 0.45,
              }}
              onMouseEnter={(e) => {
                setRegiaoAtiva(regiao.id);
                e.currentTarget.style.transform = "scale(1.015)";
                e.currentTarget.style.filter = "drop-shadow(0 6px 10px rgba(0,0,0,0.2))";
              }}
              onMouseLeave={(e) => {
                setRegiaoAtiva(null);
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.filter = "none";
              }}
              tabIndex={0}
              role="button"
              aria-label={`Abrir mapa de ${regiao.nome}`}
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
              x={regiao.cx}
              y={regiao.cy}
              textAnchor="middle"
              style={{ pointerEvents: "none", fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "3.6rem", fill: "#201d17" }}
            >
              {regiao.lines.map((linha, i) => (
                <tspan key={linha} x={regiao.cx} dy={i === 0 ? 0 : 46}>
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
  const [servicosAbertos, setServicosAbertos] = useState([]);
  const regiaoDestacada = REGIOES.find((r) => r.id === regiaoAtiva);

  function alternarServico(id) {
    setServicosAbertos((abertos) =>
      abertos.includes(id) ? abertos.filter((item) => item !== id) : [...abertos, id]
    );
  }

  return (
    <div style={{ background: cores.papel, color: cores.tinta, fontFamily: "system-ui, sans-serif", overflowX: "hidden" }}>
      <style>{`
        @keyframes fadeSobe { from { opacity:0; transform: translateY(22px);} to { opacity:1; transform:none; } }
        .entrada { opacity:0; animation: fadeSobe 0.8s cubic-bezier(.16,1,.3,1) forwards; }
        .entrada-1 { animation-delay: .05s; }
        .entrada-2 { animation-delay: .2s; }
        .entrada-3 { animation-delay: .35s; }
        @keyframes flutuar { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-4px);} }
        .servico-emoji-anim { display:inline-block; animation: flutuar 3.4s ease-in-out infinite; }
      `}</style>

      {/* ABERTURA */}
      <header style={{ padding: "5rem 1.5rem 3.5rem", borderBottom: `1px solid ${cores.linha}`, textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h1 className="entrada entrada-1" style={{ fontFamily: "Georgia, serif", fontWeight: 500, fontSize: "2.2rem", lineHeight: 1.35, margin: "0 0 0.6em" }}>
            Conheça a rede de cuidado do seu território
          </h1>
          <p className="entrada entrada-2" style={{ color: cores.tintaSuave, fontSize: "1.1rem", maxWidth: "52ch", margin: "0 auto 2.2rem", lineHeight: 1.6 }}>
            Um espaço para visualizar os principais serviços disponíveis em
            Brazlândia, Ceilândia e Sol Nascente/Pôr do Sol, entendendo onde
            estão localizados e qual é a função de cada um.
          </p>
          <a
            href="#mapa"
            style={{ display: "inline-block", textDecoration: "none", fontWeight: 600, color: "#fff", background: cores.acento, padding: "0.85rem 1.8rem", borderRadius: 3 }}
          >
            Explorar o mapa ↓
          </a>
        </div>
      </header>

      {/* MAPA */}
      <section id="mapa" style={{ padding: "4rem 1.5rem", borderBottom: `1px solid ${cores.linha}` }}>
        <Revela>
          <div style={{ maxWidth: 640, margin: "0 auto 2rem", textAlign: "center" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 500, fontSize: "1.8rem", margin: "0 0 0.6em" }}>Seu mapa</h2>
            <p style={{ color: cores.tintaSuave, lineHeight: 1.6 }}>
              Toque em uma região para abrir o mapa digital com os serviços daquele território.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.6rem" }}>
            <Tilt max={6} style={{ width: "100%", maxWidth: 540, filter: "drop-shadow(0 18px 30px rgba(42,38,32,0.18))" }}>
              <MapaTerritorio regiaoAtiva={regiaoAtiva} setRegiaoAtiva={setRegiaoAtiva} />
            </Tilt>

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
                    transition: "transform 0.15s ease",
                  }}
                  onMouseEnter={(e) => { setRegiaoAtiva(regiao.id); e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { setRegiaoAtiva(null); e.currentTarget.style.transform = "translateY(0)"; }}
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
            {regiaoDestacada ? `Abrir mapa de ${regiaoDestacada.nome}` : "Passe o mouse ou toque em uma das três regiões acima"}
          </p>
        </Revela>
      </section>

      {/* CONHECENDO O TERRITÓRIO */}
      <section style={{ padding: "4rem 1.5rem", borderBottom: `1px solid ${cores.linha}` }}>
        <Revela>
          <div style={{ maxWidth: 640, margin: "0 auto 2rem", textAlign: "center" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 500, fontSize: "1.8rem", margin: "0 0 0.6em" }}>Conhecendo o território</h2>
            <p style={{ color: cores.tintaSuave }}>Conheça um pouco das regiões que fazem parte do nosso território.</p>
          </div>

          <div
            style={{
              maxWidth: 1080,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
              gap: "1.5rem",
              alignItems: "stretch",
            }}
          >
            {REGIOES.map((regiao) => (
              <Tilt
                key={regiao.id}
                max={5}
                style={{
                  background: "#fffdf8",
                  border: `1px solid ${cores.linha}`,
                  borderRadius: 10,
                  padding: "1.8rem 1.6rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                  gap: "1.2rem",
                  height: "100%",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.7rem", minHeight: "2.6rem" }}>
                  <span style={{ width: "0.9rem", height: "0.9rem", borderRadius: "50%", background: regiao.cor, flexShrink: 0, marginTop: "0.45rem" }} />
                  <h3 style={{ fontFamily: "Georgia, serif", fontWeight: 600, fontSize: "1.2rem", margin: 0, color: cores.tinta }}>{regiao.nome}</h3>
                </div>

                <div style={{ display: "flex", gap: "1.6rem" }}>
                  <div>
                    <div style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.04em", color: cores.tintaSuave }}>População</div>
                    <div style={{ marginTop: "0.15rem", fontFamily: "Georgia, serif", fontSize: "1.05rem", color: cores.tinta }}>{regiao.populacao}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.04em", color: cores.tintaSuave }}>Área</div>
                    <div style={{ marginTop: "0.15rem", fontFamily: "Georgia, serif", fontSize: "1.05rem", color: cores.tinta }}>{regiao.area}</div>
                  </div>
                </div>

                {regiao.naoIdentificados.length > 0 && (
                  <div style={{ borderTop: `1px dashed ${cores.linha}`, paddingTop: "1rem" }}>
                    <p style={{ margin: "0 0 0.5rem", fontSize: "0.85rem", fontWeight: 600, color: cores.tinta }}>
                      Serviços não identificados no território
                    </p>
                    <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                      {regiao.naoIdentificados.map((item) => (
                        <li key={item} style={{ fontSize: "0.88rem", color: cores.tintaSuave, lineHeight: 1.45 }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <a
                  href={regiao.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: "auto", alignSelf: "flex-start", fontSize: "0.9rem", fontWeight: 600, color: cores.acento, textDecoration: "none" }}
                >
                  Explorar mapa →
                </a>
              </Tilt>
            ))}
          </div>
        </Revela>
      </section>

      {/* SERVIÇOS */}
      <section style={{ padding: "3.5rem 1.5rem", borderBottom: `1px solid ${cores.linha}` }}>
        <Revela>
          <div style={{ maxWidth: 640, margin: "0 auto 2rem", textAlign: "center" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 500, fontSize: "1.8rem", margin: "0 0 0.6em" }}>🔍 Conheça os principais serviços</h2>
            <p style={{ color: cores.tintaSuave }}>Toque em um serviço para ver o que ele faz.</p>
          </div>

          <div style={{ maxWidth: 760, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "1.5rem" }}>
            {SERVICOS.map((servico) => {
              const aberto = servicosAbertos.includes(servico.id);
              return (
                <Tilt
                  key={servico.id}
                  max={4}
                  style={{ background: "#fffdf8", border: `1px solid ${cores.linha}`, borderRadius: 10, overflow: "hidden" }}
                >
                  <button
                    type="button"
                    onClick={() => alternarServico(servico.id)}
                    aria-expanded={aberto}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.9rem",
                      width: "100%",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      padding: "1.5rem 1.4rem",
                      fontFamily: "inherit",
                      color: cores.tinta,
                    }}
                  >
                    <span className="servico-emoji-anim" style={{ fontSize: "1.7rem", flexShrink: 0 }} aria-hidden="true">
                      {servico.emoji}
                    </span>
                    <span style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                      <span style={{ fontFamily: "Georgia, serif", fontWeight: 600, fontSize: "1.2rem" }}>{servico.sigla}</span>
                      <span style={{ fontSize: "0.9rem", color: cores.tintaSuave }}>{servico.descricao}</span>
                    </span>
                    <span
                      style={{
                        flexShrink: 0,
                        fontSize: "1rem",
                        color: cores.tintaSuave,
                        transition: "transform 0.25s ease",
                        transform: aberto ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      ↓
                    </span>
                  </button>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: aberto ? "1fr" : "0fr",
                      opacity: aberto ? 1 : 0,
                      transition: "grid-template-rows 0.3s ease, opacity 0.25s ease",
                    }}
                  >
                    <div
                      style={{
                        overflow: "hidden",
                        minHeight: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "0.8rem",
                        padding: aberto ? "0 1.4rem 1.4rem" : "0 1.4rem",
                      }}
                    >
                      <p style={{ margin: 0, fontSize: "0.95rem", color: cores.tintaSuave }}>{servico.explicacao}</p>
                      <p style={{ margin: 0, fontSize: "0.95rem", color: cores.tintaSuave }}>
                        <strong style={{ color: cores.tinta }}>Você encontra:</strong> {servico.encontra.join(" • ")}
                      </p>
                    </div>
                  </div>
                </Tilt>
              );
            })}
          </div>
        </Revela>
      </section>

      {/* SOBRE */}
      <section style={{ padding: "4rem 1.5rem", borderBottom: `1px solid ${cores.linha}` }}>
        <Revela>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 500, fontSize: "1.8rem", margin: "0 0 0.6em" }}>Sobre o projeto</h2>
            <p style={{ color: cores.tintaSuave, fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "62ch" }}>
              Este projeto foi desenvolvido por estudantes de Terapia Ocupacional com o objetivo de apresentar, de
              forma visual e acessível, os serviços presentes no território e sua importância para a rede de cuidado.
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

            <div style={{ marginTop: "2.2rem", paddingTop: "1.8rem", borderTop: `1px solid ${cores.linha}`, textAlign: "center" }}>
              <p style={{ margin: "0 0 1rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em", color: cores.tintaSuave }}>
                Desenvolvido por
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.6rem 0.7rem" }}>
                {["Sarah Cristina", "Ludmylla Lopes", "Sarah Barbosa", "Samara Vieira", "Endryo Ferreira", "Micael Santos"].map((nome) => (
                  <li
                    key={nome}
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "1rem",
                      color: cores.tinta,
                      background: "#fffdf8",
                      border: `1px solid ${cores.linha}`,
                      borderRadius: 999,
                      padding: "0.45rem 1.1rem",
                    }}
                  >
                    {nome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Revela>
      </section>

      {/* RODAPÉ */}
      <footer style={{ padding: "3rem 1.5rem", textAlign: "center" }}>
        <Revela>
          <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "1.1rem", maxWidth: "44ch", margin: "0 auto", color: cores.tinta }}>
            Conhecer o território é também conhecer os caminhos possíveis para o cuidado.
          </p>
        </Revela>
      </footer>
    </div>
  );
}