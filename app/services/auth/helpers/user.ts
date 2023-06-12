
export const getUserAvatarURI = (user_name?: string) => {
  return `https://avatars.dicebear.com/api/initials/${user_name ?? ''}.png?backgroundColors[]=teal&backgroundColorLevel=400&fontSize=40`
}

export const getUserShortName = (fullName: string) => {
  const nameArr = fullName.split(' ')
  switch (nameArr?.length) {
    case 3:
      return nameArr.slice(0, 2).join(' ')
    case 2:
      if (nameArr[0]?.length > 3) return nameArr[0]
    default:
      return nameArr[nameArr?.length - 1];
  }
}