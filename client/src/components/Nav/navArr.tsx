import {ReactNode} from "react";
import {HomeOutlined, SvgIconComponent} from "@mui/icons-material";
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

interface IOption {
  icon: ReactNode,
  text: string;
}

const options: IOption[] = [
  {
    icon: <HomeOutlined/> ,
    text: "Dashboard"
  },
  {
    icon: <EventNoteOutlinedIcon/> ,
    text: "Notes"
  },
  {
    icon: <PeopleAltOutlinedIcon/> ,
    text: "Teams"
  },
  {
    icon: <CheckBoxOutlinedIcon/> ,
    text: "Tasks"
  },
  {
    icon: <SettingsOutlinedIcon/> ,
    text: "Administration"
  },
  {
    icon: <ForumOutlinedIcon/> ,
    text: "Chat"
  },
]

export default options