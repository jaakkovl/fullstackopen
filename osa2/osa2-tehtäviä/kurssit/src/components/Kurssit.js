import React from 'react';

const Otsikko = ({ otsikko }) => (
  <h1>{otsikko}</h1>
);

const Osa = ({ osa }) => (
  <p>{osa.nimi} {osa.tehtavia}</p>
);

const Sisalto = ({ osat }) => (
  <div>
    {osat.map(osa => <Osa key={osa.id} osa={osa} />)}
  </div>
);

const Yhteensa = ({kurssi}) => (
    <div>
        <p>Yhteensä {kurssi.osat.map(osa => osa.tehtavia).reduce( (a, b) => a + b, 0)} tehtävää</p>
    </div>

)

const Kurssi = ({ kurssi }) => (
  <div>
    <Otsikko otsikko={kurssi.nimi} />
    <Sisalto osat={kurssi.osat} />
    <Yhteensa kurssi={kurssi}/>
  </div>
);

const Kurssit = ({kurssit}) => {
    const palautaKurssit = () => kurssit.map(osa => 
        <Kurssi key={osa.nimi} kurssi={osa}/>
        )
    return (
        <div>
            {palautaKurssit()}
        </div>
    )
}

export default Kurssit