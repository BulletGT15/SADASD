import Header from './components/Header'
import IntroSection from './components/IntroSection'
import IntroEndSection from './components/IntroEndSection'
import SectionTablet from './components/SectionTablet'
import ChooseSection from './components/ChooseSection'
import HowWeWork from './components/WeWorkSec'
import Horizont from './components/Horizont'

function App() {
  return (
    <>
    <main>
      <Header/>
      <IntroSection/>
      <IntroEndSection/>
    </main>
    <section>
      <SectionTablet/>
    </section>
    <section>
      <ChooseSection/>
    </section>
    <section>
      <HowWeWork/>
    </section>
    <section>
      <Horizont/>
    </section>
    </>
  )
}

export default App
