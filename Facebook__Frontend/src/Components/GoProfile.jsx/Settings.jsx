import React from 'react'

import MegWrapper from '../MegWrapper'
import { useGlobalContext } from '../../Context/UseContext'
import { Head } from '../index'
import {
  MdHttps,
  MdOutlineArrowForwardIos,
  MdOutlineFormatListBulleted,
  MdSettingsSuggest,
  MdTune,
} from 'react-icons/md'
import { BsGlobe } from 'react-icons/bs'
import { iconHandler } from '../../functions/stateHandler'
import { RiSettings2Fill } from 'react-icons/ri'
import { AiOutlineBug } from 'react-icons/ai'
const Settings = () => {
  const {
    settingsState,
    setDisplayState,
    setFeedbackState,
    setSupportState,
    setProfileState,
    setGoBack,
    setSettingsState,
  } = useGlobalContext()
  return (
    <div className={` ${settingsState ? 'pb-4 translate_x' : 'pb-4'} `}>
      <Head
        title={`Settings & privacy`}
        setFirstState={setProfileState}
        setSecondState={setSettingsState}
        setThirdState={setGoBack}
      />
      <section className='w-full flex flex-col gap-1 mt-4 pl-2 pr-2'>
        {[
          {
            icon: <RiSettings2Fill />,
            title: 'Settings ',
            isMove: true,
          },
          {
            icon: <MdHttps />,
            title: 'Privecy Checkup',
            isMove: true,
          },
          {
            icon: <AiOutlineBug />,
            title: 'Privecy Center ',
            isMove: true,
          },
          {
            icon: <MdOutlineFormatListBulleted />,
            title: 'Activity log',
            isMove: true,
          },
          {
            icon: <MdTune />,
            title: 'Feeds',
            isMove: false,
          },
          {
            icon: <BsGlobe />,
            title: 'Language',
            isMove: false,
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
            className={`  ${title} hover:bg-hover p-2 w-full rounded-md cursor-pointer`}
          >
            <div className='flex flex-row items-center gap-2 w-fit '>
              <p className='text-xl rounded-full bg-gray-200 p-2 w-fit h-fit'>
                {icon}
              </p>
              <h4 className='text-gray-900 font-medium '>{title}</h4>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default MegWrapper(Settings)