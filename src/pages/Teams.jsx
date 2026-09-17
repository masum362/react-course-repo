import { useParams } from "react-router"

const Teams = () => {
    const {teamId} = useParams();
  return (
    <div>Teams {teamId}</div>
  )
}

export default Teams