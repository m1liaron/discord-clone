
const AppPath = {
    Root: "/",
    Login: "/login",
    Register: "/register",
    ChannelsMe: '/channels/@me',
    ChannelsMeUser: '/channels/@me/:channelId',
} as const;

export { AppPath };