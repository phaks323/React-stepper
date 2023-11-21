import React, {useState} from 'react';
import Account from './ui/Account'
import Personal from './ui/Personal'
import Social from './ui/Social'
import Finish from './ui/Finish'
import "./index.css";
import ProgressBar from "@ramonak/react-progress-bar";

const App = () => {

  const [tab, setTab] = useState(0)

   return (
    <div className="app">
      <div className="myTabs">
      {/* <ProgressBar completed={progress} /> */}

        <div className="tabs">
          <div className={tab == 0 ? "tab active": "tab"} onClick={() => setTab(0)}>1</div>
          <div className={tab == 1 ? "tab active": "tab"} onClick={() => setTab(1)}>2</div>
          <div className={tab == 2 ? "tab active": "tab"} onClick={() => setTab(2)}>3</div>
          <div className={tab == 3 ? "tab active": "tab"} onClick={() => setTab(3)}>4</div>
        </div>

        <div className="myTabsContent">
          {tab === 0 && <Account setTab={setTab} />}
          {tab === 1 && <Social setTab={setTab} />}
          {tab === 2 && <Personal setTab={setTab} />}
          {tab === 3 && <Finish setTab={setTab} />}
        </div>
    </div>

</div>
      
  )
}


export default App;


