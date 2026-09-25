import { ImageResponse } from "next/og";

export const alt =
  "Infotech Tapera: celulares, computadores e assistência técnica em Tapera, RS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#10201d",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -230,
            top: -240,
            width: 830,
            height: 830,
            borderRadius: "50%",
            border: "2px solid #365b40",
            boxShadow: "0 0 0 80px #142a22, 0 0 0 160px #11251f",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 116,
            top: 84,
            width: 260,
            height: 455,
            borderRadius: 36,
            border: "9px solid #b1e46a",
            background: "#244535",
            transform: "rotate(11deg)",
            boxShadow: "24px 28px 0 #0b1814",
            display: "flex",
            justifyContent: "center",
            paddingTop: 18,
          }}
        >
          <div
            style={{
              width: 76,
              height: 11,
              borderRadius: 20,
              background: "#10201d",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            right: 178,
            top: 238,
            width: 136,
            height: 136,
            borderRadius: 28,
            background: "#a9df42",
            transform: "rotate(11deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#10201d",
            fontSize: 82,
            fontWeight: 800,
          }}
        >
          i
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "67px 72px",
            width: 820,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 22,
              fontWeight: 800,
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: "#a9df42",
              }}
            />
            INFOTECH TAPERA
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: -4,
              lineHeight: 1.05,
            }}
          >
            <span>Mais tecnologia</span>
            <span style={{ color: "#a9df42" }}>para o seu dia.</span>
          </div>
          <div style={{ fontSize: 22, color: "#c9dacb" }}>
            Celulares · Computadores · Assistência técnica
          </div>
        </div>
      </div>
    ),
    size,
  );
}
