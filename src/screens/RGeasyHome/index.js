import React from 'react';
import Navigator from '../../components/Navbar';
import Carrossel from '../../components/Carrossel'
import Manual from '../../components/Manual';

function Home() {
  return (
    <div>
      <Navigator/>
      <Carrossel/>
      <Manual/>
    </div>
  );
}

export default Home;