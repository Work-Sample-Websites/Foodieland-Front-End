import React from 'react'
import UserLayout from '../../../layout/userLayout'
import BlogComponent from '../../../basicComponents/blog'

const Blog = () => {
  return (
    <>
      <UserLayout>
        <div className="w-11/12 sm:container mx-auto">
          <BlogComponent />
        </div>
      </UserLayout>
    </>
  )
}

export default Blog