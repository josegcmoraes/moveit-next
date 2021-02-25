import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {


  return (
    // <ChallengesContext.Provider value={ {level: 1} }>
    <ChallengesProvider>
      <Component {...pageProps} />  
    </ChallengesProvider>
  )
}

export default MyApp
