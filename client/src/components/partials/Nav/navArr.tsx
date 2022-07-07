import {ReactNode, SetStateAction} from "react";
import {HomeOutlined} from "@mui/icons-material";
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import TasksBody from "../../Tasks/TasksBody";
import Body from "../../Notes/NotesBody";
import DashboardBody from "../../Dashboard/DashboardBody";
import ChatBody from "../../Chats/ChatBody";
import AdminBody from "../../Administration/AdminBody";
import TeamsBody from "../../Teams/TeamsBody";

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
    component: <TeamsBody />,
  },
  {
    icon: <CheckBoxOutlinedIcon />,
    text: "Tasks",
    component: <TasksBody />,
  },
  {
    icon: <SettingsOutlinedIcon />,
    text: "Administration",
    component: <AdminBody />,
  },
  {
    icon: <ForumOutlinedIcon />,
    text: "Chat",
    component: <ChatBody />,
  },
];

export default options