import React from 'react';
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

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      type:'On-Stage',
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
      profile:false,
      typeProfile:true,
      path:[],
      index:0,
    }
    this.handleType = this.handleType.bind(this);
    this.setSkills = this.setSkills.bind(this);
    this.handleAppend = this.handleAppend.bind(this);
    this.handleStrings = this.handleStrings.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getName = this.getName.bind(this);
    this.getFinalState = this.getFinalState.bind(this);
  }

  componentDidMount () {
    var pathBoth = [<WherePerform handleType={this.handleType}/>, <SignUpBasics handleStrings={this.handleStrings}/>, 
    <PrivacyStatement firstName={this.state.firstName}/>,<ActorInfo1 handleStrings={this.handleStrings} handleAppend={this.handleAppend}/>];
    this.setState(() => ({
      path:pathBoth
    }));
  }

  handleType(typeString) {
    var pathBoth = [<WherePerform handleType={this.handleType}/>, <SignUpBasics handleStrings={this.handleStrings}/>, 
      <PrivacyStatement firstName={this.getName}/>,<ActorInfo1 handleStrings={this.handleStrings} handleAppend={this.handleAppend}/>];
      const actorPath = [<ActorInfo2 handleStrings={this.handleStrings}/>,<ActorInfo3/>,<Positions handleSkill={this.setSkills}/>,
      <Demographics handleStrings={this.handleStrings}/>];
      const crewPath = [<Positions handleSkill={this.setSkills}/>,<Demographics handleStrings={this.handleStrings}/>];

    this.setState({type:typeString});
    if (typeString ==="On-Stage") {
      this.setState(() => ({
        path:pathBoth.concat(actorPath)
      })); 
    } else {
      this.setState(() => ({
        path:pathBoth.concat(crewPath)
      }));
    }
  }

  getFinalState() {
    console.log(this.state);
    return(this.state);
  }

  getName () {
    return (this.state.firstName);
  }

  setSkills (skill) {
    this.setState((prevState) => ({
      skills:prevState.skills.concat(skill)
    }));
  }

  handleAppend (e) {
    const {name,value} = e.target;
    this.setState((prevState) => ({
      [name]:prevState[name].concat(value)
    }));
  }

  handleStrings (e) {
    const {name,value} = e.target;
    this.setState(() => ({
      [name]:value
    }));
    console.log(this.state.firstName);
  }

  handleSubmit () {
    if (this.state.index>this.state.path.length-2) {
      this.setState(() => ({
        profile:true 
      }));
    } else {
      this.setState(prevState => ({
        index:prevState.index+1
      }));
    }
  }

  render() {
    return (
      <div>
      {
      this.state.profile ? 
      <Profile info={this.getFinalState}/>
      :
      <div>
        {
          this.state.path[this.state.index]
        }
      <Container>
      <Button onClick={this.handleSubmit} className="d-flex ml-auto">CONTINUE</Button>
      </Container>
      </div>
      }
      </div>
    );
  }
}






/*



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
    profile:false,
    typeProfile:true,
    path:[],
    index:0,
  }

  const [individual,setIndividualState] = useState(individualState);

  function setSkills(skill) {
    setIndividualState( prevState => {
      return{...prevState, ["skills"]:prevState["skills"].concat(skill)}
    });
  }

  function handleType(typeString) {
    setIndividualState( prevState => {
      return {...prevState, ["typeProfile"]:typeString};
    });
    if (typeString==="On-Stage") {
      setIndividualState(prevState => {
        return {...prevState, ["path"]:pathBoth.concat(actorPath)};
      });
    } else {
      setIndividualState(prevState => {
        return {...prevState, ["path"]:pathBoth.concat(crewPath)};
      });
    }
  }

  async function getFirstName() {
    var name = "";
    setIndividualState(prevState => {
      name = prevState["firstName"];
      return prevState
    });
    return name
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
    setIndividualState(prevState => {
      return {...prevState, [e.target.name]:prevState[e.target.name].concat(value)};
    });
  }

  function handleSubmit () {
    if (individual.index>individual.path.length-2) {
      setIndividualState(prevState => {
        return {...prevState, ["profile"]:true};
      });      
    } else {
      setIndividualState(prevState => {
        return {...prevState, ["index"]:prevState["index"]+1};
      });
    }
  }

  var pathBoth = [<WherePerform handleType={handleType}/>, <SignUpBasics handleStrings={handleStrings}/>, 
    <PrivacyStatement firstName={getFirstName}/>,<ActorInfo1 handleStrings={handleStrings} handleAppend={handleAppend}/>];
    const actorPath = [<ActorInfo2 handleStrings={handleStrings}/>,<ActorInfo3/>,<Positions handleSkill={setSkills}/>,<Demographics handleStrings={handleStrings}/>];
    const crewPath = [<Positions handleSkill={setSkills}/>,<Demographics handleStrings={handleStrings}/>]

    useEffect(()=> {
      setIndividualState(prevState => {
        return {...prevState, ["path"]:pathBoth};
      });
    },[]);

  return (
  <div>
  {
    individual.profile ? 
    <Profile info={individual}/>
    :
    <div>
      {
        individual.path[individual.index]
      }
    <Container>
    <Button onClick={handleSubmit} className="d-flex ml-auto">CONTINUE</Button>
    </Container>
  </div>
  }
  </div>
  )
}
*/
export default Signup;
