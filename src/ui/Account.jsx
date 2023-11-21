import React, { useState , useEffect} from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

const Account = ({ setTab }) => {
    const [tabContent, setTabContent] = useState(0)
    const [questionslength, setQlen] = useState()
    const [qs, setQs] = useState("")
    const [qtypes, setQtypes] = useState("")
    const [qoptions, setQoptions] = useState("")
    const [progress, setProgres] = useState(0)
         
    useEffect(() => {
        // 
        const getQs = async() => {
            const res = await fetch("http://localhost:1337/api/personal-questions");
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
            setQoptions(qoptions)

            console.log(qoptions);

            return data
        }
        getQs();
       }, [])
    return (
        
        <div className='tabsContent'>
            <ProgressBar completed={progress} label='ss' />
            
            {
                qtypes[tabContent] == 'Text' && qoptions[tabContent].split(",").map(q=>

                <div>
                    <br></br><br></br><br></br>
                    {q}
                    <input type="text" name={q}/>
                </div>)
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
                
            {
                tabContent === questionslength && <Account setTab={setTab(1)} />
            }

            {
                tabContent === -1 && <Account setTabContent={setTabContent(0)} />
            }

            <div className="footer">
                <button onClick={() => {setTabContent(tabContent +1), setProgres(progress + (100/questionslength))}}>Go next</button>
                <div>{tabContent < questionslength && tabContent > 0 &&  
                <button onClick={() => {setTabContent(tabContent -1), setProgres(progress - (100/questionslength))}}>Go Back</button>}</div>
            </div>

        </div>
    )
}
export default Account