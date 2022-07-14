import { useEffect, useState, useRef } from "react";
import Profile from "../Profile";

const InfiniteScroll = ({ data, pagination, fetchMore, loading }) => {
  useEffect(() => {
    const handleScroll = (e) => {
      const root = document.getElementById('root');
      const bottom = root.getBoundingClientRect().bottom <= window.innerHeight;
      if (bottom) {
        fetchMore();
      }
    }
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll)
  }, [fetchMore])

  return (
    <div className="content">
      {data.map((user => (
        <Profile user={user} key={`${user.id}-${Math.random()}`} />
      )))}
      {loading && <p>Loading...</p>}
    </div>
  )
}

export default InfiniteScroll;
