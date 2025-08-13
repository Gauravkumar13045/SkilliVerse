import React from "react";
import TypingEffect from './features/typingEffect.jsx';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

function App() {
  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <div className="w-20 lg:w-67 bg-white text-white flex flex-col dark:bg-black">


        <header className="flex items-center space-x-2 p-4">
          <img src="src/images/logoji.png" alt="logo" class="block dark w-20 float-left h-auto dark:hidden relative" id="logo" />
          <img src="src/images/logoji.png" alt="logo" class="hidden dark:block w-15 float-left h-auto" id="logo" />
          <TypingEffect />
        </header>

        {/* <p className="hidden lg:block ml-5 font-medium font-serif text-black dark:text-white">Menu</p> */}

        <nav className="flex-1 p-4 space-y-2">


          <a href="#" active className="block p-3 font-medium  text-lg hover:bg-orange-400 rounded-3xl hover:text-black hover:font-semibold text-black dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-800">
            <img src="src/images/grid.png" className="w-5  hidden dark:inline " alt="icon" /><img src="src/images/grid-B.png" className="w-5 inline dark:hidden " alt="icon" /> <span className="hidden lg:inline ml-2">Overview</span></a>

          <a href="#" className="block p-3 font-medium  text-lg hover:bg-orange-400 rounded-3xl  hover:text-black hover:font-semibold text-black dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-800">
            <img src="src/images/book.png" className="w-5 hidden dark:inline" alt="icon" /><img src="src/images/book-B.png" className="w-5 inline dark:hidden " alt="icon" /> <span className="hidden lg:inline ml-2">Lessons</span></a>

          <a href="#" className="block p-3 font-medium  text-lg hover:bg-orange-400 rounded-3xl  hover:text-black hover:font-semibold text-black dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-800">
            <img src="src/images/chart.png" className="w-5 hidden dark:inline" alt="icon" /><img src="src/images/chart-B.png" className="w-5 inline dark:hidden " alt="icon" /><span className="hidden lg:inline ml-2">LeaderBoard</span></a>

          <a href="#" className="block p-3 font-medium  text-lg hover:bg-orange-400 rounded-3xl  hover:text-black hover:font-semibold text-black dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-800">
            <img src="src/images/goal.png" className="w-5 hidden dark:inline" alt="icon" /><img src="src/images/goal-B.png" className="w-5 inline dark:hidden " alt="icon" /> <span className="hidden lg:inline ml-2"> Skill Graph</span></a>

          <a href="#" className="block p-3 font-medium  text-lg hover:bg-orange-400 rounded-3xl  hover:text-black hover:font-semibold text-black dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-800">
            <img src="src/images/course.png" className="w-5 hidden dark:inline" alt="icon" /><img src="src/images/course-B.png" className="w-5 inline dark:hidden " alt="icon" /> <span className="hidden lg:inline ml-2">Courses</span></a>

          <a href="#" className="block p-3 font-medium  text-lg hover:bg-orange-400 rounded-3xl  hover:text-black hover:font-semibold text-black dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-800">
            <img src="src/images/certificate.png" className="w-5 hidden dark:inline" alt="icon" /><img src="src/images/certificate-B.png" className="w-5 inline dark:hidden " alt="icon" />  <span className="hidden lg:inline ml-2">Certificates</span></a>

          <a href="#" className="block p-3 font-medium  text-lg hover:bg-orange-400 rounded-3xl  hover:text-black hover:font-semibold text-black dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-800">
            <img src="src/images/message.png" className="w-5 hidden dark:inline" alt="icon" /><img src="src/images/message-B.png" className="w-5 inline dark:hidden " alt="icon" />  <span className="hidden lg:inline ml-2">Messages</span></a>

          <a href="#" className="block p-3 font-medium  text-lg hover:bg-orange-400 rounded-3xl  hover:text-black hover:font-semibold text-black dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-800">
            <img src="src/images/setting.png" className="w-5 hidden dark:inline" alt="icon" /><img src="src/images/setting-B.png" className="w-5 inline dark:hidden " alt="icon" /> <span className="hidden lg:inline ml-2">Settings</span></a>


        </nav>

        <footer className="p-4">
          <a href="#" className="block p-3 font-medium  text-lg hover:bg-gray-400 rounded-3xl  hover:text-black hover:font-semibold text-black dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-800">
            <img src="src/images/logout.png" className="w-5 hidden dark:inline" alt="icon" /><img src="src/images/logout-B.png" className="w-5 inline dark:hidden " alt="icon" /> <span className="hidden lg:inline ml-2">Logout</span></a>
        </footer>
      </div>


      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto min-w-0 dark:bg-gray-900">
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full rounded-lg border dark:border-gray-700"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Two</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Three</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );




}

export default App;
