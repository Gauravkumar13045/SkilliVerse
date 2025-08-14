import React, { useState } from "react";
import TypingEffect from './features/typingEffect.jsx';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Theme from './features/theme.jsx';






function App() {
  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <div className="w-20 lg:w-68 bg-white text-white flex flex-col dark:bg-black border-r-2 dark:border-gray-900 border-gray-200 shadow-lg">


        <header className="flex items-center space-x-2 p-4">
          <img src="src/images/logoji.png" alt="logo" class="block dark w-20 float-left h-auto dark:hidden relative" id="logo" />
          <img src="src/images/logoji.png" alt="logo" class="hidden dark:block w-15 float-left h-auto" id="logo" />
          <TypingEffect />
        </header>

        {/* <p className="hidden lg:block ml-5 font-medium font-serif text-black dark:text-white">Menu</p> */}

        <nav className="flex-1 p-4 space-y-2 ">


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
          <a href="#" className="block p-3 font-medium  text-lg hover:bg-gray-400 rounded-3xl  hover:text-black hover:font-semibold text-black dark:text-white  dark:hover:text-orange-400 dark:hover:bg-gray-800 dark:hover:text-white">
            <img src="src/images/logout.png" className="w-5 hidden dark:inline" alt="icon" /><img src="src/images/logout-B.png" className="w-5 inline dark:hidden " alt="icon" /> <span className="hidden lg:inline ml-2 ">Logout</span></a>
        </footer>
      </div>


      <div className="flex-1  bg-gray-300 overflow-y-auto min-w-0 dark:bg-gray-900  dark:border-black ">
        <div className="flex-1 p-2 bg-gray-200 overflow-y-auto min-w-0 dark:bg-black h-[10.5%] border-b-0 border-gray-200 shadow-2xl flex items-center dark:border-gray-500 ">



          <div className="w-full">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-xl">Good Morning,</p>
            <h1 className="font-Open Sans text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
              Hello <span className="text-orange-500">Gauri</span> 👋
            </h1>
          </div>


          <div className="flex w-full items-center justify-end p-0.5 space-x-5">
            <div className="flex justify-end w-full p-3">
              <div className="relative">
                <input type="search" placeholder=" Search here..." className="border-2 border-gray-400 dark:border-gray-400 rounded-2xl p-1 pr-8" />
                <img src="src/images/search.png" alt="Search Icon" className="absolute right-2 top-1/2 -translate-y-1/2 inline w-5 dark:hidden " />
                <img src="src/images/search-W.png" alt="Search Icon" className="absolute right-2 top-1/2 hidden -translate-y-1/2 w-5 dark:inline cursor-pointer" />
              </div>
            </div>

            <div className="message border-0 border-gray-500 ">
              <img src="src/images/message-H-B.png" className="w-7 inline dark:hidden cursor-pointer" alt="icon" />
              <img src="src/images/message-H-W.png" className="w-7 hidden dark:inline cursor-pointer" alt="icon" />
            </div>

            <Theme></Theme>

            <div className="bell">
              <img src="src/images/bell-B.png" className="w-7 inline dark:hidden cursor-pointer" alt="icon" />
              <img src="src/images/bell-W.png" className="w-7 hidden dark:inline cursor-pointer" alt="icon" />
            </div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" className="cursor-pointer" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>



        <div className="flex h-[89.5%] border-t-1 border-gray-300 dark:border-gray-600">
          <div className="flex-1 p-2 bg-gray-50 overflow-y-auto min-w-0 dark:bg-black w-[64%] border-r-2 ">
            <p className="p-3 text-2xl text-black dark:text-white font-semibold">Continue Learning</p>



            <div className="@container flex flex-wrap gap-5 p-3 ml-5">
              <div class="flex flex-col @md:flex-row border-2 w-[41%] bg-gray-200 rounded-md p-2 dark:bg-gray-800 dark:border-gray-800 ">

                <div class="flex items-center">

                  <div className="imageDivBorder border-3  bg-black rounded-lg p-2 dark:bg-black dark:border-black relative mb-auto mt-3">
                    <img src="src/images/image.png" className="w-7 hidden dark:inline cursor-pointer " alt="icon" />
                    <img src="src/images/image.png" className="w-7 inline dark:hidden cursor-pointer " alt="icon" />
                  </div>

                  <div className="p-2 ml-2">
                    <strong className="p-1">Advance UI/UX Design</strong><br></br>
                    <span className="text-base font-serif p-1 ">Design</span>

                    <div class="bg-gray-300 rounded-full h-4 overflow-hidden mt-1 dark:bg-gray-700">
                      <div
                        class="bg-gradient-to-r from-orange-400 to-orange-600 h-full rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>

                    <div className="img-div-pad p-1 w-[50%] inline">
                      <img src="src/images/course-B.png" className="w-3 inline dark:hidden  " alt="icon" />
                      <img src="src/images/course.png" className="w-3 hidden dark:inline " alt="icon" />
                    </div>
                    <div className="Course text-xs inline text-gray-500 dark:text-gray-300">
                      <span className="completed">18<span className="slash">/</span><span className="total">40</span></span><span className="lesson"> Lessons</span>
                    </div>

                    <div className="img-div-remain p-1 w-[50%] inline ml-5">
                      <img src="src/images/clock-B.png" className="w-3 inline dark:hidden  " alt="icon" />
                      <img src="src/images/clock.png" className="w-3 hidden dark:inline " alt="icon" />

                      <div className="totalTime text-xs inline text-gray-500 dark:text-gray-300 ">
                        <p className="time inline"> 2 Hr left</p>
                      </div>
                    </div>

                    <div className="resumeWork ">
                      <p className="text-orange-600 mt-1 text-sm font-semibold cursor-pointer inline">Resume Course </p>

                      <div className="img-div-resume w-[50%] inline">
                        <img src="src/images/enter.png" className="w-3  cursor-pointer inline" alt="icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>



<div class="flex flex-col @md:flex-row border-2 w-[41%] bg-gray-200 rounded-md p-2 dark:bg-gray-800 dark:border-gray-800 ">

                <div class="flex items-center">

                  <div className="imageDivBorder border-3  bg-black rounded-lg p-2 dark:bg-black dark:border-black relative mb-auto mt-3">
                    <img src="src/images/image.png" className="w-7 hidden dark:inline cursor-pointer " alt="icon" />
                    <img src="src/images/image.png" className="w-7 inline dark:hidden cursor-pointer " alt="icon" />
                  </div>

                  <div className="p-2 ml-2">
                    <strong className="p-1">Advance UI/UX Design</strong><br></br>
                    <span className="text-base font-serif p-1 ">Design</span>

                    <div class="bg-gray-300 rounded-full h-4 overflow-hidden mt-1 dark:bg-gray-700">
                      <div
                        class="bg-gradient-to-r from-orange-400 to-orange-600 h-full rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>

                    <div className="img-div-pad p-1 w-[50%] inline">
                      <img src="src/images/course-B.png" className="w-3 inline dark:hidden  " alt="icon" />
                      <img src="src/images/course.png" className="w-3 hidden dark:inline " alt="icon" />
                    </div>
                    <div className="Course text-xs inline text-gray-500 dark:text-gray-300">
                      <span className="completed">18<span className="slash">/</span><span className="total">40</span></span><span className="lesson"> Lessons</span>
                    </div>

                    <div className="img-div-remain p-1 w-[50%] inline ml-5">
                      <img src="src/images/clock-B.png" className="w-3 inline dark:hidden  " alt="icon" />
                      <img src="src/images/clock.png" className="w-3 hidden dark:inline " alt="icon" />

                      <div className="totalTime text-xs inline text-gray-500 dark:text-gray-300 ">
                        <p className="time inline"> 2 Hr left</p>
                      </div>
                    </div>

                    <div className="resumeWork ">
                      <p className="text-orange-600 mt-1 text-sm font-semibold cursor-pointer inline">Resume Course </p>

                      <div className="img-div-resume w-[50%] inline">
                        <img src="src/images/enter.png" className="w-3  cursor-pointer inline" alt="icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>




            </div>
          </div>

          <div className="p-2 bg-gray-50 overflow-y-auto min-w-0 dark:bg-black w-[35%] ">
            Div 3
          </div>
        </div>

      </div>
    </div>
  );




}

export default App;
