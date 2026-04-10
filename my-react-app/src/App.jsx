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
import HigherOrderComponentsTutorial from './components/HigherOrderComponentsTutorial'
import ControlledFormGursimran from './components/ControlledComponents/Controlled'
import ControlledForm from './components/ControlledComponents/ControlledComponentTask'
import FormsCompleteTutorial from './components/ControlledComponents/Fullprogram'
import Context from './components/State Managment/StateManagement'
import ThemeSwitcher from './components/State Managment/BasicContext'
import AdvancedContext from './components/State Managment/AdvancedContext'
import UNcontrolledForm from './components/ControlledComponents/Uncontrolledcomponent'
import RoutingTutorial from './components/React Routing/ReactRouting'
import Home from './components/React Routing/home'
import About from './components/React Routing/About'
import Contact from './components/React Routing/Contact'
import SimpleForm from './components/Files and Forms Mastery/DynamicJobForm(SimpleForm)'
import ImageUploadDemo from './components/Files and Forms Mastery/ImageUPload'
import AdvancedFormsTutorial from './components/Files and Forms Mastery/FormManagement'
import ApiIntegrationMasterclass from './components/AdvancedApi Managment/CompleteTopis'
import ApiClientDemo from './components/AdvancedApi Managment/AxiosInterceptors'
import TanStackQueryDemo from './components/AdvancedApi Managment/TankStackQuery'
import ChatRealTimeDemo from './components/AdvancedApi Managment/WebSocket'
import GetUserDataUsingAxios from './components/AdvancedApi Managment/AllMethodsTasks'
import TailwindExplanation from './components/Styling/tailwindExplantion'
import StylingMasterclass from './components/Styling/completeProgram'
import AnimationDemo from './components/Styling/animationDemo'
import StyledComponentDemo from './components/Styling/styledComponents'
import PerformanceMasterclass from './components/Optimization/CompleteProgram'
import CallbackDemo from './components/Optimization/CallBackDemo'
import CodeSplittingDemo from './components/Optimization/CodeSplittingDemo'
import LazyDashboard from './components/Optimization/LazyDashboard'
import MemoizationDemo from './components/Optimization/MemorizationDemo'
import OptimizedButton from './components/Optimization/OptimizedButton'
import SlowComponent from './components/Optimization/SlowComponent'


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


      {/* ==================================================
      <ControlledFormGursimran />
      <FormsCompleteTutorial />               {/*Form Handlling Control nd UNcontrolled  */}
      {/* <ControlledForm /> */}
      ========================
      {/* <UNcontrolledForm /> */}

      {/* ========================================== */}
      {/* <Context /> */}
      {/* <ThemeSwitcher />                 {     /*state Management */}
      {/* <AdvancedContext /> */}
      ===========================================

      {/* <RoutingTutorial />                        {/* Routing Tutorial*/}
      ------------------------------
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path = '/about' element = {<About />}/> 
        <Route path = '/contact' element = {<Contact/>}/>
      </Routes>
      </BrowserRouter> */}
==============================================================================================
{/* files and form Mastery*/}


{/* <SimpleForm/> */}
-------------------------------------------
{/* <ImageUploadDemo/> */}
-------------------------------------------

 {/* <Form/> */}
 -----------------------------------------------
{/* <AdvancedFormsTutorial/>  */}




------------------------------------------------
{/* Advanced Api Management */}

{/* <ApiIntegrationMasterclass/> */}
--------
{/* < ApiClientDemo/> */}
-------------
{/* <TanStackQueryDemo/> */}
------------------
{/* <ChatRealTimeDemo/> */}
-----------------------
{/* All Methods Task */}
{/* <GetUserDataUsingAxios/> */}
----------------



------------------------------------------------------------
<TailwindExplanation/>
<StylingMasterclass/>
<AnimationDemo/>
                                                     {/* styling */}
<StyledComponentDemo/>
<hr />
-------------------------------------------------------------
                                                         {/* Optimization */}

                <PerformanceMasterclass/>
                <CallbackDemo/>
                <CodeSplittingDemo/>
                <LazyDashboard/>
                <MemoizationDemo/>
                <OptimizedButton/>
                <SlowComponent/>
  <hr />
    </>
  )
}

export default App



