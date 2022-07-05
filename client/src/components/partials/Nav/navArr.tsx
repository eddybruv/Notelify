import {ReactNode, FC, SetStateAction} from "react";
import {HomeOutlined} from "@mui/icons-material";
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import Home from "../../../pages/Home";
import Body from "../../Notes/Body";
import DashboardBody from "../../Dashboard/DashboardBody"

interface IOption {
  icon: ReactNode;
  text: string;
  component: SetStateAction<JSX.Element>;
}

const options: IOption[] = [
  {
    icon: <HomeOutlined />,
    text: "Dashboard",
    component: <DashboardBody />,
  },
  {
    icon: <EventNoteOutlinedIcon />,
    text: "Notes",
    component: <Body />,
  },
  {
    icon: <PeopleAltOutlinedIcon />,
    text: "Teams",
    component: <Body />,
  },
  {
    icon: <CheckBoxOutlinedIcon />,
    text: "Tasks",
    component: <Body />,
  },
  {
    icon: <SettingsOutlinedIcon />,
    text: "Administration",
    component: <Body />,
  },
  {
    icon: <ForumOutlinedIcon />,
    text: "Chat",
    component: <Body />,
  },
];

export default options