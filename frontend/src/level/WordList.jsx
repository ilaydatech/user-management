import { useParams, useNavigate } from "react-router-dom";
import words from "../word.json";

function WordList() {
  const navigate = useNavigate();
  const { level, sub } = useParams(); // /wordlist/:level/:sub
  const list = words[level]?.[sub] || [];

  return (
    <section>
      <h1>{`${level} / ${sub}`}</h1>
      <ul>
        {list.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
      <button onClick={() => navigate(`/wordlist/${level}/${sub}/0`)}>
        Öğren
      </button>
    </section>
  );
}

export default WordList;

// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// function WordList() {
//   const location = useLocation();
//   const { level, subLevel } = location.state || {};

//      const handleOneWord = (subLevel) => {
//        navigate("/oneword", { state: { level, subLevel } });
//      };

//   const [words, setWords] = useState([]);

//   useEffect(() => {
//     fetch("./word.json")
//       .then((response) => response.json())
//       .then((data) => {
//         if (data[level] && data[level][subLevel]) {
//           setWords(data[level][subLevel]);
//         }
//       })
//       .catch((error) =>
//         console.error("Kelime listesi yüklenirken hata oluştu:", error)
//       );
//   }, [level, subLevel]);

//   return (
//     <div>
//       <h1>{subLevel} Kelimeleri</h1>
//       <ul>
//         {words.length > 0 ? (
//           words.map((word, index) => <li key={index}>{word}</li>)
//         ) : (
//           <p>Kelimeler yükleniyor...</p>
//         )}
//       </ul>
//       <button onClick={handleOneWord}>
//         BAŞLA
//       </button>
//     </div>
//   );
// }

// export default WordList;

// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// function WordList() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { level, words } = location.state || {};

//   // if (!level || !words) {
//   //   return <h2>Bir hata oluştu, lütfen tekrar deneyin.</h2>;
//   // }

//   return (
//     <div>
//       <h1>{level} Seviyesi Kelimeleri</h1>
//       <ul>
//         {words.map((word, index) => (
//           <li key={index}>{word}</li>
//         ))}
//       </ul>
//       <button onClick={() => navigate("/chooselevel")}>Geri Dön</button>
//     </div>
//   );
// }

// export default WordList;

// import React from "react";

// function WordList({ level, words }) {
//   // Eğer props'tan gelen level veya words boşsa, hata mesajı gösteriyoruz.
//   if (!level || !words) {
//     return <h2>Bir hata oluştu, lütfen tekrar deneyin.</h2>;
//   }

//   return (
//     <div>
//       {/* Seçilen seviyeyi başlık olarak ekrana yazdırıyoruz */}
//       <h1>{level} Seviyesi Kelimeleri</h1>

//       {/* Kelimeleri liste halinde gösteriyoruz */}
//       <ul>
//         {words.map((word, index) => (
//           <li key={index}>{word}</li> // Her kelime için liste öğesi oluşturuluyor
//         ))}
//       </ul>

//       {/* Kullanıcıyı tekrar seviye seçme sayfasına yönlendiren buton */}
//       <button onClick={() => window.history.back()}>Geri Dön</button>
//     </div>
//   );
// }

// export default WordList;
