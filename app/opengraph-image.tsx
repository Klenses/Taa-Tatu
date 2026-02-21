import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TaaTatu Hub Limited - African FMCG Export Supply";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(90deg, rgba(31,39,71,1) 0%, rgba(31,39,71,0.95) 58%, rgba(34,151,155,0.28) 100%)",
          fontFamily: "Arial, sans-serif",
          color: "#FFFFFF",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "60px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "9999px",
              background: "#22979B",
              position: "relative",
              display: "flex",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "14px",
                height: "14px",
                borderRadius: "9999px",
                background: "#F1B211",
                left: "-10px",
                top: "10px",
                display: "flex",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "14px",
                height: "14px",
                borderRadius: "9999px",
                background: "#FF8126",
                right: "-10px",
                top: "10px",
                display: "flex",
              }}
            />
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "0.02em",
              color: "#E9E9E9",
            }}
          >
            TaaTatu Hub Limited
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            padding: "0 100px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              maxWidth: "640px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "32px",
            }}
          >
            <div
              style={{
                fontSize: "68px",
                lineHeight: 1.04,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
              }}
            >
              African FMCG Export Supply
            </div>
            <div
              style={{
                fontSize: "30px",
                lineHeight: 1.3,
                fontWeight: 500,
                color: "#E9E9E9",
              }}
            >
              Non-Alcoholic Beverages &amp; Long Shelf-Life Products
            </div>
          </div>

          <div
            style={{
              width: "360px",
              height: "280px",
              position: "relative",
              opacity: 0.78,
              display: "flex",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "22px",
                left: "10px",
                width: "220px",
                height: "16px",
                borderTop: "2px solid rgba(233,233,233,0.75)",
                display: "flex",
              }}
            />
            <svg
              width="330"
              height="190"
              viewBox="0 0 330 190"
              style={{
                position: "absolute",
                bottom: "28px",
                right: "0",
              }}
            >
              <g fill="none" stroke="rgba(233,233,233,0.72)" strokeWidth="3">
                <path d="M15 148 L205 148 L246 122 L316 122" />
                <path d="M66 122 L66 62" />
                <path d="M66 62 L126 62 L152 122" />
                <path d="M206 122 L248 122" />
              </g>
            </svg>

            <div
              style={{
                position: "absolute",
                bottom: "44px",
                left: "4px",
                display: "grid",
                gridTemplateColumns: "repeat(3, 56px)",
                gridAutoRows: "24px",
                gap: "6px",
              }}
            >
              {new Array(9).fill(null).map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: "56px",
                    height: "24px",
                    border: "1px solid rgba(233,233,233,0.68)",
                    background: "rgba(31,39,71,0.3)",
                    display: "flex",
                  }}
                />
              ))}
            </div>

            <div
              style={{
                position: "absolute",
                right: "6px",
                bottom: "34px",
                display: "flex",
                alignItems: "flex-end",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "78px",
                  borderRadius: "8px 8px 6px 6px",
                  border: "2px solid rgba(233,233,233,0.65)",
                  background: "rgba(34,151,155,0.22)",
                  display: "flex",
                }}
              />
              <div
                style={{
                  width: "36px",
                  height: "108px",
                  borderRadius: "10px 10px 8px 8px",
                  border: "2px solid rgba(233,233,233,0.65)",
                  background: "rgba(241,178,17,0.22)",
                  display: "flex",
                }}
              />
              <div
                style={{
                  width: "44px",
                  height: "88px",
                  borderRadius: "8px",
                  border: "2px solid rgba(233,233,233,0.65)",
                  background: "rgba(255,129,38,0.2)",
                  display: "flex",
                }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: "60px",
            right: "60px",
            bottom: "38px",
            height: "4px",
            background: "#F1B211",
            opacity: 0.9,
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
