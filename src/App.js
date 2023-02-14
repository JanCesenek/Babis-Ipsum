import "./App.css";
import babis from "./imgs/babis.png";
import { useState } from "react";

function App() {
  const generator = [
    "Tady byla velká debata a týká se to hlavně Královéhradeckého kraje, kde vznikl velký problém v Chebu. ",
    "Prosim vás, Karlovarský kraj, stále něco říká, je to nejhorší kraj historicky ve všem. ",
    "Já sem tam býl, mezi těmi demonstrantmi! ",
    "Tak nechte mě mluvit, kurva jako, co??? ",
    "Počkejtě, já sem neměl mandát, kurvaaa!!! ",
    "Kalousek, symbol korupce. ",
    "By mě zajímalo kolik má zas promile. ",
    "Jo, je zas ožralej, jak obyčejně. ",
    "Nebudeš mě urážeť. ",
    "Nech to všici vidí! ",
    "Já sem svrchovaný premiér této země! ",
    "Já vám len chci říct, že nikdy neodstoupím, nikdy, nech si to všichni zapamatujú! ",
    "Nebuďte slušnej, řekněte jméno. ",
    "Váš kolega zase dělal skandál, že sem tady není... ",
    "My chceme ty motýle. ",
    "Ale já na něj můžu mluvit přímo, já sem premiér! ",
    "A co jako... ",
    "Proč bych vám měl sdělovat svoje příjmy, vy někomu sdělujete svoje příjmy? ",
    "Sorry jako... ",
    "Já sem si celý život vystačil s formulou jedna plus jedna. ",
    "Když šli do Bruselu, pan Sobotka, Bělobrádek, no tak mě tam ani nepozvali. ",
    "My chceme dát důchodcům větší peníze a oni nám to blokujou. ",
    "Zas lhal a říkal, že budu vědět, kolik piv vypije. ",
    "Jsem diplomat, ne voják, nezavleču Česko do války! ",
    "Špatně vás to naučili, zkontrolujte si ty noty z Bruselu. ",
    "Zabil lidi cez padáky!!! ",
    "Osobní přítel rodiny Assáda, pan Kalousek! ",
    "Nech nám řekne jeho střet zájmů s Hábou, jak dělal Omnipol. ",
    "Třikrát sem zažaloval Ústavní soud Slovenské republiky a já ten soud vyhraju. ",
    "Já sem nikdy nebyl v STB... ",
    "Já sem měl v rodině tři imigračky, mně tady nikdo nebude vykládat že som byl v STB!!! ",
    "Já kdybych měl za sebou to, co on, tak lezu kanálami!!! ",
    "Zloděj zlodějská. ",
    "Řvali a začali na mě házet lahve. ",
    "Dneska jste tam byl, jste byl nadšenej, skandovali vaše jméno. ",
    "Proč? ",
    "Mě STBáci terorizovali za to, že sem nekupoval ze Sýrie fosfáty! ",
    "Já si vyprosim aby tady někdo mluvil o mých dětech! ",
    "Kampaň! ",
    "Účelovka! ",
    "Já sem vybudoval Agrofert od nuly a zaměstnávám 35000 lidí! ",
  ];

  const pukeBullshit = () => {
    const finalWords = [];
    for (let i = 0; i < demagogie; i++) {
      let randNumber = Math.floor(Math.random() * generator.length + 1);
      while (finalWords.includes(generator[randNumber - 1])) {
        randNumber = Math.floor(Math.random() * generator.length + 1);
      }
      finalWords.push(generator[randNumber - 1]);
    }
    setResult(finalWords);
    console.log(finalWords);
    console.log(result);
  };

  const [demagogie, setDemagogie] = useState(1);
  const [result, setResult] = useState("Tak co teraz vybliju za sračku?");

  return (
    <div className="App">
      <div className="FaceWithBubble">
        <img src={babis} alt="Andrejko" className="Kokotko" />
        <div className="Bubble">{result}</div>
      </div>
      <div className="Confirm">
        <label htmlFor="demagogie" className="Label">
          Množství demagogií:
        </label>
        <input
          type="number"
          name="demagogie"
          id="demagogie"
          value={demagogie}
          onChange={(e) => setDemagogie(e.target.value)}
          min="1"
          max="10"
        />
        <button onClick={pukeBullshit}>Vyblít</button>
      </div>
    </div>
  );
}

export default App;
