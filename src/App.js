import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function Main(){
  return(
    <div className="MainPage">
      <h2 className="MainStyle">Кривой Рог</h2>
      <img src="./kriviy_rig_famous.jpg" alt="kriviy_rig_famous.jpg"/>      
      <br/><br/>
      <div className="MainSpan">Город областного значения в Днепропетровской области Украины. Административный центр Криворожского района. 
        До конца 2020 года составлял Криворожский городской совет. Город основан в 1775 году и расположен на месте слияния рек
        Ингулец и Саксагань. Седьмой по численности населения город Украины, центр Криворожской агломерации. 
        Один из самых длинных городов Европы — линейное расстояние от крайней северной точки до южной 66,1 км по прямой. 
        На официальном сайте исполкома Криворожского городского совета указанная длина города — 126 км. Кривой Рог — важный 
        экономический и научный центр Украины, крупный транспортный узел, центр разработки Криворожского железорудного 
        бассейна.</div>
    </div>
  );
}

function FamousArt(){
  return(
    <div className="MainPage">
      <h2>Козак Кривой Рог</h2>
      <img src="./kriviy_rig_famous.jpg" alt="kriviy_rig_famous.jpg"/>      
    </div>
  );
}

function AnotherArt(){
  return(
    <div className="MainPage">
      <h2>Лодочная станция</h2>
      <img src="./kriviy_rig_famous2.jpg" alt="kriviy_rig_famous2.jpg"/>
      <h2>Цветочные часы</h2>
      <img src="./kriviy_rig_famous3.jpg" alt="kriviy_rig_famous3.jpg"/>
    </div>
  );
}

function PictureCity(){
  return(
    <div>
      <h2  className="MainPage">Город прекрасный с любой стороны</h2>
      <img src="Banner_of_Kryvyi_Rih.svg.png" alt="Banner_of_Kryvyi_Rih.svg.png"/>
      <img src="picture1.jpg" alt="picture1.jpg"/>
      <img src="picture2.jpg" alt="picture2.jpg"/>
      <img src="picture3.jpg" alt="picture3.jpg"/>
      <img src="picture4.jpg" alt="picture4.jpg"/>
      <img src="picture5.jpg" alt="picture5.jpg"/>
      <img src="picture6.jpg" alt="picture6.jpg"/>
      <img src="picture7.jpg" alt="picture7.jpg"/>
      <img src="picture8.jpg" alt="picture8.jpg"/>
      <img src="picture9.jpg" alt="picture9.jpg"/>
      <img src="picture10.jpg" alt="picture10.jpg"/>
      <img src="picture11.jpg" alt="picture11.jpg"/>
      <img src="picture12.jpg" alt="picture12.jpg"/>
      <img src="picture13.jpg" alt="picture13.jpg"/>
      <img src="picture14.jpg" alt="picture14.jpg"/>
    </div>
  );
}

function LoginIn(){
  return(
    <div>
      <h2>Login pages</h2>
    </div>
  );
}

function NotFound(){
  return<h2>Not found</h2>
}

function NavMenu(){
  return(
    <>
      <Link to ="/" className="links">
        Main
      </Link>
      <Link to ="/famousart" className="links">
      FamousArt
      </Link>
      <Link to="/anotherart" className="links">
      AnotherArt
      </Link>
      <Link to="/picturecity" className="links">
      PictureCity
      </Link>
      <Link to="/loginin" className="links">
      LoginIn
      </Link>
    </>
  );
}

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <NavMenu/>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/famousart" component={FamousArt}/>
            <Route path="/anotherart" component={AnotherArt}/>
            <Route path="/picturecity" component={PictureCity}/>
            <Route path="/loginin" component={LoginIn}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
