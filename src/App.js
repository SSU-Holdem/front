import "./App.css";
import {useState} from 'react';

function EnterPage(props)
{
    return<article>
        <h1>Welcome to Sion Poker</h1>
        <button onClick={event => 
            {
                event.preventDefault();
                props.ChangeMode('CreateNickname');
            }}>ENTER</button>
    </article>
}

function CreateNickname(props)
{
    return<article>
        <form onSubmit={event =>
        {
            event.preventDefault();
            const Nickname = event.target.Nickname.value;
            props.ReturnNickname(Nickname);
            props.ChangeMode();
        }}>
            <p><input type = "text" name = "Nickname" placeholder="Enter your Nickname"></input></p>
            <p><input type = "submit" value="CreateNickName and Enter"></input></p>
        </form>
    </article>
    
}

function GameRooms(props)
{return<article>
    <p>{props.Nickname}님 반갑습니다.</p>
</article> 
}


function App() {

    const [mode, setMode] = useState('Default'); // 모드를 설정한다. 첫 입장시 기본 모드인 Default로 설정된다.
    const [Nickname, setNickname] = useState(null);// 사용자의 닉네임을 담을 변수이다.

    let content = null;// 각 모드별로 표시될 내용들을 담을 변수이다.
    

    if(mode === 'Default')//Default 모드시 EnterPage 태그의 내용을 화면에 출력한다.
    {
        content = <EnterPage ChangeMode = {() => {setMode("CreateNickName");}}></EnterPage>
    }
    else if(mode === 'CreateNickName')// CreateNickName 모드시 CreateNickname 태그의 내용을 화면에 출력한다.
    {
        content = <CreateNickname ChangeMode = {()=> {setMode("GameRooms");}} ReturnNickname = {(Nickname) => {setNickname(Nickname);}}></CreateNickname>
    }
    else if(mode === 'GameRooms')
    {
        content = <GameRooms Nickname = {Nickname}></GameRooms>;
    }



  return (
    <div>
        {content}
    </div>
  );
}

export default App;