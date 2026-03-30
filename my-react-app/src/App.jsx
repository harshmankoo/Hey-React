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
import ControlledForm from './components/ControlledComponents.jsx/Controlled'
import ControlledFormTask from './components/ControlledComponents.jsx/ControlledComponentTask'
import ControlledInput from './components/ControlledComponents.jsx/ControlledComponentTask'

// import counter from './components/Hooks/CustomHook'
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
    <ControlledForm />
    <ControlledFormTask />
    <ControlledInput />

    </>
  )
}

export default App



