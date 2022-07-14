import { useContext, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import InfiniteScroll from "../../components/InfiniteScroll";
import UserDescription from "../../components/UserDescription";
import { UserContext } from "../../contexts";
import { getSingleUser, getUserFriends } from "../../services/user";

const UserDetails = () => {
  const { userId } = useParams();
  const { seenUsers, setSeenUsers } = useContext(UserContext);
  const [user, setUser] = useState(null);
  const [friends, setFriends] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const [fetchMoreLoading, setFetchMoreLoading] = useState(false);

  useEffect(() => {
    if (!userId) return;
    if (seenUsers.length > 0) {
      const foundInSeen = seenUsers.find(item => item.id == userId);
      if (foundInSeen) {
        setUser(foundInSeen)
        return;
      }
    }
    setLoading(true);
    getSingleUser(userId)
      .then(res => {
        setUser(res.data);
        setSeenUsers(prevState => {
          const foundInPrevState = prevState.find(item => item.id == res.data?.id);
          if (foundInPrevState) return [...prevState]
          return [...prevState, res.data]
        })
        setLoading(false);
      })
      .catch(() => setLoading(false))
  }, [userId, seenUsers])

  useEffect(() => {
    if (!userId) return;
    getUserFriends(userId, 1, 20)
      .then((res) => {
        setFriends(res?.data?.list);
        setPagination(res?.data?.pagination)
      })
      .catch((err) => console.log('err', err))
  }, [userId])

  const handleFetchMore = () => {
    if (!pagination.nextPage) return;
    setFetchMoreLoading(true);
    getUserFriends(userId, pagination.nextPage, 20)
      .then((res) => {
        setFriends([...friends, ...res?.data?.list]);
        setPagination(res?.data?.pagination);
        setFetchMoreLoading(false);
      })
      .catch(() => setFetchMoreLoading(false))
  }

  if (loading) return <h1>loading...</h1>
  return (
    <>
      <UserDescription user={user || {}} />
      <p id='visited'>
        {seenUsers.map((seenUser, index) => {
          const shouldHaveArrow = index !== seenUsers.length - 1
          return (
            <>
              <Link key={seenUser.id} to={`/user/${seenUser.id}`}>{seenUser.name}</Link>
              {shouldHaveArrow && <span>{' > '}</span>}
            </>
          )
        })
        }
      </p>
      <div className='friends'>
        <h1 id='friends'>Friends:</h1>
        <InfiniteScroll data={friends} pagination={pagination} fetchMore={handleFetchMore} loading={fetchMoreLoading} />
      </div>
    </>
  )
}

export default UserDetails;
