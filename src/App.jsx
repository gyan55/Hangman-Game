
import './App.css'
import Button from './components/Button/Button'
import TextInput from './components/TextInput/textInput';

function App() {
  

  return (
    
    <div>
      <div>hi bro</div>
      <Button text= "click me" ></Button>
      <TextInput 
      label ="enter your naame"
      placeholder="name"
      onChangeHandler = {() => console.log('name changed')}
      ></TextInput>

    </div>
  );
}

export default App
