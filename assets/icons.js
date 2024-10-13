import { AntDesign, Feather } from "@expo/vector-icons";

export const icons = {
    index: (props)=> <Feather name="compass" size={26} {...props} />,
    explore: (props)=> <Feather name="users" size={26} {...props} />,
    create: (props)=> <Feather name="activity" size={26} {...props} />,
    profile: (props)=> <AntDesign name="user" size={26} {...props} />,
}