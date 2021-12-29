import * as React from "react";
import Button from '@mui/material/Button';
import DialogSelect from './DialogSelect';
import DialogSelectCopy from './DialogSelectCopy';
import CoursesAdded from './CoursesAdded';

let ids = 1;
export default function ProposedMobility() {
  const [id, setId] = React.useState("");
  const [ects, setEcts] = React.useState("");

  const finish = (id, name, ects) => {
    console.log(ects);
    setId(name);
    setEcts(ects)
  }

  const [equivalence, setEquivalence] = React.useState('');

  const handleChange = (event) => {
    setEquivalence(event.target.value);
  };

  const [equivalenceNumber, setEquivalenceNumber] = React.useState('');

  const handleChangeNumber = (event) => {
    setEquivalenceNumber(Number(event.target.value));
  };

  const [coursesAdded, setCoursesAdded] = React.useState([]);

  const coursesAddedAdd = (courseA, courseB, EctsA, EctsB) => {
    setCoursesAdded([...coursesAdded, {
      courseA,
      courseB,
      EctsA,
      EctsB,
      id: ids
    }])
    ids = ids+1
  }


  const addCourse = () => {
    
    if(id === "" && equivalence==="") {
      alert("Please select at least a course from PUT")
    } else {
      coursesAddedAdd(id, equivalence, ects, equivalenceNumber);

      setId("");
      setEcts("")
      setEquivalence("");
      setEquivalenceNumber("");
    }
  }

  const deleteEquivalence = (idToDelete) => {
    var teste = []
    coursesAdded.filter(data => data.id !== idToDelete).map( (data) => {
      teste.push( { courseA: data.courseA,
                    courseB: data.courseB,
                    EctsA: Number(data.EctsA),
                    EctsB: Number(data.EctsB),
                    id: data.id
                } 
      )
    })

    setCoursesAdded(teste)
  }


  const add =(accumulator, a)  => {
    return accumulator + a;
  }

  const add2 =(accumulator, a)  => {
    return accumulator + a;
  }


  const sum = (type) => {
    var total = [];

    coursesAdded.map((item) => {
      if(item.EctsA !== 0)
        total.push(item.EctsA)
    })

    return total.reduce(add, 0)
  }

  const sum2 = (type) => {
    var total2 = [];

    coursesAdded.map((item) => {
      if(item.EctsB !== 0)
        total2.push(item.EctsB)
      
    })

    return total2.reduce(add2, 0)
  }


  return (
    <div style={{width: '660px'}}>
      <div style={{marginTop: "40px", display: "flex", justifyContent: "center", height: '78px'}}>
        
        <div style={{fontSize: "13px", color: "black", width: '300px'}}>
          
          <div style={{display:"flex"}}>Planned start of the mobility<div style={{color:"red"}}>*</div></div>

          <input type="date" placeholder="Your" style={{borderRadius: "4px", border: "1px solid #ccc",boxSizing: "border-box", backgroundColor: "white", height: '35px', width: '100%', color: "black"}}/>
        </div>
        <div style={{fontSize: "13px", color: "black", width: '300px', marginLeft: '60px'}}>
          
          <div style={{display:"flex"}}>Planned end of the mobility<div style={{color:"red"}}>*</div></div>

          <input type="date" placeholder="Name" style={{borderRadius: "4px", border: "1px solid #ccc",boxSizing: "border-box", backgroundColor: "white", height: '35px',width: '100%',color: "black"}}/>
        </div>

      </div> 

      <div style={{height: '270px', color: "white", border: "3px solid black", borderRadius: "9px" }}>
        <div style={{height: '40px', backgroundColor: "black", color: "white", borderRadius: "4px 4px 0px 0px", width: '655px' }}>
          <div style={{marginLeft: '10px'}}>
            Add courses to your Learning agreement  
          </div>
        </div>


        <div style={{marginTop: "10px", display: "flex", justifyContent: "center", height: '78px'}}>
        
          <div style={{fontSize: "13px", color: "black", width: '280px'}}>
            {id === "" &&
             <>Select a course from PUT</>
            }
            {id !== "" &&
             <>PUT Course selected</>
            }
            {id !== "" &&
              <div style={{width: '280px', height: '38px', border: "1px solid #ccc", borderRadius: "9px", fontSize: '10px'}}>
                <div style={{marginLeft: '10px', marginTop: '3px', overflowWrap: 'break-word',  width: "270px"}}>
                {id.length > 45 ? <>{id.substring(0,45)}...</> : id}
                </div>

              </div>
            }
            {id === "" &&
              <DialogSelect finish={finish}></DialogSelect>
            }
          </div>
          <div style={{fontSize: "13px", color: "black", width: '280px', marginLeft: '60px'}}>
            Insert your home university course
            <input value={equivalence} onChange={handleChange} type="text" placeholder="Opcional camp" style={{borderRadius: "4px", border: "1px solid #ccc",boxSizing: "border-box", backgroundColor: "white", height: '20px',width: '100%',color: "black"}}/>
          </div>
        </div> 

        <div style={{marginTop: "0px", display: "flex", height: '78px', marginLeft: "20px"}}>
        
          <div style={{fontSize: "13px", color: "black", width: '280px'}}>
            
            {id !== "" &&
              <>PUT course ECTS
              <div style={{width: '280px', height: '38px', border: "1px solid #ccc", borderRadius: "9px", fontSize: '10px', }}>
                <div style={{marginLeft: '10px', marginTop: '3px', overflowWrap: 'break-word',  width: "270px"}}>
                <div style={{display: "flex"}}><div style={{fontWeight: "bold", marginRight: '8px'}}>Ects: </div>{ects}</div>
                </div>
                <DialogSelectCopy finish={finish}></DialogSelectCopy>

              </div>
              </>
            }
          </div>
          {equivalence !== "" &&
          <div style={{fontSize: "13px", color: "black", width: '280px', marginLeft: '60px'}}>
            Insert number of course ECTS
            <input value={equivalenceNumber} onChange={handleChangeNumber} type="number" placeholder="Ects number" style={{borderRadius: "4px", border: "1px solid #ccc",boxSizing: "border-box", backgroundColor: "white", height: '38px',width: '100%',color: "black"}}/>
          </div>
          }
        </div> 
        

          <Button onClick={addCourse} sx={{float: 'right', marginTop: '20px', marginRight: "17px"}} variant="contained">Add</Button>

      </div>

      <div style={{height: "15px"}}></div>

      <div style={{minHeight: '140px', color: "white", border: "1px solid grey", borderRadius: "9px",  }}>
        <div style={{height: '40px', backgroundColor: "grey", color: "white", borderRadius: "4px 4px 0px 0px", width: '659px'}}>
          <div style={{marginLeft: '10px'}}>
            Courses added 
          </div>



        </div>

        <div style={{display:"flex", justifyContent:"center", marginTop: '20px'}}>
          <div style={{width: '600px', height: '30px',  display:'flex'}}>
            <div style={{width: '270px', fontWeight: "bold", color: "black"}}>
              Table A
            </div>
            <div style={{width: '270px', fontWeight: "bold", color: "black"}}>
              Table B
            </div>
            <div style={{width: '60px',}}>
                
            </div>
          </div>
        </div>

        <div style={{display:"flex", justifyContent:"center",flexWrap: "wrap", }}>

            {coursesAdded.length !== 0 && coursesAdded.map((item)=>{
              return (<CoursesAdded courseA={item.courseA} courseAECTS={item.EctsA} courseB={item.courseB} courseBECTS={item.EctsB} id={item.id} onDelete={deleteEquivalence}></CoursesAdded>)
            })}
            
        </div>

        {coursesAdded.length !== 0 &&

        <div style={{display:"flex", justifyContent:"center", marginTop: '10px', marginBottom: '10px'}}>
          <div style={{width: '600px', height: '30px',  display:'flex'}}>
            <div style={{width: '270px',  color: "black", fontSize: '12px', display: "flex"}}>
              Sum of ECTS (Table A): <div style={{fontWeight: "bold", marginLeft: "20px",fontSize: '15px'}}>{sum("A")}</div>
            </div>
            <div style={{width: '270px',   color: "black",fontSize: '12px',  display: "flex"}}>
              Sum of ECTS (Table B): <div style={{fontWeight: "bold", marginLeft: "20px",fontSize: '15px'}}>{sum2("B")}</div>
            </div>
            <div style={{width: '60px',}}>
                
            </div>
          </div>
        </div>
        }


      </div>


    </div>
  );
}
