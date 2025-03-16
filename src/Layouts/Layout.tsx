import { ReactNode } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

function Layout( {children}: {children:ReactNode}) {
    const isDark = useSelector((state:RootState)=>state?.theme?.isDark)

  
    return (
    <div className={`${isDark?'bg-gray-700 text-gray-200':'bg-gray-200 text-gray-700'}`}>
      <Header/>
      <div className='h-screen'>{children}</div>
    </div>
  )
}

export default Layout
