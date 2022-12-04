import { useState } from 'react'
import reactLogo from './assets/react.svg'
import tailwindLogo from './assets/tailwind.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import { CheckCircleIcon } from '@heroicons/react/24/outline'

import spark from './assets/spark.svg'
import blueWave from './assets/waveInBlue.svg'
import pinkWave from './assets/waveOutPink.svg'
import layerPink from './assets/layered-waves-pink.svg'
import stackedWaves from './assets/stacked-waves.png'

import profile1 from './assets/profiles/profile1.webp'
import profile2 from './assets/profiles/profile2.webp'
import profile3 from './assets/profiles/profile3.webp'

import imgDarkMode1 from './assets/images/darkmode.png'
import imgDarkMode2 from './assets/images/darkmode2.png'
import states from './assets/images/states.png'
import viewport from './assets/images/viewport.png'

import Toggle from './Components/Toggle'
import Compose from './Components/Compose'
import Configuration from './Components/Configuration'

function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className="App relative min-h-screen bg-gray-200 dark:bg-slate-800 p-6 rounded-none w-full overflow-x-hidden transition-all duration-300 ease-in-out">
      <nav className="absolute top-0 right-0 w-full p-4 flex place-content-between items-center">
        <div>
          <a href=".">
            <p className="font-bold text-2xl font-manrope text-slate-800 dark:text-slate-300">
              ⚡ VRT
            </p>
          </a>
        </div>
        <Configuration>
          <Toggle
            className="text-sm font-bold text-gray-900 dark:text-gray-300"
            dark={dark}
            changeDark={setDark}
          />
        </Configuration>
      </nav>
      <header>
        <div className="flex justify-center mt-12">
          <picture>
            <a href="https://vitejs.dev" target="_blank">
              <img
                src={viteLogo}
                className="logo vite p-6 lg:p-4 lg:mx-8"
                alt="Vite logo"
                decoding="async"
                data-nimg="future"
                loading="lazy"
              />
            </a>
          </picture>
          <picture>
            <a href="https://reactjs.org" target="_blank">
              <img
                src={reactLogo}
                className="logo react p-6 lg:p-4 lg:mx-8"
                alt="React logo"
                decoding="async"
                data-nimg="future"
                loading="lazy"
              />
            </a>
          </picture>
          <picture>
            <a href="https://tailwindcss.com/" target="_blank">
              <img
                src={tailwindLogo}
                className="logo tailwind p-6 lg:p-4 lg:mx-8"
                alt="Tailwind logo"
                decoding="async"
                data-nimg="future"
                loading="lazy"
              />
            </a>
          </picture>
        </div>
        <div className="relative">
          <svg
            className="w-full absolute top-6 lg:top-12 stroke-[#00d9ff86]/30"
            width="612"
            height="26"
            viewBox="0 0 612 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // stroke="#00d8ff"
              strokeWidth="5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              d="M296.38.629C258.403-.64 184.42 1.826 114.276 6.696l-16.558 1.15c-46.543 3.242-71.686 5.501-89.492 8.044-6.95.992-7.557 1.125-7.49 1.632.102.74 1.209.684 14.009-.717 13.245-1.45 25.039-2.391 57.299-4.573 107.82-7.29 157.905-9.422 213.491-9.084 10.893.066 28.105 1.035 27.989 1.575-.157.722-11.497 2.63-37.595 6.323-32.109 4.545-51.728 7.646-53.584 8.47-3.173 1.407-.295 2.688 6.485 2.887 3.875.114 4.764.096 22.766-.475 51.686-1.639 84.598-2.128 129.013-1.918 67.637.321 110.553 1.36 190.95 4.627 28.89 1.173 30.389 1.207 35.854.812l.096-.007c1.754-.123 2.234-1.113.583-1.424-4.25-.8-7.144-.978-32.19-1.99-83.964-3.388-128.292-4.489-192.807-4.783-33.928-.155-49.08-.07-73.915.411-16.978.33-61.862 1.522-68.176 1.81-3.444.158 11.874-2.211 38.696-5.984 33.929-4.773 40.783-6.19 41.324-8.543.608-2.652-5.153-3.66-24.642-4.31z"
            />
          </svg>
        </div>
        <h1 className="relative text-center text-[8vw] md:text-4xl lg:text-6xl w-max m-auto font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#bd34fe] via-[#00c6e9] to-[#38b2ac] text-ellipsis overflow-hidden">
          Vite + React + Tailwind
        </h1>
      </header>

      <main>
        <section>
          <p className="text-center mt-24 text-md lg:text-xl m-auto max-w-4xl font-medium text-gray-600 dark:text-gray-400">
            An experimental site made with fun and curiosity to explore{' '}
            <strong className="hover:text-[#38b2ac]">Tailwind</strong> and{' '}
            <strong className="hover:text-[#bd34fe]">Vite</strong>. Made possible with{' '}
            <strong className="hover:text-[#bd34fe]">Vite</strong>, a fast development tool which is
            even more{' '}
            <strong className="uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">
              blazingly
            </strong>{' '}
            fast with <strong className="hover:text-[#38b2ac]">Tailwind</strong>. Not forgetting, of
            course, our beloved <strong className="hover:text-[#00d8ff]">React</strong> ⚛️.
          </p>
        </section>

        <section>
          <div className="-m-6 m-w-none relative mt-8 lg:mt-32">
            <picture>
              <img
                src={blueWave}
                alt="blue wave pattern"
                className="w-full m-0 -bottom-1"
                decoding="async"
                data-nimg="future"
                loading="lazy"
              />
            </picture>
            <div className="h-fit flex flex-col bg-[#001220] lg:pt-16">
              <div className="text-center mt-8">
                <p className="font-bold uppercase lg:text-4xl text-gray-300">
                  The best you can imagine
                </p>
                <p className="text-sm px-8 font-medium font-inter lg:px-32 lg:text-2xl mt-2 lg:mt-12 text-gray-400">
                  Fast and fast are the only two words to describe this experience. As you code, you
                  are gonna see things before impossible to humans eyes.
                </p>
              </div>
              <div className="m-8 lg:mt-16 text-center lg:text-left">
                <ul className="w-fit mx-auto">
                  <li className="flex flex-col-reverse lg:flex-row">
                    <img
                      className="rounded-xl shadow-lg shadow-[#27b8be]/40 mt-4 lg:w-[40rem]"
                      src={imgDarkMode1}
                      alt="image code dark mode"
                      decoding="async"
                      data-nimg="future"
                      loading="lazy"
                    />
                    <div className="flex flex-col font-inter lg:pl-8 mt-4">
                      <p className="font-bold uppercase lg:text-xl text-gray-300"> Dark mode.</p>
                      <p className="text-sm font-medium font-solway lg:text-lg text-gray-400">
                        A simple function the put the{' '}
                        <span className="font-mono italic">'dark'</span> class on the{' '}
                        <span className="font-mono">{'<html>'}</span> tag.
                      </p>
                    </div>
                  </li>
                  <li className="flex flex-col-reverse mt-8 lg:mt-0 lg:flex-row lg:relative lg:-top-8 lg:left-24">
                    <img
                      className="rounded-xl shadow-lg shadow-[#27b8be]/40 mt-4 lg:w-[40rem]"
                      src={imgDarkMode2}
                      alt="image code dark mode"
                      decoding="async"
                      data-nimg="future"
                      loading="lazy"
                    />
                    <div className="flex flex-col font-inter lg:pl-8 mt-4">
                      <p className="font-bold uppercase lg:text-xl text-gray-300">
                        As simple as it gets.
                      </p>
                      <p className="text-sm font-medium font-solway lg:text-lg text-gray-400">
                        After, use the <span className="font-mono italic">'dark:'</span> tag on the
                        class.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="text-center absolute left-0 right-0 mt-12 lg:mt-4">
                  <div className="flex flex-col lg:pl-8 relative z-10">
                    <div className="font-bold uppercase text-gray-300 z-10">
                      <p className="lg:text-xl lg:mt-24">And then...</p>
                      <p className="lg:text-4xl lg:mt-4">Boom!</p>
                    </div>
                    <img
                      className="absolute z-0 -top-12 m-auto left-5 right-0 w-80 lg:left-10 lg:mx-auto lg:w-[40rem] lg:top-12 opacity-70"
                      src={spark}
                      alt="spark"
                      decoding="async"
                      data-nimg="future"
                      loading="lazy"
                    />
                    <div className="font-bold uppercase lg:text-xl mt-4 lg:mt-24 z-10">
                      <Toggle className="text-slate-200" dark={dark} changeDark={setDark} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="-m-6 m-w-none relative">
            <picture>
              <img
                src={layerPink}
                className="w-full m-0"
                alt="pink wave pattern"
                decoding="async"
                data-nimg="future"
                loading="lazy"
              />
            </picture>
            <div className="h-fit flex flex-col bg-[#c62368]">
              <div className="text-center mt-8 lg:mt-32">
                <p className="font-bold uppercase lg:text-4xl text-white">
                  beautiful css that works for you.
                </p>
                <p className="text-sm px-8 font-medium font-inter mt-2 lg:mt-12 lg:px-32 lg:text-2xl text-gray-100 dark:text-slate-100">
                  Pretty and simple are the only two more words to describe this experience. Come
                  into this adventure as you discover possibilities out of this world.
                </p>
              </div>
              <div className="m-8 lg:mt-16">
                <ul className="w-fit mx-auto">
                  <li className="flex flex-col-reverse justify-end lg:flex-row lg:mx-8">
                    <div className="flex flex-col font-inter text-center px-4 lg:pl-8 mt-4 lg:text-right">
                      <p className="font-bold uppercase lg:text-xl text-white">
                        States easier to write.
                      </p>
                      <p className="text-sm font-medium font-solway lg:text-lg text-slate-100">
                        Use the <span className="font-mono italic">'hover/active/focus'</span>{' '}
                        states on the class attribute.
                      </p>
                    </div>
                    <img
                      className="rounded-xl shadow-lg shadow-[#470bc3]/60 mt-4 lg:w-[40rem]"
                      src={states}
                      alt="image code dark mode"
                      decoding="async"
                      data-nimg="future"
                      loading="lazy"
                    />
                  </li>
                  <li className="flex flex-col-reverse mt-8 justify-end lg:mt-0 lg:flex-row lg:relative lg:-top-8 lg:right-24">
                    <div className="flex flex-col font-inter text-center lg:text-right px-4 lg:pr-8 mt-4">
                      <p className="font-bold uppercase lg:text-xl text-white">
                        {' '}
                        Viewports and media querys.
                      </p>
                      <p className="text-sm font-medium font-solway lg:text-lg text-slate-100">
                        Like a sunday walk in the afternoon.
                      </p>
                    </div>
                    <img
                      className="rounded-xl shadow-lg shadow-[#470bc3]/60 mt-4 lg:w-[40rem]"
                      src={viewport}
                      alt="image code dark mode"
                      decoding="async"
                      data-nimg="future"
                      loading="lazy"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <picture>
              <img
                src={pinkWave}
                alt="pink wave pattern"
                className="w-full relative -top-1"
                decoding="async"
                data-nimg="future"
                loading="lazy"
              />
            </picture>
          </div>
        </section>

        <section>
          <div className="relative mt-24 lg:mt-48">
            <p className="text-center text-xl font-medium dark:text-slate-200 lg:text-4xl">
              And now, some comments of ours AUTHENTIC users.
            </p>
            <figure>
              <svg
                className="absolute left-0 top-10 rotate-90 overflow-auto lg:left-64 lg:-top-24"
                width="404"
                height="784"
                fill="none"
                viewBox="0 0 404 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-500"
                      fill="currentColor"
                    ></rect>
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="784"
                  fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
                ></rect>
              </svg>
            </figure>
            <ul
              className="relative grid grid-cols-1 gap-8 mx-auto m-w-2xl mt-12 p-8 w-fit lg:p-0 lg:mt-24 lg:w-full lg:max-w-none lg:grid-cols-3 lg:gap-6"
              role="list"
            >
              <li>
                <ul className="flex flex-col gap-y-6">
                  <li>
                    <figure className="relative bg-white dark:bg-slate-700 dark:text-slate-200 rounded-xl drop-shadow-xl p-6 w-fit mx-auto">
                      <blockquote>
                        <p className="font-roboto text-base lg:text-lg">
                          "This is great. I love how easy and fast everything is. I would also like
                          to see big techs using these tools on production."
                        </p>
                      </blockquote>
                      <figcaption className="flex flex-row mt-4 relative items-center gap-4 border-t border-slate-300 pt-4">
                        <div>
                          <img
                            src={profile1}
                            alt="profile image"
                            className="w-12 h-12 object-cover rounded-full lg:w-16 lg:h-16"
                            decoding="async"
                            data-nimg="future"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <div className="text-base">Marry Hanson</div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">
                            Sr. Full Stack Dev, Ex-Meta
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <figure className="relative bg-white dark:bg-slate-700 dark:text-slate-200 rounded-xl drop-shadow-xl p-6 w-fit mx-auto">
                      <blockquote>
                        <p className="font-roboto text-base lg:text-lg">
                          "I feels like Tailwind is hard if you don't already know CSS. At least
                          Vite makes everything automatic. I'm a junior, btw."
                        </p>
                      </blockquote>
                      <figcaption className="flex flex-row mt-4 relative items-center gap-4 border-t border-slate-300 pt-4">
                        <div>
                          <img
                            src={profile2}
                            alt="profile image"
                            className="w-12 h-12 object-cover rounded-full lg:w-16 lg:h-16"
                            decoding="async"
                            data-nimg="future"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <div className="text-base">Alec Benjamin</div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">
                            Developer · HTML · CSS · JS, Linkedin
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <figure className="relative bg-white dark:bg-slate-700 dark:text-slate-200 rounded-xl drop-shadow-xl p-6 w-fit mx-auto">
                      <blockquote>
                        <p className="font-roboto text-base lg:text-lg">
                          "Tailwind is my safe place. I'm even on their site."
                        </p>
                      </blockquote>
                      <figcaption className="flex flex-row mt-4 relative items-center gap-4 border-t border-slate-300 pt-4">
                        <div>
                          <img
                            src={profile3}
                            alt="profile image"
                            className="w-12 h-12 object-cover rounded-full lg:w-16 lg:h-16"
                            decoding="async"
                            data-nimg="future"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <div className="text-base">Sarah Dayan</div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">
                            Staff Engineer, Algolia
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="relative -m-8 m-w-none mt-8 lg:mt-48">
            <figure>
              <img
                className="w-full m-0 h-[24rem] lg:h-auto"
                src={stackedWaves}
                alt="circles"
                decoding="async"
                data-nimg="future"
                loading="lazy"
              />
            </figure>
            <div className="absolute top-0 py-24 lg:py-8 lg:top-[30%] left-0 right-0 text-center">
              <div className="text-slate-100 font-mono text-xl lg:text-4xl">
                <p>Buy now for a 120% discount.</p>
                <p className="lg:text-2xl lg:mt-4">It's basically free!</p>
                <ul className="mt-4 w-fit flex flex-col lg:gap-2 mx-auto text-left text-xs lg:text-base text-slate-100 font-varela">
                  <li className="flex gap-2">
                    <CheckCircleIcon className="h-3 w-3 lg:h-6 lg:w-6 text-green-500" />
                    <p>This is not a joke.</p>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircleIcon className="h-3 w-3 lg:h-6 lg:w-6 text-green-500" />
                    <p>It really is amazing.</p>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircleIcon className="h-3 w-3 lg:h-6 lg:w-6 text-green-500" />
                    <p>One of the last two was a joke.</p>
                  </li>
                </ul>
              </div>
              <div className="flex gap-8 mt-8 lg:mt-8 items-center justify-center text-xs lg:text-base">
                <button className="border-none rounded-full bg-slate-200 p-3 hover:bg-slate-800 hover:text-slate-100">
                  Buy now!
                </button>
                <button className="border-none rounded-full bg-slate-800 text-slate-100 p-3 px-4 hover:bg-slate-200 hover:text-slate-800">
                  Buy Later!
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <dl className="px-4 m-auto mt-16 md:px-8 md:w-3/5 lg:px-16 text-center hidden">
            <Compose exprop={'this is a prop'}>
              <dt className="text-gray-900 dark:text-gray-300"></dt>
              <dd className="text-center font-mono">
                <p>example of children</p>
                <b>And there is even more</b>
              </dd>
            </Compose>
          </dl>
        </section>
      </main>

      <footer>
        <div className="mt-16">
          <p className="read-the-docs text-center text-gray-500 dark:text-gray-400 text-sm lg:text-md">
            Click on the Vite, React or Tailwind logos to learn more.
          </p>
        </div>
        <div>
          <div className="flex space-x-1 items-center justify-center text-gray-800 dark:text-gray-200 text-sm lg:text-md">
            <p>Made with ❤️ and 🥰 by </p>
            {/* <picture>
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f/512.webp"
                type="image/webp"
              />
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f/512.gif"
                alt="❤"
                width="18"
                height="18"
              />
            </picture>
            <p>and</p>
            <picture>
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f970/512.webp"
                type="image/webp"
              />
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f970/512.gif"
                alt="🥰"
                width="18"
                height="18"
              />
            </picture>
            <p>by</p> */}
            <a
              className="font-bold text-sky-800 hover:underline"
              href="https://github.com/DenysPacheco"
              target="_blank"
              rel="noopener noreferrer"
            >
              Denys
            </a>
            .
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
