import history from "../history";


export const navigate = (destination) => {
  history.push(`/${destination}`)
}
