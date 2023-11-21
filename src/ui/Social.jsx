import React, { useState , useEffect} from 'react'
import ProgressBar from "@ramonak/react-progress-bar";


const Social = ({setTab}) => {
  const [tabContent, setTabContent] = useState(0)
  const [questionslength, setQlen] = useState()
  const [questions, setQs] = useState("")
  const [questiontype, setQtypes] = useState("")
  const [questionoptions, setQoptions] = useState("")
  const [progress, setProgres] = useState(0)
       
  useEffect(() => {
      // 
      const getQs = async() => {
          const res = await fetch("http://localhost:1337/api/qualification-questions");
          const data = await res.json();
        
          setQlen(data.data.length)

          var ques=[];
          var qtype=[];
          var questionoptions = []

          for(var i=0;i<data.data.length;i++){
              ques.push(data.data[i].attributes.question);
              qtype.push(data.data[i].attributes.type);
              questionoptions.push(data.data[i].attributes.option);
          }
          setQs(ques)
          setQtypes(qtype)
          setQoptions(qtype)

          console.log(questionoptions);

          return data
      }
      getQs();
     }, [])
return (
  <div className='tabsContent'>
       <ProgressBar completed={progress} label='ccc' />
          
          {
              questiontype[tabContent] == 'Text' && 
               <div className='tabsContent'>
                  { questions[tabContent] }
                  <br></br>
                  <input type="text" name="{questions[tabContent]}"/>
              </div>
          }
       
          {
              questiontype[tabContent] == 'Radio'  && questionoptions[tabContent].split(",").map(q=>
              <div>
                  <input type="radio" id="gender" name="gender" value={q} onChange={(e) => setName(e.target.value)}/>{q}
              </div>)
          }
            
          {
              questiontype[tabContent]  == 'Date'  && 
              <div>
              <label htmlFor="date">Date of Birth:</label>
              <input type="date" id="date" name="date" onChange={(e) => setName(e.target.value)}></input>
              </div>
          }

          {
              questiontype[tabContent]  == 'Select'  &&
              <div className='tabsContent'>
                  <label htmlFor="category">Choose a category:</label>
                  <select name="category" value={questions[tabContent]}>
                      {
                          questionoptions[tabContent].split(",").map((e, key) => 
                              {
                              return <option key={key} value={e}onChange={(e) => setName(e.target.value)}>{e}</option>;
                              }
                      )}
                  </select>
              </div>} 

        {tabContent === questionslength && <Social setTab={setTab(2)} />}
        {tabContent === -1 && <Social setTabContent={setTabContent(0)} />}

        <div className="footer">
          <button onClick={() => {setTabContent(tabContent +1), setProgres(progress + (100/questionslength))}}>Go Next</button>
          <div>{tabContent < questionslength && tabContent > 0 &&  <button onClick={() => {setTabContent(tabContent -1), setProgres(progress - (100/questionslength))}}>Go Back</button>}</div>
        </div>
    </div>
  )
}

export default Social