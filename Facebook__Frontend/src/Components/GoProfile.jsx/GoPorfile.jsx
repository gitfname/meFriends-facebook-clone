import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaMoon, FaQuestionCircle } from 'react-icons/fa'
import { RiFeedbackFill, RiLogoutBoxRFill } from 'react-icons/ri'
import { MdOutlineArrowForwardIos, MdSettingsSuggest } from 'react-icons/md'

import MegWrapper from '../MegWrapper'
import { ProfilePicture } from '../index'
import { useGlobalContext } from '../../Context/UseContext'
import { iconHandler } from '../../functions/stateHandler'
const GoPorfile = () => {
  const settings = useRef(null)
  const support = useRef(null)
  const feedback = useRef(null)
  const logOut = useRef(null)
  const display = useRef(null)
  const {
    setSettingsState,
    setDisplayState,
    setFeedbackState,
    setSupportState,
    setProfileState,
    goBack,
  } = useGlobalContext()
  return (
    <>
      <section
        className={` ${
          goBack && 'translate__x'
        } p-1 shadow-lg rounded-md drop-shadow-2xl shadow-gray-400 dark:shadow-zinc-900`}
      >
        <Link
          onClick={() => setProfileState(false)}
          to={`/backface/api/profile`}
          className='hover:bg-hover dark:hover:bg-darkComplementry h-fit flex flex-row items-center gap-3 px-2 py-1 rounded-md cursor-pointer'
        >
          <ProfilePicture />
          <h5 className='text-lg font-semibold text-gray-900'>
            Don Christsantus Outis
          </h5>
        </Link>
        <div className='border mt-1 mb-1 dark:border-borderDark' />
        <div className='dark:hover:bg-darkComplementry hover:bg-hover h-fit flex flex-row justify-between items-center gap-3 p-2 rounded-md'>
          <h5 className='text-blue-600 cursor-pointer font-medium'>
            See all profiles
          </h5>
          <div className='flex items-center justify-center  w-6 h-6 rounded-full bg-red-600  border-2 dark:border-borderDark border-white'>
            <p className='text-white text-[12px] font-bold'>10</p>
          </div>
        </div>
      </section>
      <section className='w-full flex flex-col gap-1 mt-4'>
        {[
          {
            icon: <MdSettingsSuggest />,
            title: 'Settings & privacy',
            isMove: true,
            ref: settings,
          },
          {
            icon: <FaQuestionCircle />,
            title: 'Help & support',
            isMove: true,
            ref: support,
          },
          {
            icon: <FaMoon />,
            title: 'Display & accessibility',
            isMove: true,
            ref: display,
          },
          {
            icon: <RiFeedbackFill />,
            title: 'Give feedback',
            isMove: false,
            ref: feedback,
          },
          {
            icon: <RiLogoutBoxRFill />,
            title: 'Log Out',
            isMove: false,
            ref: logOut,
          },
        ].map(({ icon, title, isMove, ref }, i) => (
          <div
            ref={ref}
            onClick={(e) =>
              iconHandler({
                e,
                ref,
                setSettingsState,
                setDisplayState,
                setFeedbackState,
                setSupportState,
                setProfileState,
              })
            }
            key={i + title}
            className={` ${
              isMove && 'justify-between flex flex-row items-center'
            } ${title} dark:hover:bg-darkComplementry hover:bg-hover p-2 w-full rounded-md cursor-pointer`}
          >
            <div className='flex flex-row items-center gap-2 w-fit '>
              <p className='text-xl rounded-full  dark:shadow-black dark:shadow-sm dark:bg-darkComplementry bg-gray-200 p-2 w-fit h-fit'>
                {icon}
              </p>
              <h4 className='text-gray-900 font-medium dark:text-white'>
                {title}
              </h4>
            </div>
            {isMove && (
              <p className='font-medium text-2xl dark:text-white'>
                <MdOutlineArrowForwardIos />
              </p>
            )}
          </div>
        ))}
      </section>
      <section className='mt-2'>
        <p className='text-sm'>
          Privacy · Terms · Advertising · Ad choices · Cookies ·{' '}
          <span className='cursor-pointer'>more</span> · Meta © 2022
        </p>
      </section>
    </>
  )
}

export default MegWrapper(GoPorfile)