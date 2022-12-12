import { AiFillHome, AiOutlineFieldTime } from 'react-icons/ai'
import { FaUserFriends, FaBookmark } from 'react-icons/fa'
import { HiLockClosed } from 'react-icons/hi'
import { TbGridDots } from 'react-icons/tb'
import { GiBackwardTime, GiEarthAmerica } from 'react-icons/gi'
import {
  MdSettings,
  MdPerson,
  MdMapsHomeWork,
  MdOutlineOndemandVideo,
  MdGroups,
  MdVideoCameraBack,
} from 'react-icons/md'
import { BsBookFill, BsLink45Deg } from 'react-icons/bs'

import { feed_eight, feed_nine, feed_ten } from '../Assets/exports'

const repeatStyle = 'text-2xl text-gray-800'

export const sideLinks = [
  {
    title: 'Friends',
    icon: <FaUserFriends />,
  },
  {
    title: 'Saved',
    icon: <FaBookmark />,
  },
  {
    title: 'Market place',
    icon: <MdMapsHomeWork />,
  },
  {
    title: 'Watch',
    icon: <MdOutlineOndemandVideo />,
  },
  {
    title: 'Memories',
    icon: <AiOutlineFieldTime />,
  },
]

export const groupsLinks = [
  {
    name: 'The house of dragons',
    img: feed_eight,
  },
  {
    name: 'THE LAUGH HOUSE',
    img: feed_nine,
  },
  {
    name: 'JavaScript Mastery',
    img: feed_ten,
  },
]

export const postAudienceLinks = [
  {
    icon: <GiEarthAmerica className={`${repeatStyle}`} />,
    title: 'Public',
    id: 'public',
    description: 'Anyone on or off Facebook',
  },
  {
    icon: <FaUserFriends className={`${repeatStyle}`} />,
    title: 'Friends',
    id: 'friends',
    description: 'Your friends on Facebook',
  },
  {
    icon: <HiLockClosed className={`${repeatStyle}`} />,
    title: 'Only me',
    id: 'me',
  },
  {
    icon: <MdPerson className={`${repeatStyle}`} />,
    title: 'Specific friends',
    description: 'Only show to some friends',
    id: 'specific',
  },
  {
    icon: <MdSettings className={`${repeatStyle}`} />,
    title: 'Custom',
    id: 'custom',
    description: 'Include and exclude friends and lists',
  },
]

// export const navLinks = [
//   {
//     icon: <FaFacebookMessenger />,
//     alarts: '3',
//     tip: 'messenger',
//   },
//   {
//     icon: <MdNotifications />,
//     alarts: '1',
//     tip: 'notification',
//   },
// ]

export const feedLinks = [
  { name: 'stories', icon: <BsBookFill /> },
  { name: 'reels', icon: <MdOutlineOndemandVideo /> },
  { name: 'rooms', icon: <MdVideoCameraBack /> },
]