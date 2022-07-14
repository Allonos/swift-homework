import { useEffect, useState } from "react";
import { getUsers } from "../../services/user";

import InfiniteScroll from "../../components/InfiniteScroll";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);
  const [fetchMoreLoading, setFetchMoreLoading] = useState(false);

  useEffect(() => {
    getUsers(1, 20)
      .then((res) => {
        setUsers(res?.data?.list);
        setPagination(res?.data?.pagination);
        setLoading(false);
      })
      .catch(() => setLoading(false))
  }, [])

  const handleFetch = () => {
    if (!pagination.nextPage) return;
    setFetchMoreLoading(true);
    getUsers(pagination.nextPage, 20)
      .then((res) => {
        setUsers([...users, ...res?.data?.list]);
        setPagination(res?.data?.pagination);
        setFetchMoreLoading(false);
      })
      .catch(() => setFetchMoreLoading(false))
  }
  if (loading) return <div>Loading...</div>
  return (
    <InfiniteScroll data={users} pagination={pagination} fetchMore={handleFetch} loading={fetchMoreLoading} />
  )
}

export default UserList;
