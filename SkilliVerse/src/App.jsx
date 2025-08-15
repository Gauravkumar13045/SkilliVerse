import React, { useState } from "react";
import TypingEffect from './features/typingEffect.jsx';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Theme from './features/theme.jsx';
import Timer from './features/timer.jsx';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>

        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">

      </CardFooter>
    </Card>
  )
}























// card
// Context Menu
// tabs

export function InputDemo() {
  <div className="grid w-full max-w-sm items-center gap-3">
    <Label htmlFor="email">Email</Label>
    <Input type="email" id="email" placeholder="Email" />
  </div>
}


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
            <Timer></Timer>
            <h1 className="font-Open Sans text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
              Hello <span className="text-orange-500">Gaurav</span> 👋
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


            <Dialog >
              <DialogTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" className="cursor-pointer" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DialogTrigger>
              <DialogContent className="dark:bg-black bg-white  w-[50%] dark:border-3  h-auto rounded-xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold dark:text-orange-500 text-center text-black" >Sign In</DialogTitle>
                  <DialogDescription>

                    <form>
                      <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                          <Label htmlFor="email" className=" dark:text-white text-black ">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            className=" border-gray-500 text-orange-400"
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <div className="flex items-center">
                            <Label htmlFor="password" className=" dark:text-white text-black ">Password</Label>

                          </div>
                          <Input id="password" type="password" required className=" text-orange-400 border-gray-500" />
                        </div>
                        <a
                          href="#"
                          className="inline text-sm  text-orange-600  hover:text-orange-300  ">

                          Forgot your password?
                        </a>
                        <Button type="submit" className="w-full bg-orange-500 text-black font-semibold text-base cursor-pointer hover:bg-orange-600">
                          Login
                        </Button>
                        <p className="dark:text-orange-500 text-center text-black">Or</p>

                        <div className="signOption">
                          <Button variant="outline" className="w-[45%] bg-white dark:bg-black dark:border-orange-500 text-black dark:text-white border-orange-500 dark:hover:bg-white dark:hover:text-black ">
                            <img src="src/images/google.png" className="w-6 " alt="icon" />Google
                          </Button>


                          <Button variant="outline" className="w-[45%] float-end  border-orange-500 bg-white dark:bg-black dark:border-orange-500 text-black dark:text-white  dark:hover:bg-white dark:hover:text-black">
                            <img src="src/images/github.png" className="w-7 hidden dark:inline cursor-pointer" alt="icon" />
                            <img src="src/images/github-B.png" className="w-7 inline dark:hidden cursor-pointer"  alt="icon" /><p className="inline dark:hidden">GitHub</p><p className="hidden dark:inline">GitHub</p>
                          </Button>
                        </div>
<p className="text-center text-gray-600">Not a member ? <a href = "#" >Sign Up</a></p>
                      </div>
                    </form>

                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

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
                      <p className="text-orange-500 text-sm font-semibold cursor-pointer inline ">Resume Course </p>

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
                      <p className="text-orange-500 mt-1 text-sm font-semibold cursor-pointer inline">Resume Course </p>

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
