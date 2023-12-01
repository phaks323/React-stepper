import React, { useState , useEffect} from 'react'
import ProgressBar from "@ramonak/react-progress-bar";


const Personal = ({setTab,setP}) => {
    
    const [contactdetails, setContactDetails] = useState({})
    const [tabContent, setTabContent] = useState(0)
    const [questionslength, setQlen] = useState()
    const [questions, setQs] = useState("")
    const [questiontype, setQtypes] = useState("")
    const [questionoptions, setQoptions] = useState("")
    const [progress, setProgres] = useState(0)


    function handleChange(evt) {
        const value = evt.target.value;
        setContactDetails({
          ...contactdetails,
          [evt.target.name]: value
        });
      }
         
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
            setQoptions(qoptions)

            console.log(qoptions);

            return data
        }
        getQs();
       }, [])
  return (
    <div className='tabsContent'>
         <ProgressBar completed={progress} label='zzz' />
         {questions[tabContent]}

            {

                questiontype[tabContent] == 'Text' && questionoptions[tabContent].split(",").map(q=>

                <div>
                    <br></br><br></br><br></br>
                    {q}
                    <input type="text" name={q} value={contactdetails.lastname}
                            onChange={handleChange}/>
                </div>)
            }
         
            {
                questiontype[tabContent] == 'Radio'  && questionoptions[tabContent].split(",").map(q=>
                <div>
                    <br></br><br></br><br></br>
                    <input type="radio" id="gender" name="gender" value={contactdetails.lastname}
          onChange={handleChange}/>{q}
                </div>)
            }
              
            {
                questiontype[tabContent]  == 'Date'  && 
                <div>
                    <br></br><br></br><br></br>
                <label htmlFor="date">{questions[tabContent]}</label>
                <input type="date" id="date" name="date" value={contactdetails.lastName}
          onChange={handleChange}></input>
                </div>
            }

            {
                questiontype[tabContent]  == 'Select'  &&
                <div>
                    <br></br><br></br><br></br>
                    <label htmlFor="category2">{questions[tabContent]}</label>
                    <select name="category2" value={questions[tabContent]}>
                        {
                            questionoptions[tabContent].split(",").map((e, key) => 
                                {
                                console.log(questionoptions[tabContent].split(","))
                                return <option key={key} value={contactdetails.lastName}
                                onChange={handleChange}>{e}</option>;
                                }
                        )}
                    </select>
                </div>} 
        {tabContent === questionslength && <Personal setTab={setTab(3)} />}
        {tabContent === -1 && <Personal setTabContent={setTabContent(0)} />}

        <div className="footer">
          <button onClick={() => {setTabContent(tabContent +1),setProgres(progress + (100/questionslength))}}>Go Next</button>
          <div>
            {tabContent < questionslength && tabContent > 0 &&
            <button onClick={() => {setTabContent(tabContent -1), setProgres(progress - (100/questionslength))}}>Go Back</button>}
        </div>
        </div>
        {console.log(contactdetails)}

    </div>
  )
}

export default Personal