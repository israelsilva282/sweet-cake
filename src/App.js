import BottomLead from './components/BottomLead';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Step from './components/Step';

import logo from "./assets/logo.jpg";

import bolo from './assets/Bolo.png';



function App() {
  const data = {
    hero: {
      appType: 'Sweet Cake',
      tagLine: 'Mate sua fome com Sweet Cake!',
      mainActionText: 'Comprar',
    },
    content: {
      title: 'Bolo de Cenoura',
      heading: '',
      description: 'Valor: R$ 4,00',
      img: bolo,
      alternate: false,
    },
    bottomLead: {
      actionText: 'Formas de pagamento',
      description: 'Pagamentos somente em espécie e pix!',
      mainActionText: 'Espécie',
      secondaryActionText: 'Pix',
    },
  }
  return (
    <div className="box-border">
      <div className="flex flex-col">

        <Navbar logo={logo} />
        <Hero
          appType={data.hero.appType}
          tagLine={data.hero.tagLine}
          description={data.hero.description}
          mainActionText={data.hero.mainActionText}
          extraActionText={data.hero.extraActionText}
        />

        <div id="divider" className="rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto "></div>

        <div id="faq" className="pt-20 mb-20 text-3xl font-semibold text-center text-blue-800 lg:font-bold">Encomende já o seu!</div>
        <Step
          title={data.content.title}
          heading={data.content.heading}
          description={data.content.description}
          img={data.content.img}
          alternate={data.content.alternate}
          />

        <BottomLead
          actionText={data.bottomLead.actionText}
          description={data.bottomLead.description}
          mainActionText={data.bottomLead.mainActionText}
          secondaryActionText={data.bottomLead.secondaryActionText}
        />

        <Footer logo={logo} />
      </div>
    </div>
  );
}

export default App;
