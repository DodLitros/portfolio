import { useCallback, useEffect, useState } from "react";

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  const flip = useCallback(() => {
    setFlipped((current) => !current);
  }, []);

  useEffect(() => {
    // expongo una función global para compatibilidad con onclick="flip()" y scripts externos.
    window.flip = flip;

    return () => {
      if (window.flip === flip) {
        delete window.flip;
      }
    };
  }, [flip]);

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} id="card">
      <div className="face front">
        <div className="card-front">
          <div className="banner" onClick={flip}>
            <span className="banner-text">CLICK ME</span>
            <span className="banner-text">¿QUÉ SE?</span>
          </div>
          <span className="card__title">Desarrollador</span>
          <div className="card__image-wrap">
            <img src="/character.png" alt="Silueta de desarrollador" />
          </div>
        </div>
      </div>

      <div className="face back">
        <div className="card-contact">
          <div className="card-pattern-grid"></div>
          <div className="card-overlay-dots"></div>

          <div className="card-title-area">
            <span>Contáctame</span>
            <div className="feature-grid">
              <div className="feature-item">
                <div className="feature-icon"></div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"></div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"></div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"></div>
              </div>
            </div>
          </div>

          <div className="card-body">
            <div>
              <input className="mb-5" placeholder="TU NOMBRE" type="text" id="name" />
              <input className="mb-5" placeholder="TU CORREO ELECTRÓNICO" type="email" id="email" />
              <input className="mb-5" placeholder="TU NÚMERO TELEFÓNICO" type="tel" id="tel" />
            </div>
            <textarea className="message" placeholder="Escribeme en este recuadro tu idea" name="idea" id="text"></textarea>
            <div className="card-actions">
              <button className="card-button" type="button" onClick={() => alert("Propuesta enviada (simulado)")}>Enviar propuesta</button>
            </div>
          </div>

          <div className="dots-pattern">
            <svg viewBox="0 0 80 40" aria-hidden="true">
              <circle fill="#000" r="3" cy="10" cx="10" />
              <circle fill="#000" r="3" cy="10" cx="30" />
              <circle fill="#000" r="3" cy="10" cx="50" />
              <circle fill="#000" r="3" cy="10" cx="70" />
              <circle fill="#000" r="3" cy="20" cx="20" />
              <circle fill="#000" r="3" cy="40" cx="40" />
              <circle fill="#000" r="3" cy="20" cx="60" />
              <circle fill="#000" r="3" cy="30" cx="10" />
              <circle fill="#000" r="3" cy="30" cx="30" />
              <circle fill="#000" r="3" cy="30" cx="50" />
              <circle fill="#000" r="3" cy="30" cx="70" />
            </svg>
          </div>

          <div className="accent-shape" />
          <div className="corner-slice" />
        </div>
      </div>
    </div>
  );
}
