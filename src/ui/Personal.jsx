import React, { useState , useEffect} from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

const Personal = ({setTab}) => {
    const [tabContent, setTabContent] = useState(0)
    const [qlen, setQlen] = useState()
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
                    <input type="radio" id="gender" name="gender" value={q}/>{q}
                </div>)
            }
              
            {
                qtypes[tabContent]  == 'Date'  && 
                <div>
                <label for="date">Date of Birth:</label>
                <input type="date" id="date" name="date"></input>
                </div>
            }

            {
                qtypes[tabContent]  == 'Select'  &&
                <div className='tabsContent'>
                    <label for="category">Choose a category:</label>
                    <select name="category" value={qs[tabContent]}>
                        {
                            qoptions[tabContent].split(",").map((e, key) => 
                                {
                                return <option key={key} value={e}>{e}</option>;
                                }
                        )}
                    </select>
                </div>} 
        {tabContent === qlen && <Personal setTab={setTab(3)} />}
        {tabContent === -1 && <Personal setTabContent={setTabContent(0)} />}

        <div className="footer">
          <button onClick={() => setTabContent(tabContent +1)}>Go Next</button>
          <div>{tabContent < qlen && tabContent > 0 &&  <button onClick={() => {setTabContent(tabContent -1), setProgres(progress + (100/qlen))}}>Go Back</button>}</div>
          <div>{tabContent === qlen-1 &&  <button onClick={() => {setTabContent(3)}}>Finish</button>}</div>
        </div>

    </div>
  )
}

export default Personal