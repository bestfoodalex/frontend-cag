import React, {useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import SignUpBasics from '../components/Sign-Up/sign-up-basics';
import WherePerform from '../components/Sign-Up/where-do-you-perform';
import PrivacyStatement from '../components/Sign-Up/privacy-statement';
import ActorInfo1 from '../components/Sign-Up/actorInfo1';
import ActorInfo2 from '../components/Sign-Up/actorInfo2';
import ActorInfo3 from '../components/Sign-Up/actorInfo3';
import Demographics from '../components/Sign-Up/demographics';
import Positions from '../components/Sign-Up/positions';
import Profile from '../components/Sign-Up/profile';
import { Container } from 'react-bootstrap';


function Signup() {
  const individualState = {
    type:'',
    firstName:'',
    lastName:'',
    email:'',
    pronouns:'',
    ethnicity:[],
    height:'',
    vocalRange:'',
    skills:[],
    equityStatus:'',
    agency:'',
    bio:'',
    website:'',
  }

  const component = {
    profile:false,
    typeProfile:true,
    path:[],
    index:0,
  }

  const [individual,setIndividualState] = useState(individualState);
  const [comp,setComp] = useState(component);

  function setSkills(skill) {
    setIndividualState({...individual,["skills"]:individual["skills"].concat(skill)});
  }

  function handleType(typeString) {
    setIndividualState({...individual,["typeProfile"]:typeString});
    if (typeString==="On-Stage") {
      setComp({...comp,["path"]:pathBoth.concat(actorPath)});
    } else {
      setComp({...comp,["path"]:pathBoth.concat(crewPath)});
    }
  }

  const handleStrings = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setIndividualState(prevState => {
      return{...prevState,[name]:value}
    })
  }

  function handleAppend (e) {
    var value = e.target.value.toString()
    setIndividualState({...individual,[e.target.name]:individual[e.target.name].concat(value)});
  }

  function handleSubmit () {
    if (comp.index>comp.path.length-2) {
      setComp({...comp,["profile"]:true});
    } else {
      setComp({...comp,["index"]:comp["index"]+1});
    }
  }
    var pathBoth = [<WherePerform handleType={handleType}/>, <SignUpBasics handleStrings={handleStrings}/>, 
    <PrivacyStatement firstName={individual.firstName}/>,<ActorInfo1 handleStrings={handleStrings} handleAppend={handleAppend}/>];
    const actorPath = [<ActorInfo2 handleStrings={handleStrings}/>,<ActorInfo3/>,<Positions handleSkill={setSkills}/>,<Demographics handleStrings={handleStrings}/>];
    const crewPath = [<Positions handleSkill={setSkills}/>,<Demographics handleStrings={handleStrings}/>]

    useEffect(()=> {
      setComp({...comp,["path"]:pathBoth});
    },[]);

  return (
  <div>
  {
    comp.profile ? 
    <Profile info={individual}/>
    :
    <div>
      {
        comp.path[comp.index]
      }
    <Container>
    <Button onClick={handleSubmit} className="d-flex ml-auto">CONTINUE</Button>
    </Container>
  </div>
  }
  </div>
  )
}

export default Signup;