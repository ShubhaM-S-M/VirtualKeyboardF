import React, { useEffect, useCallback } from "react";
import "./Piano.css";

function Piano() {
  const whiteFrequencies = [
    261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88,
    523.25, 587.33, 659.25, 698.46, 783.99, 880.0, 987.77,
  ];

  const keyMap = {
    a: 0, s: 1, d: 2, f: 3, g: 4, h: 5, j: 6,
    k: 7, l: 8, ";": 9, "'": 10, Enter: 11,
  };

  const playNote = useCallback((frequency) => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.5);
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      const key = event.key;
      if (keyMap[key] !== undefined) {
        const freq = whiteFrequencies[keyMap[key]];
        playNote(freq);
        const whiteKeys = document.querySelectorAll(".white");
        const activeKey = whiteKeys[keyMap[key]];
        if (activeKey) {
          activeKey.classList.add("active");
          setTimeout(() => activeKey.classList.remove("active"), 200);
        }
      }
    },
    [playNote]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    console.log("🎹 Piano Ready — Keyboard + Mouse Supported");
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="piano-root">
      <header className="header">
        <h1>🎹 Virtual Piano</h1>
        <p>Full-screen responsive piano — use your mouse or press A–L to play</p>
      </header>
      {/* Full-width Piano */}
      <div id="piano" className="piano-full">
        <div className="keys">
          {/* Black Keys */}
          <div className="blacks">
            {[
              1, 2, null, 4, 5, 6, null, 8, 9, null, 11, 12, 13,
            ].map((key, i) =>
              key ? (
                <div
                  key={i}
                  className="black"
                  onClick={() => playNote(whiteFrequencies[key] * 1.06)}
                ></div>
              ) : (
                <div key={i} style={{ opacity: 0 }}></div>
              )
            )}
          </div>

          {/* White Keys */}
          {whiteFrequencies.map((freq, i) => (
            <div
              key={i}
              className="white"
              onClick={() => playNote(freq)}
            ></div>
          ))}
        </div>
      </div>

      <footer>©️ 2025 Virtual Piano | Play anywhere, anytime 🎵</footer>
    </div>
  );
}

export default Piano;
