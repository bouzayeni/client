import {useEffect} from 'react';
import {useDispatch,useSelector } from 'react-redux';
import {getPosts} from '../slices/postSlice'

const Post = () => {
  const dispatch = useDispatch();
   useEffect(() => {
     dispatch(getPosts());

   },[dispatch]) ;
   const {loading,postList,errors} = useSelector((state)=>state.post)
  return (
    <div>
      {loading && <p>loading...</p> }
      {errors && <p>{errors}</p> }
      {postList && postList.map(post=>(
        <div key={post._id}>
          <h4>{post.owner.name}</h4>
          <h6>{post.title}</h6>
          <h6>{post.description}</h6>

        </div>
      )
      )
       }

    </div>
  )
}

export default Post