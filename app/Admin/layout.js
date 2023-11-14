import React from 'react'

const AdminLayout = ({children}) => {
  return (
    <div>
        {children}
        <div>
            div special for admin
        </div>
    </div>
  )
}

export default AdminLayout