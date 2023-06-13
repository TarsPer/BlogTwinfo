import React from 'react';
import { Link } from 'react-router-dom';
import csgo from '../../img/Csgo.png';
import fornite from '../../img/Fortnite.png';
import valorant from '../../img/Valorant.png';
import warzone from '../../img/warzone.png';
import fifa from '../../img/Fifa.png';
import gtav from '../../img/Gta.png';
import lol from '../../img/Lol.png';
import rocketleague from '../../img/Rocket.png';
import r6 from '../../img/R6.png';

function Menu() {
  return (
    <div>
      <h2>
        <Link to="/menu/csgo">
          <img src={csgo} alt='descrição' width={290} />
        </Link>

        <Link to="/menu/fortnite">
          <img src={fornite} alt='descrição' width={290} />
        </Link>

        <Link to="/menu/valorant">
          <img src={valorant} alt='descrição' width={290} />
        </Link>

        <Link to="/menu/warzone">
          <img src={warzone} alt='descrição' width={290} />
        </Link>

        <Link to="/menu/fifa">
          <img src={fifa} alt='descrição' width={290} />
        </Link>

        <Link to="/menu/gtav">
          <img src={gtav} alt='descrição' width={290} />
        </Link>

        <Link to="/menu/leagueoflegends">
          <img src={lol} alt='descrição' width={290} />
        </Link>

        <Link to="/menu/rocketleague">
          <img src={rocketleague} alt='descrição' width={290} />
        </Link>

        <Link to="/menu/rainbowsix">
          <img src={r6} alt='descrição' width={290} />
        </Link>

      </h2>
    </div>
  );
}

export default Menu;
