import './App.css'
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom'
import Header from './components/header'
import Greetings from './components/Greetings'
import Button from './components/Button'
import Card from './components/Card'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import Counter from './components/counter'
import LifecyclePractice from "./components/Hooks/StudentList";
import UseRefTutorial from './components/Hooks/useref'
import FocusInput, { RefVsState, UncontrolledInput, PreviousValue, VideoPlayer, UseOfCustomHook } from './components/Hooks/UseRefTask'
import WithEnhancedHello, { WithEnhancedUser, MainBorderCLass, ToViewUsers, ShowCounter } from './components/HOC'
import { Example1_ChildrenProp, Example2_CompoundComponents, Example3_RenderProps } from './components/componentCompostion'
import HigherOrderComponentsTutorial from './HigherOrderComponentsTutorial'
import ControlledFormGursimran from './components/ControlledComponents/Controlled'
import ControlledForm from './components/ControlledComponents/ControlledComponentTask'
import FormsCompleteTutorial from './components/ControlledComponents/Fullprogram'
import Context from './components/State Managment/StateManagement'
import ThemeSwitcher from './components/State Managment/BasicContext'
import AdvancedContext from './components/State Managment/AdvancedContext'


function App() {
  return (
    <>
      {/* <LifecyclePractice productId={1}/> */}
      {/* <UseRefTutorial /> */}

      {/* < Parent />  */}
      {/* <Navbar />
      <br />
      <Header />
      <br />
      <Profile />
      <br />
      <div className='div1'> <h1>Hey This is my First React Task</h1></div>
      <br />
      <Greetings />
      <br />
      <Button />
      <br />
      <Card />
      <br />
      <Counter />
      <br />   */}

      {/* <FocusInput />
        <UncontrolledInput />
        <PreviousValue />
        <RefVsState />
        < VideoPlayer />
        <counter />
        <UseOfCustomHook />*/}
      {/* <WithEnhancedHello />
      <WithEnhancedUser name="Harshdeep Singh" />
<HigherOrderComponentsTutorial />
      <MainBorderCLass />
      <ToViewUsers isLoading={false} />
      <ShowCounter />
    <Example1_ChildrenProp />
    <Example2_CompoundComponents />
    <Example3_RenderProps /> */}


      {/* ================================================== */}
      <ControlledFormGursimran />
      <FormsCompleteTutorial />               {/*Form Handlling Control nd UNcontrolled  */}
      <ControlledForm />
      {/* ========================================== */}
      <Context />
      <ThemeSwitcher />                 { /*state Management */}
      <AdvancedContext />
      {/* =========================================== */}
    </>
  )
}

export default App



