import React, { useState , useEffect} from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

const Account = ({ setTab }) => {
    const [tabContent, setTabContent] = useState(0)
    const [questionslength, setQlen] = useState()
    const [questions, setQs] = useState("")
    const [questiontype, setQtypes] = useState("")
    const [questionoptions, setQoptions] = useState("")
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
                questiontype[tabContent] == 'Text' && questionoptions[tabContent].split(",").map(q=>

                <div>
                    <br></br><br></br><br></br>
                    {q}
                    <input type="text" name={q} onChange={(e) => setName(e.target.value)}/>
                </div>)
            }
         
            {
                questiontype[tabContent] == 'Radio'  && questionoptions[tabContent].split(",").map(q=>
                <div>
                    <br></br><br></br><br></br>
                    <input type="radio" id="gender" name="gender" value={q} onChange={(e) => setName(e.target.value)}/>{q}
                </div>)
            }
              
            {
                questiontype[tabContent]  == 'Date'  && 
                <div>
                    <br></br><br></br><br></br>
                <label htmlFor="date">{questions[tabContent]}</label>
                <input type="date" id="date" name="date" onChange={(e) => setName(e.target.value)}></input>
                </div>
            }

            {
                questiontype[tabContent]  == 'Select'  &&
                <div>
                    <br></br><br></br><br></br>
                    <label htmlFor="category">{questions[tabContent]}</label>
                    <select name="category" value={questions[tabContent]}>
                        {
                            questionoptions[tabContent].split(",").map((e, key) => 
                                {
                                return <option key={key} value={e} onChange={(e) => setName(e.target.value)}>{e}</option>;
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