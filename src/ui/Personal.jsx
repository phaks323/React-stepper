import React, { useState , useEffect} from 'react'
import ProgressBar from "@ramonak/react-progress-bar";


const Personal = ({setTab}) => {
    const [tabContent, setTabContent] = useState(0)
    const [questionslength, setQlen] = useState()
    const [qs, setQs] = useState("")
    const [qtypes, setQtypes] = useState("")
    const [qoptions, setQoptions] = useState("")
    const [progress, setProgres] = useState(0)
         
    useEffect(() => {
        // 
        const getQs = async() => {
            const res = await fetch("http://localhost:1337/api/contact-details");
            const data = await res.json();
          
            setQlen(data.data.length)

            var ques=[];
            var qtype=[];
            var qoptions = []

            for(var i=0;i<data.data.length;i++){
                ques.push(data.data[i].attributes.question);
                qtype.push(data.data[i].attributes.type);
                qoptions.push(data.data[i].attributes.option);
            }
            setQs(ques)
            setQtypes(qtype)
            setQoptions(qtype)

            console.log(qoptions);

            return data
        }
        getQs();
       }, [])
  return (
    <div className='tabsContent'>
         <ProgressBar completed={progress} label='zzz' />
            
            {
                qtypes[tabContent] == 'Text' && 
                 <div className='tabsContent'>
                    { qs[tabContent] }
                    <br></br>
                    <input type="text" name="{qs[tabContent]}"/>
                </div>
            }
         
            {
                qtypes[tabContent] == 'Radio'  && qoptions[tabContent].split(",").map(q=>
                <div>
                    <input type="radio" id="gender" name="gender" value={q} onChange={(e) => setName(e.target.value)}/>{q}
                </div>)
            }
              
            {
                qtypes[tabContent]  == 'Date'  && 
                <div>
                <label htmlFor="date">Date of Birth:</label>
                <input type="date" id="date" name="date" onChange={(e) => setName(e.target.value)}></input>
                </div>
            }

            {
                qtypes[tabContent]  == 'Select'  &&
                <div className='tabsContent'>
                    <label htmlFor="category2">Choose a category:</label>
                    <select name="category2" value={qs[tabContent]}>
                        {
                            qoptions[tabContent].split(",").map((e, key) => 
                                {
                                console.log(qoptions[tabContent].split(","))
                                return <option key={key} value={e} onChange={(e) => setName(e.target.value)}>{e}</option>;
                                }
                        )}
                    </select>
                </div>} 
        {tabContent === questionslength && <Personal setTab={setTab(3)} />}
        {tabContent === -1 && <Personal setTabContent={setTabContent(0)} />}

        <div className="footer">
          <button onClick={() => {setTabContent(tabContent +1),setProgres(progress + (100/questionslength))}}>Go Next</button>
          <div>{tabContent < questionslength && tabContent > 0 &&  <button onClick={() => {setTabContent(tabContent -1), setProgres(progress - (100/questionslength))}}>Go Back</button>}</div>
        </div>
    </div>
  )
}

export default Personal