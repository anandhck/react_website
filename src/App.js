
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Project from './Pages/Project';
import Career from './Pages/Career';
import CareerApply from './Pages/Career_Apply';
import Service from './Pages/Service';
import AboutUs from './Pages/AboutUs';
import InternForm from './Components/Forms/InternForm/InternForm';
import Intern from './Components/Forms/InternForm/Intern/Intern';
import Vacancy from './Components/Forms/VacancyForm/Vacancy/Vacancy';
import VacancyFormApply from './Components/Forms/VacancyForm/VacancyFormApply/VacancyFormApply';
import WorkshopIntro from './Components/Forms/WorkshopForm/WorkshopIntro/WorkshopIntro';
import WorkShopApply from './Components/Forms/WorkshopForm/WorkShopApply/WorkShopApply';
import ThanksWorkshop from './Components/Forms/WorkshopForm/ThanksWorkshop/ThanksWorkshop';
import VacancyReview from './Components/Forms/VacancyForm/Vacancy/VacancyReview/VacancyReview';
import VacancyThanks from './Components/Forms/VacancyForm/Vacancy/VacancyThanks/VacancyThanks';
import InternThanks from './Components/Forms/InternForm/InternThanks/InternThanks';
import InternReview from './Components/Forms/InternForm/InternReview/InternReview';
import VacancyFrontEnd from "./Components/Forms/VacancyForm/Vacancy/VacancyFrontEnd/VacancyFrontEnd"; 
import VacancyUiUx from "./Components/Forms/VacancyForm/Vacancy/VacancyUiUx/VacancyUiUx"; 
import VacancyRobotics from "./Components/Forms/VacancyForm/Vacancy/VacancyRobotics/VacancyRobotics"; 
import ServiceLanding from './Components/Services/ServiceLanding/ServiceLanding';
import ServiceYesForm from './Components/Services/ServiceYesForm/ServiceYesForm';
import ServiceSubmitted from './Components/Services/ServiceSubmitted/ServiceSubmitted';
import ServiceNoForm from './Components/Services/ServiceNoForm/ServiceNoForm';
import ServiceRDIntro from './Components/Services/ServiceDropDown/ServiceR&D/ServiceRDIntro/ServiceRDIntro';
import ServiceSoftwareLanding from './Components/Services/ServiceDropDown/ServiceSoftware/ServiceSoftwareLanding';
import Robotics from './Components/Services/ServiceDropDown/ServiceRobotics/Robotics';
import ServiceMobile from './Components/Services/ServiceDropDown/ServiceMobile/ServiceMobile';
import DIYProjectsFirst from './Components/Projects/DIYProjects/DIYProjectsFirst';
import SoftwareDevFirst from './Components/Projects/SoftwareDev/SoftwareDevFirst';
import IOTFirst from './Components/Projects/IOT/IOTFirst';
import WebAppFirst from './Components/Projects/WebApp/WebAppFirst';
import DesignPrintingFirst from './Components/Projects/DesignPrinting/DesignPrintingFirst';
import UploadProjects from './Components/Projects/UploadProjects/UploadProjects';
import BlogsForms from './Components/Projects/Blogs/BlogsForms';
import RoboticsFirst from './Components/Projects/Robotics/RoboticsFirst/RoboticsFirst';
import BlogsPage from './Components/Projects/BlogsPage/BlogsPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/project' element={< Project/>} />
          <Route path='/service' element={<Service />} />
          {/* career */}
          <Route path='/career' element={<Career />} />
          <Route path='/careerapply' element={<CareerApply />} />
          {/* aboutus */}
          <Route path='/aboutus' element={<AboutUs />} />
          {/* career internship */}
          <Route path='/internshipform' element={<InternForm />} />
          <Route path='/internapply' element={<Intern />} />
          <Route path='/internreview' element={<InternReview />} />
           <Route path='/internthanks' element={<InternThanks />} />
          {/* career vacancy */}
          <Route path='/vacancynapply' element={<Vacancy />} />
          <Route path='/vacancyform' element={<VacancyFormApply />} />
          <Route path='/vacancyreview' element={<VacancyReview />} />
          <Route path='/vacancythanks' element={<VacancyThanks />} />
          <Route path='/vacancyfrontend' element={<VacancyFrontEnd />} />
          <Route path='/vacancyuiux' element={<VacancyUiUx />} />
          <Route path='/vacancyrobotics' element={<VacancyRobotics />} />
          {/* career workshop */}
          <Route path='/workshopapply' element={<WorkshopIntro />} />
          <Route path='/workshopform' element={<WorkShopApply />} />
          <Route path='/registered' element={<ThanksWorkshop />} />
          {/* Service section */}
          <Route path='/serviceform' element={<ServiceYesForm />} />
          <Route path='/service' element={<ServiceLanding/>} />
          <Route path='/serviceclient' element={<ServiceSubmitted />} />
          <Route path='/serviceclientno' element={<ServiceNoForm />} />
          {/* service R&D */}
          {/* <Route path='/R&D' element={<ServiceRD />} /> */}
          <Route path='/R&D' element={<ServiceRDIntro />} />
          {/* service Software */}
          <Route path='/servicesoftware' element={<ServiceSoftwareLanding />} />
          {/* robotics */}
          <Route path='/robotics' element={<Robotics />} />
          {/* project robotics */}
          <Route path='/roboticsprojects' element={<RoboticsFirst />} />
          {/* service mobile */}
          <Route path='/mobile' element={<ServiceMobile />} />
          {/* projects page */}
          {/* diyprojects */}      
          <Route path='/diyprojects' element={<DIYProjectsFirst />} />
          {/* software */}
          <Route path='/softwaredev' element={<SoftwareDevFirst />} />
          {/* IOT */}
          <Route path='/iot' element={<IOTFirst />} />
          {/* webapp */}
          <Route path='/webapp' element={<WebAppFirst />} />
          {/* 3d design */}
          <Route path='/design' element={<DesignPrintingFirst />} />
          {/* upload projects */}
          <Route path='/uploadprojects' element={<UploadProjects />} />
          {/* blogs forms */}
          <Route path='/blogsform' element={<BlogsForms />} />
          {/* blogs page */}
                    <Route path='/blogspage' element={<BlogsPage />} />

          
        </Routes>
      </BrowserRouter>
    </>
  ); 
}

export default App;
