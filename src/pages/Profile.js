import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserInfo, updateProfilePicture } from "../slices/userSlice";
const Profile = () => {
  const dispatch = useDispatch();
  const [file,setFile] = useState({})
  const { profilePic, name, email } = useSelector(
    (state) => state.user.userInfo
  );
  useEffect(() => {
    dispatch(loadUserInfo());
  }, [dispatch]);
  const handleImageUpdate =(e) =>{
    e.preventDefault();
    dispatch(updateProfilePicture(file));
  }
  return (
    <div>
      <img src={profilePic} alt="" width="200px" />
      <br />
      <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
      <button onClick={handleImageUpdate}>update file</button>
      <br />
      <h1>{name}</h1>
      <br />
      <p>{email}</p>
    </div>
  );
};

export default Profile;